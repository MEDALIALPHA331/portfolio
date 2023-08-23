import { atom } from "nanostores";

export const $isDark = atom(false);

export function toggleMode() {
  console.info(`Mode changed: now it is ${$isDark.get() ? "dark" : "light"}`);
  return $isDark.set(!$isDark.get());
}
