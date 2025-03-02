import { createRequestHandler } from "@remix-run/express";
import { type ServerBuild } from '@remix-run/node';
import express from "express";

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const app = express();
app.use(
  viteDevServer
    ? viteDevServer.middlewares
    : express.static("build/client")
);

const build = viteDevServer
  ? () =>
      viteDevServer.ssrLoadModule(
        "virtual:remix/server-build"
      )
  : await import("./build/index.js");

app.all("*", createRequestHandler({ build: build as unknown as ServerBuild }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
