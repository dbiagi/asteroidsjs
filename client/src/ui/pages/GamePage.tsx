import { Game } from "@app/game/Game.ts";
import { context } from "@app/ui/context/Context.ts";
import { useEffect } from "react";

const gameContainerId = "gameContainer";

async function initGame(username: string) {
  console.log(`Initializing game for user: ${username}`);
  const game = new Game();
  await game.init({
    containerId: gameContainerId,
  });
}

export function GamePage() {
  const username = context.getCurrentUser()?.username || "Guest";
  useEffect(() => {
    initGame(username).then(() => {});
  });
  return (
    <>
      <div id={gameContainerId} onLoad={() => initGame(username)}></div>
    </>
  );
}
