const formFilename = (url) => {
  const protocolRemoved = url.split('').slice(8);
  const normalizeName = protocolRemoved.map((value) => (value === '.' || value === '/' ? '-' : value));
  return normalizeName.join('').concat('.html');
};

export default formFilename;
