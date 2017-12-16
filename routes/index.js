var movieJson = require('../movies.json');

exports.home= function(req,res){
	var movie=movieJson.movies;
	res.render("home",{
		title:"Star War Movies",
		movies : movie
	});
};

exports.single_movie=function(req,res){
	var movies=movieJson.movies;
	var serial_number=req.params.episode_number;
	
	if(serial_number>0 && serial_number<movies.length+1){
		var movie=movies[serial_number-1];
		var title=movie.title;
		var characters=movie.main_characters;
		res.render("single-movie",{
		movies:movies,
		movie:movie,
		title:title,
		characters:characters
		});
	}else{
		res.render("notFound",{
			title:"Oops this page doesnt exit",
			movies:movies
		})
	}
	
};

exports.notFound=function(req,res){
	var movies=movieJson.movies;
	res.render("notFound",{
			title:"Oops this page doesnt exit",
			movies:movies
		})
};