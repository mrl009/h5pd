<?php
  function curl_get($url)
    {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $param=array(
      'AuthGC: ' .$_SERVER['HTTP_HOST'],
    );
    curl_setopt($ch, CURLOPT_HTTPHEADER,$param);
    curl_setopt($ch, CURLOPT_USERAGENT,"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
  }

  function is_mobile(){
    require_once("Mobile_Detect.php");
    $detect = new Mobile_Detect;
    if ($detect->isMobile()){
      return true;
    }else{
      $detect->setUserAgent('CloudFront-Is-Mobile-Viewer = true/fales');
      return $detect->isMobile()? true:false;
    }

  }

  $is = is_mobile();

  $ym = $_SERVER['HTTP_HOST'];
  $intr=$_GET['intr'];
  if($intr) {
    $agent = '/register?intr='.$intr;
  }else{
    $agent = '/index.html';
  }
  if($is){
    header('Location:http://'.$_SERVER['HTTP_HOST'].$agent);
  }else{
    $doarr=explode('.',$ym);
    if($doarr[0]=='m') {
        header('Location:http://'.$_SERVER['HTTP_HOST'].$agent);
    }else {
        if($ym=='df.guocaiapi.com'){
          $api = 'http://agentapiuser.guocaiapi.com';
        }else{
          $api = 'https://www.wpub1dkjflsdakjfsdkgdfjsdfj.com';
        }
        $a = curl_get($api.'/welcome/index?type=pc');
        $t = json_decode($a,true);
        if($t['data']) {
          header('Location:'.$t['data'][0].$agent);
        }
    }

  }
