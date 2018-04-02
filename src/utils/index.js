const localStorageCache = {};
export function setLocalStorage(key, value) {
  if (window.localStorage) {
    window.localStorage.setItem(key, value);
  } else {
    localStorageCache[key] = value;
    global.localStorageCache = localStorageCache;
  }
}

export function getLocalStorage(key) {
  if (window.localStorage) {
    return window.localStorage.getItem(key);
  } else {
    return global.localStorageCache[key];
  }
}

export function toCamelCase(str) {
  return str.replace(/\_(\w)/, function (a, b) {
    return b.toUpperCase();
  });
}