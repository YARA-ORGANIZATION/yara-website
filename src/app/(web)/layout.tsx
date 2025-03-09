import type { Metadata } from "next";
import { Providers } from "./providers";
import "./styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import localFont from 'next/font/local'

const salted = localFont({
  src: './styles/fonts/Salted-Regular.otf',
  weight: '200',
  style: 'normal',
  variable: '--font-salted',
});

const neue = localFont({
  src: [
    {
      path: './styles/fonts/NeueHaasDisplayBlack.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './styles/fonts/NeueHaasDisplayBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './styles/fonts/NeueHaasDisplayMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './styles/fonts/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './styles/fonts/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './styles/fonts/NeueHaasDisplayThin.ttf',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: '--font-neue',
});

export const metadata: Metadata = {
  title: "YARA | Research Academy for Young Africans",
  description: "Nurturing the Next Generation of African Researchers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/yara-logo-white.png" />
      </head>
      <body className={`${neue.variable} ${salted.variable} font-sans`}>
        <Providers>
          <main className="bg-gray-200">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
