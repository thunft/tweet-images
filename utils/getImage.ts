import { generateImage } from "./generateImage"
import { getHTML, IHTML } from "../lib/buildHtml"

export const getImage = async (data: IHTML) => {
  const html = getHTML(data)

  const bufferImage = await generateImage(html)
  return bufferImage
}