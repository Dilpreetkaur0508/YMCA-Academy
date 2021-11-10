(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/

    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');
    var service = $('#service').val('selectedvalue');


    $('.validate-form').on('submit', function (e) {
        // e.preventDefault();
        var check = true;

        if ($(name).val().trim() == '') {
            showValidate(name);
            check = false;
        }


        if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if ($(message).val() && $(message).val().trim() == '') {
            showValidate(message);
            check = false;
        }
        writeRecord(name, email, service);
        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    function writeRecord(name, email, service) {
        var data = {
            'name': name.val(),
            'email': email.val(),
            'service': service.val(),
        }
        var json = JSON.stringify(data);
        // localStorage.clear();
        var list = JSON.parse(localStorage.getItem('registerations'));
        // localStorage.clear()
        if(typeof(list) == 'undefined'){
            localStorage.setItem('registerations', {});
        }
        else{
            if (list === null) {
                list = [];
            }
            console.log(list);
            list.push(json);
            console.log(list);
            // localStorage.clear();
            localStorage.setItem('registerations', JSON.stringify(list));
        }
        // console.log(localStorage.getItem('registerations'));
    }
})(jQuery);

function showbanner() {
    let mainBanner = document.getElementById('banner');
    mainBanner.style.filter = "blur(8px)";
    let banner = document.getElementById('quizBanner');
    banner.style.display = "block";
}

function notNow() {
    let mainBanner = document.getElementById('banner');
    mainBanner.style.filter = "none";
    let banner = document.getElementById('quizBanner');
    banner.style.display = "none";
}

