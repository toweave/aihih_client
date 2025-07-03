import { Search, ChevronDown, Menu } from 'lucide-react';
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

  const iconClass = `
    size-6 sm:size-5 shrink-0 fill-zinc-500 
    dark:fill-zinc-400 group-hover:fill-zinc-950 
    dark:group-hover:fill-white
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

  // 导航链接数据
  const navLinks = [
    { href: "/demos/stacked", label: "Home" },
    { href: "/demos/stacked/events", label: "Events" },
    { href: "/demos/stacked/orders", label: "Orders" },
    { href: "/demos/stacked/broadcasts", label: "Broadcasts" },
    { href: "/demos/stacked/settings", label: "Settings" },
  ];

  return (
    <header className="flex items-center px-4 border-b border-zinc-200 dark:border-zinc-800">
      {/* 移动端菜单按钮 */}
      <div className="py-2.5 lg:hidden">
        <button
          aria-label="Open navigation"
          className={`${buttonBaseClass} group`}
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
              className={`${buttonBaseClass} group`}
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <span className={touchTargetClass} aria-hidden="true" />
              <span className={avatarClass}>
                <img
                  className="size-full rounded-full"
                  src="/logo/ico_pmomp_color.svg"
                  alt="Tailwind Labs"
                />
              </span>
              <span className="truncate">Tailwind Labs</span>
              <ChevronDown size={14} className="ml-auto text-zinc-400" />
            </button>
          </div>

          {/* 分隔线 */}
          <div
            aria-hidden="true"
            className="max-lg:hidden h-6 w-px bg-zinc-950/10 dark:bg-white/10"
          />

          {/* 导航链接 - 桌面端显示 */}
          <div className="max-lg:hidden flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${buttonBaseClass} group`}
              >
                <span className={touchTargetClass} aria-hidden="true" />
                {link.label}
              </a>
            ))}
          </div>

          {/* 弹性空间 */}
          <div className="flex-1" />

          {/* 右侧操作区域 */}
          <div className="flex items-center gap-1">
            {/* 搜索按钮 */}
            <button
              aria-label="Search"
              className={`${buttonBaseClass} group`}
            >
              <span className={touchTargetClass} aria-hidden="true" />
              <Search size={16} color={"var(--color-zinc-400)"} />
            </button>

            {/* 主题切换 */}
            <ModeToggle />

            {/* 收件箱按钮 - 带活跃状态指示器 */}
            <div className="relative">
              <span
                className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full
                          bg-zinc-950 dark:bg-white opacity-100"
              />
              <a
                aria-label="Inbox"
                href="/demos/stacked/inbox"
                className={`${buttonBaseClass} group`}
                data-current="true"
              >
                <span className={touchTargetClass} aria-hidden="true" />
                <Search size={16} color={"var(--color-zinc-400)"} />
              </a>
            </div>

            {/* 用户头像菜单 */}
            <button
              className={`${buttonBaseClass} group`}
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <span className={touchTargetClass} aria-hidden="true" />
              <span className={avatarClass}>
                <img
                  className="size-full rounded-full"
                  src="/logo/icon-400x400.png"
                  alt="User avatar"
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
