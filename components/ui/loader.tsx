import * as React from "react";

type LoaderProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
};

export function Orbit({ size = 'lg', className = '' }: LoaderProps) {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12', xl: 'w-16 h-16' };
  const containerSize = sizeClasses[size] || sizeClasses.md;
  const primaryBgClass = "bg-zinc-950 dark:bg-zinc-50";
  return (
    <div className={`${containerSize} relative flex items-center justify-center ${className}`}>
      <div className={`w-2 h-2 ${primaryBgClass} rounded-full`} />
      <div className="absolute w-full h-full border border-zinc-200 dark:border-zinc-800 rounded-full animate-spin">
         <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 ${primaryBgClass} rounded-full`} />
      </div>
    </div>
  );
}