import { add } from "./index.js";
import { test, expect } from "vitest";

test("adds 1 + 2 to equal 3", () => {
	expect(add(1, 2)).toBe(3);
});
