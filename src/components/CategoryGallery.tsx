// src/components/CategoryGallery.tsx
import React from "react";
import { motion } from "framer-motion";

type Props = {
  id?: string;
  title: string;
  images: string[];
  onOpen: (items: string[], index: number) => void;
};

export default function CategoryGallery({ id, title, images, onOpen }: Props) {
  const desktopRowHeight = "88px"; // ajuste si tu veux lignes plus hautes

  // motif de 8 pour chaque catégorie (col, row, colStart, rowStart, optional badge)
  const layouts: Record<
    string,
    { col: number; row: number; colStart: number; rowStart: number; badge?: string }[]
  > = {
    portrait: [
      { col: 3, row: 3, colStart: 1, rowStart: 1, badge: "Portrait" },
      { col: 2, row: 3, colStart: 4, rowStart: 1 },
      { col: 2, row: 3, colStart: 6, rowStart: 1 },
      { col: 3, row: 3, colStart: 3, rowStart: 3 },
      { col: 2, row: 3, colStart: 6, rowStart: 4 },
      { col: 3, row: 3, colStart: 1, rowStart: 4 },
      { col: 2, row: 2, colStart: 3, rowStart: 6 },
      { col: 2, row: 2, colStart: 5, rowStart: 6 },
    ],
    nature: [
      { col: 7, row: 4, colStart: 1, rowStart: 1, badge: "Nature" },
      { col: 5, row: 2, colStart: 8, rowStart: 1 },
      { col: 3, row: 2, colStart: 8, rowStart: 3 },
      { col: 4, row: 2, colStart: 1, rowStart: 5 },
      { col: 4, row: 2, colStart: 5, rowStart: 5 },
      { col: 4, row: 2, colStart: 9, rowStart: 5 },
      { col: 6, row: 2, colStart: 1, rowStart: 7 },
      { col: 6, row: 2, colStart: 7, rowStart: 7 },
    ],
    urban: [
      { col: 4, row: 2, colStart: 1, rowStart: 1, badge: "Urbain" },
      { col: 2, row: 4, colStart: 5, rowStart: 1 },
      { col: 2, row: 2, colStart: 7, rowStart: 1 },
      { col: 4, row: 4, colStart: 1, rowStart: 3 },
      { col: 4, row: 2, colStart: 5, rowStart: 5 },
      { col: 2, row: 2, colStart: 7, rowStart: 3 },
      { col: 2, row: 2, colStart: 7, rowStart: 5 },
      { col: 4, row: 2, colStart: 1, rowStart: 7 },
    ],
    events: [
      { col: 6, row: 3, colStart: 1, rowStart: 1, badge: "Événement" },
      { col: 3, row: 2, colStart: 1, rowStart: 4 },
      { col: 3, row: 2, colStart: 4, rowStart: 4 },
      { col: 2, row: 2, colStart: 1, rowStart: 6 },
      { col: 2, row: 2, colStart: 3, rowStart: 6 },
      { col: 2, row: 2, colStart: 5, rowStart: 6 },
      { col: 3, row: 2, colStart: 1, rowStart: 8 },
      { col: 3, row: 2, colStart: 4, rowStart: 8 },
    ],
  };

  const ImgItem = ({
    src,
    idx,
    style,
    badge,
  }: {
    src: string;
    idx: number;
    style?: React.CSSProperties;
    badge?: string;
  }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      style={style}
      className="relative overflow-hidden rounded-xl cursor-pointer shadow-sm"
      onClick={() => onOpen(images, idx)}
    >
      <img
        src={src}
        alt={`${title} ${idx + 1}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500"
      />
      {badge && (
        <div className="absolute left-3 top-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {badge}
        </div>
      )}
      <div className="absolute left-0 right-0 bottom-0 py-3 px-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm">
        {`${title} — ${idx + 1}`}
      </div>
    </motion.div>
  );

  // pick layout for this category
  const layout = layouts[id ?? ""] ?? null;

  // compute blockHeight: last used row index in the motif (rowStart + rowSpan - 1)
  const blockHeight =
    layout && layout.length
      ? Math.max(...layout.map((l) => l.rowStart + l.row - 1))
      : 0;

  // number of repeats needed
  const patternLength = layout ? layout.length : 0;
  const repeats = patternLength ? Math.ceil(images.length / patternLength) : 1;

  // compute total rows we need to explicitly create (to avoid auto-placement surprises)
  const totalRows = blockHeight * repeats || 0;

  // columns template per category
  const gridCols =
    id === "portrait"
      ? "repeat(8, minmax(0, 1fr))"
      : id === "nature"
      ? "repeat(12, minmax(0, 1fr))"
      : id === "urban"
      ? "repeat(8, minmax(0, 1fr))"
      : id === "events"
      ? "repeat(6, minmax(0, 1fr))"
      : "repeat(8, minmax(0, 1fr))";

  const renderGridItems = () => {
    if (!layout) {
      // fallback simple grid when no pattern defined
      return images.map((src, i) => (
        <ImgItem
          key={`img-${i}`}
          src={src}
          idx={i}
          style={{ gridColumn: "auto", gridRow: "auto" }}
        />
      ));
    }

    return images.map((src, i) => {
      const base = layout[i % patternLength];
      const repeatBlock = Math.floor(i / patternLength);
      const rowOffset = repeatBlock * blockHeight;

      const colStart = base.colStart;
      const rowStart = base.rowStart + rowOffset;
      const style: React.CSSProperties = {
        gridColumn: `${colStart} / span ${base.col}`,
        // gridRow start and span; gridRow uses 1-based index
        gridRow: `${rowStart} / span ${base.row}`,
      };

      return (
        <ImgItem
          key={`img-${i}`}
          src={src}
          idx={i}
          style={style}
          badge={base.badge}
        />
      );
    });
  };

  return (
    <div id={id}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      {/* mobile fallback */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:hidden">
        {images.map((src, i) => (
          <ImgItem key={`m-${i}`} src={src} idx={i} style={{ gridColumn: "auto", gridRow: "auto" }} />
        ))}
      </motion.div>

      {/* desktop: explicit grid with repeated motif */}
      <div
        className="hidden lg:grid gap-4"
        style={{
          gridTemplateColumns: gridCols,
          gridTemplateRows: totalRows ? `repeat(${totalRows}, ${desktopRowHeight})` : undefined,
        }}
      >
        {renderGridItems()}
      </div>
    </div>
  );
}
