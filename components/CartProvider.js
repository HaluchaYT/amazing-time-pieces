'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('atp_cart_v1');
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem('atp_cart_v1', JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const add = (watch) => {
    setItems((prev) => {
      if (prev.find((p) => p.id === watch.id)) return prev;
      return [
        ...prev,
        {
          id: watch.id,
          brand: watch.brand,
          model: watch.model,
          reference: watch.reference,
          price: watch.price,
          image: watch.image,
        },
      ];
    });
  };

  const remove = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clear = () => setItems([]);

  const subtotal = items.reduce((s, i) => s + i.price, 0);
  const count = items.length;

  return (
    <CartContext.Provider value={{ items, add, remove, clear, subtotal, count, hydrated }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
