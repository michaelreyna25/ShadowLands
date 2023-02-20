const router = require('express').Router();
const app = express();

app.use((err, req, res, next) => {
    if(err.name === 'Unauthorized ') {
        res.status(401).json({message: 'Unauthorized'})
    }
});
