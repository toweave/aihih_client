export default function Home() {
  return (
    <div className="antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950 dark" style={{ colorScheme: "dark" }}>
      <div
        className={"relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950"}>
        <header className="flex items-center px-4">
          <div className="py-2.5 lg:hidden"><span className="relative"><button aria-label="Open navigation"
            className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
            type="button" data-headlessui-state=""><span
            className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
            aria-hidden="true"></span><svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true"><path
            d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z"></path></svg></button></span>
          </div>
          <div className="min-w-0 flex-1">
            <nav className="flex flex-1 items-center gap-4 py-2.5"><span className="max-lg:hidden relative"><button
              id="headlessui-menu-button-:R1pl7qkva:" type="button" aria-haspopup="menu" aria-expanded="false"
              data-headlessui-state=""
              className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"><span
              className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
              aria-hidden="true"></span><span data-slot="avatar"
              className="inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-full *:rounded-full"><img
              className="size-full" src="/tailwind-logo.svg" alt="" /></span><span
              className="truncate">Tailwind Labs</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
              fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"></path></svg></button></span>
              <div aria-hidden="true" className="max-lg:hidden h-6 w-px bg-zinc-950/10 dark:bg-white/10"></div>
              <div className="max-lg:hidden flex items-center gap-3"><span className="relative"><a
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="/demos/stacked"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span>Home</a></span><span className="relative"><a
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="/demos/stacked/events"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span>Events</a></span><span className="relative"><a
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="/demos/stacked/orders"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span>Orders</a></span><span className="relative"><a
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="/demos/stacked/broadcasts"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span>Broadcasts</a></span><span className="relative"><a
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="/demos/stacked/settings"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span>Settings</a></span></div>
              <div aria-hidden="true" className="-ml-4 flex-1"></div>
              <div className="flex items-center gap-3"><span className="relative"><a aria-label="Search"
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="#"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"></path></svg></a></span><span className="relative"><span
                className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
                style={{ opacity: 1}}></span><a aria-label="Inbox"
                className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
                data-headlessui-state="" href="/demos/stacked/inbox" data-current="true"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd"
                d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 0 1 5.273 3h9.454a2.75 2.75 0 0 1 2.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3.73Zm3.068-5.852A1.25 1.25 0 0 1 5.273 4.5h9.454a1.25 1.25 0 0 1 1.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 0 0-.86.49l-.606 1.02a1 1 0 0 1-.86.49H8.236a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 6 11H2.53l.015-.062 1.523-5.52Z"
                clip-rule="evenodd"></path></svg></a></span><span className="relative"><button
                id="headlessui-menu-button-:Rftl7qkva:" type="button" aria-haspopup="menu" aria-expanded="false"
                data-headlessui-state=""
                className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"><span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"></span><span data-slot="avatar"
                className="inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-(--avatar-radius) *:rounded-(--avatar-radius)"><img
                className="size-full" src="/profile-photo.jpg" alt="" /></span></button></span></div>
            </nav>
          </div>
        </header>
        <main className="flex flex-1 flex-col pb-2 lg:px-2">
          <div
            className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
            <div className="mx-auto max-w-6xl"><h1
              className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">Inbox</h1>
              <hr role="presentation" className="mt-6 w-full border-t border-zinc-950/10 dark:border-white/10" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
