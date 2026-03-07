'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { detectCurrency, type Currency } from '@/utils/detectCurrency';

interface RegionContextProps {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

const RegionContext = createContext<RegionContextProps | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('usd');

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCurrencyState(detectCurrency(tz));
    } catch {
      setCurrencyState('usd');
    }
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
  }, []);

  return (
    <RegionContext.Provider value={{ currency, setCurrency }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) throw new Error('useRegion must be used within a RegionProvider');
  return ctx;
}
