// returns red or blue randomly with a 50/50 split
function colorCalculator() {
  return Math.random() > 0.50 ? "red" : "blue";
}

// REGEX pattern leveraged from MDN
// URL: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
// returns the cookie value associated with specified key or empty string
// function getCookie(key) {
//   const pattern = new RegExp("(?:(?:^|.*;\\s*)" + key + "\\s*\\=\\s*([^;]*).*$)|^.*$")
//   return document.cookie.replace(pattern, "$1");
// }

// Alternative to document.cookie, returns localStorage value associated with specified key or null
function getLocalStorageValue(key) {
  return localStorage.getItem(key);
}

// creates or updates cookies based on whether cookie exists on device
// function updateCookies() {
//   let color = getCookie("red_or_blue_circle");
//   let newViewCount;

//   if (color === "") {
//     color = colorCalculator();
//     document.cookie = "red_or_blue_circle=" + color;
//     newViewCount = 1;
//     document.cookie = "circle_views=" + newViewCount;
//   } else {
//     const views = getCookie("circle_views");
//     newViewCount = parseInt(views, 10) + 1;
//     document.cookie = "circle_views=" + newViewCount;
//   }

//   return {color, newViewCount}
// }

// adds to or updates the localStorage based on whether key exists
function updateLocalStorage() {
  let color = getLocalStorageValue("red_or_blue_circle");
  let newViewCount;

  if (color === null) {
    color = colorCalculator();
    localStorage.setItem("red_or_blue_circle", color);
    newViewCount = 1;
    localStorage.setItem("circle_views", newViewCount);
  } else {
    const views = getLocalStorageValue("circle_views");
    newViewCount = parseInt(views, 10) + 1;
    localStorage.setItem("circle_views", newViewCount);
  }

  return {color, newViewCount}
}

// renders the DOM according to cookie status
// function paintView() {
//   const {color, newViewCount} = updateCookies();

//   document.getElementById("circle").style.backgroundColor = color;
//   document.getElementById("viewCount").innerHTML = newViewCount;
// }

// renders the DOM according to localStorage status
function paintView2() {
  const {color, newViewCount} = updateLocalStorage();

  document.getElementById("circle").style.backgroundColor = color;
  document.getElementById("viewCount").innerHTML = newViewCount;
}

// paintView invocation
// paintView();
paintView2();