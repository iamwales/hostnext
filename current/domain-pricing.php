<?php
require('check/AvailabilityService.php');
$d_name = $_POST['domain_name'];
$domain = $_POST['domain_name'];
if(empty($domain)) {
	$result = "";
} else {
if(checkDomainAvailability($domain)) {
	$domain_res =  "Available";
} else {
	$domain_res =  "Registered";
}
	$resultdomain ="<div class='container_blank_wide'><div class='domain_mid'><ul>";
	$resultdomain .="<li>$domain</li><li>$domain_res</li>";
	$resultdomain .="</ul></div></div>";
}

?>

<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Domain Pricing - HostNext</title>
<meta name="description" content="description here">
<meta name="keywords" content="keywords here">
<!--[if lt IE 9]>  
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>  
<![endif]--> 
<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/menu.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="screen">
<link rel="stylesheet" media="screen, projection" href="css/nice_select.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="js/script.js"></script>
		
</head>

<body>
<!-- Topbar Start -->
<div class="header_with_image_wide"><!-- Imaged Banner Start Div --> 
<?php
include_once('inc/menu.php');
?>
<!-- Header End --> 
<!-- Banner Start --> 
	<div class="sub_banner_inner">
    	<h1>Domain Pricing</h1>
        <h2>Host Unlimited Domains with No Limits.</h2>
    </div>
</div><!-- Imaged Banner End Div --> 
<!-- Banner End -->  
<!-- Domain Box Start -->  
<div class="container_blank_wide">
	<div class="domain_search_box_mid">
    		<div class="domain_inside_box">
            	<label>www.</label>
                <div class="domain_inner_fields">
                <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                <input name="domain_name" type="text" placeholder="e.g. your-company-name.com">
                <input name="search" type="submit" value="Search">
                </form>
                </div>
            </div>
    </div>
</div>
<!-- Domain Box End -->   

<!-- Domain Availablity Start -->    
<?php
	echo $resultdomain;
?>
<!-- Domain Availablity End -->

<!-- Domain Pricing Start -->
<div class="container_blank_wide">

<div class="filter_search">
	<input placeholder="TLD Search/Filter..." id="s" type="text" /> 
</div>

    <div class="domain_pricing_main">
    	<div class="domain_pricing_headings">
        	<ul>
            	<li>TLDs</li>
                <li>Duration <a id="prev"><i class="fa fa-minus"></i></a> <a id="next"><i class="fa fa-plus"></i></a></li>
                <li>Registration</li>
                <li>Renewal</li>
                <li>Transfer</li>
            </ul>
        </div>
        

<div class="divs">
<!-- Year Change Start -->
<?php
include_once('inc/domain_1year.php');
?>
<!-- Year Change End -->

<!-- Year Change Start -->
<?php
include_once('inc/domain_2years.php');
?>
<!-- Year Change End -->

<!-- Year Change Start -->
<?php
include_once('inc/domain_3years.php');
?>
<!-- Year Change End -->

<!-- Year Change Start -->
<?php
include_once('inc/domain_4years.php');
?>
<!-- Year Change End -->

<!-- Year Change Start -->
<?php
include_once('inc/domain_5years.php');
?>
<!-- Year Change End -->
</div>

    </div>
</div>
<!-- Domain Pricing End -->


<!-- Footer Start -->
<?php
include_once('inc/footer.php');
?>
<!-- Footer End -->
</body>

</html>
