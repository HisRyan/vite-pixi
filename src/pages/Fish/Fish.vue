<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Application, Assets, Texture, TilingSprite } from "pixi.js";
import {
  addBackground,
  addFishes,
  animateFishes,
  animateWaterOverlay,
  addDisplacementEffect,
} from "./Add.ts";

let app: any;
let overlay: any;

const initPixiBg = async () => {
  const dom: any = document.querySelector("#_ROOT_");
  await app.init({ background: "#1099bb", resizeTo: dom });
  dom.appendChild(app.canvas);
};

async function preload() {
  const assets = [
    {
      alias: "background",
      src: "https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg",
    },
    {
      alias: "fish1",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish1.png",
    },
    {
      alias: "fish2",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish2.png",
    },
    {
      alias: "fish3",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish3.png",
    },
    {
      alias: "fish4",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish4.png",
    },
    {
      alias: "fish5",
      src: "https://pixijs.com/assets/tutorials/fish-pond/fish5.png",
    },
    {
      alias: "overlay",
      src: "https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png",
    },
    {
      alias: "displacement",
      src: "https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png",
    },
  ];
  await Assets.load(assets);
}
const fishes = ref([]);

function addWaterOverlay(app: any) {
  // Create a water texture object.
  const texture = Texture.from("overlay");

  // Create a tiling sprite with the water texture and specify the dimensions.
  overlay = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
  });

  // Add the overlay to the stage.
  app.stage.addChild(overlay);
}
onMounted(async () => {
  app = new Application();
  await initPixiBg();
  await preload();
  addBackground(app);
  addFishes(app, fishes.value);
  addWaterOverlay(app);
  addDisplacementEffect(app);
  // Add the fish animation callback to the application's ticker.
  app.ticker.add((time: any) => {
    animateFishes(app, fishes.value);
    animateWaterOverlay(app, time, overlay);
  });
});
</script>

<template>
  <div id="_ROOT_" class="w-[800px] h-[800px]"></div>
</template>

<style scoped lang="scss"></style>
