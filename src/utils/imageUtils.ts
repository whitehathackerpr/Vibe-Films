import { StaticImageData } from "next/image";

// Default image placeholders
export const DEFAULT_THUMBNAIL = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1759&q=80';
export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80';

/**
 * Returns a valid image source or the provided default image if src is undefined
 */
export const getImageSrc = (
  src: string | undefined, 
  defaultImage: string | StaticImageData
): string | StaticImageData => {
  return src || defaultImage;
}; 