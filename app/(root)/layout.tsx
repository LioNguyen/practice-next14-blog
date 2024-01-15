import React from "react";

import { Navbar } from "@/components/Navbar";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-5xl mx-auto pt-16">
      <Navbar />
      {children}
    </div>
  );
}
