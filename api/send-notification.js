export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const apiKey = process.env.ONESIGNAL_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "ONESIGNAL_API_KEY is missing"
      });
    }

    const response = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Key ${apiKey}`
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    return res.status(response.status).json({
      status: response.status,
      body: text
    });

  } catch (e) {
    return res.status(500).json({
      error: e.message
    });
  }
}
