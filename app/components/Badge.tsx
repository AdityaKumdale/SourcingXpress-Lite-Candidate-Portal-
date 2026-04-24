import type { IconType } from "react-icons";
import React from 'react';



type BadgeProps = {
  title: string;
  icon?: IconType; 
  className?: string; 
};

export default function Badge({ title, icon: Icon, className = "" }: BadgeProps) {
  return (
    <div 
      className={`
        inline-flex items-center justify-center gap-1.5 
        px-3 py-1 rounded-full text-xs font-medium 
        bg-orange-50 text-slate-700 border border-orange-100
        ${className} 
      `}
    >
      {Icon && <Icon className="text-slate-500" size={14} />}
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
}
