export function compiler(input) {
  return `${input
    .replaceAll("class", "className")
    .replaceAll("for", "htmlFor").indexOf(">",input.indexOf("img"))}`;
}