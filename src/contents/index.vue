<template>
  <div>

  </div>
</template>

<script setup lang = "ts">


</script>

<script lang = "ts">
import cssText from "data-text:~/src/style.css"
import type {PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoGetStyle, PlasmoCreateShadowRoot} from "plasmo";

const config: PlasmoCSConfig = {
  matches: [
    // "https://pro.twitter.com/*",
  ]
}
const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector("div[data-testid=\"toolBar\"]")


const createShadowRoot: PlasmoCreateShadowRoot = (shadowHost) =>
  shadowHost.attachShadow({mode: "closed"})

export default {
  plasmo: {
    config,
    getStyle,
    getInlineAnchor,
    createShadowRoot,
  },
}

</script>