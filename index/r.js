const link = window.location.pathname;
if (link.includes("/index/")) {
    window.location.href = "https://ygfanpage.github.io/index/" + link.substring(link.indexOf("x/") + 2);
}
