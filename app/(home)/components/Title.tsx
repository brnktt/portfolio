import React from 'react';

function Title({ text, className }: { text: string, className?: string}) {
  return (
    <div className={className}>
      <h2 className="text-3xl font-bold group-hover:text-green-500 transition-all">{text}</h2>
      <div className="w-40 h-2 bg-green-500 rounded-full"></div>
      <div className="w-40 h-2 bg-blue-500 rounded-full translate-x-2"></div>
    </div>
  );
}

export default Title;