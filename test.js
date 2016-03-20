/*
 * test.js
 * Copyright (C) 2015 becxer <becxer87@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
var google_image = require('google-image-query');

google_image.search("apple",10,function(url_list){
    var url_str = url_list.join('\n');
    console.log(url_str);
});
