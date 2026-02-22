import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory store for OTPs (In real app, use Redis or DB)
const otpStore = new Map<string, { otp: string; expires: number }>();

// API Routes
app.post("/api/auth/request-otp", (req, res) => {
  const { phoneNumber } = req.body;
  if (!phoneNumber) {
    return res.status(400).json({ error: "Phone number is required" });
  }

  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expires = Date.now() + 5 * 60 * 1000; // 5 minutes expiry

  otpStore.set(phoneNumber, { otp, expires });

  // In a real app, you would send this via SMS (e.g., Twilio)
  console.log(`[AUTH] OTP for ${phoneNumber}: ${otp}`);

  res.json({ message: "OTP sent successfully (Check server console for demo)" });
});

app.post("/api/auth/verify-otp", (req, res) => {
  const { phoneNumber, otp } = req.body;
  
  const storedData = otpStore.get(phoneNumber);

  if (!storedData) {
    return res.status(400).json({ error: "No OTP requested for this number" });
  }

  if (Date.now() > storedData.expires) {
    otpStore.delete(phoneNumber);
    return res.status(400).json({ error: "OTP expired" });
  }

  if (storedData.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP" });
  }

  // Success! Clear OTP and return "token"
  otpStore.delete(phoneNumber);
  
  // In real app, generate a JWT
  const mockToken = `mock-jwt-${phoneNumber}-${Date.now()}`;
  
  res.json({ 
    token: mockToken, 
    user: { phoneNumber, name: "Valued Customer" } 
  });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting Vite in middleware mode...");
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
