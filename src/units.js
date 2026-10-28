// Converts a workout load between kilograms and pounds, and formats it for display.

/** Pounds in one kilogram, by the international definition of the pound (exactly 0.45359237 kg). */
export const POUNDS_PER_KILOGRAM = 1 / 0.45359237;

/**
 * A load in kilograms, from a value in kilograms ("kg") or pounds ("lb").
 * Throws for any other unit, or a value that isn't a finite number of zero or more.
 */
export function toKilograms(value, unit) {
  if (!Number.isFinite(value) || value < 0) throw new RangeError(`A load must be zero or more, not ${value}.`);
  if (unit === "kg") return value;
  if (unit === "lb") return value / POUNDS_PER_KILOGRAM;
  throw new RangeError(`Unknown unit "${unit}": use "kg" or "lb".`);
}

/** A load in pounds, from a value in kilograms or pounds. */
export function toPounds(value, unit) {
  return toKilograms(value, unit) * POUNDS_PER_KILOGRAM;
}

/** A load for display, rounded to one decimal place: formatLoad(100, "kg", "lb") is "220.5 lb". */
export function formatLoad(value, unit, displayUnit) {
  const converted = displayUnit === "kg" ? toKilograms(value, unit) : displayUnit === "lb" ? toPounds(value, unit) : NaN;
  if (Number.isNaN(converted)) throw new RangeError(`Unknown display unit "${displayUnit}": use "kg" or "lb".`);
  return `${converted.toFixed(1)} ${displayUnit}`;
}
