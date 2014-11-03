var twitter = function () {
    /*Main object*/
    var tw = {};

    /*Variables*/
    var tweets = null;

    /*Constructor*/
    tw.init = function () {
        /*Trigger class events*/
        classEvents();
    };

    /*Public Stuff*/
    tw.getTweets = function (tags) {
        tags = [].concat(tags);
        $.ajax({
            url: "/getTweets",
            data: {
                tags: tags
            },
            success: function(data) {
                tweets = data;
                console.log('--------------TWITTER API--------------');
                console.log(tweets);
            }
        });
    };

    /*Internal Stuff*/
    var classEvents = function () {
    };

    return tw;
}();
