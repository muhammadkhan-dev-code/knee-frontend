import React from "react";

export default function RoleButton({ icon: Icon, title, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-12 rounded-xl border flex justify-center items-center gap-2 text-sm font-semibold
      transition-all duration-150
      ${
        active
          ? "bg-teal-50 border-teal-500 text-teal-700 ring-4 ring-teal-50"
          : "bg-white border-gray-200 text-gray-500 hover:border-teal-400 hover:text-teal-600"
      }`}
    >
      <Icon size={17} />
      {title}
    </button>
  );
}
