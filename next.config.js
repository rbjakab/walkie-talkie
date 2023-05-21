/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
