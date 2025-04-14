import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const {name, contact, email, password } = await req.json();

  // Hash the password securely with bcrypt
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  const filePath = path.join(process.cwd(), "logins.csv");
  const csvLine = `"${name}","${contact}","${email}","${hashedPassword}"\n`;

  try {
    // If file doesn't exist, create it with headers
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "name,contact,Email,PasswordHash\n");
    }

    // Append the new user
    fs.appendFileSync(filePath, csvLine);

    return NextResponse.json({ message: "Login saved securely!" });
  } catch (err) {
    console.error("Error saving login:", err);
    return NextResponse.json({ message: "Error saving login" }, { status: 500 });
  }
}
