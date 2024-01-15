import "./Loader.styles.css";

import React from "react";

export default function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center z-10 fixed inset-0 bg-slate-100/10">
      <span className="loader"></span>
    </div>
  );
}
