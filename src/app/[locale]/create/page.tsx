
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

export default async function CreatePage() {
  const t = await getTranslations("Create");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAF8F4] px-6 text-center">
      <h1 className="text-4xl font-bold text-[#26372D]">
        {t("title")}
      </h1>

      <p className="mt-5 text-[#647269]">
        {t("description")}
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#263F32] px-6 py-3 text-white"
      >
        {t("back")}
      </Link>
    </main>
  );
}
