import {Application, Assets, Sprite, Texture} from "pixi.js";
import manifest from './manifest.json'

(async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });

  document.getElementById("pixi-container")!.appendChild(app.canvas);

  await Assets.init({manifest, basePath: 'public/assets'})
  const allBundles = manifest.bundles.map(item => item.name)
  await Assets.loadBundle(allBundles)

  const texture = new Sprite({
    texture: Texture.from("asteroid2.png"),
  })

  // Create a bunny Sprite
  const bunny = new Sprite(texture);

  // Center the sprite's anchor point
  bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen
  bunny.position.set(app.screen.width / 2, app.screen.height / 2);

  // Add the bunny to the stage
  app.stage.addChild(bunny);

  // Listen for animate update
  app.ticker.add((time) => {
    // Just for fun, let's rotate mr rabbit a little.
    // * Delta is 1 if running at 100% performance *
    // * Creates frame-independent transformation *
    bunny.rotation += 0.1 * time.deltaTime;
  });
})();
