export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const response = await fetch("https://api.onesignal.com/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Key os_v2_app_ioudvkwwnjctzhd3f6peqxxkiffzfwai3pxemivvxczwrus2kov7jqczcrcpjkxa2ylk5tufm6pgdbjtcfdmgowm2tsgwsdhpu7i6ai"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
