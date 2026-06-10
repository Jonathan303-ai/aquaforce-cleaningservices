import { c as createComponent, $ as $$Image } from './_astro_assets_B9eCAUT0.mjs';
import 'piccolore';
import { d as createRenderInstruction, c as addAttribute, e as renderHead, f as renderSlot, b as renderTemplate, m as maybeRenderHead, r as renderComponent } from './entrypoint_DV19SN15.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Aquaforce Cleaning Services | Professionele Schoonmaak",
    description = "Aquaforce levert premium schoonmaakoplossingen voor kantoren, woningen en industriële sites. Betrouwbaar, grondig en milieubewust."
  } = Astro2.props;
  return renderTemplate`<html lang="nl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/logo-aquaforce-clean-transparant.png"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/logo-aquaforce-clean-transparant.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#05070B"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-navy-950 text-slate-200 font-sans antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jonathan/Sites/aquaforce-cleaningservices/src/layouts/BaseLayout.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo-aquaforce-clean-transparant.CVUX94ha.png","width":1010,"height":289,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/logo-aquaforce-clean-transparant.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Kantoorschoonmaak", href: "/kantoorschoonmaak" },
    { label: "Ramen wassen", href: "/ramen-wassen" },
    { label: "Oprit & gevelreiniging", href: "/oprit-en-gevelreiniging" },
    { label: "Jobs", href: "/jobs" },
    { label: "Contact", href: "/contact" }
  ];
  const pathname = Astro2.url.pathname;
  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-[#05070b]/92 backdrop-blur-xl border-b border-white/[0.06]" style="box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.40);" id="site-header"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <div class="flex items-center justify-between h-16 md:h-20"> <!-- Logo --> <a href="/" class="shrink-0" aria-label="Aquaforce Cleaning Services — home"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Aquaforce Cleaning Services", "height": 42, "class": "block w-auto object-contain h-[34px] md:h-[42px] transition-all duration-200 hover:brightness-110", "loading": "eager", "fetchpriority": "high" })} </a> <!-- Desktop nav --> <nav class="hidden lg:flex items-center gap-1"> ${navLinks.slice(0, -1).map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive(link.href) ? "text-white bg-white/5" : "text-white hover:text-white hover:bg-white/5"}`, "class")}> ${link.label} </a>`)} </nav> <!-- Desktop CTA --> <a href="/contact" class="hidden lg:inline-flex items-center gap-2 bg-water-500 hover:bg-water-600 text-[#0B0F14] text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-lg shadow-water-500/20">
Contact
<svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"> <path fill-rule="evenodd" d="M6.293 12.707a1 1 0 010-1.414L9.586 8 6.293 4.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </a> <!-- Mobile menu button --> <button id="mobile-menu-btn" aria-label="Menu" aria-expanded="false" class="lg:hidden p-2 text-white hover:text-white transition-colors"> <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile nav --> <div id="mobile-menu" class="hidden lg:hidden border-t border-white/5 bg-navy-900"> <!-- Logo herhaling in mobiel menu --> <div class="max-w-7xl mx-auto px-6 pt-4 pb-2"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Aquaforce Cleaning Services", "height": 34, "class": "block w-auto object-contain h-[34px]", "loading": "lazy" })} </div> <nav class="max-w-7xl mx-auto px-6 py-2 flex flex-col gap-1"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`mobile-nav-link px-3 py-3 rounded-md text-sm font-medium transition-colors ${isActive(link.href) ? "text-white bg-white/5" : "text-white hover:text-white"}`, "class")}> ${link.label} </a>`)} </nav> </div> </header> ${renderScript($$result, "/Users/jonathan/Sites/aquaforce-cleaningservices/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jonathan/Sites/aquaforce-cleaningservices/src/components/Header.astro", void 0);

const waterBg = new Proxy({"src":"/_astro/schoonmaakbedrijf-limburg.C6YqKH89.png","width":1536,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/schoonmaakbedrijf-limburg.png";
							}
							
							return target[name];
						}
					});

