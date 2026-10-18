
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.SMTP_HOST || !process.env.SMTP_USER ||
    !process.env.SMTP_PASS || !process.env.CONTACT_TO) {
  console.error("Missing required SMTP environment variables.");
  process.exit(1);
}

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["POST", "GET"],
  })
);

app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running." });
});

app.use("/api/contact", contactRoutes);

app.use((err, req, res, next) => {
  console.error("API error:", err.message);

  if (res.headersSent) {
    return next(err);
  }

  if (err.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      message: "Request is too large.",
    });
  }

  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request.",
    });
  }

  res.status(500).json({
    success: false,
    message: "Something went wrong. Please try again later.",
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on port ${PORT}`);
});
