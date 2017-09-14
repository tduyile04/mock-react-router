const matchPath = (pathname, options) => {
  const { exact = false, path } = options;

  if (!path) {
    return {
      path: null,
      url: pathname,
      isExact: true
    }
  }
  // .exec returns an array containing the matched text if it finds a match
  // otherwise it returns null
  const match = new RegExp(`^${path}`).exec(pathname);

  if (!match) {
    // There wasnt a match
    return null;
  }

  const url = match[0];
  const isExact = pathname === url;

  if (exact && !isExact) {
    // There was a match, but it isn't an exact match as specified
    // by the exact prop
    return null;
  }

  return {
    path,
    isExact,
    url
  }
}

export default matchPath;
