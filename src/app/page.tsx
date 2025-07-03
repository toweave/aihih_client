import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grow p-6 lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
      <div className="mx-auto max-w-6xl"><h1
        className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Inbox</h1>
        <hr role="presentation" className="mt-6 w-full border-t border-zinc-950/10 dark:border-white/10" />
      </div>

      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
