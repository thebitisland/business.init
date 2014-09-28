<?php

class TwitterApiController extends BaseController {

    public function getIdealista($latitude, $longitude, $radius)
    {
        $longUrl = 'http://www.idealista.com/labs/propertyMap.htm?k=1495facc6beff62d21a0282a6f8ac1f1&action=json&operation=sale&radio=40.416914%2C-3.695148&center=40.415914%2C-3.696148';

        $url = 'http://www.idealista.com/labs/propertyMap.htm';
        $data = array(
            'center' => urlencode($latitude . ',' . $longitude),
            'k' => urlencode('cace7d1225f39e7a901d11baa37773d2'),
            'action' => 'json',
            'operation' => 'sale',
            'radio' => urlencode(($latitude+$radius).','.($longitude+$radius))
        );
        //        $this->curl = New Curl;
        //     echo $this->curl->get($url, $params);

        $params = '';

        foreach($data as $key=>$value)
            $params .= $key.'='.$value.'&';

        $params = trim($params, '&');

        $ch = curl_init();

        $finalUrl = $url.'?'.$params;



        curl_setopt($ch, CURLOPT_URL, $finalUrl ); //Url together with parameters
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //Return data instead printing directly in Browser
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT , 7); //Timeout after 7 seconds
        curl_setopt($ch, CURLOPT_USERAGENT , "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)");
        curl_setopt($ch, CURLOPT_HEADER, 0);

        $result = curl_exec($ch);

        if(curl_errno($ch))  //catch if curl error exists and show it
            echo 'Curl error: ' . curl_error($ch);
        else{
            curl_close($ch);
            return Response::json(json_decode($result));
        }
        curl_close($ch);
    }

}

