import { NextResponse } from 'next/server';

export async function GET() {
  const svg = `
    <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradiente de fondo -->
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e"/>
          <stop offset="50%" style="stop-color:#16213e"/>
          <stop offset="100%" style="stop-color:#0f3460"/>
        </linearGradient>
        
        <!-- Gradiente para texto principal -->
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#64ffda"/>
          <stop offset="100%" style="stop-color:#ff6b9d"/>
        </linearGradient>
        
        <!-- Animación de pulso -->
        <style>
          .pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .float {
            animation: float 3s ease-in-out infinite;
          }
          
          .slide-in {
            animation: slideIn 1s ease-out;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes slideIn {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          
          .tech-text {
            font-family: 'Courier New', monospace;
            font-weight: bold;
          }
        </style>
      </defs>
      
      <!-- Fondo -->
      <rect width="800" height="400" fill="url(#bgGrad)"/>
      
      <!-- Patrón de circuitos decorativo -->
      <g stroke="#64ffda" stroke-width="1" fill="none" opacity="0.3">
        <path d="M50 50 L150 50 L150 100 L200 100" class="pulse"/>
        <path d="M600 350 L700 350 L700 300 L750 300" class="pulse"/>
        <circle cx="150" cy="50" r="3" fill="#64ffda"/>
        <circle cx="700" cy="350" r="3" fill="#ff6b9d"/>
      </g>
      
      <!-- Iconos técnicos -->
      <g class="float">
        <!-- Icono de código -->
        <rect x="60" y="120" width="40" height="30" rx="5" fill="none" stroke="#64ffda" stroke-width="2"/>
        <text x="80" y="140" text-anchor="middle" fill="#64ffda" font-size="12" class="tech-text">&lt;/&gt;</text>
      </g>
      
      <g class="float" style="animation-delay: -1s">
        <!-- Icono de terminal -->
        <rect x="60" y="180" width="40" height="30" rx="5" fill="none" stroke="#ff6b9d" stroke-width="2"/>
        <text x="80" y="200" text-anchor="middle" fill="#ff6b9d" font-size="12" class="tech-text">$</text>
      </g>
      
      <g class="float" style="animation-delay: -2s">
        <!-- Icono de engranaje -->
        <circle cx="80" cy="260" r="15" fill="none" stroke="#64ffda" stroke-width="2"/>
        <circle cx="80" cy="260" r="6" fill="none" stroke="#64ffda" stroke-width="2"/>
      </g>
      
      <!-- Texto principal -->
      <text x="200" y="160" font-size="48" fill="url(#textGrad)" class="tech-text slide-in">
        Desarrollador Full Stack
      </text>
      
      <!-- Subtítulo -->
      <text x="200" y="200" font-size="20" fill="#ffffff" opacity="0.8" class="slide-in" style="animation-delay: 0.3s">
        Construyendo el futuro con código
      </text>
      
      <!-- Tecnologías -->
      <g class="slide-in" style="animation-delay: 0.6s">
        <text x="200" y="250" font-size="14" fill="#64ffda" class="tech-text">
          🚀 JavaScript • TypeScript • React • Node.js • Python
        </text>
      </g>
      
      <!-- Estadísticas dinámicas -->
      <g class="slide-in" style="animation-delay: 0.9s">
        <rect x="200" y="280" width="400" height="80" rx="10" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="1"/>
        
        <text x="220" y="305" font-size="14" fill="#ffffff" class="tech-text">
          📊 Estadísticas de GitHub
        </text>
        
        <text x="220" y="330" font-size="12" fill="#64ffda">
          ⭐ Repositorios públicos: 42
        </text>
        
        <text x="220" y="350" font-size="12" fill="#ff6b9d">
          🔥 Commits este año: 1,247
        </text>
      </g>
      
      <!-- Elementos decorativos flotantes -->
      <g opacity="0.4">
        <circle cx="650" cy="80" r="2" fill="#64ffda" class="pulse"/>
        <circle cx="700" cy="120" r="3" fill="#ff6b9d" class="pulse" style="animation-delay: -0.5s"/>
        <circle cx="720" cy="160" r="1" fill="#64ffda" class="pulse" style="animation-delay: -1s"/>
      </g>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 's-maxage=60, stale-while-revalidate=30',
    },
  });
}
