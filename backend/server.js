require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

/* ================= DATABASE CONNECTION ================= */

mongoose.connect("mongodb://localhost:27017/forteco")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });

/* ================= SCHEMA ================= */

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

/* ================= EMAIL CONFIG ================= */

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("Backend running successfully.");
});

/* ================= CONTACT ROUTE ================= */

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required.",
      });
    }

    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Send email to admin
    await transporter.sendMail({
      from: `"Forte & Co Website" <${process.env.EMAIL_USER}>`,
      replyTo: email,
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

    // 3️⃣ Send auto-reply to user
    await transporter.sendMail({
      from: `"Forte & Co" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We Have Received Your Request - Forte & Co.",
      html: `
        <h3>Dear ${name},</h3>
        <p>Thank you for reaching out to Forte & Co.</p>
        <p>We have received your consultation request and will review it shortly.</p>
        <p>Our team will respond within one business day.</p>
        <br/>
        <p>Regards,<br/>Forte & Co.</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

/* ================= ADMIN ROUTE ================= */

app.get("/submissions", async (req, res) => {
  try {
    const submissions = await Contact.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================= SERVER ================= */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});