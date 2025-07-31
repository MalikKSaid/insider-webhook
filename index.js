const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON and raw text (sometimes Insider sends CSV as raw text)
app.use(bodyParser.json({ limit: "10mb", type: 'application/json' }));
app.use(bodyParser.text({ type: 'text/*' })); // For raw CSV or plain text

// GET endpoint
app.get('/', (req, res) => {
  res.send('GET Webhook working!');
});

// POST endpoint
app.post("/", (req, res) => {
  console.log("=== POST Webhook Triggered ===");

  // Detect content type
  const contentType = req.headers["content-type"];

  if (contentType === "application/json") {
    console.log("✅ JSON Payload Received:");
    console.log(JSON.stringify(req.body, null, 2));
  } else if (contentType.startsWith("text/")) {
    console.log("✅ Text/CSV Payload Received:");
    console.log(req.body);
  } else {
    console.log("⚠️ Unknown content type:", contentType);
    console.log(req.body);
  }

  res.status(200).send("✅ Webhook received!");
});

app.get("/", (req, res) => {
  res.send("🌐 Webhook endpoint is live (GET supported)");
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
