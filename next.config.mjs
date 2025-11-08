/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export (so Netlify can serve HTML files)
    images: {
        unoptimized: true, // Disable Next.js image optimization for static hosting
    },
};

export default nextConfig;