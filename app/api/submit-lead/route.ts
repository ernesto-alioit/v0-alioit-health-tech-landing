import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "companyName",
      "companySize",
      "industry",
      "servicesInterested",
      "timeline",
    ]

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
      }
    }

    // Prepare payload for n8n webhook
    const webhookPayload = {
      timestamp: new Date().toISOString(),
      leadData: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        companySize: data.companySize,
        industry: data.industry,
        servicesInterested: data.servicesInterested,
        currentChallenges: data.currentChallenges || "Not provided",
        budget: data.budget || "Not specified",
        timeline: data.timeline,
      },
      source: "AlioIT Security Website",
      leadScore: calculateLeadScore(data),
    }

    // Get n8n webhook URL from environment variable
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL

    if (!n8nWebhookUrl) {
      console.error("N8N_WEBHOOK_URL environment variable is not set")
      // Still return success to user, but log the error
      return NextResponse.json(
        {
          success: true,
          message: "Lead received (webhook not configured)",
        },
        { status: 200 },
      )
    }

    // Send data to n8n webhook
    const webhookResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!webhookResponse.ok) {
      console.error("Failed to send to n8n webhook:", await webhookResponse.text())
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing lead submission:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function calculateLeadScore(data: any): number {
  let score = 0

  // Company size scoring
  const sizeScores: Record<string, number> = {
    "1-10": 10,
    "11-50": 20,
    "51-200": 30,
    "201-500": 40,
    "501+": 50,
  }
  score += sizeScores[data.companySize] || 0

  // Budget scoring
  const budgetScores: Record<string, number> = {
    "<10k": 10,
    "10k-25k": 20,
    "25k-50k": 30,
    "50k+": 40,
  }
  score += budgetScores[data.budget] || 0

  // Timeline scoring (urgency)
  const timelineScores: Record<string, number> = {
    immediate: 30,
    "1month": 20,
    "3months": 10,
    planning: 5,
  }
  score += timelineScores[data.timeline] || 0

  // Challenges described adds points
  if (data.currentChallenges && data.currentChallenges.length > 20) {
    score += 10
  }

  return score
}
