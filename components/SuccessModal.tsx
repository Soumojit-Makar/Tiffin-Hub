"use client";
import { useEffect } from "react";
import { X, CheckCircle, MessageCircle } from "lucide-react";
import type { OrderFormData } from "@/types";
import { buildWhatsAppMessage } from "@/lib/utils";

interface Props {
  order: OrderFormData;
  onClose: () => void;
}

export default function SuccessModal({ order, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const fields = [
    { label: "Name", value: order.customerName },
    { label: "Mobile", value: order.mobile },
    { label: "Address", value: order.address },
    { label: "Meal", value: order.mealType },
    { label: "Quantity", value: `${order.quantity}` },
    { label: "Delivery Time", value: order.deliveryTime },
    { label: "Notes", value: order.notes || "—" },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-t-3xl p-6 text-center border-b border-green-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-green-100 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <X size={18} />
          </button>
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-200">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-bold text-stone-800">Order Received! 🎉</h2>
          <p className="text-stone-500 text-sm mt-1">
            We&apos;ll confirm your order shortly via call or WhatsApp.
          </p>
        </div>

        {/* Order details */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">
            Order Summary
          </h3>
          <div className="space-y-3 mb-6">
            {fields.map((f) => (
              <div key={f.label} className="flex justify-between items-start gap-4 py-2 border-b border-stone-100 last:border-0">
                <span className="text-sm text-stone-500 shrink-0">{f.label}</span>
                <span className="text-sm font-medium text-stone-800 text-right">{f.value}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp button */}
          <a
            href={buildWhatsAppMessage(order)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.02] shadow-md shadow-green-200 mb-3"
          >
            <MessageCircle size={20} />
            Confirm via WhatsApp
          </a>
          <button
            onClick={onClose}
            className="w-full bg-stone-100 hover:bg-stone-200 text-stone-700 py-3.5 rounded-2xl font-semibold transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
