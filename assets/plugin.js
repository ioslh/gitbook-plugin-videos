require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind("page.change", function() {
        $('.gitbook-plugin-videos-test').css({
          heighst:200,
          width:500,
          border:'2px solid red'
        })
    });
});
