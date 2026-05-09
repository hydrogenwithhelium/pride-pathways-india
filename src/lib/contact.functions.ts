import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SHEET_ID = "1hy-SMKyESi52gjLVEHXBo0xRWZHO2QLWw-sjG8TgSsA";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const ContactSchema = z.object({
  userId: z.string().trim().min(1).max(200),
  concern: z.string().trim().min(1).max(2000),
  ageRange: z.string().trim().min(1).max(50),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

    const url = `${GATEWAY_URL}/spreadsheets/${SHEET_ID}/values/Sheet1!A:D:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values: [[new Date().toISOString(), data.userId, data.concern, data.ageRange]],
      }),
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Sheets append failed [${res.status}]: ${body}`);
    }
    return { ok: true };
  });
