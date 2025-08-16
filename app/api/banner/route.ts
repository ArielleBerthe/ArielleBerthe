export async function GET() {
  // SVG simple para debug
  const svg = `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="100" fill="#1a1a2e"/>
    <text x="20" y="40" font-family="Arial" font-size="18" fill="#00ff00">
      ✅ BANNER FUNCIONANDO
    </text>
    <text x="20" y="70" font-family="Arial" font-size="14" fill="#ffffff">
      Si ves esto, el endpoint está funcionando correctamente
    </text>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache',
    },
  });
}
