"use client";

import Image from "next/image";
import { useSiteLanguage } from "../components/LanguageProvider";
import { siteText } from "../components/site-text";

export default function ContactPage() {
  const { language } = useSiteLanguage();
  const text = siteText.contact[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-6 py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="fixed left-1/2 top-1/2"
          style={{ transform: "translate(-50%, -50%) translate(100px, 100px)" }}
        >
          <div className="cyber-logo-glow relative h-[40rem] w-[40rem] overflow-hidden opacity-[0.16] blur-[0.5px]">
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

      <div className="relative mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-[linear-gradient(135deg,#fffdfa_0%,#f8f2e8_55%,#f4ecdf_100%)] px-8 py-8 shadow-sm md:px-12 md:py-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#f2dfb8]/40 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-24 rotate-45 bg-[#f4e7cb]/60" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(216,182,106,0.06),transparent_32%)]" />
          <div className="relative max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              {text.badge}
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-[2.8rem]">
              {text.title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              {text.description}
            </p>
          </div>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-[linear-gradient(180deg,#faf7f1_0%,#f5efe5_100%)] p-5 shadow-sm">
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[linear-gradient(135deg,rgba(216,182,106,0.14),transparent)]" />
              <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
                {text.direct}
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    {text.email}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-neutral-900">
                    xvexmotor@163.com
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    {text.phone}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-neutral-900">
                    +86 19509522321
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                    WhatsApp
                  </p>
                  <p className="mt-1.5 text-lg font-semibold text-neutral-900">
                    +7 932 6377240
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-[linear-gradient(180deg,#faf7f1_0%,#f5efe5_100%)] p-5 shadow-sm">
            <div className="pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full bg-[#f1e0bb]/35 blur-2xl" />
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              {text.formBadge}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-neutral-900">
              {text.formTitle}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">
              {text.formDescription}
            </p>

            <form className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-600">
                  {text.name}
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-orange-300"
                  placeholder={text.name}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-600">
                  {text.email}
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-orange-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-600">
                  {text.message}
                </label>
                <textarea
                  className="min-h-[132px] w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-orange-300"
                  placeholder={text.messagePlaceholder}
                />
              </div>

              <div className="rounded-2xl border border-dashed border-neutral-200 bg-white/70 px-4 py-3 text-sm leading-6 text-neutral-500">
                {text.hint}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="mailto:xvexmotor@163.com?subject=Helmet Inquiry"
                  className="inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  {text.send}
                </a>
                <a
                  href="https://wa.me/79326377240"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-600"
                >
                  {text.whatsapp}
                </a>
              </div>
            </form>
          </div>
        </div>

        <section className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-[linear-gradient(180deg,#faf7f1_0%,#f5efe5_100%)] p-8 shadow-sm">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-[linear-gradient(135deg,rgba(216,182,106,0.12),transparent)]" />
            <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
              {text.quickBadge}
            </p>
            <h2 className="mt-3 text-3xl font-bold">{text.quickTitle}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
              {text.quickDescription}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="group flex min-h-[34rem] h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="min-h-[7.5rem] flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900">
                      {text.whatsappQr}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {text.whatsappQrText}
                    </p>
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
                    {text.fastReply}
                  </span>
                </div>
                <div className="mt-5 flex h-72 items-center justify-center">
                  <div className="flex h-56 w-56 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
                    <Image
                      src="/images/Whatsapp-qr.jpg"
                      alt="WhatsApp QR code"
                      width={224}
                      height={224}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <p className="mt-4 min-h-[3.5rem] text-sm text-neutral-500">
                  {text.scanWhatsapp}
                </p>
                <a
                  href="https://wa.me/79326377240"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
                >
                  {text.openWhatsapp}
                </a>
              </div>

              <div className="group flex min-h-[34rem] h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="min-h-[7.5rem] flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900">
                      {text.wechatQr}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {text.wechatQrText}
                    </p>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                    {text.wechat}
                  </span>
                </div>
                <div className="mt-5 flex h-72 items-center justify-center">
                  <div className="flex h-56 w-56 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
                    <Image
                      src="/images/wechat-qr.png.jpg"
                      alt="WeChat QR code"
                      width={224}
                      height={224}
                      className="h-full w-full translate-y-2 object-contain"
                    />
                  </div>
                </div>
                <p className="mt-4 min-h-[3.5rem] text-sm text-neutral-500">
                  {text.scanWechat}
                </p>
              </div>

              <div className="group flex min-h-[34rem] h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div className="min-h-[7.5rem] flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900">
                      {text.instagramQr}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">
                      {text.instagramQrText}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#fff0e5] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {text.instagram}
                  </span>
                </div>
                <div className="mt-5 flex h-72 items-center justify-center">
                  <div className="flex h-56 w-56 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
                    <Image
                      src="/images/Ins-qr2.jpg"
                      alt="Instagram QR code"
                      width={224}
                      height={224}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <p className="mt-4 min-h-[3.5rem] text-sm text-neutral-500">
                  {text.scanInstagram}
                </p>
                <a
                  href="https://www.instagram.com/xvex_wix?igsh=MWw3bGlqOTJoN3FpZw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  {text.openInstagram}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
