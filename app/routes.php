<?php

Route::get('/', function()
{
    return View::make('hello');
});

Route::get('/twitterapi/{latitude}/{longitude}/{radius}', 'TwitterApiController@getTweets');
Route::get('/idealistaapi/{latitude}/{longitude}/{radius}/{status}', 'TwitterApiController@getIdealista');

Route::get('/getTweets', 'TwitterApiController@getTweets');
