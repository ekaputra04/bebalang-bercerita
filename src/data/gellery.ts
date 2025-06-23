import fs from "fs";
import path from "path";

export function getGalleryImages(): string[] {
  const dirPath = path.join(process.cwd(), "public", "galeri");

  const files = fs.readdirSync(dirPath);

  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ext === ".jpg" || ext === ".jpeg" || ext === ".png";
  });

  return imageFiles;
}
