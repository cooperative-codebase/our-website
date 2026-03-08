import * as React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}
