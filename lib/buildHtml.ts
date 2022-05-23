import { readFile } from "./io";

const getStyles = (css: string) => {
  const deafultStyles = `
  <style type="text/css">
    ${css}
  </style>
  `

  const styles = `
  ${deafultStyles}
  `
  return styles;
}

const buildHTML = (styles: string, body: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    ${styles}
  </head>
  ${body}
  </html>
  `
}

export interface IHTML {
  body: string;
  styles: string;
}

export const getHTML = (data: IHTML) => {
  const styles = getStyles(data.styles);
  const body = data.body
  const html = buildHTML(styles, body);
  return html;
}