const breakpoints = [3840, 2048, 1200, 640, 320];

function localImageLink(base, ext, size) {
  return `/assets/${base}${size}.${ext}`;
}

export const slides = [
  {
    base: "loginx",
    ext: "png",
    original: { width: 3840, height: 6400 },
    alt: "login",
  },
].map(({ base, ext, original, alt }) => {
  const { width, height } = original;

  return {
    src: localImageLink(base, ext, width),
    width,
    height,
    alt,
    srcSet: breakpoints
      .filter((bp) => bp <= width)
      .map((bp) => ({
        src: localImageLink(base, ext, bp),
        width: bp,
        height: Math.round((height / width) * bp),
      })),
  };
});
