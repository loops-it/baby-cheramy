import express, { Express } from 'express';
import path from 'path';
import { index, upload } from './controllers/mainController';
const app: Express = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));


app.get('/', index);
app.post('/upload', upload);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
