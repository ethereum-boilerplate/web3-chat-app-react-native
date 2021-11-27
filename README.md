# `web3-chat-app-react-native`

This project is a fork of [Ethereum React Native Boilerplate](https://github.com/ethereum-boilerplate/ethereum-react-native-boilerplate) and shows how you can easily create your own Web3 Etherium Mobile chat app using Moralis.

|                                                        Chat Screen                                                        |                                              WalletConnect Authentication                                              |
| :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![ezgif-4-0269779aa968](https://user-images.githubusercontent.com/61220663/143689294-ad1046dc-8f79-45fb-8a28-af5edeffc63e.gif) | ![ez-gif2](https://user-images.githubusercontent.com/61220663/143689604-e92be946-bb08-43db-9964-3202a3b64926.gif) |




# ⭐️ `Star us`

If this boilerplate helps you build Ethereum mobile dapps faster - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you have any questions or need assistance running this project, please post them in our forum. [Forum link](https://forum.moralis.io/t/ethereum-react-native-chat-boilerplate-questions/4893). Our extremely active community is always willing to assist!.

# 🚀 Quick Start

📄 Clone or fork `web3-chat-app-react-native`:

```sh
https://github.com/ethereum-boilerplate/web3-chat-app-react-native.git
```

💿 Install all dependencies:

```sh
yarn install
```

✏ Rename `.env.example` to `.env` in the main folder and provide your `appId` and `serverUrl` from Moralis ([How to start Moralis Server](https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server))
Example:

```jsx
REACT_APP_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
REACT_APP_MORALIS_SERVER_URL = https://xxxxxx.grandmoralis.com:2053/server
```

💿 Install all dependencies:

```sh
cd web3-chat-app-react-native
yarn install
```

🚴‍♂️ Run your App:

- IOS: ```yarn ios``` for emulator Make sure you have Xcode or atleast Xcode command line tools installed
    - For physical IOS Device: Open the moraliscreatereactnativedapp.xcworkspace from ios folder in Xcode. Run the App by choosing your connected physical device.
- Android:
    - Command ```yarn start```
    - Open ```android``` folder from source code in Android Studio. Click "Run app" button to open either emulator or physical device. To see if devices are available, run command ```adb devices``` in your terminal
