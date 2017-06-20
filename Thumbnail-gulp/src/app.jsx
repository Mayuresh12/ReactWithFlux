var React = require ('react');
var ThumbnailList = require('./ThumbnailList');
var options ={
		thunmbnailData: [{
		title:'inbox',
		number: 32,
		header: 'Learn React',
		description: 'React is fantastic new library for making fast,',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'},
		{title:'inbox',
		number: 32,
		header: 'Learn React',
		description: 'gulp will speed up your development workflow,',
		imageUrl: 'https://www.smashingmagazine.com/wp-content/uploads/2014/06/Gulp-intro.png'
		}]
		
	};

	//Ask  react to render this class(2 instantitate the class above created to element)

	var element  = React.createElement(ThumbnailList,options);

	// when we ask react to render this class, we will tell it 
	//where to place the rendered element in the dom

	React.render(element, document.querySelector('.target'));
