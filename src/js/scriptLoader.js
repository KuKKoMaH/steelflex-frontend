function scriptLoader(url) {
  if (Array.isArray(url)) {
    var prom = [];
    url.forEach(function (item) {
      prom.push(scriptLoader(item));
    });
    return Promise.all(prom);
  }

  return new Promise(function (resolve, reject) {
    var r = false;
    var t = document.getElementsByTagName('script')[0];
    var s = document.createElement('script');

    s.type = 'text/javascript';
    s.src = url;
    s.async = true;
    s.onload = s.onreadystatechange = function () {
      if (!r && (!this.readyState || this.readyState === 'complete')) {
        r = true;
        resolve(this);
      }
    };
    s.onerror = s.onabort = reject;
    t.parentNode.insertBefore(s, t);
  });
}

module.exports = scriptLoader;
