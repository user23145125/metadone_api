const axios = require('axios')

class Api {
    constructor(apiKey) {
        this.headers = { 'Authorization': `Bearer ${apiKey}` }
    }
    async start() {
        try {
            const { data } = await axios.post(`${url}/openapi/withdraw/start`, null, { headers: this.headers })
            return data
        } catch { }
    }
    async stop() {
        try {
            const { data } = await axios.post(`${url}/openapi/withdraw/stop`, null, { headers: this.headers })
            return data
        } catch { }
    }
    async addWallets(wallets) {
        try {
            const { data } = await axios.post(`${url}/openapi/withdraw/addWallets`, { wallets }, { headers: this.headers })
            return data
        } catch { }
    }
    async replaceWallets(wallets) {
        try {
            const { data } = await axios.post(`${url}/openapi/withdraw/replaceWallets`, { wallets }, { headers: this.headers })
            return data
        } catch { }
    }
    async removeWallets() {
        try {
            const { data } = await axios.post(`${url}/openapi/withdraw/replaceWallets`, { wallets: [] }, { headers: this.headers })
            return data
        } catch { }
    }
    async addWalletsAndRestart(wallets) {
        try {
            this.stop()
            this.addWallets(wallets)
            this.start()
            
        } catch { }
    }

}


async function start() {
    const api = new Api(yourApiKey)
    await api.start()
    await api.stop()
    await api.addWallets(['address1 privateKey1', 'privateKey2', 'mnemonicPhrase'])
    await api.replaceWallets(['address1 privateKey1', 'privateKey2', 'mnemonicPhrase'])
    await api.addWalletsAndRestart(['address1 privateKey1', 'privateKey2', 'mnemonicPhrase'])
    await api.removeWallets()

} start()