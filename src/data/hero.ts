/*
 * Hero guitar picks: the photos and colors shown on the landing page.
 *
 * To swap a photo: add an image to src/assets/hero/ (any size or color; it is
 * cropped to the pick and turned black and white automatically), import it
 * below, and point a pick's `photo` at it. Use `focus` to choose which part
 * of the photo stays in frame, e.g. 'center top' or '30% 50%'.
 *
 * To change a color: set `color` to one of the brand colors below, or to any
 * CSS color such as '#ff6a3d'.
 *
 * Picks are listed back to front, in the order they animate in.
 */
import type { ImageMetadata } from 'astro';

import guitar from '../assets/hero/guitar.jpg';
import drummer from '../assets/hero/drummer.jpg';
import piano from '../assets/hero/piano.jpg';
import singer from '../assets/hero/singer.jpg';

/** Brand colors from the Levon Brand Standards file in Figma. */
export const brandColors = {
  'yellow-submarine': 'var(--color-yellow-submarine)',
  'pink-cadillac': 'var(--color-pink-cadillac)',
  'blue-suede-shoes': 'var(--color-blue-suede-shoes)',
  'green-river': 'var(--color-green-river)',
} as const;

export type BrandColor = keyof typeof brandColors;

export interface HeroPick {
  photo: ImageMetadata;
  /** Describes the photo for screen readers. */
  alt: string;
  color: BrandColor | (string & {});
  /** CSS object-position for the photo. Defaults to 'center'. */
  focus?: string;
}

/** Exactly four picks: top, left, right, front. */
export const heroPicks: [HeroPick, HeroPick, HeroPick, HeroPick] = [
  { photo: guitar, alt: 'Musician playing an acoustic guitar', color: 'yellow-submarine' },
  { photo: drummer, alt: 'Drummer mid-beat', color: 'pink-cadillac' },
  { photo: piano, alt: 'Pianist playing by a window', color: 'blue-suede-shoes' },
  { photo: singer, alt: 'Singer playing an electric guitar on stage', color: 'green-river' },
];
