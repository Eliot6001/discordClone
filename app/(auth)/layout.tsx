
import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "400" });



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
