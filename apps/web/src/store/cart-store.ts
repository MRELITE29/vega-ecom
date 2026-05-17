"use client";

import { create } from "zustand";

import { defaultCartSelections, getProductById } from "@/lib/mock-data";
import { calculateLine } from "@/lib/order-utils";
import { BulkCartItem, Product } from "@/types/domain";

type BulkCartState = {
  items: BulkCartItem[];
  lastUpdated: string | null;
  addBoxes: (product: Product, boxes?: number) => void;
  setBoxes: (productId: string, boxes: number) => void;
  clearCart: () => void;
};

function upsertItem(items: BulkCartItem[], product: Product, boxes: number) {
  if (boxes <= 0) {
    return items.filter((item) => item.product.id !== product.id);
  }

  const nextLine = calculateLine(product, boxes);
  const existingIndex = items.findIndex((item) => item.product.id === product.id);

  if (existingIndex === -1) {
    return [...items, nextLine];
  }

  return items.map((item, index) => (index === existingIndex ? nextLine : item));
}

const initialItems = defaultCartSelections
  .map((selection) => {
    const product = getProductById(selection.productId);
    return product ? calculateLine(product, selection.masterBoxes) : null;
  })
  .filter((item): item is BulkCartItem => item !== null);

export const useBulkCartStore = create<BulkCartState>((set) => ({
  items: initialItems,
  lastUpdated: null,
  addBoxes: (product, boxes = 1) =>
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);
      const nextBoxes = (existing?.masterBoxes ?? 0) + boxes;

      return {
        items: upsertItem(state.items, product, nextBoxes),
        lastUpdated: new Date().toISOString(),
      };
    }),
  setBoxes: (productId, boxes) =>
    set((state) => {
      const product = state.items.find((item) => item.product.id === productId)?.product;
      if (!product) {
        return state;
      }

      return {
        items: upsertItem(state.items, product, boxes),
        lastUpdated: new Date().toISOString(),
      };
    }),
  clearCart: () =>
    set({
      items: [],
      lastUpdated: new Date().toISOString(),
    }),
}));
