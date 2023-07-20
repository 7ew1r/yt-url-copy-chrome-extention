function simplifyURL(url) {
  let index = url.indexOf('&');
    if (index !== -1) {
        return url.slice(0, index);
    }
    return url;
}

const copyButton = document.getElementById("copy");
copyButton.addEventListener("click", () => {
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, tabs => {
    const message = document.getElementById("message");
    const url = simplifyURL(tabs[0].url);
    message.innerText = url;
    navigator.clipboard.writeText(url);
  });
});