module.exports.handleBook = (req, res) => {
    console.log(req.params)
    res.send(req.params)
}

module.exports.intro = (req, res) => {
    res.send('우리 Express로 만든 서버')
}