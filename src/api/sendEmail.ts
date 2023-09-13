import { NextApiRequest, NextApiResponse } from "next";
import { Buffer } from "buffer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  const mailjetData = {
    Messages: [
      {
        From: {
          Email: email, // Replace with the sender's email. Can be your business email.
          Name: name,
        },
        To: [
          {
            Email: "cody.schexnider@codesmith.io", // Replace with the email you want to forward to.
            Name: "Recipient Name", // Replace with the name of the recipient.
          },
        ],
        Subject: "New Contact Form Submission",
        TextPart: `From: ${name} <${email}>\n\n${message}`,
      },
    ],
  };

  try {
    const mailjetResponse = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.MAILJET_API_KEY + ":" + process.env.MAILJET_SECRET_KEY
          ).toString("base64"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailjetData),
    });

    if (!mailjetResponse.ok) {
      console.error("Mailjet error", await mailjetResponse.text());
      return res.status(500).end();
    }

    return res.status(200).end();
  } catch (error) {
    console.error("Sending email failed", error);
    return res.status(500).end();
  }
};
