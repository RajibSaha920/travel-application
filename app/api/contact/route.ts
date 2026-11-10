import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "rajib.apd@gmail.com";

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Bhutan Swallowtail Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New Travel Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; line-height: 1.6; color: #333; border: 1px solid #eee; border-radius: 8px; padding: 24px;">
          <h2 style="color: #b31212; margin-top: 0;">New Travel Inquiry - Bhutan Swallowtail</h2>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <h4 style="margin-bottom: 6px; color: #111;">Message:</h4>
          <div style="background: #f9f9f9; padding: 14px; border-radius: 6px; border-left: 4px solid #b31212; white-space: pre-wrap;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 24px;" />
          <p style="font-size: 12px; color: #777;">Sent automatically from the Bhutan Swallowtail contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Mail Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}