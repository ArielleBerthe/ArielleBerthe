import './globals.css';

export const metadata = {
  title: 'Mi GitHub Banner',
  description: 'Banner dinámico para GitHub profile',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
