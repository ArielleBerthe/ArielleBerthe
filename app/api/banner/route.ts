export async function GET() {
  const svg = `<svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a"/>
        <stop offset="50%" stop-color="#1e293b"/>
        <stop offset="100%" stop-color="#334155"/>
      </linearGradient>
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#22d3ee"/>
        <stop offset="100%" stop-color="#a855f7"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="200" fill="url(#bg)" rx="12"/>
    
    <!-- Decoración de fondo -->
    <circle cx="700" cy="50" r="30" fill="none" stroke="url(#accent)" stroke-width="1" opacity="0.3"/>
    <circle cx="720" cy="80" r="20" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.2"/>
    <circle cx="750" cy="120" r="15" fill="none" stroke="#a855f7" stroke-width="1" opacity="0.4"/>
    
    <!-- Contenido principal -->
    <text x="40" y="65" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="url(#accent)">
      👋 ¡Hola! Soy Arielle Berthe
    </text>
    
    <text x="40" y="100" font-family="Arial, sans-serif" font-size="18" fill="#e2e8f0">
      🚀 Desarrolladora Full Stack • Creando experiencias digitales increíbles
    </text>
    
    <text x="40" y="130" font-family="monospace" font-size="14" fill="#22d3ee">
      💻 JavaScript • TypeScript • React • Node.js • Python • Next.js
    </text>
    
    <text x="40" y="160" font-family="Arial, sans-serif" font-size="14" fill="#94a3b8">
      ✨ Transformando ideas en código, una línea a la vez
    </text>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=300, s-maxage=300',
    },
  });
}
