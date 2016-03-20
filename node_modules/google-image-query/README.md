# google-image-query

Nodejs package to search image with query in google image

# How to install

    npm install google-image-query

# How to use

    var google_image = require('google-image-query');

    /*
    
      google_image.search([query],[top_n_count],[callback])    
    
    */
    
    google_image.search("apple",10,function(url_list){
        var url_str = url_list.join('\n');
        console.log(url_str);
    });

    /*
    RESULT will be below

    https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_UpY4asUFmSfNtl3eRV4cWsFAw6A5Mf8j1w5TJ1q-zRV1V8Fu2VycKQuK
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwZi9kH-fJYn87V1rp-Jb1P7ONj5dMu-3ArQ8NyhtbHLWh9HYR31QuwJ50
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mzdy5SForx53jZa5UFRKz_XOBeD2RK7u8KqZ98jzbYtJgvjpiv-NHIXd
    https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUYlA_5JqRE7mBQluPzZO1s3LHi76aB1bksFU23vWCtnUR51RWru2PZMEj
    https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSmFN9zHggLDWSDrKz8fR4HAy86hzURSdEiu-qcDEiY_ll7bWOqtPVZvhq-
    https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMy_ZU_dXeoAzfZ4gHihSph2uPnqlqPJ_3Qz8TxjoAujwpA00QFEQftRy-
    https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSavZhu9IXv-7Gq0OsaZlr7UZfN2jDPADnPmHDt2JOOqSuPv9W9jw_j6IUp
    https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR80728mcJZXreHNQVdu3pQNHPzFsCZxGrFQ2o6Rj5Pf3L8OQIxmH_XUKzM
    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3gma9LnK2_3-2894SdvQixlHEM5JvZSuIrG7Y2aYEBQx5HI-a-N7r93t
    https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcREk4cJXmzfmSJGMiK1qTjUXjWYYmK0LxtWvDp04eymM2nfivT4FhyqeTlf

    */

