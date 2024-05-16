import { Request, Response } from 'express';
import { put } from '@vercel/blob';
import multer from 'multer';

// Initialize multer middleware
const uploadFile = multer().single('photo');

export const index = async (req: Request, res: Response, next: Function) => {
    try {
        res.render('index');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

export const upload = (req: Request, res: Response, next: Function) => {
    uploadFile(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        try {
            const file = req.file;
            if (!file) {
                return res.status(400).send('No file uploaded');
            }

            // Now you can process the uploaded file
            const blob = await put(file.originalname, file.buffer, { access: 'public',token:"vercel_blob_rw_zwlZpwVo4HyjTIgI_eHn3QlcoaEx2JgMrudUm3G5t3OJEJG" });

            return res.json(blob);
        } catch (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
    });
};