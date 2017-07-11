function colorCalculator() {
  return Math.random() > 0.50 ? "red" : "blue";
}

/* regex pattern leveraged from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie */

function getCookie(key) {
  const pattern = new RegExp("(?:(?:^|.*;\s*)" + key + "\s*\=\s*([^;]*).*$)|^.*$")
  return document.cookie.replace(pattern, "$1");
}

function updateCookies() {
  let color = getCookie("red_or_blue_circle");
  let newViewCount;

  if (color === "") {
    color = colorCalculator();
    document.cookie = "red_or_blue_circle=" + color;
    document.cookie = "circle_views=1";
  } else {
    const views = getCookie("circle_views");
    newViewCount = parseInt(viewsCookie, 10) + 1;
    document.cookie = "circle_views=" + newViewCount;
  }

  return {color, newViewCount}
}

function paintView() {
  const {color, newViewCount} = updateCookies();

  document.getElementById("circle").style.backgroundColor = color;
  document.getElementById("viewCount").innerHTML = newViewCount;
}

paintView();