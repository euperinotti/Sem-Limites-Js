import express from 'express';
import path from 'path';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('./public/'));
app.use(router)

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})