# asteroidsjs

A spaceship game built with pixijs.

## Tasks

- [x] Render a sprite in a main screen scene;
- [x] Integrate with assetpack;
- [x] Create path alias;
- [x] Integrate with jest for testing;
- [x] Test cover

## Collision detection

- [ ] Create a collision service

A possible framework to implement collision detection: [text](https://www.youtube.com/watch?v=Te_TBymgW4k).

Important steps to improve collision detection:

- Calculate and cache the bounding boxes
- Prune impossible collisions using quadrants
- Prune collision that don't matter
- Parallelize
