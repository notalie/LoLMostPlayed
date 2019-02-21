/*function test(parameter) {

	var championIds = parameter["freeChampionIds"];
	var newChampionIds = parameter["freeChampionIdsForNewPlayers"];
	var newPlayerMaxLevel = parameter["maxNewPlayerLevel"];

	
	$('h3').text(newPlayerMaxLevel);

	championIds.forEach(function(element) {
		$('h1').append('<li>' +element);
	});

	newChampionIds.forEach(function(element) {
		$('h2').append('<li>' +element);
	});

	newPlayerMaxLevel.forEach(function(element) {
		$('h2').append('<li>' +element);
	});
};

$(document).ready(function() {
	var list = {"freeChampionIds":[11,16,23,45,51,77,79,85,90,92,143,164,236,421],"freeChampionIdsForNewPlayers":[18,81,92,141,37,238,19,45,25,64],"maxNewPlayerLevel":10}
	test(list);

	console.log(championIds);
	console.log(newChampionIds);
	console.log(newPlayerMaxLevel);

});*/