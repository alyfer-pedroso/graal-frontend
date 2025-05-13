import { useEffect, useState } from "react";
import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select as SL } from "@/components/ui";
import { cn } from "@/lib/utils";

interface props {
  value?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  classNameContent?: string;
  classNameItem?: string;
  items?: { id: string | number; label: string }[];
  required?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
}

export function Select({ ...props }: props) {
  const [value, setValue] = useState(props.value);

  const onChange = (value: string) => {
    setValue(value);
    props.onChange(value);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <SL onValueChange={onChange} value={value} required={props?.required} onOpenChange={props?.onOpenChange}>
      <SelectTrigger
        id={props?.id}
        disabled={props?.disabled}
        className={cn(
          "w-auto min-w-[245.6px] bg-white text-black/40 px-3 py-[1.2rem] text-base border border-graal-gray-50 shadow-none transition-all text-left",
          { "text-black": value },
          props?.className
        )}
      >
        <SelectValue placeholder={props?.placeholder ?? "Selecione"} />
      </SelectTrigger>
      <SelectContent className={cn("p-0", props?.classNameContent)}>
        {props?.items?.length > 0 &&
          props?.items.map(
            (item) =>
              item.id && (
                <SelectItem
                  key={item.id}
                  value={item.id?.toString()}
                  className={cn("cursor-pointer  text-base px-3 m-0 bg-white", props?.classNameItem)}
                >
                  {item.label}
                </SelectItem>
              )
          )}
      </SelectContent>
    </SL>
  );
}
