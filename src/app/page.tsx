import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-slate-700 text-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="list-inside list-decimal text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-2">
            Hey Everyone 👋🏻
          </p>
          <p>I want to share with you that i'm start learning NextJs from GIAIC.<br/> And i wnat to say "Hello World 😉"</p>
        </div>

      </main>
    </div>
  );
}