const druppel = new Proxy({"src":"/_astro/gouden-druppel-schoonmaakbedrijf-limburg.DUPXpyIx.webp","width":228,"height":342,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/gouden-druppel-schoonmaakbedrijf-limburg.webp";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-navy-900 border-t border-navy-700/40 overflow-hidden" data-astro-cid-sz7xmlte> <!-- Decoratieve waterbranding overlay --> <div aria-hidden="true" class="absolute inset-0 pointer-events-none select-none footer-water-overlay" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": waterBg, "alt": "", "widths": [768, 1280, 1536], "sizes": "100vw", "loading": "lazy", "class": "w-full h-full object-cover object-center", "data-astro-cid-sz7xmlte": true })} </div> <!-- Footer content — z-index boven overlay --> <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12" data-astro-cid-sz7xmlte> <!-- Brand --> <div data-astro-cid-sz7xmlte> <a href="/" class="inline-flex mb-6 transition-opacity duration-200 hover:opacity-90" aria-label="Aquaforce Cleaning Services — home" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Aquaforce Cleaning Services", "height": 88, "class": "block w-auto object-contain footer-logo-img", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} </a> <p class="footer-brand-text" data-astro-cid-sz7xmlte>
Professionele schoonmaakdiensten in Bree, Limburg en omliggende regio's. Betrouwbaar, grondig en op afgesproken tijdstippen.
</p> </div> <!-- Diensten --> <div data-astro-cid-sz7xmlte> <h3 class="font-display font-semibold text-sm mb-4 uppercase tracking-widest" style="color: #C9A84C;" data-astro-cid-sz7xmlte>Diensten</h3> <ul class="space-y-2.5" data-astro-cid-sz7xmlte> ${[
    { label: "Kantoorschoonmaak", href: "/kantoorschoonmaak" },
    { label: "Ramen wassen", href: "/ramen-wassen" },
    { label: "Oprit & gevelreiniging", href: "/oprit-en-gevelreiniging" }
  ].map((link) => renderTemplate`<li data-astro-cid-sz7xmlte> <a${addAttribute(link.href, "href")} class="inline-flex items-center gap-2 text-white hover:text-slate-300 text-sm transition-colors" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Image", $$Image, { "src": druppel, "alt": "", "aria-hidden": "true", "width": 9, "height": 13, "class": "shrink-0 object-contain h-[13px] w-auto", "loading": "lazy", "data-astro-cid-sz7xmlte": true })} ${link.label} </a> </li>`)} </ul> </div> <!-- Contact --> <div data-astro-cid-sz7xmlte> <h3 class="font-display font-semibold text-sm mb-4 uppercase tracking-widest" style="color: #C9A84C;" data-astro-cid-sz7xmlte>Contact</h3> <address class="not-italic space-y-3 text-sm text-white" data-astro-cid-sz7xmlte> <p class="flex items-start gap-2" data-astro-cid-sz7xmlte> <svg class="w-4 h-4 mt-0.5 text-water-400/40 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-sz7xmlte></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-sz7xmlte></path> </svg>
Cosijnstraat 15, 3960 Bree, België
</p> <p data-astro-cid-sz7xmlte> <a href="mailto:info@aquaforce-cleaning.be" class="flex items-start gap-2 hover:text-slate-300 transition-colors" data-astro-cid-sz7xmlte> <svg class="w-4 h-4 mt-0.5 text-water-400/40 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-sz7xmlte></path> </svg>
info@aquaforce-cleaning.be
</a> </p> <p data-astro-cid-sz7xmlte> <a href="tel:+32465045504" class="flex items-start gap-2 hover:text-slate-300 transition-colors" data-astro-cid-sz7xmlte> <svg class="w-4 h-4 mt-0.5 text-water-400/40 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-sz7xmlte></path> </svg>
+32 465 04 55 04
</a> </p> </address> </div> </div> <div class="border-t border-navy-700/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" data-astro-cid-sz7xmlte> <p class="text-white text-sm" data-astro-cid-sz7xmlte>© ${year} Aquaforce Cleaning Services. Alle rechten voorbehouden.</p> <div class="flex gap-6" data-astro-cid-sz7xmlte> <a href="/privacybeleid" class="text-white hover:text-slate-400 text-sm transition-colors" data-astro-cid-sz7xmlte>Privacybeleid</a> <a href="/algemene-voorwaarden" class="text-white hover:text-slate-400 text-sm transition-colors" data-astro-cid-sz7xmlte>Algemene voorwaarden</a> </div> </div> </div> </footer>`;
}, "/Users/jonathan/Sites/aquaforce-cleaningservices/src/components/Footer.astro", void 0);

const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/jonathan/Sites/aquaforce-cleaningservices/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, druppel as d, renderScript as r };
