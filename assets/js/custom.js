$(document).ready(function() {
  var request = $.ajax({
    url: 'https://app.greathearts.community/api/v1/organizations',
    method: 'get',
    crossDomain: true
  });

  request.done(function(orgsJson){
    $('.orgs-squares').children().remove();
    $.each(orgsJson, function(index,value){

      $(".orgs-squares").append("<li><figure class='org-square '><img src=" + value.logo_link + " alt="+ value.name + "><div class='img-hover'><a href=" + value.link + " target='_blank'><h4>" + value.name + "</h4></a></div></figure></li>")


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

  
});

var signUpLock = new Auth0Lock('H3M1d2hsFo2hISIz6CUD6okg7Dew6rDI', 'greathearts.auth0.com', {
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
