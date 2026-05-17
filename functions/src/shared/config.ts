export const mailConfig = {
  from: process.env.MAIL_FROM ?? "orders@vegahelmets.com",
  replyTo: process.env.MAIL_REPLY_TO ?? "support@vegahelmets.com",
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT ?? 587),
  secure: process.env.MAIL_PORT === "465",
  user: process.env.MAIL_USER,
  password: process.env.MAIL_PASSWORD,
};

export const appConfig = {
  environment: process.env.APP_ENV ?? "development",
  dispatchSlaDays: Number(process.env.DISPATCH_SLA_DAYS ?? 3),
};
