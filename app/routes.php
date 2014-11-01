<?php

Route::get('/', function()
{
    return View::make('hello');
});

Route::get('/twitterapi/{latitude}/{longitude}/{radius}', 'TwitterApiController@getTweets');
Route::get('/idealistaapi/{latitude}/{longitude}/{radius}', 'TwitterApiController@getIdealista');

Route::get('/getUsers', function()
    {
        return Twitter::getUsers(array('screen_name' => 'koke0117', 'format' => 'json'));
    });

