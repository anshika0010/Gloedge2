"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ReactNode } from "react";



export default function LocaleSwitcherSelect({ defaultValue, label }) {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale) {
    router.replace(
      { pathname, params },
      { locale: nextLocale }
    );
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className='w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0'
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}