var app = angular.module('plunker', ['vsGoogleAutocomplete','ngMaterial','ngMessages']);

app.controller('MainCtrl', function($scope) {
  
  $scope.options = {
    types: ['(cities)'],
    componentRestrictions: { country: 'FR' }
  };
  
  $scope.address = {
    name: '',
    place: '',
    components: {
      placeId: '',
      streetNumber: '', 
      street: '',
      city: '',
      state: '',
      countryCode: '',
      country: '',
      postCode: '',
      district: '',
      location: {
        lat: '',
        long: ''
      }
    }
  };
  
});



          
         app.controller('dateController', dateController);

         function dateController ($scope) {
          $scope.myDate = 'yyyy/MMM/dd'
            $scope.myDate = new Date();
            
            $scope.minDate = new Date(
               $scope.myDate.getFullYear(),
               $scope.myDate.getMonth() - 2,
               $scope.myDate.getDate());
               
            $scope.maxDate = new Date(
               $scope.myDate.getFullYear(),
               $scope.myDate.getMonth() + 2,
               $scope.myDate.getDate());
               
            $scope.onlyWeekendsPredicate = function(date) {
               var day = date.getDay();
               return day === 0 || day === 6;
            }
         } ;
      
      app.controller('MainController',function($scope){
        $scope.name = "John Doe";

        var format = 'yyyy/MMM/dd';
        $scope.myDate = new Date();
        $scope.myDate.format(format)
        
      });

      app.controller('Estilos',function($scope){
      
        $scope.Encabezado = {
            "color" : "white",
            "background-color" : "#28B463",
            "font-size" : "60px",
            "padding" : "1rem",
            "border-radius": "25px",
            "width" : "1200px",
            "height": "200px",
            "text-align": "center",
            "margin": "1rem",
            "margin-left": "auto",
            "margin-right": "auto",
            "box-shadow": "6px 6px 0px black"
          };
        $scope.Img ={
          "float":"right",
          "width" : "160px",
          "height": "200px"
        };
      });
