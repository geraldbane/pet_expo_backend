import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('images')
export class ImagesController {
  @Get(':imageName')
  async getImage(@Param('imageName') imageName: string, @Res() res: Response) {
    const imagePath = path.resolve(__dirname, '..', 'Images', imageName);
    try {
      const stat = fs.statSync(imagePath);
      res.setHeader('Content-Length', stat.size);
      const contentType = getImageContentType(imagePath);
      res.setHeader('Content-Type', contentType);
      fs.createReadStream(imagePath).pipe(res);
    } catch (error) {
      res.status(404).send('Image not found');
    }
  }
}
function getImageContentType(imagePath: string): string {
  const ext = path.extname(imagePath).toLowerCase();
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.gif':
      return 'image/gif';
    default:
      return 'application/octet-stream';
  }
}