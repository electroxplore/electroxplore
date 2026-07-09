
import { NextResponse } from "next/server"
// Adjust this import path based on where you saved your Google Sheets utility file
import { getSheetData } from "@/lib/google-sheets" 

export async function GET() {
  try {
    // 1. Fetch data from the sheet named exactly "members"
    const rawData = await getSheetData("members")

    // 2. Check if data exists
    if (!rawData || rawData.length === 0) {
      return NextResponse.json({ members: [] }, { status: 200 })
    }

    // 3. Extract headers (the first row of your sheet)
    // Example headers: ['memberId', 'name', 'email', 'field', 'status']
    const headers = rawData[0] as string[]
    
    // 4. Extract the actual data rows
    const rows = rawData.slice(1)

    // 5. Map the 2D array into an array of objects
    const members = rows.map((row) => {
      const memberObject: Record<string, string> = {}
      
      headers.forEach((header, index) => {
        // Map each column to its corresponding header key
        // We use || "" to handle empty cells gracefully
        memberObject[header] = row[index] || ""
      })
      
      return memberObject
    })

    // Return the formatted JSON
    return NextResponse.json(members, { status: 200 })
    
  } catch (error) {
    console.error("Failed to fetch members:", error)
    return NextResponse.json(
      { error: "Failed to fetch members data" }, 
      { status: 500 }
    )
  }
}