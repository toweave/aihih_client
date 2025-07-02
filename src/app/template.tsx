export default function Template({ children }: { children: React.ReactNode }) {
  // 此处可以包裹 page.tsx 组件
  return (
    <div className={"relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950"}>{children}</div>
  )
}