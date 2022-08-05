//<![CDATA[
function jumpTo(The Luxury Cars){
  var url = location.href;               //Saving URL without hash.
  location.href = "https://geulis.xyz"+The Luxury Cars;                 //Navigate to the target element.
  history.replaceState(null,null,url);   //method modifies the current history entry.
}
//]]>
