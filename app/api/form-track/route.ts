import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    console.log("[FORM_SUBMIT]", {
      at: new Date().toISOString(),
      ...body,
    });

    // Send Discord notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        console.log("[DISCORD_WEBHOOK] Sending notification...");
        const discordPayload = {
          embeds: [
            {
              title: `🏠 New ${body.event?.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'Form Submission'}`,
              color: 0x00ff00, // Green color
              fields: [
                {
                  name: "👤 Name",
                  value: `${body.firstName || 'N/A'} ${body.lastName || 'N/A'}`,
                  inline: true
                },
                {
                  name: "📧 Email",
                  value: body.email || 'N/A',
                  inline: true
                },
                {
                  name: "📋 Guide",
                  value: body.guide?.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) || 'N/A',
                  inline: true
                },
                ...(body.address ? [{
                  name: "🏡 Property Address",
                  value: body.address,
                  inline: false
                }] : [])
              ],
              timestamp: new Date().toISOString(),
              footer: {
                text: "Real Estate Lead"
              }
            }
          ]
        };

        const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload)
        });

        if (!response.ok) {
          console.error("[DISCORD_WEBHOOK_ERROR] Response not ok:", response.status, response.statusText);
          const errorText = await response.text();
          console.error("[DISCORD_WEBHOOK_ERROR] Response body:", errorText);
        } else {
          console.log("[DISCORD_WEBHOOK] Notification sent successfully");
        }
      } catch (discordError) {
        console.error("[DISCORD_NOTIFICATION_ERROR]", discordError);
      }
    } else {
      console.log("[DISCORD_WEBHOOK] No webhook URL configured");
    }

    return new NextResponse(null, { status: 204 });
  } catch (e) {
    console.error("[FORM_SUBMIT_ERROR]", e);
    return new NextResponse(null, { status: 500 });
  }
}