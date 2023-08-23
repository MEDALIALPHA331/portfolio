import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

/*
 * This is not used, it is just to try nanostores and share state between components and islands
 * This cannot be used dieactly in astro componenets, unless you link nanostores to a global state of the mode
 TODO: You can remove it and all the ui components based ont it: label, switch

*/

import { $isDark, toggleMode } from "../lib/global/modeStore";
import { useStore } from "@nanostores/react";

export function ToggleMode() {
  const mode = useStore($isDark);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" onClick={() => toggleMode()} />
      <Label htmlFor="airplane-mode">{mode ? "💡" : "🌚"}</Label>
    </div>
  );
}
