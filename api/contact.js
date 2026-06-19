import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const gmailUser = "idarajohnson841@gmail.com";

  if (!gmailPass) {
    return res.status(503).json({ error: "Email service not configured." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#FFF8F1;border-radius:12px;">
          <h2 style="color:#F97316;margin-top:0;">New Message from Your Portfolio</h2>
          <hr style="border:none;border-top:1px solid rgba(249,115,22,0.2);margin:16px 0;" />
          <p><strong style="color:#5C4033;">Name:</strong> ${name}</p>
          <p><strong style="color:#5C4033;">Email:</strong> <a href="mailto:${email}" style="color:#F97316;">${email}</a></p>
          <p><strong style="color:#5C4033;">Subject:</strong> ${subject}</p>
          <div style="background:#fff;border-left:3px solid #F97316;padding:16px;border-radius:8px;margin-top:12px;">
            <strong style="color:#5C4033;">Message:</strong>
            <p style="color:#374151;margin-top:8px;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="color:#9CA3AF;font-size:12px;margin-top:24px;">Sent via idarajohnson.vercel.app</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Email error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
