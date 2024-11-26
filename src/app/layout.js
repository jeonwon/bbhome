import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "This is BoBae App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  let menu = [
    ["/", "메인"],
    ["/photo", "사진"],
    ["/carrer", "경력"],
    ["/degree", "학력"],
  ];
  return (
    <html>
      <body>
        <div className="flex justify-center">
          <h1 className="py-3 px-10 m-5 bg-blue-50 font-bold text-3xl text-center drop-shadow-md rounded-md">
            전보배 PORTFOLIO
          </h1>
        </div>
        <div className="text-2xl flex gap-4 my-8 mx-5 font-bold">
          {menu.map((a, i) => {
            return (
              <Link
                key={i}
                href={a[0]}
                className="w-full border text-center py-3 rounded-md bg-gray-100"
              >
                <div className="">{a[1]}</div>
              </Link>
            );
          })}
        </div>
        <div className="ml-4 mb-8">{children}</div>
        <div className="flex justify-center border border-t-4 border-blue-100 py-2 fixed bottom-0 left-0 w-full bg-white">
          <img
            src="/jbobae.png"
            alt="bobae"
            className="border border-t-4 rounded-full  w-16"
          />
          <p className="pl-4">관리자 : 전보배</p>
        </div>
      </body>
    </html>
  );
}
