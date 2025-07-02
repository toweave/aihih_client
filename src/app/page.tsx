import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>


      <button className="bg-sky-500 hover:bg-sky-700">Save changes</button>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-mint-500">
          123
        </div>

        <div style={{backgroundColor: "var(--color-red-500)"}}>
          12.13
        </div>

        <div>
          <div className="bg-sky-50">1</div>
          <div className="bg-sky-100">2</div>
          <div className="bg-sky-200">3</div>
          <div className="bg-sky-300">4</div>
          <div className="bg-sky-400">5</div>
          <div className="bg-sky-500">6</div>
          <div className="bg-sky-600">7</div>
          <div className="bg-sky-700">8</div>
          <div className="bg-sky-800">9</div>
          <div className="bg-sky-900">0</div>
          <div className="bg-sky-950">1</div>
        </div>

        <h1 className="bg-sky-950">This headline will use Poppins.</h1>

        <div
          className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800">
          <span
            className="inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10">
            <svg className="size-6 stroke-pink-700 dark:stroke-pink-500">sss</svg>
          </span>
          <div>
            <p className="text-gray-700 dark:text-gray-400">
              <span className="font-medium text-gray-950 dark:text-white">Tom Watson</span> mentioned you in
              <span className="font-medium text-gray-950 dark:text-white">Logo redesign</span>
            </p>
            <time className="mt-1 block text-gray-500" dateTime="9:37">9:37am</time>
          </div>
        </div>

        <div className="test">
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/10"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/20"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/30"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/40"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/50"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/60"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/70"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/80"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/90"></div>
          </div>
          <div className="flex items-center gap-1.5 sm:flex-col">
            <div className="bg-sky-500/100"></div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg className="h-6 w-6 stroke-white"></svg>
            </span>
          </div>
          <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
      </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
