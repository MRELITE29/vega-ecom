export type InvoiceLine = {
  sku: string;
  quantity: number;
  unitPrice: number;
};

export type InvoicePayload = {
  invoiceId: string;
  buyerName: string;
  orderId: string;
  lines: InvoiceLine[];
  subtotal: number;
  taxAmount: number;
  total: number;
};

export function buildInvoiceHtml(payload: InvoicePayload) {
  const lineRows = payload.lines
    .map(
      (line) =>
        `<tr><td>${line.sku}</td><td>${line.quantity}</td><td>${line.unitPrice.toFixed(
          2,
        )}</td></tr>`,
    )
    .join("");

  return `
    <html>
      <body style="font-family: Arial, sans-serif; color: #111827;">
        <h1>Vega Helmets Invoice ${payload.invoiceId}</h1>
        <p>Buyer: ${payload.buyerName}</p>
        <p>Order: ${payload.orderId}</p>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%;">
          <thead>
            <tr>
              <th align="left">SKU</th>
              <th align="left">Qty</th>
              <th align="left">Unit Price</th>
            </tr>
          </thead>
          <tbody>${lineRows}</tbody>
        </table>
        <p>Subtotal: ${payload.subtotal.toFixed(2)}</p>
        <p>GST: ${payload.taxAmount.toFixed(2)}</p>
        <p><strong>Total: ${payload.total.toFixed(2)}</strong></p>
      </body>
    </html>
  `;
}
