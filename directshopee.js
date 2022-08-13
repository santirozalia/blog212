type='text/javascript'>
//<![CDATA[
	$(document).ready(function()
	{
	  $('body').addClass('xepo_ads');
	});

	$(document).on('click','.xepo_ads',function(e)
	{
	    $(this).removeClass('xepo_ads');
	     var popUp = window.open('https://shope.ee/2AbtPtaCEA','_blank'); 
	     var popUp = window.open('https://www.profitablecpmgate.com/z5sjvv74n6?key=b33e4f69459883f9b5308dd1a49861b4','_blank'); 
	}
	$printButtonClicked: function(){              
	var id = (new Date()).getTime();  
	var myWindow = window.open(window.location.href + '?printerFriendly=true', id, 
"toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800,
height=600,left = 240,top = 212");
	$.post("/ajax/friendlyPrintPage", postData).done(function(htmlContent) {
		myWindow.document.write(htmlContent);
		myWindow.focus();
	});
//]]>
