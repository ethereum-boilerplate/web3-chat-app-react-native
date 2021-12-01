# `web3-chat-app-react-native`

This project is a fork of [Ethereum React Native Boilerplate](https://github.com/ethereum-boilerplate/ethereum-react-native-boilerplate) and shows how you can easily create your own Web3 Etherium Mobile Chat App using Moralis.

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

IMPORTANT: 
- To run the app and be able to actually login do the following:
    - Make sure to have Xcode installed on your machine if you wish to run it in iOS development and Android Studio if you want it in Android.
    - Connect a physical phone device. Open termilan/cmd and run ```adb adb devices``` and see if your device id is listed.
    - Install your preferred wallet on your device: (Metamask, Trust Wallet etc..)

- IOS: 
    - Command ```yarn ios``` 
    - For physical IOS Device: Open the moraliscreatereactnativedapp.xcworkspace from ios folder in Xcode. Run the App by choosing your connected physical device.
    - for emulator Make sure you have Xcode or atleast Xcode command line tools installed
- Android:
    - Make sure that your physical device is connected.
    - Turn on "Developer Options" by doing going to "Settings" , then tap "About device" or "About phone". Scroll down, then tap Build number seven times. Depending on your device and operating system, you may need to tap "Software information", then tap "Build number" seven times. Return to the previous screen to find Developer options near the bottom. Scroll down and enable USB debugging.
    - Open terminal and go to root directory then do this command: ```yarn android```. It will open a bundler and builds the app on your phone.
