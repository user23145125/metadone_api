import requests
import json

class Api:
    def __init__(self, apiKey):
        self.headers = {"Authorization": f"Bearer {apiKey}" ,"Content-type": "application/json", "Accept": "text/plain"}
    def start(self):
        res = requests.post(f'{url}/openapi/withdraw/start', headers=self.headers)
        return res.json()
    def stop(self):
        res = requests.post(f'{url}/openapi/withdraw/stop', headers= self.headers)
        return res.json()
    def addWallets(self, wallets):
        body = json.dumps({"wallets": wallets})
        res = requests.post(f'{url}/openapi/withdraw/addwallets', data=body, headers=self.headers)
        return res.json()
    def replaceWallets(self, wallets):
        body = json.dumps({"wallets": wallets})
        res = requests.post(f'{url}/openapi/withdraw/replacewallets', data=body, headers=self.headers)
        return res.json()
    def addWalletsAndRestart(self, wallets):
        self.stop()
        self.add(wallets)
        self.start()
    
api = Api(yourApiKey)
api.start()
api.stop()
api.addWallets(["privateKey1", "mnemonicPhrase", "address2 privateKey2"])
api.replaceWallets(["privateKey1", "mnemonicPhrase", "address2 privateKey2"])
api.addWalletsAndRestart(["privateKey1", "mnemonicPhrase", "address2 privateKey2"])
