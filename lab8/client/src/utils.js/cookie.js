export function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

export function setCookie(name, value) {
    return document.cookie = `${name}=${value}`;
}

export function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}