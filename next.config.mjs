/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kzmh4z777cer5je0tirm.lite.vusercontent.net',
        pathname: '/**', // Izinkan semua path dari hostname ini
      },
      {
        protocol: 'https',
        hostname: 'k31kdl3eukazsfrf.public.blob.vercel-storage.com',
        pathname: '/**', // Izinkan semua path dari hostname ini
      },
    ],
  },
}

export default nextConfig;
