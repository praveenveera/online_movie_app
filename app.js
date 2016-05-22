(function(){
 
  var app = angular.module('gemStore', []);
  app.controller('StoreController',function(){
    this.products = gem;
    });

	 app.controller("TabController",function(){
   	this.tab=1;

   	this.setTab = function(value){
   		this.tab=value; 
   	};

   	this.isSet = function(tabName){
   		return this.tab === tabName;
   	};
   
   	});
	
	app.controller("ReviewController",function(){

    this.review = {};

    this.addReview = function(product){
      this.review.createdOn=Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });  
  
var gem = [
		{
		name: 'Iron Man 1',
		price: 2.95,
		canPurchase: true, 
		story: 'When an industrialist is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces and save the world.',
		soldOut: false,
		images: "ironman1.jpg",
		cast:[ "Robert Downey Jr. as Tony Stark / Iron Man",
				"Terrence Howard as Lt. Colonel James Rhodey Rhodes",
				"Jff Bridges as Obadiah Stane",
				"Shaun Toub as Yinsen",
				"Gwyneth Paltrow as Virginia Pepper Potts"],
		reviews:
			[
			{
			stars:4,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			},

			{
			stars:4.5,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			},
			{
			stars:4.2,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			}
			]

		},

		{
		name: 'Iron Man 2',
		price: 5.34,
		canPurchase: true, 
		story: 'Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies',
		soldOut: false,
		images: "ironman2.jpg",
		cast: [
			"Robert Downey Jr. as Tony Stark / Iron Man",
			"Terrence Howard as Lt. Colonel James Rhodes",
			"Jff Bridges as Obadiah Stane",
			"Shaun Toub as Yinsen",
			"Gwyneth Paltrow as Virginia Pepper Potts"
		],
		reviews:
			[
			{
			stars:4,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			},

			{
			stars:4.5,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			},
			{
			stars:4.2,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			}
			]
		},

		{
		name: 'Iron Man 3',
		price: 2.45,
		canPurchase: true, 
		story: 'Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, he embarks on a journey with relentless consequences and a suit that ceases to exist.',
		soldOut: false,
		images:"ironman3.jpg",
		cast:[ "Robert Downey Jr. as Tony Stark / Iron Man",
				"Gwyneth Paltrow as Virginia Pepper Potts",
				"TDon Cheadle as Col. James Rhodey Rhodes / Iron Patriot",
				"Guy Pearce as Aldrich Killian",
				"Rebecca Hall as Maya Hansen"
				],
		reviews:
			[
			{
			stars:4,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			},

			{
			stars:4.5,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			},
			{
			stars:4.2,
			body:"will be added soon",
			author:"johnybravo@gmail.com"
			}
			]

		}

		/*{
		name: 'Avengers',
		price: 1.34,
		canPurchase: true, 
		description: 'This is a piece of excellence',
		soldOut: false
		}*/



	];
})();
