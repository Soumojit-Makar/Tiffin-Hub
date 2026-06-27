"use client";

import { useState } from "react";
import type { OrderFormData, OrderItem, MenuItem } from "@/types";
import { saveOrderToStorage } from "@/lib/utils";
import SuccessModal from "./SuccessModal";
import { Minus, Plus, Send, Trash2 } from "lucide-react";
import { menuItems } from "@/data/menu";

const MEAL_OPTIONS = menuItems.map((item: MenuItem) => item.name);

const defaultForm: OrderFormData = {
  customerName: "",
  mobile: "",
  address: "",
  items: [
    {
      mealType: MEAL_OPTIONS[0],
      quantity: 1,
    },
  ],
  deliveryTime: "",
  notes: "",
};

export default function OrderForm() {
  const [form, setForm] = useState<OrderFormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<OrderFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (key: keyof OrderFormData, value: any) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateItem = (
    index: number,
    field: keyof OrderItem,
    value: string | number
  ) => {
    const updatedItems = [...form.items];

    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    setForm((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const addItem = () => {
    setForm((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          mealType: MEAL_OPTIONS[0],
          quantity: 1,
        },
      ],
    }));
  };

  const removeItem = (index: number) => {
    if (form.items.length === 1) return;

    setForm((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const validate = (): boolean => {
    const e: Partial<OrderFormData> = {};

    if (!form.customerName.trim()) {
      e.customerName = "Required";
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      e.mobile = "Enter a valid 10-digit number";
    }

    if (!form.address.trim()) {
      e.address = "Required";
    }

    if (!form.deliveryTime) {
      e.deliveryTime = "Required";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    saveOrderToStorage(form);

    setSubmitted(true);
  };

  const label = (text: string, required = true) => (
    <label className="block text-sm font-semibold text-stone-700 mb-1.5">
      {text} {required && <span className="text-orange-500">*</span>}
    </label>
  );

  const fieldCls = (err?: string) =>
    `w-full rounded-xl border-2 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none transition-colors text-sm ${
      err
        ? "border-red-300 bg-red-50"
        : "border-stone-200 bg-white focus:border-orange-400 hover:border-stone-300"
    }`;

  return (
    <>
      <section
        id="order"
        className="section-pad bg-[#FFF9F0]"
        style={{
          backgroundImage: "url('/order.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium text-orange-700 mb-4">
              🛵 Place Your Order
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-3">
              Ready to <span className="text-gradient">Order?</span>
            </h2>

            <p className="text-white/70 text-lg">
              Fill in the details below and we'll take care of the rest.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl shadow-xl shadow-orange-50 border border-orange-100 p-6 sm:p-8 space-y-5"
          >
            {/* Customer Details */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                {label("Customer Name")}
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={form.customerName}
                  onChange={(e) =>
                    setField("customerName", e.target.value)
                  }
                  className={fieldCls(errors.customerName)}
                />
                {errors.customerName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.customerName}
                  </p>
                )}
              </div>

              <div>
                {label("Mobile Number")}
                <input
                  type="tel"
                  placeholder="9876543210"
                  maxLength={10}
                  value={form.mobile}
                  onChange={(e) =>
                    setField(
                      "mobile",
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  className={fieldCls(errors.mobile)}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobile}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              {label("Delivery Address")}

              <textarea
                rows={2}
                placeholder="House no, street, city..."
                value={form.address}
                onChange={(e) =>
                  setField("address", e.target.value)
                }
                className={fieldCls(errors.address)}
              />

              {errors.address && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Multiple Items */}
            <div>
              {label("Order Items")}

              <div className="space-y-4">
                {form.items.map((item, index) => (
                  <div
                    key={index}
                    className="border border-stone-200 rounded-2xl p-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Menu Item
                        </label>

                        <select
                          value={item.mealType}
                          onChange={(e) =>
                            updateItem(
                              index,
                              "mealType",
                              e.target.value
                            )
                          }
                          className={fieldCls()}
                        >
                          {MEAL_OPTIONS.map((meal) => (
                            <option key={meal} value={meal}>
                              {meal}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Quantity
                        </label>

                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              updateItem(
                                index,
                                "quantity",
                                Math.max(
                                  1,
                                  item.quantity - 1
                                )
                              )
                            }
                            className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 flex items-center justify-center"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="text-xl font-bold w-10 text-center">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateItem(
                                index,
                                "quantity",
                                Math.min(
                                  20,
                                  item.quantity + 1
                                )
                              )
                            }
                            className="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 flex items-center justify-center"
                          >
                            <Plus size={16} />
                          </button>

                          {form.items.length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                removeItem(index)
                              }
                              className="ml-auto text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={20} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addItem}
                  className="w-full border-2 border-dashed border-orange-300 py-3 rounded-xl text-orange-600 hover:bg-orange-50 font-semibold"
                >
                  + Add Another Item
                </button>
              </div>
            </div>

            {/* Delivery Time */}
            <div>
              {label("Delivery Time")}

              <input
                type="time"
                value={form.deliveryTime}
                onChange={(e) =>
                  setField("deliveryTime", e.target.value)
                }
                className={fieldCls(errors.deliveryTime)}
              />

              {errors.deliveryTime && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.deliveryTime}
                </p>
              )}
            </div>

            {/* Notes */}
            <div>
              {label("Additional Notes", false)}

              <textarea
                rows={3}
                placeholder="Any special requests..."
                value={form.notes}
                onChange={(e) =>
                  setField("notes", e.target.value)
                }
                className={fieldCls()}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg transition-all"
            >
              <Send size={20} />
              Place My Order
            </button>

            <p className="text-center text-xs text-stone-400">
              By placing an order you agree to be contacted at the number
              provided.
            </p>
          </form>
        </div>
      </section>

      {submitted && (
        <SuccessModal
          order={form}
          onClose={() => {
            setSubmitted(false);
            setForm(defaultForm);
          }}
        />
      )}
    </>
  );
}