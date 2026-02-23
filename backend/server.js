require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("Backend is running properly.");
});

/* ================= CONTACT ROUTE ================= */

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Incoming Request:", req.body);

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields are required.",
    });
  }

  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email credentials not configured.");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection before sending
    await transporter.verify();
    console.log("SMTP connection successful.");

    await transporter.sendMail({
      from: `"Forte & Co Website" <${process.env.EMAIL_USER}>`,
      replyTo: email, // Allows replying to user
      to: process.env.EMAIL_USER,
      subject: "New Consultation Request - Forte & Co.",
      html: `
        <h3>New Consultation Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully.");
    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Email Error:", error.message);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ================= SERVER START ================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});