/** @type {import('next').NextConfig} */
const nextConfig = {
    //basePath: "/portfolio",
    //output: "export",
    experimental: {
        serverActions: {
          allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        },
        taint: true, //prevent sensitive data from being exposed to the client
      },
      images:{
        domains: [ 'source.unsplash.com'],
        loader: 'custom',
        loaderFile: './src/app/api/loader.tsx',
      
      }
}

module.exports = nextConfig
