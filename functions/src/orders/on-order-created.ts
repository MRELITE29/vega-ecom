import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions";

import { appConfig } from "../shared/config";
import { sendTransactionalEmail } from "../shared/email";
import { buildInvoiceHtml } from "./build-invoice";

type OrderLine = {
  sku: string;
  quantity: number;
  unitPrice: number;
};

type OrderDocument = {
  buyerEmail: string;
  buyerName: string;
  orderNumber: string;
  lines: OrderLine[];
  subtotal: number;
  taxAmount: number;
  total: number;
};

export const onOrderCreated = onDocumentCreated("orders/{orderId}", async (event) => {
  const snapshot = event.data;

  if (!snapshot) {
    logger.warn("Order created trigger fired without snapshot data.");
    return;
  }

  const order = snapshot.data() as OrderDocument;
  const orderId = event.params.orderId;
  const invoiceId = `INV-${orderId}`;
  const invoiceHtml = buildInvoiceHtml({
    invoiceId,
    buyerName: order.buyerName,
    orderId: order.orderNumber,
    lines: order.lines,
    subtotal: order.subtotal,
    taxAmount: order.taxAmount,
    total: order.total,
  });

  await sendTransactionalEmail({
    to: order.buyerEmail,
    subject: `Order ${order.orderNumber} received`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827;">
        <h1>Purchase order confirmed</h1>
        <p>Your order <strong>${order.orderNumber}</strong> has been queued for review.</p>
        <p>Estimated dispatch SLA: ${appConfig.dispatchSlaDays} business days.</p>
        ${invoiceHtml}
      </div>
    `,
  });

  logger.info("Processed order creation workflow", { orderId, invoiceId });
});
