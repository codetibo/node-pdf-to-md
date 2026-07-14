/** A single text item extracted from a PDF page */
export type TxtItem = {
  str: string;
  x: number;
  y: number;
  fontName: string;
  fontSize: number;
  width: number;
  isMono: boolean;
  /** Whether the text has underline decoration (detected via Underline annotations or graphic lines) */
  underline: boolean;
  /** Whether the text has overline decoration (detected via graphic lines above text) */
  overline: boolean;
  /** Whether the text has strikethrough decoration (detected via StrikeOut annotations or graphic lines) */
  strikethrough: boolean;
};

/** A row of text items grouped by Y-position */
export type Row = TxtItem[];

/** Inline formatting for a font (detected via width-per-character analysis) */
export type FontStyle = {
  strong: boolean;
  em: boolean;
};

/** Custom font-size thresholds for heading detection (defaults used when omitted) */
export type HeadingSizes = {
  /** Minimum font size for H1 (default 20) */
  h1?: number;
  /** Minimum font size for H2 (default 16) */
  h2?: number;
  /** Minimum font size for H3 (default 14) */
  h3?: number;
  /** Minimum font size for H4 (default 12.5) */
  h4?: number;
  /** Minimum font size for H5 (default 11.5) */
  h5?: number;
  /** Minimum font size for H6 (default 10, requires bold font) */
  h6?: number;
};

/** Options for the PDF to Markdown conversion */
export type PdfToMarkdownOptions = {
  /** Whether to allow cancellation via abort signal */
  signal?: AbortSignal;
  /**
   * 1-indexed page numbers to include. If not provided, all pages are converted.
   * Example: `[1, 3, 5, 6, 7]` — only pages 1, 3, and 5–7.
   */
  pages?: number[];
  /**
   * Custom font-size thresholds for heading detection.
   * Only specify the levels you want to override; defaults are used for the rest.
   * Example: `{ h1: 18, h2: 14 }` — smaller headings for documents with smaller fonts.
   */
  headingSizes?: HeadingSizes;
};
