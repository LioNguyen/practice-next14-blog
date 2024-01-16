import React from "react";

import { Navbar } from "@/components/Navbar";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-5xl mx-auto md:pt-[70px] pt-4">
      <Navbar />
      {children}
    </div>
  );
}
