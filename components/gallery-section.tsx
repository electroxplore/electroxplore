"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const photos = [
  {
    src: "/images/gallery-1.png",
    alt: "Engineering research workshop with circuit boards and oscilloscopes",
    caption: "Research Workshop",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Close-up PCB circuit board with glowing components",
    caption: "PCB Design Lab",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Engineering seminar with presenter and students",
    caption: "Technical Seminar",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-4.png",
    alt: "Robotic arm prototype on a lab bench",
    caption: "Robotics Project",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-5.png",
    alt: "Team collaborating around a laptop with ML graphs",
    caption: "ML Research Session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-6.png",
    alt: "Indoor drone prototype being tested in a lab",
    caption: "Drone Lab Test",
    span: "col-span-2 row-span-1",
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Our Work in Action</p>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-foreground text-balance">
            INSIDE<br />
            <span className="text-primary">ELECTROXPLORE</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-base leading-relaxed">
            A glimpse into our research sessions, workshops, lab experiments, and team collaborations.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${photo.span}`}
              aria-label={`View: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-foreground text-xs font-semibold uppercase tracking-wider">{photo.caption}</p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-background/70 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-foreground" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${photos[lightbox].caption}`}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm px-6 py-3">
              <p className="text-foreground text-sm font-semibold">{photos[lightbox].caption}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{photos[lightbox].alt}</p>
            </div>
          </div>

          {/* Prev / Next */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-foreground hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card border border-border rounded-xl flex items-center justify-center text-foreground hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
