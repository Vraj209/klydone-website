import { NextRequest, NextResponse } from 'next/server';
import { aiProjectEstimateSchema } from '@/lib/validations/schemas';
import { ErrorHandler } from '@/lib/errors/ErrorHandler';

function selectArchitecture(goal: string): string {
  const normalizedGoal = goal.toLowerCase();

  if (normalizedGoal.includes('support') || normalizedGoal.includes('ticket')) {
    return 'LLM support copilot with helpdesk integration, intent routing, retrieval over SOP/knowledge base, and human-in-the-loop escalation.';
  }

  if (normalizedGoal.includes('lead') || normalizedGoal.includes('sales')) {
    return 'AI lead qualification workflow with CRM integration, enrichment pipeline, scoring model, and automated follow-up orchestration.';
  }

  if (normalizedGoal.includes('knowledge') || normalizedGoal.includes('search') || normalizedGoal.includes('rag')) {
    return 'Enterprise RAG system with secure document ingestion, vector index, role-based retrieval, and answer evaluation/monitoring.';
  }

  return 'Workflow automation stack using LLM agents, tool integrations, orchestration layer, observability, and approval checkpoints.';
}

function estimateCostRange(companyType: string, goal: string): string {
  const normalizedCompany = companyType.toLowerCase();
  const normalizedGoal = goal.toLowerCase();

  const enterpriseLike =
    normalizedCompany.includes('enterprise') ||
    normalizedCompany.includes('bank') ||
    normalizedCompany.includes('health') ||
    normalizedCompany.includes('fintech');

  const complexGoal =
    normalizedGoal.includes('multi') ||
    normalizedGoal.includes('end-to-end') ||
    normalizedGoal.includes('compliance') ||
    normalizedGoal.includes('legacy');

  if (enterpriseLike || complexGoal) {
    return 'CAD $45,000 - $180,000';
  }

  return 'CAD $15,000 - $60,000';
}

function estimateTimeline(goal: string): string {
  const normalizedGoal = goal.toLowerCase();

  if (
    normalizedGoal.includes('enterprise') ||
    normalizedGoal.includes('compliance') ||
    normalizedGoal.includes('multi')
  ) {
    return '8-16 weeks';
  }

  return '3-8 weeks';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedInput = aiProjectEstimateSchema.parse(body);

    const recommended_architecture = selectArchitecture(validatedInput.goal);
    const estimated_cost = estimateCostRange(validatedInput.company_type, validatedInput.goal);
    const timeline = estimateTimeline(validatedInput.goal);

    return NextResponse.json(
      {
        recommended_architecture,
        estimated_cost,
        timeline,
      },
      { status: 200 }
    );
  } catch (error) {
    ErrorHandler.logError(error, 'Estimate AI Project API');
    const errorResponse = ErrorHandler.createErrorResponse(error);
    const { statusCode } = ErrorHandler.handleError(error);

    return NextResponse.json(errorResponse, {
      status: statusCode,
    });
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
    },
    { status: 405 }
  );
}
