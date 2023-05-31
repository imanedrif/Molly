/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost:8000",
                // port: "8000",
                pathname: "/api/images/**",
            },
        ],
    },
};

module.exports = nextConfig;
