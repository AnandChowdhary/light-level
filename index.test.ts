import lightLevel from "./index";

test("should be a string", () => {
  expect(typeof lightLevel()).toBe("string");
});

test("should be dim or no-preference", () => {
  expect(["dim", "washed", "no-preference"].includes(lightLevel())).toBeTruthy();
});

test("should be dim, no-preference, or unknown", () => {
  expect(["dim", "washed", "no-preference", "unknown"].includes(lightLevel())).toBeTruthy();
});
