'use client';

import { useEffect, useState } from 'react';

export function PageReveal({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wait one frame so browser paints the opacity:0 state first,
    // then trigger the CSS transition to opacity:1
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    });
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.9s ease-out',
      }}
    >
      {children}
    </div>
  );
}
