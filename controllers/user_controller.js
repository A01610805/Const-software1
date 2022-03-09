const User = require('../models/user');

exports.get_login = (request, response, next) => {
	response.render('login', {
		username: request.session.username ? request.session.username: ''
	});
};

exports.login = (request, response, next) => {
	if (User.login(request.body.username, request.body.password)){
		request.session.username =request.body.username;
		response.redirect('/musica/instrumentos');	
	} else {
		response.redirect('/users/login');	

	}

};

exports.logout = (request, response, next) => {
	request.session.destroy(() => {	
		response.redirect('/users/login');
	});
};

exports.root = (request, response, next) => {	
		response.redirect('/users/login');
};


//Esto se guarda en controllers

// Falta modificar los views 