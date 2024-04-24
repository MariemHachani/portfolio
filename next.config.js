/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: ['my-proxy.com', '*.my-proxy.com'],
        },
        taint: true, //prevent sensitive data from being exposed to the client
      },
      images:{
        domains: [ 'source.unsplash.com'],
        loader: 'custom',
        loaderFile: './my/image/loader.js',
      
      }
}

module.exports = nextConfig
