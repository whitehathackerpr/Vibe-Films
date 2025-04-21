import { StaticImageData } from "next/image";

/**
 * Returns a valid image source or the provided default image if src is undefined
 */
export const getImageSrc = (
  src: string | undefined, 
  defaultImage: string | StaticImageData
): string | StaticImageData => {
  return src || defaultImage;
}; 