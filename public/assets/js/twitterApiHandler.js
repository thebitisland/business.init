var twitter = function () {
    /*Main object*/
    var tw = {};

    /*Variables*/
    var tweets = null;
    var genericTweets = 'demo.json';

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

                $.getJSON( "/assets/js/demotw.js", function( json ) {
                    genericETweets = json;

                    var finalTweets = tweets.statuses.concat(genericTweets.statuses);

                    $('#tweets').children().each(function(index, element){
                        $(element).find('h3').text(finalTweets[index].user.name);
                        $(element).find('p').text(finalTweets[index].text);
                        $(element).find('a').text('@' + finalTweets[index].user.screen_name);
                        $(element).find('a').attr('href','https://twitter.com/' + finalTweets[index].user.screen_name);
                    });

                    var text = ""
                    for(var i=0;i<15;i++){
                        text += finalTweets[i].text + " "
                    }
                    console.log(text.removeStopWords())
                    update_wordcloud(text.removeStopWords())

                });
            }
        });
    };

    /*Internal Stuff*/
    var classEvents = function () {
    };

    return tw;
}();
