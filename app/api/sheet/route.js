import { google } from "googleapis";

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      mobile,
      society,
      carCount,
      isChecked,
      brand,
      model,
      vehicleNumber,
      color,
      parkingType,
      parkingNumber,
      vehicleType,
      day,
      time,
      slot,
    } = body;

    // Authenticate using Google API credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID, // Your Google Sheet ID
      range: "Sheet1!A2:Q", // Adjust range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            mobile,
            society,
            carCount,
            isChecked,
            brand,
            model,
            vehicleNumber,
            color,
            parkingType,
            parkingNumber,
            vehicleType,
            day,
            time,
            slot,
          ],
        ],
      },
    });

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Feedback posted to spreadsheet!" }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error adding data to Google Sheets:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
