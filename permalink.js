
<script type='text/javascript'>
// BloggerJS v0.4.0
// Licensed under the MIT License
// Copyright (c) 2017-2018 Kenny Cruz
// github.com/jokenox

// Configuration
var config = {
  postsDatePrefix: false,
  accessOnly: false,

  useApiV3: false,
  apiKey: &quot;YOUR-API-KEY-HERE&quot;
}
var postsOrPages=[&quot;pages&quot;,&quot;posts&quot;],blogId=&quot;<data:blog.blogId/>&quot;,urlTotal,fetchIndex=1,ampChar=&quot;&amp;&quot;[0],secondRequest=!0,feedPriority=0,nextPageToken;function urlVal(){var url=window.location.pathname;var length=url.length;var urlEnd=url.substring(length-5);if(urlEnd===&quot;.html&quot;)return 0;else if(length&gt;1)return 1;else return 2}
function urlMod(){var url=window.location.pathname;if(url.substring(1,2)===&quot;p&quot;){url=url.substring(url.indexOf(&quot;/&quot;,1)+1);url=url.substr(0,url.indexOf(&quot;.html&quot;));history.replaceState(null,null,&quot;../&quot;+url)}else{if(!config.postsDatePrefix)url=url.substring(url.indexOf(&quot;/&quot;,7)+1);else url=url.substring(1);url=url.substr(0,url.indexOf(&quot;.html&quot;));history.replaceState(null,null,&quot;../../&quot;+url)}}
function urlSearch(url,database){var pathname=url+&quot;.html&quot;;database.forEach(function(element){var search=element.search(pathname);if(search!==-1)window.location=element})}
function urlManager(){var validation=urlVal();if(validation===0){if(!config.accessOnly)urlMod()}else if(validation===1){fetchData(postsOrPages[feedPriority],1)}else if(validation===2){if(!config.accessOnly)history.replaceState(null,null,&quot;/&quot;)}}
function fetchData(postsOrPages,index){var script=document.createElement(&quot;script&quot;);if(config.useApiV3){var jsonUrl=&quot;https://www.googleapis.com/blogger/v3/blogs/&quot;+blogId+&quot;/&quot;+postsOrPages+&quot;?key=&quot;+config.apiKey+&quot;#maxResults=500#fields=nextPageToken%2Citems(url)#callback=parseData&quot;;if(nextPageToken)jsonUrl+=&quot;#pageToken=&quot;+nextPageToken;nextPageToken=undefined}else{var jsonUrl=window.location.protocol+&quot;//&quot;+window.location.hostname+&quot;/feeds/&quot;+postsOrPages+&quot;/summary?start-index=&quot;+index+&quot;#max-results=150#orderby=published#alt=json-in-script#callback=parseData&quot;}
jsonUrl=jsonUrl.replace(/#/g,ampChar);script.type=&quot;text/javascript&quot;;script.src=jsonUrl;document.getElementsByTagName(&quot;head&quot;)[0].appendChild(script)}
function parseData(json){var database=[];if(!config.useApiV3){if(!urlTotal){urlTotal=parseInt(json.feed.openSearch$totalResults.$t)}
try{json.feed.entry.forEach(function(element,index){var entry=json.feed.entry[index];entry.link.forEach(function(element,index){if(entry.link[index].rel===&quot;alternate&quot;)database.push(entry.link[index].href)})})}catch(e){}}else{try{json.items.forEach(function(element,index){database.push(element.url)})}catch(e){}
nextPageToken=json.nextPageToken}
urlSearch(window.location.pathname,database);if(urlTotal&gt;150){fetchIndex+=150;urlTotal-=150;fetchData(postsOrPages[feedPriority],fetchIndex)}else if(nextPageToken){fetchData(postsOrPages[feedPriority])}else if(secondRequest){nextPageToken=undefined;urlTotal=0;fetchIndex=1;secondRequest=!1;if(feedPriority===0){feedPriority=1;fetchData(&quot;posts&quot;,1)}else if(feedPriority===1){feedPriority=0;fetchData(&quot;pages&quot;,1)}}}
function bloggerJS(priority){if(priority)feedPriority=priority;urlManager()}
bloggerJS()
</script>