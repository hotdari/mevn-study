const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const PORT = 12010;
const _path = path.join(__dirname, './dist')
console.log(_path)
app.use('/dist', express.static(_path));
app.use(logger('tiny'));

//커스텀 미들웨어
app.use((req, res, next)=>{
    console.log('요청이왔네요~')
    next()
})

app.get('/book/:bookName', (req, res) => {
    const {bookName} = req.params;
    res.send(`${bookName}을 주문하셨네요.`)
})

app.listen(PORT, ()=>{
    console.log(`서버${PORT}`)
})