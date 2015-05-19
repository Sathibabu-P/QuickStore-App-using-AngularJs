
 //code for view product 

    mainApp.controller('viewProductController', function($scope,$routeParams) {
     var ProductName = ($routeParams.ProductName) ? $routeParams.ProductName : "";
     $scope.ProductName = ProductName;
      $scope.products =[
  {
    "Name" : "Sony",
    "Cost" : 200,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/1/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Nokia",
    "Cost" : 500,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/5/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Celkon",
    "Cost" : 400,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/6/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Micromax",
    "Cost" : 600,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/2/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Motorola",
    "Cost" : 200,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/4/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "MicroSoft",
    "Cost" : 800,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/3/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "NokiaXl",
    "Cost" : 200,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/8/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "Samsung",
    "Cost" : 900,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/10/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  ];

   $scope.productinfo = [
    {
      "Type" : "Analog",
      "styleCode" :  "FL101-WHITE",      
      "Diameter" : "42 mm",
      "Weight" : "95g",      
      "Thickness" : "7 mm",     
      "Warranty": "Card",     
      "Strap Type" : "Bracelet",
      "Dial Shape" :  "Round",
      "Box Material" :  "Cardboard",
      "Strap Color" : "Silver",      
    }
   ];

  

    var images = $scope.images = [];

    for(i=3;i<=11;i++) {
      images.push({
        src: 'http://lorempixel.com/500/300/sports/' + i
      })
    }

	

  $scope.mainImageUrl = $scope.images[0].src;
 

	  $scope.setImage = function(imageUrl) {
  
    //$('#mainimg').attr('src','');
    $scope.mainImageUrl = imageUrl;

    }

   
    


    $scope.load = function() {
       $('.native').elevateZoom();
   };

   //don't forget to call the load function
   $scope.load();


    });

   mainApp.directive('mySlides', function() {
      var directive = {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl) {
          scope.$watch(attrs.mySlides, function(value) {
            setTimeout(function() {
              // only if we have images since .slidesjs() can't
              // be called more than once
              console.log("attrs.start is:");
              console.dir(attrs.start);
              if (value.length > 0) {
                $(element[0]).slidesjs({
                  preload: true,
                  preloadImage: '/content/images/theme/loading.gif',
                  play: attrs.play || 5000,
                  pause: attrs.pause || 2500,
                  start: attrs.start || 1,
                  hoverPause: attrs.hoverPause || true,
                  navigation: { active: true, effect: "slide" }
                });
              }
            }, 1);
          });
        }
      };
      return directive;
    });

    mainApp.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});

  
    //code for view product 

  
