function markdownToHTML(markdownText) {
  return marked.parse(markdownText);
}

function updatePreview() {
  const markdownText = document.getElementById("markdownEditor").value;
  const dirty = marked.parse(markdownText);
  const clean = DOMPurify.sanitize(dirty);
  document.getElementById("htmlPreview").innerHTML = clean;
}

function downloadHTML() {
  const markdownText = document.getElementById("markdownEditor").value;
  const htmlContent = markdownToHTML(markdownText);
  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "converted.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
