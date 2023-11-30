const express = require('express');

const router = express();

router.get('/admin/add-product',(req, res, next) => {
    res.send('<form action = "/product" method = "Post"> <input type = "text" name = "title"/></form>');
});

module.exports = router