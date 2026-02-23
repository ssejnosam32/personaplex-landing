import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SPREADSHEET_ID = "1wsbc40V88w3tp-nzjRbdc4J1J7I7OZdQb8ZvD0_qdSk";
const SHEET_NAME = "Signups";

function getAuth() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Google OAuth credentials");
  }

  const oauth2 = new google.auth.OAuth2(clientId, clientSecret);
  oauth2.setCredentials({ refresh_token: refreshToken });
  return oauth2;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, pageUrl, referrer, userAgent, utmSource, utmMedium, utmCampaign, ip } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Get IP from headers if not provided client-side
    const clientIp =
      ip ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Try to get country from IP using a free API (best effort)
    let country = "";
    try {
      const geoRes = await fetch(`https://ipapi.co/${clientIp}/country_name/`, {
        signal: AbortSignal.timeout(2000),
      });
      if (geoRes.ok) {
        country = await geoRes.text();
        if (country.includes("<!") || country.length > 60) country = ""; // HTML error page
      }
    } catch {
      // Geo lookup failed, no big deal
    }

    const timestamp = new Date().toISOString();
    const row = [
      timestamp,
      email,
      clientIp,
      userAgent || "",
      referrer || "",
      pageUrl || "",
      utmSource || "",
      utmMedium || "",
      utmCampaign || "",
      country,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:J`,
      valueInputOption: "RAW",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("Signup error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Handle CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
