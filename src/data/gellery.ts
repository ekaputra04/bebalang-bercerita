import fs from "fs";
import path from "path";

export function getGalleryImages(): string[] {
  const dirPath = path.join(process.cwd(), "public", "galeri");

  const files = fs.readdirSync(dirPath);

  const imageFiles = files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ext === ".jpg" || ext === ".jpeg" || ext === ".png";
    })
    .sort((a, b) => {
      const baseA = path.basename(a, path.extname(a));
      const baseB = path.basename(b, path.extname(b));

      // Konversi ke angka, fallback ke 0 jika bukan angka
      const numA = isNaN(parseInt(baseA, 10)) ? 0 : parseInt(baseA, 10);
      const numB = isNaN(parseInt(baseB, 10)) ? 0 : parseInt(baseB, 10);

      return numA - numB;
    });

  return imageFiles;
}
