var innovateModule = angular.module('fwrk.innovate', []);

innovateModule.service('Innovate', function($http) {
    return {
        all: function() {
            return $http.get('/api/innovate').then(function(postList) {
                return postList.data;
            });
        },
        add: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/innovate_add',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        remove: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/deleteinnovate',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        update: function(newPost) {


            return $http({
                method: 'post',
                url: '/api/editparmal',
                data: newPost
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });

        },
        sigledata: function(parmal) {
            console.log(parmal)
            console.log('simer')
            return $http({
                method: 'post',
                url: '/api/parmal_cat',
                data: parmal
            }).then(function(res) {
                // return the new post
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        }
    };
});