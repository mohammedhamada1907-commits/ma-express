export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch(""https://api.onesignal.com/apps"", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Key ${process.env.ONESIGNAL_API_KEY}"
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

console.log("OneSignal Status:", response.status);
console.log("OneSignal Response:", text);

return res.status(response.status).json({
  status: response.status,
  body: text
});
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
