import nodeHtmlToImage from "node-html-to-image";

interface IData {
  name: string;
  imageURI: string;
  websiteURL: string;
  mintDate: string;
  blockchain: string;
}

export const generateImage = async (html: string, data: IData) => {
  return await nodeHtmlToImage({
    html,
    transparent: true,
    content: {
      name: data.name,
      imageURI: data.imageURI,
      websiteURL: data.websiteURL,
      mintDate: data.mintDate,
      blockchain: data.blockchain,
    },
    puppeteerArgs: {
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });
};
