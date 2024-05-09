// import { NextResponse, NextRequest } from "next/server";
// import { Host } from "@/apiUsers";
// export async function POST(request: NextRequest) {
//   // Parse incoming form data
//   const formData = await request.formData();

//   // Example: Process data here, like saving to a database
//   // await someDatabaseAction({ name, email, age });

//   const { name, email, age } = Object.fromEntries(formData);
//   const response = await fetch(Host + "/add-user", {
//     method: "POST",
//     body: JSON.stringify({ name, email, age }),
//   });
//   console.log(`response `, { response });
//   return NextResponse.json({ success: true, message: "User added!" });
// }
