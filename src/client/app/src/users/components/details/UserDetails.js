

// Directive definition of the the UserDetailsDirective.
class UserDetailsController  {
    /**
    * Constructor
    *
    * @param $mdBottomSheet
    * @param $log
    */
    constructor($mdBottomSheet, $log,$http) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;


    }


    /**
    * Show the bottom sheet
    */
    share() {
        deletelist();
        var user = this.selected;
        // this.selected.checkboxes=[];
        console.log(this.selected.checkboxes);
        // var $mdBottomSheet = this.$mdBottomSheet;
        //
        // $mdBottomSheet.show({
        //   parent: angular.element(document. getElementById('content')),
        //   templateUrl: 'src/users/components/details/ContactSheet.html',
        //   controller: [ '$mdBottomSheet', UserSheetController],
        //   controllerAs: "$ctrl",
        //   bindToController : true
        // }).then((clickedItem) => {
        //   this.$log.debug( clickedItem.name + ' clicked!');
        // });
        //
        // /**
        //  * Bottom Sheet controller for the Avatar Actions
        //  */
        // function UserSheetController( $mdBottomSheet ) {
        //   this.user = user;
        //   this.items = [
        //     { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
        //     { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
        //     { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
        //     { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
        //   ];
        //   this.performAction = (action) => {
        //     $mdBottomSheet.hide(action);
        //   };
        // }



    }

}
export default {
    name : 'userDetails',
    config : {
        bindings         : {  selected: '<' , delete:'&' },
        templateUrl      : 'src/users/components/details/UserDetails.html',
        controller       : [ '$mdBottomSheet', '$log','$http', UserDetailsController]
    }
};
