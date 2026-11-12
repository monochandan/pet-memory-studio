
import Link from "next/link";

export default function CreatePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAF8F4] px-6 text-center">
      <h1 className="text-4xl font-bold text-[#26372D]">
        Create Your Pet Portrait
      </h1>

      <p className="mt-5 text-[#647269]">
        Photo upload and portrait customization coming next.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#263F32] px-6 py-3 text-white"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
