import Image from 'next/image'
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Search,
  // ChevronDown,
  Menu
} from 'lucide-react';
import { ModeToggle } from "@/components/theme/ModeToggle";

const Header = () => {
  // 提取公共样式类
  const buttonBaseClass = `
    relative flex min-w-0 items-center gap-3 rounded-lg p-2 
    text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5
    hover:bg-zinc-950/5 active:bg-zinc-950/5
    dark:text-white dark:hover:bg-white/5 dark:active:bg-white/5
    transition-colors duration-200
  `;

  const avatarClass = `
    inline-grid shrink-0 align-middle size-7 sm:size-6
    rounded-full outline -outline-offset-1 
    outline-black/10 dark:outline-white/10
  `;

  const touchTargetClass = `
    absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] 
    -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden
  `;

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  function ListItem({
    title,
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
      <li {...props}>
        <NavigationMenuLink asChild>
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }

  return (
    <header className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
      {/* 移动端菜单按钮 */}
      <div className="py-2.5 lg:hidden">
        <button
          aria-label="Open navigation"
          className={`${buttonBaseClass}`}
          type="button"
        >
          <span className={touchTargetClass} aria-hidden="true" />
          <Menu color={"var(--color-zinc-400)"} />
        </button>
      </div>

      {/* 主导航区域 */}
      <div className="min-w-0 flex-1">
        <nav className="flex flex-1 items-center gap-4 py-2.5">
          {/* 品牌/Logo区域 - 桌面端显示 */}
          <div className="max-lg:hidden">
            <button
              className={`${buttonBaseClass}`}
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <span className={`w-[120px] h-[36px] inline-block`}>
                <Image
                  className="size-full rounded-full"
                  src="/logo/logo-pmomp.svg"
                  alt="Tailwind Labs"
                  width={120}
                  height={36}
                  priority
                />
              </span>
              {/*<ChevronDown size={14} className="ml-auto text-zinc-400" />*/}
            </button>
          </div>

          {/* 分隔线 */}
          <div
            aria-hidden="true"
            className="max-lg:hidden h-6 w-px bg-zinc-950/50 dark:bg-white/50"
          />

          {/* 导航链接 - 桌面端显示 */}
          <div className="max-lg:hidden flex items-center gap-1">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md" href="https://ui.pmomp.com/">
                            <div className="mt-4 mb-2 text-lg font-medium">
                              pmomp/ui
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              Beautifully designed components built with Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/docs">Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>List</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">Components</div>
                            <div className="text-muted-foreground">
                              Browse all components in the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">Documentation</div>
                            <div className="text-muted-foreground">
                              Learn how to use the library.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">
                            <div className="font-medium">Blog</div>
                            <div className="text-muted-foreground">
                              Read our latest blog posts.
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="#">Components</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Documentation</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#">Blocks</Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="flex-row items-center gap-2">
                            <CircleHelpIcon />
                            Backlog
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="flex-row items-center gap-2">
                            <CircleIcon />
                            To Do
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="#" className="flex-row items-center gap-2">
                            <CircleCheckIcon />
                            Done
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* 弹性空间 */}
          <div className="flex-1" />

          {/* 右侧操作区域 */}
          <div className="flex items-center gap-1">
            {/* 搜索按钮 */}
            <button aria-label="Search" className={`${buttonBaseClass}`}>
              <span className={touchTargetClass} aria-hidden="true" />
              <Search size={16} color={"var(--color-zinc-400)"} />
            </button>

            {/* 主题切换 */}
            <ModeToggle />

            {/* 用户头像菜单 */}
            <button className={`${buttonBaseClass} relative`} aria-haspopup="menu" aria-expanded="false">
              <span className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white opacity-100" />
              <span className={touchTargetClass} aria-hidden="true" />
              <span className={avatarClass}>
                <Image
                  className="size-full rounded-full"
                  src="/logo/icon-400x400.png"
                  alt="User avatar"
                  width={400}
                  height={400}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
