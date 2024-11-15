<script setup lang="ts">
import { Application, Assets, Sprite } from "pixi.js";
import { onMounted, ref } from "vue";

const app = ref();

const initPixiBg = async () => {
  // Create a PixiJS application.
  // Intialize the application.
  await app.value.init({ background: "#1099bb", resizeTo: window });
  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.value.canvas);
};

const addSprite = async () => {
  const texture = await Assets.load("https://pixijs.com/assets/bunny.png");
  const bunny = new Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = app.value.screen.width / 2;
  bunny.y = app.value.screen.height / 2;
  app.value.stage.addChild(bunny);
  app.value.ticker.add((time: any) => {
    bunny.rotation += 0.1 * time.deltaTime;
  });
};

const initPix = async () => {
  app.value = new Application();
  await initPixiBg();
  await addSprite();
};

onMounted(() => {
  initPix();
});
</script>

<template></template>

<style scoped lang="scss"></style>
