import { Assets, Container, Ticker } from "pixi.js";
import { NavigationManager } from "@app/engine/nagivation/NavigationManager.ts";
import { LoginScreen } from "@app/screens/LoginScreen.ts";

const width = 100;
const height = 100;

jest.mock("pixi.js", () => ({
  Assets: jest.fn().mockImplementation(() => {}),
  Container: jest.fn().mockImplementation(() => ({
    addChild: jest.fn(),
    width: width,
    height: height,
    removeChild: jest.fn(),
  })),
  Ticker: jest.fn().mockImplementation(() => ({
    add: jest.fn(),
  })),
}));

jest.mock("@app/screens/LoginScreen.ts", () => ({
  LoginScreen: jest.fn().mockImplementation(() => ({
    id: jest.fn(),
    bundles: jest.fn().mockReturnValue([]),
    prepare: jest.fn(),
    resize: jest.fn(),
    show: jest.fn(),
    hide: jest.fn(),
    reset: jest.fn(),
    destroy: jest.fn(),
    onLoad: jest.fn().mockReturnValue(() => {}),
    onUpdate: jest.fn().mockReturnValue(() => {}),
  })),
}));

describe("NavigationManager", () => {
  const container = new Container();
  const ticker = new Ticker();
  const navigationManager = new NavigationManager(container, ticker);
  const loginScreen = new LoginScreen();

  describe("showScreen", () => {
    it("given a bundle array should call Assets.loadBundle with the bundle array", async () => {
      const bundles = ["main"];

      Assets.loadBundle = jest.fn().mockResolvedValue(null);
      loginScreen.bundles = jest.fn().mockReturnValue(bundles);
      const prepareSpy = jest.spyOn(loginScreen, "prepare");
      const resizeSpy = jest.spyOn(loginScreen, "resize");
      const showSpy = jest.spyOn(loginScreen, "show");

      await navigationManager.showScreen(loginScreen);

      expect(Assets.loadBundle).toHaveBeenCalledWith(
        bundles,
        expect.any(Function),
      );
      expect(prepareSpy).toHaveBeenCalled();
      expect(resizeSpy).toHaveBeenCalledWith(width, height);
      expect(showSpy).toHaveBeenCalled();
    });
  });
});
