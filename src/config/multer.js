import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  // o referencial do resolve é sempre a pasta do arquivo - nesse caso é a pasta config
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
