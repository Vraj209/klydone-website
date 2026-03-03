'use client';

import { useEffect, useReducer, useRef } from 'react';

const PHRASES = [
  'support ticket triage',
  'lead follow-up sequences',
  'compliance Q&A',
  'invoice processing',
  'internal report generation',
  'onboarding workflows',
  'data entry & enrichment',
  'SLA breach alerts',
] as const;

const TYPING_MS   = 72;
const DELETING_MS = 36;
const PAUSE_FULL  = 1600;
const PAUSE_EMPTY = 420;

type State = {
  phraseIndex: number;
  charIndex:   number;
  deleting:    boolean;
  displayed:   string;
};

type Action = 'TICK';

function reducer(state: State): State {
  const phrase = PHRASES[state.phraseIndex];

  if (!state.deleting) {
    if (state.charIndex < phrase.length) {
      return {
        ...state,
        charIndex: state.charIndex + 1,
        displayed: phrase.slice(0, state.charIndex + 1),
      };
    }
    // full phrase shown — start deleting after PAUSE_FULL (handled via delay in effect)
    return { ...state, deleting: true };
  }

  if (state.charIndex > 0) {
    return {
      ...state,
      charIndex: state.charIndex - 1,
      displayed: phrase.slice(0, state.charIndex - 1),
    };
  }
  // empty — advance to next phrase
  return {
    phraseIndex: (state.phraseIndex + 1) % PHRASES.length,
    charIndex:   0,
    deleting:    false,
    displayed:   '',
  };
}

export default function TypingEffect() {
  const [state, dispatch] = useReducer(
    (_: State, next: State) => next,
    {
      phraseIndex: 0,
      charIndex:   0,
      deleting:    false,
      displayed:   '',
    }
  );
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    function tick() {
      const s = stateRef.current;
      const phrase = PHRASES[s.phraseIndex];
      const isFull  = !s.deleting && s.charIndex === phrase.length;
      const isEmpty =  s.deleting && s.charIndex === 0;

      const delay = isFull
        ? PAUSE_FULL
        : isEmpty
        ? PAUSE_EMPTY
        : s.deleting
        ? DELETING_MS
        : TYPING_MS;

      id = setTimeout(() => {
        dispatch(reducer(stateRef.current));
        tick();
      }, delay);
    }

    tick();
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className="mx-auto mb-8 inline-flex max-w-xl items-center gap-3 rounded-xl border border-violet-100 bg-violet-50/80 px-5 py-3 shadow-sm backdrop-blur-sm"
      aria-live="polite"
      aria-label={`Currently automating: ${state.displayed}`}
    >
      {/* Prompt */}
      <span className="shrink-0 select-none font-mono text-sm font-bold text-violet-500" aria-hidden="true">
        &gt;_
      </span>

      {/* Label */}
      <span className="shrink-0 text-sm text-gray-400">automating:</span>

      {/* Typed text + cursor */}
      <span className="min-w-0 flex-1 text-left text-sm font-mono font-semibold text-violet-700">
        {state.displayed}
        <span
          className="ml-px inline-block h-[1em] w-[2px] translate-y-[1px] animate-pulse bg-violet-500"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}
