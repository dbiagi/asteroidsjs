import { Container } from "pixi.js";

jest.mock("pixi.js", () => ({
  Container: jest.fn().mockImplementation(() => ({
    addChild: jest.fn(),
    removeChild: jest.fn(),
    width: 800,
    height: 600,
  })),
  Ticker: jest.fn().mockImplementation(() => ({
    add: jest.fn(),
    remove: jest.fn(),
  })),
  Assets: {
    loadBundle: jest.fn(),
  },
}));

describe("NavigationManager", () => {
  describe("showScreen", () => {
    it("Should show navigation bar", () => {});
  });
});
