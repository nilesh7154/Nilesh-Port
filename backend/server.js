import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/messages", (req, res) => {
  console.log("📩 New Message:", req.body);
  res.json({ success: true, message: "Message received successfully" });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("✅ Backend running on http://0.0.0.0:5000");
});
