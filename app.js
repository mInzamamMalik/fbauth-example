/**
 * Created by Mass Lab on 7/5/2015.
 */


angular.module("mymodule",['firebase'])
    .controller("myctrl",function(dataStore){
        var vm = this;
        vm.profile = dataStore.profile;


        var ref = new Firebase("https://malikasinger-fbauth.firebaseio.com");

        vm.login = function(){
            ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                }else{
                    console.log("Authenticated successfully with payload:", authData);

                    //           var name = authData.facebook.cachedUserProfile.name;
                    (function(){
                        vm.profile = "loged in";
                        alert(authData.facebook.cachedUserProfile.name);
                    })()

                }
            });
        };
        vm.logout = function(){
            ref.unauth();
            vm.profile = "loged out";

        }





    });








