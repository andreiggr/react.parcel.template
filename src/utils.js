function getContainerURL() {
  const { origin, pathname } = window.location;
  const href = `${origin}${pathname}`;
  let result;
  if (href.endsWith("/")) {
    result = href;
  } else if (
    href.endsWith("/view") ||
    href.endsWith("/view-ipr") ||
    href.endsWith("/new-ipr") ||
    href.endsWith("/edit-ipr")
  ) {
    result = `${href.split("/").slice(0, -1).join("/")}/`;
  } else if (href.split("/").slice(-1)[0].startsWith("@@")) {
    result = `${href.split("/").slice(0, -1).join("/")}/`;
  } else {
    result = `${href}/`;
  }
  return result;
}

export { getContainerURL };
