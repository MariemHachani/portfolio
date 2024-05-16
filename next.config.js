/** @type {import('next').NextConfig} */
const nextConfig = {
    //basePath: "/portfolio",
    output: "standalone",
    experimental: {
        serverActions: {
          allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        },
        taint: true, //prevent sensitive data from being exposed to the client
      },
      images:{
        loader: 'custom',
        loaderFile: './src/app/api/loader.tsx',
        minimumCacheTTL: 31536000,
      }
}

module.exports = nextConfig
