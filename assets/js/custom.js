$(document).ready(function() {
    var request = $.ajax({
        url: 'https://app.greathearts.community/api/v1/organizations',
        method: 'get',
        crossDomain: true
    });

    request.done(function(orgsJson){
        $('#effect-2').children().remove();
        $.each(orgsJson, function(index,value){
            if(value.supported){
                $("#effect-2").append(
                    "<li><a class='flip-card-link' href='/nonprofits/afrika-tikkun-usa'>" +
                    "<div class='flipping-logos org-square flip-container'>" +
                    "<div class='top-left-ribbon animated fadeIn'>" +
                    "<span>SUPPORTED</span></div>" +
                    "<div class='flipper d-flex align-items-center'>" +
                    "<img class='front-logo mx-auto' src=" + value.logo_link + " alt=" + value.name + " >" +
                    "<div class='flip-side text-center flex-vertically-center-content'>" + value.name + "</div></div> </div> </a></li>"
                )
            } else {
                $("#effect-2").append(
                    "<li><a class='flip-card-link' href='/nonprofits/afrika-tikkun-usa'>" +
                    "<div class='flipping-logos org-square flip-container'>" +
                    "<div class='flipper d-flex align-items-center'>" +
                    "<img class='front-logo mx-auto' src=" + value.logo_link + "alt=" + value.name + " >" +
                    "<div class='flip-side text-center flex-vertically-center-content'>" + value.name + "</div></div> </div> </a></li>"
                )
            }



        });
    });

    $('#navbar-search').on('change', 'input', function(e) {
        e.preventDefault();
        var query = $('input').val();
        var searchLink = 'https://app.greathearts.community/search_results?utf8=✓&query=' + query.split(' ').join('+');
        $("#search-link").attr('href', searchLink);
    });
    $('#navbar-search').on('keypress', 'input', function(e) {
        var query = $('input').val();
        var searchLink = 'https://app.greathearts.community/search_results?utf8=✓&query=' + query.split(' ').join('+');
        if ( e.which === 13 ) {
            e.preventDefault();
            window.location.href = searchLink;
        }
    });

    $('li.slider-org').on('click', function(e) {
        e.preventDefault();
        var orgLink = $(this).find('a').attr('href');
        window.location = orgLink;
    });
});

var signUpLock = new Auth0Lock('H3M1d2hsFo2hISIz6CUD6okg7Dew6rDI', 'greathearts.auth0.com', {
    allowedConnections: ['Username-Password-Authentication','facebook','google-oauth2'],
    auth: {
        redirectUrl: 'https://app.greathearts.community/auth/auth0/callback',
        responseType: 'code',
        params: {
            scope: 'openid email', // Learn about scopes: https://auth0.com/docs/scopes
        }
    },
    theme: {
        logo: "assets/img/GHILogo2.png",
        primaryColor: '#72C02C'
    },
    rememberLastLogin: false,
    initialScreen: 'login',
});
