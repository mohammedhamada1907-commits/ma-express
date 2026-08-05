export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Key os_v2_app_ioudvkwwnjctzhd3f6peqxxkigaycgp63cwevpmwwsnt4ldp57u32yzuwwhvjmxk243ztnzxovk7rfbmpw364pgiyuc3stpxk3loeiy"
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

return res.status(response.status).json({
  status: response.status,
  response: text
});
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
