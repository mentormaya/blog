import type { Metadata } from "next";

import "@/app/globals.css";
import "@/app/mdx.css";
import { calSans } from "@/components/local-fonts";
import { ThemeProvider } from "@/providers/theme";
import { cn } from "@/lib/utils";
import Particles from "@/components/particles";
import { Navigation } from "@/components/nav";
import Footer from "@/components/footer";

const title = "Ajay Singh";
const description = "A Personal Portfolio for Ajay Singh.";
// const url = "https://ajaysingh.com.np";
const url = "/";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: `${url}/images/author.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: title,
    card: "summary_large_image",
  },
  icons: {
    shortcut: `${url}/images/logo-color.png`,
  },
};

// const popins = Poppins({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={calSans.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={cn(
          "bg-black text-white",
          process.env.NODE_ENV === "development" && "debug-screens"
        )}
      >
        <ThemeProvider>
          <Particles className="animate-fade-in" quantity={150} />
          <div className="relative">
            <div className="relative my-6 max-w-[90%] mx-auto">
              <Navigation gitTheme />
              <div className="w-full mx-auto flex flex-1 mb-12">{children}</div>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}