/** @type {import('next').NextConfig} */
var nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
