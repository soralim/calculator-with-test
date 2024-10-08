import { test } from "vitest";
import { calculate } from "../calculate";


test("calculate adition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
});
test("calculate subtraion", ({ expect }) => {
    expect(calculate(10, 5, "-")).toBe(5);
});
test("calculate mutiplication", ({ expect }) => {
    expect(calculate(5, 2, "*")).toBe(10);
});
test("calculate division", ({ expect }) => {
    expect(calculate(10, 5, "/")).toBe(2);
});
test("handle division by zero", ({ expect }) => {
    expect(calculate(10, 0, "/")).toBe("cannot dive by zero");
});
test("calculate adition", ({ expect }) => {
    expect(() => calculate(10, 2, "^")).toThrowError("invalid operator");
});