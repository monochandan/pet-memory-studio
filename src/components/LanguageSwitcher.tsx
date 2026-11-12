
"use client";

import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      <button
        type="button"
        onClick={() => router.replace(pathname, {locale: "en"})}
        className={locale === "en" ? "text-[#263F32]" : "text-gray-400"}
      >
        EN
      </button>

      <span className="text-gray-300">|</span>

      <button
        type="button"
        onClick={() => router.replace(pathname, {locale: "de"})}
        className={locale === "de" ? "text-[#263F32]" : "text-gray-400"}
      >
        DE
      </button>
    </div>
  );
}
