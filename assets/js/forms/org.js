var OrgForm = function () {

    return {

        //Comment Form
        initOrgForm: function () {
            // Validation
            $("#orgForm").validate({
                // Rules for form validation
                rules:
                {
                    firstName:
                    {
                        required: true
                    },
                    lastName:
                    {
                        required: true
                    },
                    // member:
                    // {
                    //   required: true  
                    // },
                    orgName:
                    {
                        required: true
                    },
                    ein:
                    {
                        required: true
                    },
                    city:
                    {
                        required: false
                    },
                    state:
                    {
                        required: false
                    },
                    message:
                    {
                        required: false
                    }
                },

                // Messages for form validation
                messages:
                {
                    email:
                    {
                        required: 'Please enter your email address',
                        email: 'Enter a VALID email'
                    },
                    firstName:
                    {
                        required: 'Please enter your first name'
                    },
                    lastName:
                    {
                        required: 'Please enter your last name'
                    },
                    orgName:
                    {
                        required: 'Please enter the organization name'
                    },
                    ein:
                    {
                        required: 'Please enter the organization\'s EIN'
                    }
                },

                // Ajax form submition
                submitHandler: function(form)
                {
                    
                        var orgForm = $(document).find('#orgForm');
                        var data = $(orgForm).serializeArray();
                        var request = $.ajax({
                            url: 'http://localhost:3000/api/v1/organizations/org_recommendation',
                            method: 'post',
                            data: data,
                            crossDomain: true
                        });

                        request.done(function(response){
                            $('#orgForm').remove();
                            $('.success-msg').addClass('flex-center-content').show();
                        });

                },

                // Do not change code below
                errorPlacement: function(error, element)
                {
                    error.insertAfter(element.parent());
                }
            });


        }

    };

}();