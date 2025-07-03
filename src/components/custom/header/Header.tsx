import { Search, ChevronDown } from 'lucide-react';
import { ModeToggle } from "@/components/theme/ModeToggle";

const Header = () => {
  return (
    <header className="flex items-center px-4">
      <div className="py-2.5 lg:hidden"><span className="relative">
        <button aria-label="Open navigation"
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
          className="size-full" src="/logo/ico_pmomp_color.svg" alt="" /></span><span
          className="truncate">Tailwind Labs</span>
              <ChevronDown color={"var(--color-zinc-400)"} size={14} />

            </button></span>
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
            aria-hidden="true"></span>

             <Search color={"var(--color-zinc-400)"} size={14} />
                <ModeToggle></ModeToggle>

              </a></span><span className="relative"><span
            className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white"
            style={{opacity: 1}}></span><a aria-label="Inbox"
            className="relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"
            data-headlessui-state="" href="/demos/stacked/inbox" data-current="true"><span
            className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
            aria-hidden="true"></span>
              <Search color={"var(--color-zinc-400)"} size={14} />
              </a></span><span className="relative"><button
            id="headlessui-menu-button-:Rftl7qkva:" type="button" aria-haspopup="menu" aria-expanded="false"
            data-headlessui-state=""
            className="cursor-default relative flex min-w-0 items-center gap-3 rounded-lg p-2 text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:not-nth-2:last:data-[slot=icon]:ml-auto *:not-nth-2:last:data-[slot=icon]:size-5 sm:*:not-nth-2:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 *:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 dark:text-white dark:*:data-[slot=icon]:fill-zinc-400 dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white"><span
            className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
            aria-hidden="true"></span><span data-slot="avatar"
            className="inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-(--avatar-radius) *:rounded-(--avatar-radius)"><img
            className="size-full" src="/logo/icon-400x400.png" alt="" /></span></button></span></div>
        </nav>
      </div>
    </header>
  )
}
export default Header;