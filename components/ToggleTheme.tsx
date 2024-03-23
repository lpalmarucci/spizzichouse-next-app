import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <div className="w-full flex justify-between items-center space-x-2">
      <Label htmlFor="toggle-theme">Dark mode</Label>
      <Switch
        name="toggle-theme"
        checked={resolvedTheme === "dark"}
        onCheckedChange={(e) => {
          setTheme(resolvedTheme === "light" ? "dark" : "light");
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default ToggleTheme;
