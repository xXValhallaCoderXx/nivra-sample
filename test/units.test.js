import assert from "node:assert/strict";
import { test } from "node:test";
import { formatLoad, toKilograms, toPounds } from "../src/units.js";

test("keeps kilograms as they are, and converts pounds to kilograms", () => {
  assert.equal(toKilograms(100, "kg"), 100);
  assert.equal(toKilograms(220.46226218, "lb").toFixed(6), "100.000000");
});

test("converts kilograms to pounds", () => {
  assert.equal(toPounds(100, "kg").toFixed(2), "220.46");
  assert.equal(toPounds(5, "lb"), 5);
});

test("formats a load in the unit asked for, to one decimal place", () => {
  assert.equal(formatLoad(100, "kg", "lb"), "220.5 lb");
  assert.equal(formatLoad(200, "lb", "kg"), "90.7 kg");
});

test("refuses an unknown unit or a negative load", () => {
  assert.throws(() => toKilograms(10, "stone"), /Unknown unit/);
  assert.throws(() => toKilograms(-1, "kg"), /zero or more/);
  assert.throws(() => formatLoad(10, "kg", "g"), /Unknown display unit/);
});
