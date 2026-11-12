
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Heart,
  ImagePlus,
  Palette,
  Sparkles,
} from "lucide-react";

const styles = [
  {
    name: "Watercolor",
    emoji: "🎨",
    description: "Soft, elegant watercolor portraits.",
    bg: "bg-[#E5EFE8]",
  },
  {
    name: "Royal Portrait",
    emoji: "👑",
    description: "Turn your pet into a royal masterpiece.",
    bg: "bg-[#F1E5D6]",
  },
  {
    name: "Minimalist",
    emoji: "✏️",
    description: "Modern, clean and timeless artwork.",
    bg: "bg-[#ECEAE5]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#26372D]">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold">
          Pet Memory <span className="text-[#77917F]">Studio.</span>
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#styles">Our Styles</a>
          <a href="#how">How It Works</a>
          <a href="#pricing">Pricing</a>
        </div>

        <Link
          href="/create"
          className="rounded-full bg-[#263F32] px-5 py-3 text-sm font-semibold text-white"
        >
          Create Portrait
        </Link>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E5EFE8] px-4 py-2 text-sm">
            <Sparkles size={16} />
            Personalized Pet Artwork
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Your Pet.
            <br />
            <span className="text-[#77917F]">A Masterpiece.</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-[#647269]">
            Transform your favorite pet photo into a beautiful personalized
            portrait. A timeless keepsake for the companion you love.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/create"
              className="flex items-center gap-2 rounded-full bg-[#263F32] px-7 py-4 font-semibold text-white"
            >
              Create My Portrait <ArrowRight size={18} />
            </Link>

            <a
              href="#how"
              className="rounded-full border border-[#CAD6CC] px-7 py-4 font-semibold"
            >
              How It Works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#647269]">
            <span className="flex items-center gap-2">
              <Check size={16} /> Digital delivery
            </span>
            <span className="flex items-center gap-2">
              <Check size={16} /> Personalized artwork
            </span>
          </div>
        </div>

        {/* Temporary artwork placeholder */}
        <div className="flex min-h-[450px] items-center justify-center rounded-[36px] bg-[#E5EBE3] p-8">
          <div className="flex aspect-[4/5] w-full max-w-[340px] flex-col items-center justify-center rounded-xl border-[12px] border-white bg-[#F6F0E7] shadow-xl">
            <span className="text-8xl">🐕</span>
            <p className="mt-8 font-serif text-3xl italic">
              Forever Loved
            </p>
            <p className="mt-3 text-sm tracking-widest text-[#879087]">
              YOUR BEST FRIEND
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section id="styles" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold text-[#77917F]">OUR ART STYLES</p>
            <h2 className="mt-3 text-4xl font-bold">
              Every Pet Deserves a Masterpiece
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
                  <h3 className="text-xl font-semibold">{style.name}</h3>
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
            How It Works
          </h2>

          <div className="mt-14 grid gap-10 text-center md:grid-cols-3">
            {[
              {
                icon: ImagePlus,
                title: "Upload Photo",
                text: "Upload your favorite photo of your pet.",
              },
              {
                icon: Palette,
                title: "Choose Style",
                text: "Select your favorite artistic style.",
              },
              {
                icon: Heart,
                title: "Receive Artwork",
                text: "Get your personalized digital portrait.",
              },
            ].map((step) => {
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
                    {step.text}
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
            A Memory That Lasts Forever
          </h2>

          <div className="mt-10 rounded-3xl bg-white p-10 shadow-sm">
            <p className="font-semibold">Digital Pet Portrait</p>

            <p className="mt-5 text-6xl font-bold">€29</p>

            <p className="mt-3 text-[#647269]">
              One personalized digital portrait
            </p>

            <Link
              href="/create"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#263F32] px-6 py-4 font-semibold text-white"
            >
              Create My Portrait
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#263F32] px-6 py-12 text-center text-white">
        <p className="text-xl font-bold">Pet Memory Studio.</p>
        <p className="mt-3 text-sm text-white/70">
          Personalized pet artwork, made with love.
        </p>
        <p className="mt-8 text-xs text-white/50">
          © 2026 Pet Memory Studio
        </p>
      </footer>
    </main>
  );
}
