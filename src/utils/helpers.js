import { state, step } from "../stores/state.js";
export function next() {
  step.update((n) => n + 1);
}

export function downloadFile(data, fileName, type = "text/html") {
  // Create an invisible A element
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);

  // Set the HREF to a Blob representation of the data to be downloaded
  a.href = window.URL.createObjectURL(new Blob([data], { type }));

  // Use download attribute to set set desired file name
  a.setAttribute("download", fileName);

  // Trigger the download by simulating click
  a.click();

  // Cleanup
  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
}
function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}
export function sanitizeComponentName(str) {
  const regex = /[^a-z]/gi;
  str = upperCaseFirst(str.replaceAll(regex, "").trim());
  return str;
}
