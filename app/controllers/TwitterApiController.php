<?php

class TwitterApiController extends BaseController {

	/*Being a real-time API, we need a wrapper for it*/

	public function testMethod()
	{
		return Response::json(array('name' => 'Steve', 'state' => 'CA'));
	}

}
