const env = {
    mode: process.env.MODE === 'development' ? 'development' : 'production',
    isDev: process.env.MODE === 'development',
    isProd: process.env.MODE === 'production',
}

export default env
