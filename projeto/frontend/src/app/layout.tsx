import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { Chakra_Petch, Nunito } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra-petch",
});

export const metadata = {
  title: {
    default: "Extra Software",
    template: "%s | Extra Software"
  },
  description: "Gestão de projetos e tarefas - Extra Software.",
};


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${chakraPetch.variable} ${nunito.variable}`}
      >
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
