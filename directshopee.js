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
	    // var popUp = window.open('https://www.profitablecpmgate.com/z5sjvv74n6?key=b33e4f69459883f9b5308dd1a49861b4','_blank'); 
		setTimeout(() => var popUp = window.open('https://www.profitablecpmgate.com/z5sjvv74n6?key=b33e4f69459883f9b5308dd1a49861b4','_blank'), 3000);
	  	if (popUp == null || typeof(popUp)=='undefined') {  
   		 alert('Please disable your pop-up blocker and try again.'); 
		} 
		else {  
		    popUp.focus();
		}
		
	});
//]]>
