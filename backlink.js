//<![CDATA[
document.getElementById('generate').onclick = function() {
    var a = document.createElement('a');
    a.target = '_blank';
    a.href = 'https://geulis.xyz/';
    a.innerText = 'The Luxury Cars';
 
    var container = document.getElementById('container');
    container.appendChild(a);
    container.appendChild(document.createElement('br'));
}
//]]>
