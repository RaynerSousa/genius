/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 diz para gerar o 'out/'
  images: {
    unoptimized: true, // 👈 evita erro com <Image />
  },
};

module.exports = nextConfig;
