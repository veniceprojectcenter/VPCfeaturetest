/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname:'s3.amazonaws.com',
                port:'',
                pathname:'/hive-engine/**'
            },
            {
                protocol:'https',
                hostname:'digital.wpi.edu',
                port:'',
                pathname:'/**'
            },
            {
                protocol:'https',
                hostname:'www.veniceprojectcenter.org',
                port:'',
                pathname:'/assets/**'
            },
            {
                protocol:'https',
                hostname:'upload.wikimedia.org',
                port:'',
                pathname:"**"
            }
        ]
    }
}

module.exports = nextConfig
