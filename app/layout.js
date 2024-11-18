import "./globals.css";
import message from "./message";

export const metadata = {
  title: message.title,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
  