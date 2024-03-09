import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "~/lib/registry";
import { Providers } from "~/providers/Provider";
import { GlobalStyle } from "~/styles/globals.styled";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Todo App",
  description: "Strict version of Korawit's Todo App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
