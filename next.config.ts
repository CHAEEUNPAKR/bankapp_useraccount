import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
}

// 최근 버전 next에서는 babel보다 빠른 컴파일러 사용으로 babel 강제주입해야 빌드 가능
module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}

export default nextConfig
