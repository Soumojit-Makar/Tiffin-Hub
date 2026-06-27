import type { OrderFormData } from "@/types";
import { WHATSAPP_NUMBER } from "@/constants";

export function buildWhatsAppMessage(data: OrderFormData): string {
  const itemsText = data.items
    .map(
      (item, index) =>
        `${index + 1}. 🍽️ ${item.mealType} × ${item.quantity}`
    )
    .join("\n");

  const message = `🍱 *New Order — Tiffin Hub*

👤 *Name:* ${data.customerName}
📱 *Phone:* ${data.mobile}
📍 *Address:* ${data.address}

📋 *Ordered Items:*
${itemsText}

⏰ *Delivery Time:* ${data.deliveryTime}
📝 *Notes:* ${data.notes || "None"}

Thank you for ordering from Tiffin Hub! 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}
export function saveOrderToStorage(data: OrderFormData): void {
  if (typeof window === "undefined") return;

  const existing = JSON.parse(
    localStorage.getItem("tiffinhub_orders") || "[]"
  );

  existing.unshift({
    ...data,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(
    "tiffinhub_orders",
    JSON.stringify(existing.slice(0, 20))
  );
}
export function formatPrice(price: number): string {
  return `₹${price}`;
}
