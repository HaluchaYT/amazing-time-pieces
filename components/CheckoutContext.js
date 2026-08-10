'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CheckoutContext = createContext(null);

const EMPTY_INFO = {
  firstName: '', lastName: '', email: '', phone: '',
  address1: '', address2: '', city: '', state: '', zip: '', country: 'United States',
  shippingMethod: 'insured-overnight',
  notes: '',
};

export function CheckoutProvider({ children }) {
  const [info, setInfo] = useState(EMPTY_INFO);
  const [payment, setPayment] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('atp_checkout_v1');
      if (raw) {
        const s = JSON.parse(raw);
        if (s.info) setInfo(s.info);
        if (s.payment) setPayment(s.payment);
        if (s.orderId) setOrderId(s.orderId);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem('atp_checkout_v1', JSON.stringify({ info, payment, orderId }));
    } catch {}
  }, [info, payment, orderId, hydrated]);

  const reset = () => {
    setInfo(EMPTY_INFO);
    setPayment(null);
    setOrderId(null);
    try { sessionStorage.removeItem('atp_checkout_v1'); } catch {}
  };

  const generateOrderId = () => {
    const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
    const time = Date.now().toString().slice(-6);
    const id = `ATP-${time}-${rand}`;
    setOrderId(id);
    return id;
  };

  return (
    <CheckoutContext.Provider value={{ info, setInfo, payment, setPayment, orderId, generateOrderId, reset, hydrated }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error('useCheckout must be inside CheckoutProvider');
  return ctx;
}
