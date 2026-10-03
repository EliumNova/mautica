'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Rotador de imágenes de fondo con fade cross-dissolve.
 *
 * Props:
 *  - images: array de strings con paths (ej: ['/img/foto-1.jpg', ...])
 *  - intervalMs: tiempo entre cambios (default 5000)
 */
export default function BackgroundRotator({ images, intervalMs = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 z-[1]" aria-hidden="true">
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            idx === activeIndex ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
