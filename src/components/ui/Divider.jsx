import React from "react";

export default function Divider({ label }) {
  if (!label) {
    return <div className="h-px w-full bg-gray-100" />;
  }

  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-gray-100" />
      <span className="text-xs font-medium text-gray-400">{label}</span>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  );
}
