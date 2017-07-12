// returns red or blue randomly with a 50/50 split
function colorCalculator() {
  return Math.random() > 0.50 ? "red" : "blue";
}

// REGEX pattern leveraged from MDN
// URL: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
// returns the cookie value associated with specified key or empty string
function getCookie(key) {
  const pattern = new RegExp("(?:(?:^|.*;\s*)" + key + "\s*\=\s*([^;]*).*$)|^.*$")
  return document.cookie.replace(pattern, "$1");
}

// creates or updates cookies based on whether cookie exists on device
function updateCookies() {
  let color = getCookie("red_or_blue_circle");
  let newViewCount;

  if (color === "") {
    color = colorCalculator();
    document.cookie = "red_or_blue_circle=" + color;
    newViewCount = 1;
    document.cookie = "circle_views=" + newViewCount;
    console.log("no cookie");
  } else {
    console.log("has cookie");
    const views = getCookie("circle_views");
    newViewCount = parseInt(views, 10) + 1;
    document.cookie = "circle_views=" + newViewCount;
  }

  return {color, newViewCount}
}

// renders the DOM according to cookie status
function paintView() {
  const {color, newViewCount} = updateCookies();

  document.getElementById("circle").style.backgroundColor = color;
  document.getElementById("viewCount").innerHTML = newViewCount;
}

// paintView invocation
paintView();