import { google } from "googleapis"

const sheets = google.sheets("v4")

interface GoogleAuthConfig {
  email: string
  key: string
  spreadsheetId: string
}

let authClient: any = null

async function getAuthClient() {
  if (authClient) return authClient

  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY
  if (!serviceAccountKey) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable not set")
  }

  try {
    const decodedKey = Buffer.from(serviceAccountKey, "base64").toString()
    const keyJson = JSON.parse(decodedKey)

const auth = new google.auth.GoogleAuth({
  credentials: keyJson,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})
authClient = await auth.getClient()
return authClient

    return authClient
  } catch (error) {
    console.error("Failed to initialize Google Auth:", error)
    throw new Error("Failed to initialize Google Sheets authentication")
  }
}

export async function appendToSheet(
  sheetName: string,
  values: (string | number | boolean)[][]
) {
  try {
    const auth = await getAuthClient()
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEETS_ID environment variable not set")
    }

    const response = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: `${sheetName}!A:A`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    return response.data
  } catch (error) {
    console.error("Error appending to Google Sheet:", error)
    throw error
  }
}

export async function getSheetData(sheetName: string, range?: string) {
  try {
    const auth = await getAuthClient()
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEETS_ID environment variable not set")
    }

    const fullRange = range || `${sheetName}!A:Z`

    const response = await sheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: fullRange,
    })

    return response.data.values || []
  } catch (error) {
    console.error("Error reading from Google Sheet:", error)
    throw error
  }
}

export async function updateSheet(sheetName: string, range: string, values: any[][]) {
  try {
    const auth = await getAuthClient()
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEETS_ID environment variable not set")
    }

    const response = await sheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `${sheetName}!${range}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    return response.data
  } catch (error) {
    console.error("Error updating Google Sheet:", error)
    throw error
  }
}

export async function clearSheet(sheetName: string, range?: string) {
  try {
    const auth = await getAuthClient()
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEETS_ID environment variable not set")
    }

    const fullRange = range || `${sheetName}!A:Z`

    const response = await sheets.spreadsheets.values.clear({
      auth,
      spreadsheetId,
      range: fullRange,
    })

    return response.data
  } catch (error) {
    console.error("Error clearing Google Sheet:", error)
    throw error
  }
}
