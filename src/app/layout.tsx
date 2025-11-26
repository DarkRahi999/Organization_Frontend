import type { Metadata } from "next";
import { Salsa, Roboto_Condensed } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider";
import { ReduxProvider } from "@/provider/ReduxProvider";
import { Toaster } from "sonner";
import "../style/globals.css";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description:
    "A production-ready Next.js starter template with TypeScript, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${salsa.variable} ${roboto.variable} antialiased`}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
            <Toaster
              toastOptions={{
                style: {
                  height: "60px",
                  fontSize: "12px",
                  borderRadius: "6px",
                },
              }}
              position="bottom-center"
            />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
