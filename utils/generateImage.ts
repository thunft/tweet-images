import nodeHtmlToImage from "node-html-to-image";

export const generateImage = async (html: string) => {
  return await nodeHtmlToImage({
    html,
    transparent: true,
    puppeteerArgs: {
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });
};
