import dayjs from "dayjs"
import { getStyles } from "../templates/DailyMint/css"
import { getBody } from "../templates/DailyMint/html"
import { writeFile } from "../lib/io"
import { getImage } from "../utils/getImage"

const date = dayjs().format('MMM DD');

const getFormatData = async (drops: any) => {
  const data = {
    drops: drops,
    date: date
  }
  return data
}

export const generateImageOfDailyMint = async (drop: any) => {
  const data = await getFormatData(drop)
  if (!data) return

  const bufferImage = await getImage({
    body: getBody(data),
    styles: await getStyles()
  })

  if (!bufferImage) return undefined

  // Save image to disk
  const image = Buffer.from(bufferImage as any)
  await writeFile(`./data/DailyMint/images/${dayjs().format("DD-MM-YYYY")}.png`, image)
}