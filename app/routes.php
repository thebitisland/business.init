<?php

Route::get('/', function()
{
    return View::make('hello');
});

Route::get('about', function()
    {
        return View::make('about');
    });

Route::get('/twitterapi/{latitude}/{longitude}/{radius}', 'TwitterApiController@getTweets');
Route::get('/idealistaapi/{latitude}/{longitude}/{radius}', 'TwitterApiController@getIdealista');

Route::get('/getTweets', 'TwitterApiController@getTweets');
