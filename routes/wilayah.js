import express from 'express';
import {getWilayah} from "../controllers/wilayah";

const app = express();

app.get('/', getWilayah);

export default app;
