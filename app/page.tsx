export default function Home() {
  return (
    <main>
      <h1>🚀 GitHub Banner API</h1>
      <p>
        El banner está disponible en <code>/api/banner</code>
      </p>

      <div
        style={{
          border: '2px solid #ccc',
          borderRadius: '8px',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        <h2>Vista previa:</h2>
        <img src="/api/banner" alt="GitHub Banner" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <div
        style={{
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        <h3>Para usar en tu README:</h3>
        <code>![Banner](https://tu-dominio.vercel.app/api/banner)</code>
      </div>
    </main>
  );
}
