/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx'],
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**'
			},
			{
				protocol: 'http',
				hostname: 'localhost'
			}
		]
	}
};

export default nextConfig;
