/* Menu Icons Effect */
var menuitem = $(".menuitem");
menuitem.hover(

function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(menuitem);
    var $allListElements = menuitem.find('.info');
    $theid.find($allListElements).slideDown(100);

},

function (event) {
    "use strict";
    var $clickedElement = $(event.target);
    var $theid = $clickedElement.closest(menuitem);
    var $allListElements = menuitem.find('.info');
    $theid.find($allListElements).slideUp(100);
});


/////////////////* Go to top link */////////////////////////

$("#credits").find('#top').on("click", function () {
    "use strict";
    var bdy = $('html, body');
    bdy.animate({ scrollTop: 0 }, 'slow');
});
/// background hide /////

var bg = document.querySelector('.wrap');
document.querySelector('#hidebg').addEventListener("click",function() {
    bg.style = 'opacity : 0';
    document.querySelector('#hidebg').style.display = 'none';
    document.querySelector('#showbg').style.display = 'block';
    document.querySelector('footer').style.position = 'sticky';
});
setInterval(function(){
        document.querySelector('#showbg').addEventListener("click",function(){
        bg.style = 'opacity : 1';
        document.querySelector('#hidebg').style.display = 'block';
        document.querySelector('#showbg').style.display = 'none';
        document.querySelector('footer').style.position = 'inherit';
    });
},1000);
// copy some duplicate text into page //
if (document.querySelectorAll('.lyrics-en','.lyrics-fa') !== null) {
    var y = document.querySelectorAll('#name').length;
    var name = document.querySelector('.single-page-title').innerHTML;
    for(x=0;x<y;x++) {
    document.querySelectorAll('#name')[x].innerHTML = name;
    }
};
