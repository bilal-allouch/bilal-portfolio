// src/layouts/MainLayout.tsx
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      {children}
    </div>
  );
}
