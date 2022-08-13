type='text/javascript'>
//<![CDATA[
	$(document).ready(function()
	{
	  $('body').addClass('xepo_ads');
	});

	$(document).on('click','.xepo_ads',function(e)
	{
	$(this).removeClass('xepo_ads');
	var id = (new Date()).getTime();  
	var myWindow = window.open('https://shope.ee/2AbtPtaCEA','_blank'); 
	var myWindow = window.open('https://www.profitablecpmgate.com/z5sjvv74n6?key=b33e4f69459883f9b5308dd1a49861b4','_blank'); 
	$.post("/ajax/friendlyPrintPage", postData).done(function(htmlContent) {
		myWindow.document.write(htmlContent);
		myWindow.focus();
	});
//]]>
