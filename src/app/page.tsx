'use client';

import { useState } from 'react';

export default function Home() {
  const [size, setSize] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
      <h1 className="text-4xl font-bold">Next.js</h1>
      <p className="text-lg">1. Diseño de Software</p>
      <p className="text-lg">2. Clase 17 de Octubre 2024</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ejemplo Botón
      </button>

      <div className="space-y-2">
        <p className="text-sm">Size</p>
        <div className="grid grid-cols-3 gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`border p-2 ${
                size === s ? 'bg-gray-500' : 'bg-white text-black'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-red-500 text-center">Comprobando TailwindCSS</div>


      <div className="flex space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded">
          Deploy now
        </button>
        <button className="bg-white text-black px-4 py-2 rounded">
          Read our docs
        </button>
      </div>
    </div>
  );
}

