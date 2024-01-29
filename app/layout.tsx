import "./globals.css";
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
const firaSans = Fira_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Gamers Texting app",
  description: "Best Experience with your teammates!",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(firaSans.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
