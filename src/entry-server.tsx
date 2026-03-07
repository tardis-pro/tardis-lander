import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppShell from "./AppShell";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell includeToasters={false} />
    </StaticRouter>
  );
}
