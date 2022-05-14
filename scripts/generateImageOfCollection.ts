import { writeFile } from "../lib/io"
import { INFTCollection } from "../types/subgraph"
import { getImage } from "../utils/getImage"

export const generateImageOfCollection = async (collection: INFTCollection) => {
  const bufferImage = await getImage(collection)
  if (!bufferImage) return undefined

  // Save image to disk
  const image = Buffer.from(bufferImage as any)
  await writeFile(`./data/images/${collection.collectionId}.png`, image)
}