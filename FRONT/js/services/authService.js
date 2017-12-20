'use strict';

angular.module('authService',[])
	.factory('sesionControl', function(){
		return {
			get: function (key){
				return sessionStorage.getItem(key);
			},
			set: function (key, val){
				return sessionStorage.setItem(key, val);
			},
			unset: function (key){
				return sessionStorage.removeItem(key);
			}
		};
	})
	.factory('authUser',  function($auth, sesionControl, $rootScope, $location){
		$rootScope.isLoggedIn = false;
		$rootScope.user = {
			id: "",
			rol: ""
		};
		var cacheSession = function(email, username, avatar){
			sesionControl.set('userIsLogin', true);
			sesionControl.set('email', email);
			sesionControl.set('username', username);
			sesionControl.set('avatar', avatar);
		};

		var unCacheSession = function(){
			sesionControl.unset('userIsLogin');
			sesionControl.unset('email');
			sesionControl.unset('username');
			sesionControl.unset('avatar');
		}

		var login = function(loginForm){
			$auth.login(loginForm).then(
					function(response){
						//cacheSession(response.data.user.email, response.data.user.name, loginForm.avatar);
						$location.path('/')
						console.log(response);
						$rootScope.isLoggedIn = true;
						$rootScope.users = response.data.user;
						
					},
					function(error){
						console.log(error);
						unCacheSession();

					}
				);
		};
		


		
		console.log($rootScope.isLoggedIn);
		
		return {
			loginApi: function(loginForm){
				login(loginForm);
			},
			logout: function(){
				$auth.logout();
				unCacheSession();
				console.log("se termino el show");
				$location.path('/login');
			},
			isLoggedIn: function(){
				return sesionControl.get('userIsLogin') !==  null;
			}
		};
	});