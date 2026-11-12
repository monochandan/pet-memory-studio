
import {
  ArrowRight,
  Check,
  Heart,
  ImagePlus,
  Palette,
  Sparkles,
} from "lucide-react";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Home() {
  const t = await getTranslations();

  const styles = [
    {
      name: t("Styles.watercolor"),
      description: t("Styles.watercolorDescription"),
      emoji: "🎨",
      bg: "bg-[#E5EFE8]",
    },
    {
      name: t("Styles.royal"),
      description: t("Styles.royalDescription"),
      emoji: "👑",
      bg: "bg-[#F1E5D6]",
    },
    {
      name: t("Styles.minimalist"),
      description: t("Styles.minimalistDescription"),
      emoji: "✏️",
      bg: "bg-[#ECEAE5]",
    },
  ];

  const steps = [
    {
      icon: ImagePlus,
      title: t("How.upload"),
      description: t("How.uploadDescription"),
    },
    {
      icon: Palette,
      title: t("How.choose"),
      description: t("How.chooseDescription"),
    },
    {
      icon: Heart,
      title: t("How.receive"),
      description: t("How.receiveDescription"),
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#26372D]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="text-xl font-bold">
          Pet Memory <span className="text-[#77917F]">Studio.</span>
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#styles">{t("Navigation.styles")}</a>
          <a href="#how">{t("Navigation.how")}</a>
          <a href="#pricing">{t("Navigation.pricing")}</a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Link
            href="/create"
            className="hidden rounded-full bg-[#263F32] px-5 py-3 text-sm font-semibold text-white sm:inline-flex"
          >
            {t("Navigation.create")}
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E5EFE8] px-4 py-2 text-sm">
            <Sparkles size={16} />
            {t("Hero.badge")}
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            {t("Hero.title")}
            <br />
            <span className="text-[#77917F]">
              {t("Hero.highlight")}
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#647269]">
            {t("Hero.description")}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/create"
              className="flex items-center gap-2 rounded-full bg-[#263F32] px-7 py-4 font-semibold text-white"
            >
              {t("Hero.button")}
              <ArrowRight size={18} />
            </Link>

            <a
              href="#how"
              className="rounded-full border border-[#CAD6CC] px-7 py-4 font-semibold"
            >
              {t("Hero.how")}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#647269]">
            <span className="flex items-center gap-2">
              <Check size={16} />
              {t("Hero.digitalDelivery")}
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} />
              {t("Hero.personalizedArtwork")}
            </span>
          </div>
        </div>

        {/* Temporary artwork placeholder */}
        <div className="flex min-h-[450px] items-center justify-center rounded-[36px] bg-[#E5EBE3] p-8">
          <div className="flex aspect-[4/5] w-full max-w-[340px] flex-col items-center justify-center rounded-xl border-[12px] border-white bg-[#F6F0E7] shadow-xl">
            <span className="text-8xl">🐕</span>
            <p className="mt-8 font-serif text-3xl italic">
              {t("Hero.artworkTitle")}
            </p>
            <p className="mt-3 text-sm tracking-widest text-[#879087]">
              {t("Hero.artworkSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section id="styles" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold text-[#77917F]">
              {t("Styles.label")}
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              {t("Styles.title")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {styles.map((style) => (
              <div
                key={style.name}
                className="overflow-hidden rounded-3xl border border-[#E9E7E1]"
              >
                <div
                  className={`flex aspect-[4/3] items-center justify-center ${style.bg}`}
                >
                  <span className="text-8xl">{style.emoji}</span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold">
                    {style.name}
                  </h3>
                  <p className="mt-2 text-[#647269]">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">
            {t("How.title")}
          </h2>

          <div className="mt-14 grid gap-10 text-center md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title}>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#E5EFE8]">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[#647269]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#EAF0E9] py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            {t("Pricing.title")}
          </h2>

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">
            <p className="font-semibold">
              {t("Pricing.product")}
            </p>

            <p className="mt-5 text-6xl font-bold">€29</p>

            <p className="mt-3 text-[#647269]">
              {t("Pricing.description")}
            </p>

            <Link
              href="/create"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#263F32] px-6 py-4 font-semibold text-white"
            >
              {t("Hero.button")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#263F32] px-6 py-12 text-center text-white">
        <p className="text-xl font-bold">Pet Memory Studio.</p>
        <p className="mt-3 text-sm text-white/70">
          {t("Footer.tagline")}
        </p>
        <p className="mt-8 text-xs text-white/50">
          © 2026 Pet Memory Studio
        </p>
      </footer>
    </main>
  );
}
