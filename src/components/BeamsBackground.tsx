'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';

// Preload the chunk immediately (starts download before React hydrates)
const beamsImport = () => import('./Beams');
if (typeof window !== 'undefined') beamsImport();
const Beams = dynamic(beamsImport, { ssr: false });

export function BeamsBackground() {
  const [beamNumber, setBeamNumber] = useState(20);
  const [mounted, setMounted] = useState(false);
  const [fixedHeight, setFixedHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (window.innerWidth < 768) {
      setBeamNumber(10);
    }
    setFixedHeight(window.innerHeight);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{
        pointerEvents: 'none',
        height: fixedHeight ? `${fixedHeight}px` : '100%',
        minHeight: '100%',
        maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 90%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 90%)',
      }}
    >
      <Beams
        beamWidth={1.8}
        beamHeight={30}
        beamNumber={beamNumber}
        lightColor="#c2fffe"
        speed={4.9}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={30}
      />
    </div>
  );
}
