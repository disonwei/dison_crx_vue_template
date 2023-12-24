import Browser from "webextension-polyfill";

export {}

Browser.runtime.onInstalled.addListener(() => {

    console.log("onInstalled")
})