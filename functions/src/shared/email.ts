import nodemailer from "nodemailer";

import { mailConfig } from "./config";

export type MailAttachment = {
  filename: string;
  content: string;
  contentType: string;
};

export async function sendTransactionalEmail(input: {
  to: string;
  subject: string;
  html: string;
  attachments?: MailAttachment[];
}) {
  if (!mailConfig.host || !mailConfig.user || !mailConfig.password) {
    console.info("Skipping email transport because SMTP credentials are not configured.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: mailConfig.host,
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: {
      user: mailConfig.user,
      pass: mailConfig.password,
    },
  });

  await transporter.sendMail({
    from: mailConfig.from,
    replyTo: mailConfig.replyTo,
    to: input.to,
    subject: input.subject,
    html: input.html,
    attachments: input.attachments,
  });
}
