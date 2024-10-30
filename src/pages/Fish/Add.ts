import { Sprite, Container, DisplacementFilter } from "pixi.js";

export function addBackground(app) {
  // Create a background sprite.
  const background = Sprite.from("background");

  // Center background sprite anchor.
  background.anchor.set(0.5);

  /**
   * If the preview is landscape, fill the width with the screen
   * and apply horizontal scale to the vertical scale for a uniform fit.
   */
  if (app.screen.width > app.screen.height) {
    background.width = app.screen.width * 1.2;
    background.scale.y = background.scale.x;
  } else {
    background.height = app.screen.height * 1.2;
    background.scale.x = background.scale.y;
  }

  // Position the background sprite in the center of the stage.
  background.x = app.screen.width / 2;
  background.y = app.screen.height / 2;

  // Add the background to the stage.
  app.stage.addChild(background);
}

export function addFishes(app, fishes) {
  const fishContainer = new Container();
  app.stage.addChild(fishContainer);
  const fishCount = 20;
  const fishAssets = ["fish1", "fish2", "fish3", "fish4", "fish5"];
  // Create a fish sprite for each fish.
  for (let i = 0; i < fishCount; i++) {
    // Cycle through the fish assets for each sprite.
    const fishAsset = fishAssets[i % fishAssets.length];

    // Create a fish sprite.
    const fish = Sprite.from(fishAsset);

    // Center the sprite anchor.
    fish.anchor.set(0.5);

    // Assign additional properties for the animation.
    fish.direction = Math.random() * Math.PI * 2;
    fish.speed = 2 + Math.random() * 2;
    fish.turnSpeed = Math.random() - 0.8;

    // Randomly position the fish sprite around the stage.
    fish.x = Math.random() * app.screen.width;
    fish.y = Math.random() * app.screen.height;

    // Randomly scale the fish sprite to create some variety.
    fish.scale.set(0.5 + Math.random() * 0.2);

    // Add the fish sprite to the fish container.
    fishContainer.addChild(fish);

    // Add the fish sprite to the fish array.
    fishes.push(fish);
  }
}

export function animateFishes(app, fishes, time) {
  // Extract the delta time from the Ticker object.
  const delta = time.deltaTime;

  // Define the padding around the stage where fishes are considered out of sight.
  const stagePadding = 100;
  const boundWidth = app.screen.width + stagePadding * 2;
  const boundHeight = app.screen.height + stagePadding * 2;

  // Iterate through each fish sprite.
  fishes.forEach((fish) => {
    // Animate the fish movement direction according to the turn speed.
    fish.direction += fish.turnSpeed * 0.01;

    // Animate the fish position according to the direction and speed.
    fish.x += Math.sin(fish.direction) * fish.speed;
    fish.y += Math.cos(fish.direction) * fish.speed;

    // Apply the fish rotation according to the direction.
    fish.rotation = -fish.direction - Math.PI / 2;

    // Wrap the fish position when it goes out of bounds.
    if (fish.x < -stagePadding) {
      fish.x += boundWidth;
    }
    if (fish.x > app.screen.width + stagePadding) {
      fish.x -= boundWidth;
    }
    if (fish.y < -stagePadding) {
      fish.y += boundHeight;
    }
    if (fish.y > app.screen.height + stagePadding) {
      fish.y -= boundHeight;
    }
  });
}

export function animateWaterOverlay(app, time, overlay) {
  // Extract the delta time from the Ticker object.
  const delta = time.deltaTime;

  // Animate the overlay.
  overlay.tilePosition.x -= delta;
  overlay.tilePosition.y -= delta;
}

export function addDisplacementEffect(app) {
  // Create a sprite from the preloaded displacement asset.
  const sprite = Sprite.from("displacement");

  // Set the base texture wrap mode to repeat to allow the texture UVs to be tiled and repeated.
  sprite.texture.baseTexture.wrapMode = "repeat";

  // Create a displacement filter using the sprite texture.
  const filter = new DisplacementFilter({
    sprite,
    scale: 50,
    width: app.screen.width,
    height: app.screen.height,
  });

  // Add the filter to the stage.
  app.stage.filters = [filter];
}
