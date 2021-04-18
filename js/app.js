$(document).ready(function () {
    enableSmoothScrolling();
    changeLinkColor();

    //Added by Shubham relatd to Validation on   17/04/2021
    //Start here
    $("#submitQuery").click(function () {

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


        if (($('#name').val().length <= 3 || $('#name').val() === "")
            || ($('#email').val().length <= 3 || $('#email').val() === "")
            || ($('#message').val().length <= 0 || $('#message').val() === "")
            || ($('#subject').val().length <= 3 || $('#subject').val() === "")) {

        } else {
            $('.container').attr("style", "display:block");

            $('#name').attr('readonly', true);
            $('#email').attr('readonly', true);
            $('#message').attr('readonly', true);
            $('#subject').attr('readonly', true);
            $("#submitQuery").attr("disabled", true);
        }


    });
    //End here

});

//Enable Smooth Scrolling
let enableSmoothScrolling = () => {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
};


let changeLinkColor = () => {
    let colorLink = (scrollPos) => {
       /* if (scrollPos >= homeSection && scrollPos < serviceSection)*/
        if (scrollPos < serviceSection)
            $('#home_link').addClass('active');
        else if (scrollPos >= serviceSection && scrollPos < aboutSection)
            $('#service_link').addClass('active');
        else if (scrollPos >= aboutSection && scrollPos < contactSection)
            $('#about_link').addClass('active');
        else if (scrollPos >= contactSection)
            $('#contact_link').addClass('active');
    };

    /*let manageNavbarAndLinkColor = (scrollPos) => {
        let nav = $('nav');
        if (scrollPos >= serviceSection) {
            console.log("Scroll pos >= service section");
            $('.nav-item').addClass('link-black');
            $('#company_name').css('color', '#000000');
            $(nav).removeClass('shadow-none');
            $(nav).addClass('navbar-white');
        } else {

            console.log("Scroll pos < service section");
            $('.nav-item').addClass('link-black');
            $('#company_name').css('color', '#000000');
            $(nav).removeClass('shadow-none');
            $(nav).addClass('navbar-white');

            /!*$('.nav-item').removeClass('link-black');
            $('#company_name').css('color','#ffffff');
            $(nav).addClass('shadow-none');
            $(nav).removeClass('navbar-white');*!/
        }
    };*/

    let homeSection = $('#home').offset().top;
    let serviceSection = $('#services').offset().top;
    let aboutSection = $('#about').offset().top;
    let contactSection = $('#contact').offset().top;

    let contactSectionPos = document.getElementById("contact").offsetTop;


    //colorLink($(document).scrollTop());
    colorLink(homeSection);

    console.log(`Home Section Offset: ${homeSection} Scroll pos:${$(document).scrollTop()}`);
    console.log(`Service Section Offset: ${serviceSection} Scroll pos:${$(document).scrollTop()}`);
    console.log(`About Section Offset: ${aboutSection} Scroll pos:${$(document).scrollTop()}`);
    console.log(`Contact Section Offset: ${contactSection} Scroll pos:${$(document).scrollTop()}`);
    console.log(`Contact Section Offset new: ${contactSectionPos} Scroll pos:${$(document).scrollTop()}`);

    $(document).scroll(() => {
        let scrollPos = $(document).scrollTop();
        console.log(`Scroll Pos on Scroll: ${$(document).scrollTop()}`);
        console.log(`Scroll Pos of window page on Scroll : ${window.pageYOffset}`);

        //manageNavbarAndLinkColor(scrollPos);
        //First Remove Class
        $('.nav-item').removeClass('active');
        colorLink(scrollPos);
        //colorLink(pageYOffset);
    });
};




