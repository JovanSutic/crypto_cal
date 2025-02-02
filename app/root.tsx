import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import appStyles from "./app.css?url";
import { LinksFunction } from "@remix-run/node";
import CoinButton from "./components/CoinButton";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
  // { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body className="">
        <div className="w-full lg:w-[992px] mx-auto p-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">Title</div>
            <div className="col-span-3 col-start-3 flex gap-4">
              <CoinButton
                name="BTC"
                img="public/btc.webp"
                onClick={() => console.log("click")}
                active={false}
              />
              <CoinButton
                name="ETH"
                img="/eth.webp"
                onClick={() => console.log("click")}
                active={false}
              />
              <CoinButton
                name="BNB"
                img="/bnb.png"
                onClick={() => console.log("click")}
                active={false}
              />
              <CoinButton
                name="SOL"
                img="/sol.webp"
                onClick={() => console.log("click")}
                active={false}
              />
              <CoinButton
                name="XRP"
                img="/xrp.webp"
                onClick={() => console.log("click")}
                active={true}
              />
            </div>
          </div>

          <Outlet />

          <Scripts />
        </div>
      </body>
    </html>
  );
}
