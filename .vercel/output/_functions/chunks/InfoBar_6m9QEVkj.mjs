import { c as createComponent } from './_astro_assets_B9eCAUT0.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, r as renderComponent, F as Fragment, b as renderTemplate, u as unescapeHTML } from './entrypoint_DV19SN15.mjs';

const camionette = new Proxy({"src":"/_astro/schoonmaakbedrijf-bree.1PgIfy8S.png","width":758,"height":442,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jonathan/Sites/aquaforce-cleaningservices/src/assets/images/schoonmaakbedrijf-bree.png";
							}
							
							return target[name];
						}
					});

const $$InfoBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$InfoBar;
  const ICON_COLOR = "#C9A84C";
  const DESKTOP_SIZE = 42;
  const items = [
    {
      title: "BETROUWBAAR",
      desc: "Volledig verzekerd en professioneel",
      icon: `<svg width="${DESKTOP_SIZE}" height="${DESKTOP_SIZE}" viewBox="0 0 24 24" fill="none"
        stroke="${ICON_COLOR}" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" class="infobar-svg">
      <path d="M12 2 3.5 6.5v4.8c0 5.1 3.7 9.9 8.5 11.2 4.8-1.3 8.5-6.1 8.5-11.2V6.5L12 2z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>`
    },
    {
      title: "B2B & PARTICULIER",
      desc: "Diensten op maat voor elk type klant",
      icon: `<svg width="${DESKTOP_SIZE}" height="${DESKTOP_SIZE}" viewBox="0 0 24 24" fill="none"
        stroke="${ICON_COLOR}" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" class="infobar-svg">
      <rect x="2" y="8" width="8" height="13" rx="1"/>
      <rect x="10" y="3" width="12" height="18" rx="1"/>
      <path d="M5 12h2M5 16h2M13 7h2M13 11h2M13 15h2M17 7h1M17 11h1M17 15h1"/>
    </svg>`
    },
    {
      title: "ACTIEF IN HEEL VLAANDEREN",
      desc: "Snelle service, altijd in uw regio",
      icon: `<svg width="${DESKTOP_SIZE}" height="${DESKTOP_SIZE}" viewBox="0 0 24 24" fill="none"
        stroke="${ICON_COLOR}" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" class="infobar-svg">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.5 7 13 7 13s7-7.5 7-13c0-3.9-3.1-7-7-7z"/>
      <circle cx="12" cy="9" r="2.2"/>
    </svg>`
    },
    {
      title: "KWALITEIT & DISCRETIE",
      desc: "Premium service met oog voor detail",
      icon: `<svg width="${DESKTOP_SIZE}" height="${DESKTOP_SIZE}" viewBox="0 0 24 24" fill="none"
        stroke="${ICON_COLOR}" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"
        aria-hidden="true" class="infobar-svg">
      <path d="M6.5 8L12 2l5.5 6H6.5z"/>
      <path d="M2 8h20M6.5 8L12 22M17.5 8L12 22"/>
    </svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-navy-950 border-t border-white/[0.06]" data-astro-cid-6o43mjfs> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-6o43mjfs> <div class="grid grid-cols-2 lg:grid-cols-4" data-astro-cid-6o43mjfs> ${items.map((item, i) => renderTemplate`<div${addAttribute([
    "flex flex-row items-center py-6 lg:py-8 px-3 sm:px-5 lg:px-6 gap-4 border-white/[0.08]",
    i % 2 === 0 ? "border-r" : "",
    i < 2 ? "border-b lg:border-b-0" : "",
    i < 3 ? "lg:border-r" : ""
  ], "class:list")} data-astro-cid-6o43mjfs> <!-- Icoon links --> <span class="flex items-center justify-center shrink-0" data-astro-cid-6o43mjfs> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item.icon)}` })} </span> <!-- Tekst rechts --> <div data-astro-cid-6o43mjfs> <p class="text-white font-display font-semibold text-[10px] sm:text-[11px] tracking-[0.18em] uppercase mb-1 leading-tight" data-astro-cid-6o43mjfs> ${item.title} </p> <p class="text-white text-xs sm:text-sm leading-relaxed" data-astro-cid-6o43mjfs> ${item.desc} </p> </div> </div>`)} </div> </div> </div>`;
}, "/Users/jonathan/Sites/aquaforce-cleaningservices/src/components/InfoBar.astro", void 0);

export { $$InfoBar as $, camionette as c };
