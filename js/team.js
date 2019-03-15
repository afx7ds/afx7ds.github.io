var directors = _.filter(team, {"committee": "director"});
var directorHTML = "";
_.each(directors, function(director) {
	var instaHTML = "";
	_.each(director.insta, function(handle) {
		instaHTML = instaHTML.concat('<a href="https://instagram.com/' + handle + '" target="_blank">\
			<i class="fab fa-instagram"></i>\
			' + handle + '\
		</a>');
	});
	directorHTML = directorHTML.concat('<div class="col-1-3 mem">\
		<div class="mem-pic" style="background-image: url(/img/team/' + director.image + ')"></div>\
		<h2>' + director.name + '</h2>\
		' + instaHTML + '\
		<h3>' + director.year + '</h3>\
	</div>');
});
$("#directors").html(directorHTML);

var sinners = _.reject(team, {"committee": "director"});
var sinnersHTML = "";
_.each(sinners, function(sinner, index) {
	if(index % 3 == 0) {
		sinnersHTML = sinnersHTML.concat('<div class="cf">');
	}
	var instaHTML = "";
	_.each(sinner.insta, function(handle) {
		instaHTML = instaHTML.concat('<a href="https://instagram.com/' + handle + '" target="_blank">\
			<i class="fab fa-instagram"></i>\
			' + handle + '\
		</a>');
	});
	var image = sinner.image ? sinner.image : '';
	sinnersHTML = sinnersHTML.concat('<div class="col-1-3 mem">\
		<div class="mem-pic" style="background-image: url(/img/team/' + image + ')"></div>\
		<h2>' + sinner.name + '</h2>\
		' + instaHTML + '\
		</a>\
		<h3>' + sinner.year + '</h3>\
	</div>');
	if(index % 3 == 2) {
		sinnersHTML = sinnersHTML.concat('</div>');
	}
});
$("#sinners").html(sinnersHTML);