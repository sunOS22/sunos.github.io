// todo
// none atm
if (/Mobi/.test(navigator.userAgent) === true)
  location.replace("mobile/index.html");

function SearchQuery(val) {
  document.getElementById("searchButton").href =
    "https://www.bing.com/search?q=" + val;
}

function buttonClick() {
  document.getElementById("searchBox").value = "";
}

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
  document.getElementById("contextMenu").style.display = "none";
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("contextMenu").style.display == "flex")
    hideMenu();
  else {
    var menu = document.getElementById("contextMenu");
    
    menu.style.display = "flex";
    
    var bcr = menu.getBoundingClientRect();
    
    // Context menu screen positioning logic
    if (e.pageX > window.innerWidth - bcr.width) {
      menu.style.left = e.pageX - bcr.width + "px";
    } else {
      menu.style.left = e.pageX + "px";
    }
    if (e.pageY > window.innerHeight - bcr.height) {
      menu.style.top = e.pageY - bcr.height + "px";
    } else {
      menu.style.top = e.pageY + "px";
    }
  }
}

function showInvidious() {
  new WinBox({
    title: "YouTube",
    icon: "icons/YT.png",
    class: "eclipsemono",
    x: "center",
    y: "center",
    width: "90%",
    height: "90%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    url: "https://ivp.cherries.to/", // replacement (yt.davidstudios.uk) is a work in progress but coming soon...
  });
}

function showNotepad() {
  new WinBox({
    title: "Notepad",
    icon: "icons/Notepad.png",
    class: "eclipsemono",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    url: "https://zen.unit.ms/",
  });
}

function showDiscordWindow() {
  new WinBox({
    title: "Discord",
    icon: "icons/discross.png",
    class: "eclipsemono",
    x: "center",
    y: "center",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    url: "http://discross.rc24.xyz",
  });
}

function showotherSearch() {
  new WinBox({
    title: "Envy search",
    class: ["no-min", "no-max", "no-title", "eclipsemono"],
    x: "left",
    y: "bottom",
    width: "45%",
    height: "50%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("teresasearch").cloneNode(true),
  });
}

function showWeather() {
  new WinBox({
    title: "Weather",
    icon: "icons/wttr.png",
    class: "eclipsemono",
    x: "center",
    y: "center",
    width: "100%",
    height: "100%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    url: "https://accuweather.com",
  });
}

function showTelegram() {
  new WinBox({
    title: "JS/Linux",
    icon: "icons/telegram_450x450.png",
    class: ["no-min", "eclipsemono"],
    x: "center",
    y: "center",
    width: "50%",
    height: "80%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    url: "https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=245",
  });
}




function manageDual() {
  new WinBox({
    title: " ",
    class: ["no-max", "no-min", "no-title", "eclipsemono"],
    x: "left",
    y: "bottom",
    width: "100%",
    height: "17%",
    header: 0,
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("teresadual").cloneNode(true),
  });
}

function showlock() {
  new WinBox({
    title: " ",
    class: ["no-max", "no-min", "no-close", "no-title", "eclipselock"],
    x: "left",
    y: "bottom",
    width: "100%",
    height: "100%",
    header: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    mount: document.getElementById("teresalock").cloneNode(true),
  });
}

function setWallpaper() {
  localStorage.setItem("bg", document.querySelector(".winbox #newid").value);
  document.body.style.backgroundImage =
    'url("' + document.querySelector(".winbox #newid").value + '")';
}

function purple() {
  localStorage.setItem("bg", "purple.png");
  document.body.style.backgroundImage = 'url("' + "purple.png" + '")';
}

function blue() {
  localStorage.setItem("bg", "wp.png");
  document.body.style.backgroundImage = 'url("' + "wp.png" + '")';
}

function classic() {
  localStorage.setItem("bg", "classic.png");
  document.body.style.backgroundImage = 'url("' + "classic.png" + '")';
}

function urlbox() {
  new WinBox({
    title: " ",
    class: ["no-max", "no-min", "no-title", "eclipsemono"],
    x: "center",
    y: "center",
    width: "25%",
    height: "50%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("urlbox").cloneNode(true),
  });
}


function showClock() {
  new WinBox({
    title: "Clock",
    icon: "icons/clock.png",
    class: "eclipsemono",
    x: "center",
    y: "center",
    width: "15%",
    height: "14%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("clock").cloneNode(true),
  });
}

function showlog() {
  new WinBox({
    title: "Credits",
    class: ["no-max", "no-min", "no-title", "eclipsemono"],
    x: "center",
    y: "center",
    width: "50%",
    height: "60%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("log").cloneNode(true),
  });
}

function showmore() {
  new WinBox({
    title: "Advanced information",
    class: ["eclipsemono"],
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("more").cloneNode(true),
  });
}

function ccdisplay() {
  new WinBox({
    title: "Themes",
    class: "eclipsemono",
    x: "center",
    y: "center",
    width: "25%",
    height: "50%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("ccdisplay").cloneNode(true),
  });
}

function showAboutWindow() {
  new WinBox({
    title: "About sunOS",
    class: ["no-max", "no-min", "eclipsemono"],
    x: "center",
    y: "center",
    width: "40%",
    height: "80%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("about").cloneNode(true),
  });
}

function showBooWindow() {
  new WinBox({
    title: " ",
    class: ["no-max", "no-min", "no-title", "eclipsemono"],
    x: "left",
    y: "bottom",
    width: "7%",
    height: "90%",
    header: 0,
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("Teresa").cloneNode(true),
  });
}

function showstore() {
  new WinBox({
    title: "App Explorer",
    icon: "icons/shop.png",
    class: ["eclipsemono"],
    x: "center",
    y: "center",
    width: "50%",
    height: "85%",
    header: 0,
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("TeresaZwei").cloneNode(true),
  });
}

function showmark() {
  new WinBox({
    title: " ",
    class: ["no-max", "no-min", "no-title", "eclipsemono"],
    x: "right",
    y: "bottom",
    width: "20%",
    height: "100%",
    header: 0,
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    mount: document.getElementById("TeresaMark").cloneNode(true),
  });
}

function ide() {
  new WinBox({
    title: "Online IDE",
    icon: "icons/ide.png",
    class: ["no-min", "eclipsemono"],
    x: "center",
    y: "center",
    width: "50%",
    height: "80%",
    top: 0,
    right: 0,
    bottom: 45,
    left: 0,
    url: "https://online-ide.com",
  });
}


function timeUpdate() {
  // 24-hour time example
  let x = new Date();
  let hours = x.getHours().toString().padStart(2, "0"); // 18
  let minutes = x.getMinutes().toString().padStart(2, "0"); // 37
  let seconds = x.getSeconds().toString().padStart(2, "0"); // 01
  let timeString = `${hours}:${minutes}:${seconds}`; // 18:37:01
  let element = document.getElementById("clock"); // assuming <... id="clock" ...>
  element.innerText = timeString;
}
timeUpdate();
setInterval(timeUpdate, 1000); // 1000ms -> 1 second delay
// Main window section over