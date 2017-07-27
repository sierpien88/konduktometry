
$(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 500){
        console.log(scrollTop);
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
    } else {
        $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
    }
});

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#up').fadeIn();
            } else {
                $('#up').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#up').click(function () {
            $('#up').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#up').tooltip('show');

});

$(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top -80
	    }, 800);
	});

document.getElementById("stepco").onclick = function () {
    window.open('http://stepco24.pl/', '_blank');
};
document.getElementById("karta").onclick = function () {
    window.open('karta_katalogowa_konduktometr_ilm-4.pdf', '_blank');
};
document.getElementById("mail").onclick = function () {
    window.open('mailto:kontakt@stepco24.pl', '_blank');
};
document.getElementById("stepcoFooter").onclick = function () {
    window.open('http://stepco24.pl/', '_blank');
};
document.getElementById("mailFooter").onclick = function () {
    window.open('mailto:kontakt@stepco24.pl', '_blank');
};

$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});