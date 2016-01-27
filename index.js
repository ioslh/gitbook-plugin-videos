// var url = require('url');
// var path = require('path');
// var changeCase = require('change-case');


module.exports = {
    book: {
        assets: './assets',
        js: [
            'plugin.js'
        ]
    },
    blocks: {
        videos: {
            // todo: download gist for ebooks
            process: function(block) {

							return '<div class="gitbook-plugin-videos-test" style="color:red;">Hello world</div>';
                // var opts = '';
                // block.kwargs.id = normId(block.kwargs.id);
								//
                // Object.keys(block.kwargs)
                // .forEach(function(key) {
                //     if (key == 'keywords') return;
								//
                //     var optKey = 'data-gist-' + changeCase.paramCase(key);
                //     opts += optKey + '=' + JSON.stringify(block.kwargs[key]) + ' ';
                // });
								//
                // return '<div '+opts+'></div>';
            }
        }
    }
};
