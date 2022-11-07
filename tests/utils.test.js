import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle";


test('should output correct rectangle perimeter', () => {
    const perimeter = getRectanglePerimeter(5, 10);
    expect(perimeter).toBe(30);
});

test('should output correct rectangle area', () => {
    const area = getRectangleArea(5, 10);
    expect(area).toBe(50);
});

jest.spyOn(console, 'log');

test('should generate a valid console.log message', () => {
  expect(console.log.mock.calls.length).toBe(0);
  getRectangleInfo(5,10);
  expect(console.log.mock.calls.length).toBe(1);
  expect(console.log.mock.calls[0][0]).toBe(`The perimeter of a rectangle is 30 and the area is 50`);
});

afterEach(() => {
  jest.clearAllMocks();
});