import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename || !request.body) {
    return NextResponse.json(new Error("No filename provided"), {
      status: 400,
    });
  }

  const blob = await put(filename, request.body, {
    access: "public",
  });

  return NextResponse.json(blob);
}

// import { put } from "@vercel/blob";
// import { NextResponse } from "next/server";

// export async function POST(request: Request): Promise<NextResponse> {
//   const { searchParams } = new URL(request.url);
//   const filenames = searchParams.getAll("filename");

//   if (!filenames.length || !request.body) {
//     return NextResponse.json(new Error("No filename or body provided"), {
//       status: 400,
//     });
//   }

//   const blobs = [];

//   for (const filename of filenames) {
//     const fileStream = request.body; // Handle file stream correctly here
//     const blob = await put(filename, fileStream, {
//       access: "public",
//     });
//     blobs.push(blob);
//   }

//   return NextResponse.json(blobs);
// }
