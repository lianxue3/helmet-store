"use client";

import Image from "next/image";
import { useState } from "react";
import { useSiteLanguage } from "../../components/LanguageProvider";
import { siteText } from "../../components/site-text";

type GraphicOption = {
  name: string;
  image: string;
  hoverImage?: string;
  frontImage?: string;
  sideImage?: string;
  openImage?: string;
  backImage?: string;
};

type ViewMode = "front" | "side" | "open" | "back";

type ProductGalleryProps = {
  name: string;
  image: string;
  hoverImage?: string;
  frontImage?: string;
  sideImage?: string;
  openImage?: string;
  backImage?: string;
  tag?: string;
  graphics: GraphicOption[];
};

function getDefaultView(variant: GraphicOption): ViewMode {
  return variant.image === (variant.frontImage ?? variant.image) ? "front" : "side";
}

function getViewImages(variant: GraphicOption) {
  const front =
    variant.frontImage ??
    (variant.image !== variant.sideImage ? variant.image : variant.hoverImage) ??
    variant.image;

  const side =
    variant.sideImage ??
    (variant.image === front ? variant.hoverImage : variant.image) ??
    variant.image;

  return {
    front,
    side,
    open: variant.openImage,
    back: variant.backImage,
  };
}

export default function ProductGallery({
  name,
  image,
  hoverImage,
  frontImage,
  sideImage,
  openImage,
  backImage,
  tag,
  graphics,
}: ProductGalleryProps) {
  const { language } = useSiteLanguage();
  const text = siteText.detail[language];

  const defaultVariant: GraphicOption = {
    name: text.standard,
    image,
    hoverImage,
    frontImage,
    sideImage,
    openImage,
    backImage,
  };

  const [selectedGraphic, setSelectedGraphic] = useState<GraphicOption>(
    defaultVariant
  );
  const [selectedView, setSelectedView] = useState<ViewMode>(
    getDefaultView(defaultVariant)
  );

  const viewImages = getViewImages(selectedGraphic);
  const currentMainImage =
    viewImages[selectedView] ?? viewImages.front ?? viewImages.side ?? selectedGraphic.image;

  const currentHoverImage =
    selectedView === "front"
      ? viewImages.side ?? currentMainImage
      : selectedView === "side"
        ? viewImages.front ?? currentMainImage
        : currentMainImage;

  const hasExtraViews = Boolean(viewImages.open || viewImages.back);

  return (
    <>
      <div className="group relative h-64 overflow-hidden rounded-3xl sm:h-72">
        <Image
          src={`/images/${currentMainImage}`}
          alt={name}
          fill
          className={`object-contain p-4 transition duration-500 group-hover:scale-105 ${
            selectedView === "front" || selectedView === "side"
              ? "group-hover:opacity-0"
              : ""
          }`}
        />
        <Image
          src={`/images/${currentHoverImage}`}
          alt={`${name} alternate view`}
          fill
          className={`object-contain p-4 transition duration-500 group-hover:scale-105 ${
            selectedView === "front" || selectedView === "side"
              ? "opacity-0 group-hover:opacity-100"
              : "hidden"
          }`}
        />
        {tag && (
          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white">
            {tag}
          </div>
        )}
      </div>

      {hasExtraViews && (
        <div className="mt-4 flex flex-wrap gap-3">
          {(["front", "side", "open", "back"] as ViewMode[]).map((view) => {
            if (!viewImages[view]) return null;

            return (
              <button
                key={view}
                type="button"
                onClick={() => setSelectedView(view)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedView === view
                    ? "bg-orange-500 text-white"
                    : "border border-neutral-300 bg-white text-neutral-700 hover:border-orange-400 hover:text-orange-500"
                }`}
              >
                {text.views[view]}
              </button>
            );
          })}
        </div>
      )}

      {graphics.length > 0 && (
        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
            {text.graphics}
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[defaultVariant, ...graphics].map((graphic) => {
              const isActive = selectedGraphic.name === graphic.name;

              return (
                <button
                  key={graphic.name}
                  type="button"
                  onClick={() => {
                    setSelectedGraphic(graphic);
                    setSelectedView(getDefaultView(graphic));
                  }}
                  className={`overflow-hidden rounded-2xl border text-left transition ${
                    isActive
                      ? "border-orange-400 bg-orange-50"
                      : "border-neutral-200 bg-neutral-50 hover:border-orange-300"
                  }`}
                >
                  <div className="group relative h-48 overflow-hidden">
                    <Image
                      src={`/images/${graphic.image}`}
                      alt={graphic.name}
                      fill
                      className="object-contain p-4 transition duration-500 group-hover:scale-105 group-hover:opacity-0"
                    />
                    <Image
                      src={`/images/${graphic.hoverImage ?? graphic.image}`}
                      alt={`${graphic.name} front view`}
                      fill
                      className="object-contain p-4 opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>

                  <div className="border-t border-neutral-200 bg-white px-4 py-3">
                    <p className="text-sm font-semibold text-neutral-900">
                      {text.graphicNames[graphic.name] ?? graphic.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
