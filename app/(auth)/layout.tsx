import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "400" });

///
/// The whole (Auth) is handeled by Clerk, meaning in case of any bug, go to the clerk docs!
///

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div className="h-full flex items-center justify-center">
        {children}
      </div>
  );
}
