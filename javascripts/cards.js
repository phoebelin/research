/*Creating arrays with each specific type of card*/

var hearts = new Array("images/3.png", "images/7.png", "images/11.png", "images/15.png", "images/19.png", "images/23.png", "images/27.png", "images/31.png", "images/35.png", "images/39.png", "images/43.png", "images/47.png", "images/51.png", "images/3.png");

var spades = new Array("images/2.png", "images/6.png", "images/10.png", "images/14.png", "images/18.png", "images/22.png", "images/26.png", "images/30.png", "images/34.png", "images/38.png", "images/42.png", "images/46.png", "images/50.png");

var clubs = new Array("images/1.png", "images/5.png", "images/9.png", "images/13.png", "images/17.png", "images/21.png", "images/25.png", "images/29.png", "images/33.png", "images/37.png", "images/41.png", "images/45.png", "images/49.png");

var diamonds = new Array("images/4.png", "images/8.png", "images/12.png", "images/16.png", "images/20.png", "images/24.png", "images/28.png", "images/32.png", "images/36.png", "images/40.png", "images/44.png", "images/48.png", "images/52.png");

var faces = new Array("images/5.png", "images/6.png", "images/7.png", "imagesg/8.png", "images/9.png", "images/10.png", "images/11.png", "images/12.png", "images/13.png", "images/14.png", "images/15.png", "images/16.png");

var all = new Array();
all = all.concat(hearts, spades, clubs, diamonds);

var all_but_hearts = new Array();
all_but_hearts = all_but_hearts.concat(spades, clubs, diamonds);
/*Changeable variables*/

var probability = 0.1;
var total_cards = 10;
var feature = hearts;
var feature_payoff = 1000;
var other_payoff = 0.01;
var feature_names = ["hearts", "spades", "clubs", "diams"];
var feature_tested = "hearts";

window.onload = function() {

    function display_cards(probability, total_cards, feature) {

	/*shuffling cards and setting up variables*/
	shuffleArray(feature);
	shuffleArray(all);
	shuffleArray(all_but_hearts);
	var num_feature_cards = Math.round(probability * total_cards);
	var num_remaining_cards = total_cards - num_feature_cards;
	
	if(num_feature_cards > 13) {
	    num_feature_cards = 13;
	    num_remaining_cards = total_cards - 13;
	}
	
	/*populating master array*/
	var master_array = [];
	for (i = 0; i < num_feature_cards; i++) {
	    master_array.push(feature[i]);
	}
	for (i = 0; i < num_remaining_cards; i++) {
	    /*if(isInArray(all[i], feature)) {
	      i--;
	      } else {
	      master_array.push(all[i]);
	      }*/
	    master_array.push(all_but_hearts[i]);
	}

	shuffleArray(master_array); //the master array is the deck thatcontains cards the participant will see.
	str = "";
	str += "<table>";
	for (i = 0; i < total_cards; i++) {
	    var card = document.createElement("img");
	    card.src = master_array[i];
	    card.setAttribute("class", "cards");
	    document.getElementById("card-grid").appendChild(card);
	}
    }

    /*returns an array that is in a randomized order
      using Fisher-Yates shuffle algorithm*/
    function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
	    var j = Math.floor(Math.random() * (i+1));
	    var temp = array[i];
	    array[i] = array[j];
	    array[j] = temp;
	}
	return array;
    }

    /*returns true if element is in given array*/
    function isInArray(value, array) {
	return (array.indexOf(value) > -1);
    }

    function printHeader(feature_payoff, other_payoff) {
	var header = document.getElementById("header");
	console.log(header);
	header.innerHTML = "&"+feature_tested+"; = &#36;" + parseFloat(feature_payoff).toFixed(2)+ ", &spades; &diams; &clubs; = &#36;" + parseFloat(other_payoff).toFixed(2);
    }
    
    var data = [];
    console.log(data);
    function process_data() {
	var amount = document.getElementById("amount-box").value;
	var datacell = {"p":probability, "amount":amount};
	data.push(datacell);
	return 1;
	
    }
    console.log(data);
    printHeader(feature_payoff, other_payoff);
    display_cards(probability, total_cards, feature);
}
