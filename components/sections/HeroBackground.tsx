'use client';

export default function HeroBackground() {
  return (
    <>
      <style>{`
        @keyframes klyd-blob-1 {
          0%,100% { transform: translate(-50%,-50%) scale(1)    rotate(0deg);  }
          30%      { transform: translate(-44%,-56%) scale(1.08) rotate(6deg);  }
          60%      { transform: translate(-56%,-44%) scale(0.94) rotate(-4deg); }
        }
        @keyframes klyd-blob-2 {
          0%,100% { transform: translate(0,0)       scale(1);    }
          35%      { transform: translate(50px,-40px) scale(1.1);  }
          70%      { transform: translate(-30px,40px) scale(0.92); }
        }
        @keyframes klyd-blob-3 {
          0%,100% { transform: translate(0,0)        scale(1);    }
          35%      { transform: translate(-40px,30px)  scale(1.07); }
          70%      { transform: translate(30px,-40px)  scale(0.95); }
        }
        @keyframes klyd-blob-4 {
          0%,100% { transform: translate(0,0)       scale(1);    opacity:0.7; }
          50%      { transform: translate(20px,-20px) scale(1.12); opacity:0.4; }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-klyd-blob] { animation: none !important; }
        }
      `}</style>

      {/* Primary violet blob — centre-top */}
      <div
        data-klyd-blob
        data-parallax-speed="0.1"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[35%] h-[640px] w-[640px] rounded-full bg-violet-200/60 blur-[110px]"
        style={{ animation: 'klyd-blob-1 14s ease-in-out infinite' }}
      />

      {/* Sky-blue blob — right */}
      <div
        data-klyd-blob
        data-parallax-speed="0.14"
        aria-hidden="true"
        className="pointer-events-none absolute right-[-80px] top-[-60px] h-[520px] w-[520px] rounded-full bg-sky-200/60 blur-[100px]"
        style={{ animation: 'klyd-blob-2 18s ease-in-out infinite' }}
      />

      {/* Pink blob — bottom-left */}
      <div
        data-klyd-blob
        data-parallax-speed="0.08"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-60px] h-[450px] w-[450px] rounded-full bg-pink-200/50 blur-[90px]"
        style={{ animation: 'klyd-blob-3 16s ease-in-out infinite' }}
      />

      {/* Amber accent — top-left */}
      <div
        data-klyd-blob
        data-parallax-speed="0.16"
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[12%] h-[260px] w-[260px] rounded-full bg-amber-100/70 blur-[70px]"
        style={{ animation: 'klyd-blob-4 10s ease-in-out infinite' }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)',
          backgroundSize:  '32px 32px',
        }}
      />

      {/* Fade-out bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"
      />
    </>
  );
}
