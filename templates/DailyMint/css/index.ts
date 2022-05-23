import { readFile } from "../../../lib/io";

export const getStyles = async () => {
  const styles = await readFile("./templates/DailyMint/css/styles.css");
  return styles;
}