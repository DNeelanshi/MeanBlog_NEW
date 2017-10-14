/**
 * all controller
 * @param {type} param1
 * @param {type} param2
 */
app.controller('ContactCtrl', function($scope) {
    console.log('i m working22')
    $scope.post={};
    $scope.addPost = function() {
        console.log($scope.post)
    }
})
// app.controller('InnovateCtrl', function($scope) {
//     console.log('i m working2');
//     $scope.post={};
//     $scope.addPost = function() {
//         console.log($scope.post);
//     }
// })