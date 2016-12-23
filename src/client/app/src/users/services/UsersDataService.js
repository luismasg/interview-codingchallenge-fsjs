/**
* Users DataService
* Uses embedded, hard-coded data model; acts asynchronously to simulate
* remote data service call(s).
*
* @returns {{loadAll: Function}}
* @constructor
*/
function UsersDataService($q,$http) {

    var apiPort=8081;
    var url=`http://localhost:${apiPort}/api/lists`;
    var mapUsers=function(data){console.log(data);};


    return {
        /*list all**/
        loadAllUsers: function() {
            return $http.get(url);
        },/*Get One list*/
        getList: function() {
            return $http.get(`${url}/${listId}`);
        },/*save one list*/
        saveList: function(name) {
            return $http.post(url,angular.toJson({name}));
        },/*delete one list*/
        deleteList: function(listId) {
            return $http.delete(`${url}/${listId}`);
        },/*save one item*/
        saveItem: function(listId,itemName) {
            return $http.post(`${url}/${listId}`,angular.toJson({name:itemName}));
        },
        deleteItems: function(listId,itemsToDelete={}) {

            return $http.delete(`${url}/${listId}/${angular.toJson(itemsToDelete)}`);
         }
    };

}

export default ['$q','$http', UsersDataService];