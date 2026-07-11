/**
 * pdf-to-md-ts - Convert PDF documents to Markdown
 *
 * Works in both browser and Node.js environments.
 * Uses pdf.js for PDF parsing and mdast for Markdown serialization.
 *
 * @module pdf-to-md-ts
 */

export { pdfToMarkdown } from './converter.js';
export type { TxtItem, Row, FontStyle, PdfToMarkdownOptions } from './types.js';
