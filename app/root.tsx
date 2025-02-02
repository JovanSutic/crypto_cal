import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import appStyles from "./app.css?url";
import { LinksFunction } from "@remix-run/node";
import HeaderSelector from "./components/HeaderSelector";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        <div className="w-full lg:w-[992px] mx-auto p-2 md:p-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 md:gap-4">
            <div className="col-span-1 lg:col-span-2">
              <div className="w-full flex flex-row justify-center">
                <div className="flex flex-col items-center pt-4">
                  <p className="mb-1 font-bold text-zinc-400 text-[12px]">
                    BTC CURRENT PRICE
                  </p>
                  <div className="text-3xl text-zinc-800 font-bold mb-3">
                    $99,123.00
                  </div>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 text-sm underline hover:text-zinc-700 mb-2 block"
                  >
                    See more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 lg:col-start-3 flex-col">
              <HeaderSelector />
            </div>
          </div>

          <Outlet />

          <Scripts />
        </div>
      </body>
    </html>
  );
}
