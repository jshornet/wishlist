'use strict';

var responseUtil = {};

responseUtil.response404 = res => {
    res.status(404).send('Not found');
};
module.exports = responseUtil;


