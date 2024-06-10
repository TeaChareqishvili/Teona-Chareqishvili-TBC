import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/add-review/", "");

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  const { review } = await request.json();
  console.log(review, "reviewroute");

  if (!review) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    // Fetch existing reviews
    const existingReviewsResult = await sql`
      SELECT reviews FROM shop WHERE id = ${Number(id)}
    `;
    const existingReviews = existingReviewsResult[0]?.reviews || [];

    console.log(existingReviews, "route");
    // Append the new review
    const updatedReviews = [...existingReviews, review];

    // Manually format the array as a string
    const formattedReviews = `{${updatedReviews
      .map((r) => `"${r}"`)
      .join(",")}}`;

    // Update the reviews array in the database
    await sql`
      UPDATE shop 
      SET reviews = ${formattedReviews}
      WHERE id = ${Number(id)}
    `;

    const updatedRecord = await sql`
      SELECT * FROM shop WHERE id = ${Number(id)}
    `;

    return NextResponse.json(updatedRecord, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
