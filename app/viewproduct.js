
mainApp.controller('viewProductController', function($scope,$routeParams) {

    
  $scope.max = 10;

  $scope.$watch('x', function(newVal) {
    $scope.max += 1;
  });

  // rating script end

      $scope.ProductId = ($routeParams.ProductId) ? $routeParams.ProductId : "";
  
   
     $scope.products =[
  {
    "Name" : "Sony",
    "Brand" : "Sony",
    "Cost" : 200,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/1/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "Sony Wivo",
    "Brand" : "Sony",
    "Cost" : 500,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/1/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Nokia-Lumia",
    "Brand" : "Nokia",
    "Cost" : 500,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/5/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "Nokia-Asha",
    "Brand" : "Nokia",
    "Cost" : 300,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/5/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Celkon-AR",
    "Brand" : "Celkon",
    "Cost" : 400,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/6/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Micromax",
    "Brand" : "Micromax",
    "Cost" : 600,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/2/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "Micromax-Twist",
    "Brand" : "Micromax",
    "Cost" : 600,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/2/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "Motorola",
    "Brand" : "Motorola",
    "Cost" : 200,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/4/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
    {
    "Name" : "MicroSoft",
    "Brand" : "Nokia",
    "Cost" : 800,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/3/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "NokiaXl",
    "Brand" : "Nokia",
    "Cost" : 200,
    "ImgUrl" : "http://lorempixel.com/400/300/sports/8/",
    "Description" :"The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC"
  },
  {
    "Name" : "Samsung-Galaxy",
    "Brand" : "Samsung",
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

	//$scope.products[ProductId].ImgUrl

  $scope.mainImageUrl = $scope.products[$scope.ProductId].ImgUrl;
 

	  $scope.setImage = function(imageUrl) {
  
    //$('#mainimg').attr('src','');
    $scope.mainImageUrl = imageUrl;

    }

   
    

   //don't forget to call the load function
  


    });

  

  mainApp.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});




    //code for view product 

