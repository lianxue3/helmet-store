"use client";

import { useSiteLanguage } from "../../components/LanguageProvider";
import { productText, siteText } from "../../components/site-text";
import ProductGallery from "./ProductGallery";

type GraphicOption = {
  name: string;
  image: string;
  hoverImage?: string;
  frontImage?: string;
  sideImage?: string;
  openImage?: string;
  backImage?: string;
};

type Product = {
  name: string;
  slug: string;
  image: string;
  hoverImage?: string;
  frontImage?: string;
  sideImage?: string;
  openImage?: string;
  backImage?: string;
  tag?: string;
  price: string;
  material: string;
  weight: string;
  certification: string;
  sizes: string[];
  graphics: GraphicOption[];
};

export default function ProductDetailContent({ product }: { product: Product }) {
  const { language } = useSiteLanguage();
  const text = siteText.detail[language];
  const translated = productText[product.slug as keyof typeof productText]?.[language];

  return (
    <main className="min-h-screen bg-white px-6 py-20 text-neutral-900">
      <div className="mx-auto max-w-5xl">
        <a
          href="/products"
          className="text-sm text-neutral-500 transition hover:text-orange-400"
        >
          ← {text.back}
        </a>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-orange-400">
          {text.badge}
        </p>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          {product.name}
        </h1>

        <p className="mt-4 text-xl text-orange-400">{product.price}</p>

        <div className="mt-10 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8">
          <ProductGallery
            name={product.name}
            image={product.image}
            hoverImage={product.hoverImage}
            frontImage={product.frontImage}
            sideImage={product.sideImage}
            openImage={product.openImage}
            backImage={product.backImage}
            tag={product.tag}
            graphics={product.graphics}
          />

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            {translated?.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <p className="text-sm text-neutral-400">{text.material}</p>
              <p className="mt-2 text-lg font-semibold text-neutral-900">
                {product.material}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <p className="text-sm text-neutral-400">{text.weight}</p>
              <p className="mt-2 text-lg font-semibold text-neutral-900">
                {product.weight}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <p className="text-sm text-neutral-400">{text.certification}</p>
              <p className="mt-2 text-lg font-semibold text-neutral-900">
                {product.certification}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4">
              <p className="text-sm text-neutral-400">{text.sizes}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-900"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            {translated?.details}
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              {text.features}
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {translated?.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              {text.contact}
            </a>

            <a
              href="https://wa.me/79326377240"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              {text.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
