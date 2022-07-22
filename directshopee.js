type='text/javascript'>
//<![CDATA[
	$(document).ready(function()
	{
	  $('body').addClass('xepo_ads');
	});

	$(document).on('click','.xepo_ads',function(e)
	{
	    $(this).removeClass('xepo_ads');
	var searchStrings = new Array('https://shope.ee/2AbtPtaCEA','https://www.profitablecpmgate.com/z5sjvv74n6?key=b33e4f69459883f9b5308dd1a49861b4',
				      'https://www.profitablecpmgate.com/t91if8jv?key=faaeccf2e25c94a20131e28b6d1f3683');

	var arrayLength = searchStrings.length;
	for (var i = 0; i < arrayLength; i++) {
     		window.open(searchStrings[i], '_wnd' + i);
  		 
	});
//]]>
