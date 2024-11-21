import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "This is BoBae App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1 className="p-4 m-5 border border-blue-300 bg-blue-50 text-4xl text-center drop-shadow-md">
          보배가 만들고 있는 사이트
        </h1>
        <h3 className="text-2xl">
          <Link href="/" className="ml-4 text-blue-500">
            메인
          </Link>
          <Link href="/about"> | 상품목록</Link>
        </h3>
        <div className="ml-4">{children}</div>
        <div className="ml-4">
          <p>관리자 : 전보배</p>
          <img id="bobae" src="/jbobae.png" />
        </div>
      </body>
    </html>
  );
}
