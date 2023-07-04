import { useMemo } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/';

const SIZES = {
  backdrop: ['w300', 'w780', 'w1280', 'original'],
  logo: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile: ['w45', 'w185', 'h632', 'original'],
  still: ['w92', 'w185', 'w300', 'original'],
};

export function getURLForSize(size: string, imgPath: string) {
  return `${BASE_URL}${size}${imgPath}`;
}

export function getSmallestImage(
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still',
  path: string
) {
  const sizes = SIZES[type];
  return getURLForSize(sizes[0], path);
}

function getSrcSetForImage(
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still',
  path: string
) {
  const sizes = SIZES[type];
  const srcSets = sizes
    .slice(0, -1)
    .map((size, i) => `${getURLForSize(size, path)} ${size.slice(1)}w`);

  const lastTwoSizes = sizes
    .slice(sizes.length - 3, -1)
    .map((a) => parseInt(a.slice(1)));

  srcSets.push(
    `${getURLForSize('original', path)} ${
      (lastTwoSizes[1] << 1) - lastTwoSizes[0]
    }w`
  );

  return srcSets.join(',');
}

export const TMDBImage = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  path: string;
  alt?: string;
  className?: string;
  aspectRatio?: number;
}) => {
  const smallestImage = useMemo(
    () => getSmallestImage(props.type, props.path),
    [props.type, props.path]
  );
  const srcSet = useMemo(
    () => getSrcSetForImage(props.type, props.path),
    [props.type, props.path]
  );
  return (
    <img
      src={smallestImage}
      alt={props.alt}
      // srcSet={srcSet}
      className={[props.className, 'w-full'].join(' ')}
      loading="lazy"
      style={{ aspectRatio: props.aspectRatio }}
      onLoad={(ev) => ev.currentTarget.setAttribute('srcset', srcSet)}
      width={360}
    />
  );
};
