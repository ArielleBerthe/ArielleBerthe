export async function GET() {
  return Response.json({
    message: 'API funcionando correctamente',
    timestamp: new Date().toISOString(),
    endpoint: '/api/test',
  });
}
