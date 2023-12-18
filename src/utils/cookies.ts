export function getCookie(name: string) {
  const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface CookieProps {
  path?: string;
  expires?: string | number | Date;
  [key: string]: any;
}

export function setCookie(name: string, value: string, props: CookieProps = {}): void {
  const defaultProps: CookieProps = {
    path: "/",
    SameSite: "Strict"
  };

  const mergedProps = { ...defaultProps, ...props };

  let { expires } = mergedProps;

  if (typeof expires === "number") {
    const d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = mergedProps.expires = d;
  }

  if (expires && expires.toString) {
    mergedProps.expires = expires.toString();
  }

  const propStrings = Object.entries(mergedProps).map(([key, value]) => {
    if (value === true) {
      return key;
    }
    return `${key}=${value}`;
  });

  const propString = propStrings.join("; ");

  const encodedValue = encodeURIComponent(value);

  document.cookie = `${name}=${encodedValue}; ${propString}`;
}

export function deleteCookie(name: string): void {
  setCookie(name, "", { "max-age": -1 });
}
