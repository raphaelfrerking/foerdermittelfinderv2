/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode für bessere Fehlersuche
  reactStrictMode: true,

  // EU-optimierte Bilder
  images: {
    domains: [
      'localhost',
      'foedermittelfinder.de',
      'supabase.co',
      'clerk.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Umgebungsvariablen die im Browser verfügbar sein sollen
  env: {
    NEXT_PUBLIC_APP_NAME: 'Fördermittelfinder',
    NEXT_PUBLIC_APP_VERSION: '2.0.0',
  },

  // Komprimierung aktivieren
  compress: true,

  // PoweredBy Header entfernen (Sicherheit)
  poweredByHeader: false,

  // Redirects für SEO
  async redirects() {
    return [
      {
        source: '/foerdermittelfinder',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Headers für Sicherheit
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Webpack-Konfiguration
  webpack: (config, { isServer }) => {
    // PDF-Generation fix
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;