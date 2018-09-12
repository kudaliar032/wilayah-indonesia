import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import wilayah from './routes/wilayah';

const app = express();

// manipulasi header
app.use(cors());

// supaya bisa ambil dari body
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Server running');
});

// api wilayah indonesia
app.use('/api/wilayah', wilayah);

app.listen(1945);
