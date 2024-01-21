function copyToClipboard() {
  var copyText = document.getElementById("copyText");
  var copyButton = document.querySelector(".copy-button");

  copyText.select();
  document.execCommand("copy");

  copyButton.classList.add("copied");
  copyButton.innerText = "Copied!";

  setTimeout(function() {
    copyButton.classList.remove("copied");
    copyButton.innerText = "Copy";
  }, 1500);
}