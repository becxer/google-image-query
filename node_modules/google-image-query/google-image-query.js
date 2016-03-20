/*
use for crawling google pages
@author becxer
@email becxer87@gmail.com
*/

var fs = require('fs');
var util = require('util');
var https = require('https');

var callback_for_result = undefined;
var top_n_count = 1;
callback_search = function(response) {
  var html = '';
  
  response.on('data', function (chunk) {
    html += chunk;
  });

  response.on('end', function () {
    rclist = html.split('class="rg_i"');
    url_list = [];
    for (i in rclist){
        if ( i > top_n_count ) break;
        if ( i > 0 ) {
            url = rclist[i].split('src="')[1].split('"')[0];
            url_list.push(url);
        }
    }
    callback_for_result(url_list);
  });
}

search = function(query, top_n_count_, callback_for_res){
    callback_for_result = callback_for_res;
    top_n_count = top_n_count_
    var encoded_query = encodeURI(query);
    var query_url = util.format('/search?q=%s&source=lnms&tbm=isch&sa=X',
                            encoded_query);
    var options = {
      host: 'www.google.com',
      path: query_url,
      headers: {'referer': 'https://www.google.com',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.1) '+
            'AppleWebKit/537.36 (KHTML, like Gecko) '+
            'Chrome/44.0.2403.157 Safari/537.36'}};
    https.request(options, callback_search).end();
};

exports.search = search;
