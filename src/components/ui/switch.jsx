import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

function Switch({
  className,
  checked,
  onCheckedChange,
  ...props
}) {
  return (
    <div className="relative left-0 top-0">
      <div className="absolute right-5 top-5 h-[100px] w-[100px]">
        <SwitchPrimitive.Root
          data-slot="switch"
          checked={checked}
          onCheckedChange={onCheckedChange}
          className={cn(
            "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}>
          <SwitchPrimitive.Thumb
            data-slot="switch-thumb"
            className={cn(
              "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
            )} />
        </SwitchPrimitive.Root>
      </div>
    </div>
  );
}

export { Switch }
