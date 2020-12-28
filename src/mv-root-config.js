import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@mv/headerNavBar",
  app: () => System.import("@mv/headerNavBar"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
