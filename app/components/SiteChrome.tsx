"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useSiteLanguage } from "./LanguageProvider";
import { floatingWhatsApp, siteText } from "./site-text";

const productCategories = [
  {
    key: "Flip-Up",
    href: "/products#flip-up",
    models: ["JF-001", "X-330"],
    image: "/images/jf-001-front.png",
  },
  {
    key: "Full Face",
    href: "/products#full-face",
    models: ["RX-2", "RX-3", "RX-8"],
    image: "/images/rx-2-front.png",
  },
  {
    key: "Open Face",
    href: "/products#open-face",
    models: ["S-701"],
    image: "/images/s-701-black-side-black peak.png",
  },
  {
    key: "Off-Road",
    href: "/products#off-road",
    models: ["X-130"],
    image: "/images/x-130-black-front.png",
  },
] as const;

const quickLinks = [
  { href: "/products" },
  { href: "/products#flip-up" },
  { href: "/contact" },
] as const;

const categoryLabels = {
  en: {
    "Flip-Up": "Flip-Up",
    "Full Face": "Full Face",
    "Open Face": "Open Face",
    "Off-Road": "Off-Road",
  },
  es: {
    "Flip-Up": "Flip-Up",
    "Full Face": "Integral",
    "Open Face": "Open Face",
    "Off-Road": "Off-Road",
  },
} as const;

