import express from 'express';
const app = express();
import morgan from 'morgan';
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello there');
})

app.listen(3000);