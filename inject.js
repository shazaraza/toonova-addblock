var s = document.createElement('script');
s.src = chrome.runtime.getURL('delete.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