export default function SiteChrome({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useSiteLanguage();
  const text = siteText.header[language];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-4">
          <a href="/" className="flex items-center gap-4 leading-none">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <Image
                src="/images/xvex-mark-source.png"
                alt="XVEX logo"
                width={34}
                height={22}
                className="h-auto w-9"
              />
            </div>
            <div>
              <div className="font-display text-[2rem] font-bold tracking-[0.28em] text-orange-400">
                XVEX
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.45em] text-neutral-500">
                {text.brand}
              </div>
            </div>
          </a>

          <nav className="flex items-center justify-center gap-8 text-[15px] font-bold uppercase tracking-[0.12em] text-neutral-700 md:gap-12">
            <a href="/" className="transition hover:text-orange-400">
              {text.home}
            </a>

            <div className="group relative">
              <a
                href="/products"
                className="inline-flex items-center gap-2 transition hover:text-orange-400"
              >
                {text.products}
                <span className="text-[10px] text-neutral-400 transition group-hover:text-orange-400">
                  ▾
                </span>
              </a>

              <div className="invisible absolute left-1/2 top-full z-50 translate-x-[-50%] translate-y-3 pt-5 opacity-0 transition duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="relative w-[72rem] max-w-[calc(100vw-3rem)] overflow-hidden rounded-[2rem] border border-[#eadfca] bg-[#fbf7f0] text-neutral-900 shadow-[0_30px_100px_rgba(15,23,42,0.14)]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(216,182,106,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(247,240,229,0.82))]" />
                  <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-[#f3e6c7]/55 blur-3xl" />
                  <div className="pointer-events-none absolute right-[-6rem] top-[-5rem] h-40 w-40 rotate-45 bg-[#efe0ba]/35" />
                  <div className="pointer-events-none absolute bottom-[-5rem] left-[26rem] h-32 w-32 rotate-45 bg-[#f5ead1]/55" />
                  <div className="pointer-events-none absolute inset-y-0 left-[22rem] hidden w-[26rem] lg:block">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/rx-2-front.png"
                        alt=""
                        fill
                        className="object-contain opacity-[0.14] blur-[1px]"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(251,247,240,0.98)_0%,rgba(251,247,240,0.92)_26%,rgba(251,247,240,0.58)_52%,rgba(251,247,240,0.92)_78%,rgba(251,247,240,0.98)_100%)]" />

                  <div className="relative grid grid-cols-[1.1fr_1.4fr_1.3fr]">
                    <div className="border-r border-[#eadfca] bg-[#f7f0e5]/85 p-8">
                      <div className="mb-6 h-16 w-1 bg-[#d8b66a]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b7923d]">
                        {text.lineup}
                      </p>
                      <div className="mt-8 space-y-3">
                        {productCategories.map((category, index) => (
                          <a
                            key={category.key}
                            href={category.href}
                            className={`group/item relative flex items-center justify-between overflow-hidden border px-5 py-4 shadow-sm transition [clip-path:polygon(0_0,100%_0,92%_100%,0_100%)] ${
                              index === 0
                                ? "border-[#e4c987] bg-[#fff9ed] text-neutral-900"
                                : "border-[#efe3cc] bg-white/75 hover:border-[#e4c987] hover:bg-[#fff9ed]"
                            }`}
                          >
                            <div
                              className={`absolute inset-y-0 left-0 w-24 bg-[linear-gradient(100deg,rgba(216,182,106,0.18),transparent)] transition ${
                                index === 0
                                  ? "opacity-100"
                                  : "opacity-0 group-hover/item:opacity-100"
                              }`}
                            />
                            <div
                              className={`absolute right-0 top-0 h-full w-14 skew-x-[-18deg] transition ${
                                index === 0
                                  ? "translate-x-4 bg-[#f6e7bf]/55 opacity-100"
                                  : "translate-x-8 bg-[#f6e7bf]/55 opacity-0 group-hover/item:translate-x-4 group-hover/item:opacity-100"
                              }`}
                            />
                            <div className="relative z-10">
                              <p className="text-lg font-semibold uppercase tracking-[0.08em] text-neutral-900">
                                {categoryLabels[language][category.key]}
                              </p>
                            </div>
                            <span className="text-[#b7923d] transition group-hover/item:translate-x-1">
                              ▸
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="border-r border-[#eadfca] p-8">
                      <div className="mb-6 h-16 w-1 bg-[#d8b66a]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b7923d]">
                        {text.helmetView}
                      </p>
                      <div className="mt-8 space-y-5">
                        {productCategories.map((category) => (
                          <a
                            key={category.key}
                            href={category.href}
                            className="group/item relative flex items-center gap-5 border-b border-[#eadfca] pb-5 last:border-b-0"
                          >
                            <div className="absolute left-0 top-1/2 h-[1px] w-0 bg-[#d8b66a] transition-all duration-300 group-hover/item:w-full" />
                            <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border border-[#efe3cc] bg-white/90 shadow-sm">
                              <Image
                                src={category.image}
                                alt={category.key}
                                fill
                                className="object-contain p-2 transition duration-300 group-hover/item:scale-105"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[2.35rem] font-black uppercase leading-none tracking-[-0.03em] text-[#b7923d]">
                                {categoryLabels[language][category.key]}
                              </p>
                              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-neutral-500">
                                {category.models.join(" / ")}
                              </p>
                            </div>
                            <span className="text-[#b7923d] transition group-hover/item:translate-x-1">
                              ▸
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="mb-6 h-16 w-1 bg-[#d8b66a]" />
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b7923d]">
                        {text.shortcuts}
                      </p>
                      <div className="mt-8 space-y-5">
                        {quickLinks.map((link, index) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="group/item relative flex items-center justify-between border-b border-[#eadfca] pb-5 last:border-b-0"
                          >
                            <div className="absolute bottom-4 left-0 h-[1px] w-0 bg-[#d8b66a] transition-all duration-300 group-hover/item:w-full" />
                            <div>
                              <p className="text-xl font-semibold text-neutral-900">
                                {text.quickLinks[index]}
                              </p>
                            </div>
                            <span className="text-[#b7923d] transition group-hover/item:translate-x-1">
                              ▸
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/contact" className="transition hover:text-orange-400">
              {text.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400 md:block">
              {language === "es" ? "Idioma" : "Language"}
            </span>
            <div className="flex items-center rounded-full border border-neutral-200 bg-white p-1 shadow-sm">
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  language === "en"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  language === "es"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {children}

      <div className="fixed bottom-5 right-5 z-50">
        <a
          href="https://wa.me/79326377240"
          target="_blank"
          rel="noreferrer"
          className="group flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-green-500 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:w-40 hover:justify-start hover:px-5 hover:bg-green-600"
        >
          <span className="group-hover:hidden">WA</span>
          <span className="hidden whitespace-nowrap pl-5 text-base group-hover:block">
            {floatingWhatsApp[language]}
          </span>
        </a>
      </div>

      <footer className="border-t border-neutral-200 bg-white px-6 py-6 text-center text-sm text-neutral-500">
        {siteText.footer[language]}
      </footer>
    </>
  );
}
