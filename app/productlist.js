
 mainApp.controller('ProductListController', function($scope) {

     $scope.Brandfilters = { };
    

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
   // $scope.products = Data;

   $scope.lower_price_bound = 200;
  $scope.upper_price_bound = 1000;
  
  $scope.priceRange = function(products) {
    return (products['Cost'] >= $scope.lower_price_bound && products['Cost'] <= $scope.upper_price_bound);
  };
    });
