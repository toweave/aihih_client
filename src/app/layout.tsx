import type { Metadata } from "next";
import "@/styles/globals.scss";

import { ThemeProvider } from "@/providers/theme-provider"
import { Props } from "@/types/app";
import Frame from "@/components/custom/frame/Frame";

export const metadata: Metadata = {
  metadataBase: new URL("https://aihih.com"), // 增加 metadataBase 属性
  title: {
    template: "%s | 哎嗨 aihih",
    default: "哎嗨 aihih", // a default is required when creating a template
  },
  description: "Toweave Toweave Toweave",
  generator: "aihih",
  applicationName: "aihih",
  referrer: "origin-when-cross-origin",
  keywords: ["aihih", "哎嗨"],
  authors: [{ name: "Toweave", url: "https://toweave.com" }],
  creator: "Toweave Lee",
  publisher: "Toweave",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "aihih",
    description: "aihih toweave",
    url: "https://aihih.com",
    siteName: "aihih",
    images: [
      {
        url: "/logo/ico_pmomp_color.svg", // Must be an absolute URL
        width: 800,
        height: 800,
      },
      {
        url: "/logo/ico_pmomp_color.svg", // Must be an absolute URL
        width: 1600,
        height: 1600,
        alt: "aihih",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo/ico_pmomp_color.svg" },
      new URL("/logo/ico_pmomp_color.svg", "https://aihih.com"),
      { url: "/toweave-dark.jpg", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/logo/ico_pmomp_color.svg"],
    apple: [
      { url: "/logo/ico_pmomp_color.svg" },
      { url: "/logo/ico_pmomp_color.svg", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logo/ico_pmomp_color.svg",
      },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Frame>{children}</Frame>
        </ThemeProvider>
      </body>
    </html>
  );
}
