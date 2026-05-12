"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { products } from "../../data/products";
import { useSiteLanguage } from "../components/LanguageProvider";
import { productText, siteText } from "../components/site-text";

const categoryOrder = ["Flip-Up", "Full Face", "Open Face", "Off-Road"] as const;

const categoryMeta: Record<
  (typeof categoryOrder)[number],
  { id: string; index: string }
> = {
  "Flip-Up": {
    id: "flip-up",
    index: "01",
  },
  "Full Face": {
    id: "full-face",
    index: "02",
  },
  "Off-Road": {
    id: "off-road",
    index: "03",
  },
  "Open Face": {
    id: "open-face",
    index: "04",
  },
};

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

export default function ProductsPage() {
  const { language } = useSiteLanguage();
  const text = siteText.products[language];
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-6 py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="fixed left-1/2 top-1/2"
          style={{ transform: "translate(-50%, -50%) translate(100px, 100px)" }}
        >
          <div className="cyber-logo-glow relative h-[42rem] w-[42rem] overflow-hidden opacity-[0.16] blur-[0.5px]">
            <Image
              src="/images/xvex-mark-source.png"
              alt=""
              fill
              className="object-contain"
            />
            <div className="cyber-logo-scan absolute inset-x-[-20%] top-0 h-[34%] bg-[linear-gradient(90deg,transparent_0%,rgba(0,162,255,0.52)_8%,rgba(0,162,255,1)_24%,rgba(138,228,255,0.8)_38%,rgba(255,255,255,0.38)_50%,rgba(255,160,38,0.82)_62%,rgba(255,82,0,1)_78%,rgba(255,82,0,0.54)_92%,transparent_100%)] mix-blend-plus-lighter blur-xl" />
          </div>
        </div>
      </div>

      <div ref={pageRef} className="relative mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_28%),linear-gradient(180deg,#fffdfa_0%,#f6f1e8_100%)] px-8 py-10 shadow-sm md:px-12 md:py-14">
          <div className="absolute left-[-5rem] top-10 h-52 w-52 rounded-full bg-[#f3e3c2]/40 blur-3xl" />
          <div className="absolute right-[-6rem] top-20 h-64 w-64 rounded-full bg-[#f0dcc3]/35 blur-3xl" />

          <div className="relative max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              {text.badge}
            </p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
              {text.eyebrow}
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              {text.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              {text.description}
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          {categoryOrder.map((category) => (
            <a
              key={category}
              href={`#${categoryMeta[category].id}`}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-700 shadow-sm transition hover:border-orange-300 hover:text-orange-500"
            >
              {categoryLabels[language][category]}
            </a>
          ))}
        </div>

        <div className="mt-16 space-y-16">
          {categoryOrder.map((category) => {
            const items = products.filter((product) => product.category === category);

            if (!items.length) return null;

            return (
              <section
                key={category}
                id={categoryMeta[category].id}
                className="scroll-mt-28"
              >
                <div
                  data-reveal
                  className="flex translate-y-8 flex-col gap-4 rounded-[2rem] border border-neutral-200 bg-[linear-gradient(180deg,#faf7f1_0%,#f5efe5_100%)] px-6 py-6 opacity-0 shadow-sm transition-all duration-700 ease-out md:flex-row md:items-end md:justify-between md:px-8"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
                      {categoryLabels[language][category]}
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
                      {text.categoryTitles[category]}
                    </h2>
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                      {text.categoryLabel} {categoryMeta[category].index}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-neutral-500">
                      {text.categoryDescription[category]}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {items.map((product, index) => (
                    <div
                      key={product.name}
                      data-reveal
                      style={{ transitionDelay: `${index * 90}ms` }}
                      className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white opacity-0 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] translate-y-8"
                    >
                      <div className="relative h-60 overflow-hidden bg-[linear-gradient(180deg,#fcfaf6_0%,#f2ece2_100%)]">
                        <div className="absolute inset-x-8 top-6 h-px bg-neutral-200" />
                        <div className="absolute left-6 top-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                          {categoryLabels[language][product.category as keyof typeof categoryLabels.en] ??
                            product.category}
                        </div>
                        <div className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-400">
                          {product.name}
                        </div>

                        <Image
                          src={`/images/${product.image}`}
                          alt={product.name}
                          fill
                          className="object-contain px-6 pb-6 pt-12 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
                        />
                        <Image
                          src={`/images/${product.hoverImage ?? product.image}`}
                          alt={`${product.name} alternate view`}
                          fill
                          className="object-contain px-6 pb-6 pt-12 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>

                      <div className="p-6">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                          {text.modelOverview}
                        </p>
                        <h3 className="mt-3 text-2xl font-bold text-neutral-900">
                          {product.name}
                        </h3>
                        <p className="mt-3 text-lg font-semibold text-orange-500">
                          {product.price}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-neutral-600">
                          {productText[product.slug as keyof typeof productText]?.[
                            language
                          ]?.description ?? product.description}
                        </p>

                        <a
                          href={`/products/${product.slug}`}
                          className="mt-6 inline-flex rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-orange-300 hover:text-orange-500"
                        >
                          {text.viewDetails}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
