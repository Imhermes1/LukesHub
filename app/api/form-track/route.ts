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
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                title: `🏠 New ${body.event.replace('_', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}`,
                color: 0x00ff00, // Green color
                fields: [
                  {
                    name: "👤 Name",
                    value: `${body.firstName} ${body.lastName}`,
                    inline: true
                  },
                  {
                    name: "📧 Email",
                    value: body.email,
                    inline: true
                  },
                  {
                    name: "📋 Guide",
                    value: body.guide.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
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
          })
        });
      } catch (discordError) {
        console.error("[DISCORD_NOTIFICATION_ERROR]", discordError);
      }
    }

    return new NextResponse(null, { status: 204 });
  } catch (e) {
    console.error("[FORM_SUBMIT_ERROR]", e);
    return new NextResponse(null, { status: 500 });
  }
}