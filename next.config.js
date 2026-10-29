/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return { beforeFiles: [{ source: "/", destination: "/idm-home.html" }, { source: "/contact", destination: "/idm-contact.html" }, { source: "/privacy", destination: "/idm-privacy.html" }, { source: "/ai-use-cases", destination: "/idm-ai-use-cases.html" }] }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qr-official.line.me',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ...config.resolve.extensionAlias,
    }
    // Allow resolving subpath exports from ESM-only packages
    const existing = config.resolve.conditionNames || []
    if (!existing.includes('import')) {
      config.resolve.conditionNames = ['import', 'require', 'node', 'default', ...existing]
    }
    return config
  },
}

module.exports = nextConfig
