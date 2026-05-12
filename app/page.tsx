"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useSiteLanguage } from "./components/LanguageProvider";
import { siteText } from "./components/site-text";

export default function Home() {
  const { language } = useSiteLanguage();
  const text = siteText.home[language];

  const heroSlides = [
    {
      image: "/images/jf-001-side.png",
      href: "/products/jf-001",
      alt: "JF-001",
      category: "Flip-Up",
      shell: "ABS-701",
      finish: "DOT",
    },
    {
      image: "/images/rx-2-side.png",
      href: "/products/rx-2",
      alt: "RX-2",
      category: language === "es" ? "Integral" : "Full Face",
      shell: "ABS-701",
      finish: "ECE",
    },
    {
      image: "/images/x-330-side.png",
      href: "/products/x-330",
      alt: "X-330",
      category: "Flip-Up",
      shell: "ABS-701",
      finish: "DOT",
    },
  ];

  const showcaseSlides = [
    {
      image: "/images/background2.jpg",
      title: "ALWAYS AHEAD",
      position: "center 18%",
    },
    {
      image: "/images/background3.png",
      title: "RIDE FURTHER",
      position: "center 20%",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentShowcase, setCurrentShowcase] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroSlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [heroSlides.length, isPaused]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentShowcase((prev) => (prev + 1) % showcaseSlides.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [showcaseSlides.length]);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background.jpg"
            alt="Motorcycle riding background"
            fill
            priority
            className="object-cover object-center opacity-[0.42]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_26%),linear-gradient(180deg,rgba(255,253,250,0.68)_0%,rgba(246,241,232,0.78)_100%)]" />
        <div className="absolute left-[-5rem] top-10 h-52 w-52 rounded-full bg-[#f3e3c2]/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-20 h-64 w-64 rounded-full bg-[#f0dcc3]/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="mb-3 text-lg uppercase tracking-[0.32em] text-orange-400 md:text-2xl">
              {text.badge}
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-[0.92] sm:text-5xl md:text-6xl">
              <span className="block">{text.titleTop}</span>
              <span className="mt-2 block text-[0.94em]">{text.titleBottom}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              {text.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {text.factoryPoints.map((point) => (
                <div
                  key={point}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-600 shadow-sm backdrop-blur"
                >
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  {point}
                </div>
              ))}
            </div>

            <p className="mt-6 inline-flex rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500 backdrop-blur">
              {text.note}
            </p>
          </div>

          <div className="space-y-4">
            <div
              className="relative h-[300px] overflow-hidden rounded-[2.25rem] border border-neutral-200 bg-[linear-gradient(180deg,#fcfaf6_0%,#f2ece2_100%)] shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:h-[360px] md:h-[460px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute inset-x-10 top-8 h-px bg-neutral-200" />
              <div className="absolute left-8 top-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {text.featuredModel}
              </div>

              <div className="absolute right-8 top-8 flex items-center gap-2">
                <span className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500 shadow-sm backdrop-blur">
                  {heroSlides[currentImage].category}
                </span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-sm">
                  {heroSlides[currentImage].finish}
                </span>
              </div>

              {heroSlides.map((slide, index) => (
                <a
                  key={slide.image}
                  href={slide.href}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-contain px-8 pb-10 pt-10"
                  />
                </a>
              ))}

              <button
                onClick={() =>
                  setCurrentImage(
                    (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                  )
                }
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-lg text-neutral-900 shadow-sm transition hover:bg-white"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setCurrentImage((prev) => (prev + 1) % heroSlides.length)
                }
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-lg text-neutral-900 shadow-sm transition hover:bg-white"
              >
                ›
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      index === currentImage ? "bg-orange-400" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[1.15rem] border border-neutral-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <div className="flex items-end justify-between gap-4 border-b border-neutral-200/80 pb-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                    {text.slideLabel}
                  </p>
                  <p className="mt-1 text-[1.65rem] font-bold text-neutral-900">
                    {heroSlides[currentImage].alt}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Shell
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-700">
                    {heroSlides[currentImage].shell}
                  </p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between gap-4">
                <p className="text-xs text-neutral-500">{text.slideNote}</p>
                <a
                  href={heroSlides[currentImage].href}
                  className="inline-flex shrink-0 items-center rounded-full border border-neutral-300 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
                >
                  View Model
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 md:pt-2">
            <div className="flex flex-row flex-wrap items-center gap-4 md:pl-60">
              <a
                href="/products"
                className="inline-flex min-w-[13rem] items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-orange-600"
              >
                {text.products}
              </a>

              <a
                href="/contact"
                className="inline-flex min-w-[11rem] items-center justify-center rounded-full border border-neutral-300 bg-white/70 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-neutral-900 transition hover:bg-neutral-100"
              >
                {text.contact}
              </a>

              <a
                href="https://wa.me/79326377240"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[12rem] items-center justify-center rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-green-600"
              >
                {text.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-6">
        <div className="w-full overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <div className="relative min-h-[30rem] bg-neutral-950 text-white md:min-h-[40rem]">
            {showcaseSlides.map((slide, index) => (
              <div
                key={slide.image}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentShowcase ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  quality={100}
                  className="object-cover"
                  style={{ objectPosition: slide.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.08)_0%,rgba(17,24,39,0.05)_45%,rgba(17,24,39,0.22)_100%)]" />
              </div>
            ))}

            <div className="relative z-10 flex min-h-[30rem] flex-col justify-end px-3 py-6 md:min-h-[40rem] md:px-6 md:py-10">
              <div className="px-4 pb-10 text-center md:px-10 md:pb-16">
                <h2 className="font-display text-5xl font-bold uppercase tracking-[-0.04em] text-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:text-8xl">
                  {showcaseSlides[currentShowcase].title}
                </h2>

                <div className="mt-5 flex justify-center gap-2">
                  {showcaseSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentShowcase(index)}
                      className={`h-3 w-3 rounded-full transition ${
                        index === currentShowcase
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                  <button
                    onClick={() =>
                      setCurrentShowcase(
                        (prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition hover:scale-105"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() =>
                      setCurrentShowcase((prev) => (prev + 1) % showcaseSlides.length)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-900 shadow-sm transition hover:scale-105"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 bg-[#2a2826] px-8 py-8 text-white md:grid-cols-[0.9fr_1fr_1fr] md:px-14">
            <div>
              <div className="flex items-center gap-2 md:gap-3">
                <Image
                  src="/images/xvex-mark-footer-white.png"
                  alt="XVEX logo"
                  width={132}
                  height={82}
                  className="h-auto w-[4.6rem] md:w-[5.4rem]"
                />
                <div className="font-display text-[2.05rem] font-bold uppercase tracking-[0.04em] text-white md:text-[2.7rem]">
                  XVEX
                </div>
              </div>
            </div>

            <div className="space-y-2 text-[15px] leading-8 text-white/80">
              <a
                href="/products#full-face"
                className="block transition hover:text-white"
              >
                {text.categories[0]}
              </a>
              <a
                href="/products#flip-up"
                className="block transition hover:text-white"
              >
                {text.categories[1]}
              </a>
              <a
                href="/products#open-face"
                className="block transition hover:text-white"
              >
                {text.categories[2]}
              </a>
              <a
                href="/products#off-road"
                className="block transition hover:text-white"
              >
                {text.categories[3]}
              </a>
            </div>

            <div className="flex items-end md:justify-end">
              <p className="max-w-sm text-sm leading-7 text-white/60 md:text-right">
                {text.showcaseDescriptions[currentShowcase]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
