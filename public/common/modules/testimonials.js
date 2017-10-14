
var testimonialsModule = angular.module('fwrk.testimonials', []);

testimonialsModule.service('Testimonial', function($http) {
    return {
        all: function() {
            return $http.get('/api/testimonials').then(function(testimonialList) {
              
                return testimonialList.data;
            });
        },
        add: function(newPost) {
            return $http({
                method: 'post',
                url: '/api/testimonials',
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
                url: '/api/deletetestimonials',
                data: newPost
            }).then(function(res) {
                // return the new post
                 console.log(res.data);
                return res.data;

            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        },
        
        update: function(newPost) {
            console.log('abc');
            return $http({
                method: 'post',
                url: '/api/edittestID',
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
        sigledata: function(newPost) {
            //console.log(parmal)
            console.log('simer')
            return $http({
                method: 'post',
                url: '/api/edittestimonial',
                data: newPost
            }).then(function(res) {
                // retu the new postc
                console.log('HELLO');
                return res.data;
            }).catch(function(err) {
                console.error('Something went wrong adding the post!');
                console.error(err);
                return err;
            });
        }
    };
});