import { Links, Meta, Scripts } from "@remix-run/react";

import appStyles from "./app.css?url";
import { LinksFunction } from "@remix-run/node";
import HeaderSelector from "./components/HeaderSelector";
import DataDisplay from "./components/DataDisplay";

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
      <body>
        <div className="w-full lg:w-[992px] mx-auto p-2 md:p-4">
          <HeaderSelector />
          <DataDisplay />
          <Scripts />
        </div>
      </body>
    </html>
  );
}
