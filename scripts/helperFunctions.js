function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function htmlToElement(html) {
  let template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}
