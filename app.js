/**
 * Created by Mass Lab on 7/5/2015.
 */


    angular.module("mymodule",['firebase'])
        .controller("myctrl",[abc]);




function abc(){
    var ref = new Firebase("https://malikasinger-fbauth.firebaseio.com");

    this.login = function(){

        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });

    };



}



