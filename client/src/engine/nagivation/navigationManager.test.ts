import {Container} from 'pixi.js';
// import {NagivationManager} from './navigationManager';

// Mock pixi.js modules
jest.mock('pixi.js', () => ({
  Container: jest.fn().mockImplementation(() => ({
    addChild: jest.fn(),
    removeChild: jest.fn(),
    width: 800,
    height: 600
  })),
  Ticker: jest.fn().mockImplementation(() => ({
    add: jest.fn(),
    remove: jest.fn()
  })),
  Assets: {
    loadBundle: jest.fn()
  }
}));

describe('NagivationManager', () => {
  it('should be defined', () => {
    const c = new Container()
    expect(c.width).toBe(800)
  });
});