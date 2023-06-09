/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'s3.amazonaws.com',
                port:'',
                pathname:'/hive-engine/open_data/imgs/**'
            }
        ]
    }
}

module.exports = nextConfig
