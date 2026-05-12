"use client";

import { useSiteLanguage } from "../../components/LanguageProvider";
import { siteText } from "../../components/site-text";

export default function ProductNotFound() {
  const { language } = useSiteLanguage();
  const text = siteText.detail[language];

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-neutral-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">{text.notFound}</h1>
        <p className="mt-4 text-neutral-600">{text.notFoundText}</p>
      </div>
    </main>
  );
}
