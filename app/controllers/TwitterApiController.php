<?php

class TwitterApiController extends BaseController {

	/*Being a real-time API, we need a wrapper for it*/

	public function getTweets(latitude, longitude, radius)
	{
		return Response::json(
			array(
				'latitude' => latitude,
				'longitude' => longitude,
				'radius' => radius));
	}

}
