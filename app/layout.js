import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PREPO",
  description: "AI-Powered Career Preparation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>

    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >

            {/* header */}
            <Header/>
            <main className="min-h-screen">
            {children}
            </main>
            <Toaster richColors/>
            {/* footer */}
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
