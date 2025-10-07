import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex justify-center pt-40">
      {children}
    </div>
  );
}
