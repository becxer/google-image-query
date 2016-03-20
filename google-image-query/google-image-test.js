/*
test code for google image searching 

@author becxer
@email becxer87@gmail.com
*/

var google_image = require('./google-image-query.js');
var fs = require('fs');
var savefile = undefined; 

var callback_for_result = function(url_list){
    var url_str = url_list.join('\n');
    if(savefile != undefined){
        fs.appendFile(savefile, url_str, function (err) {
            if(err) {
                return console.log(err);
            }
        });
    }
    console.log(url_str);
};

if (process.argv.length < 4 ) {
    console.log("usage : node google-image-test.js 'search query' search_top_n_count save-file-path");    
    process.exit();
}else if (process.argv.length >= 4){
    query = process.argv[2];
    top_n_count = process.argv[3];
    savefile = process.argv[4];
    if(savefile != undefined){
        console.log("save search result into -> " + savefile);
        fs.writeFile(savefile, "", function(err) {
            if(err) {
                return console.log(err);
            }
        });
    }
    google_image.search(query,top_n_count,callback_for_result);
}

