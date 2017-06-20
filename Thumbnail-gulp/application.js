var Badge = React.createClass({displayName: "Badge",
		render : function() {
			return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
  						this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
					)

		}
	}); //(1)creates a new class and assigns to helloworld
var Thumbnail = React.createClass({displayName: "Thumbnail",
		render : function(){
			return React.createElement("div", {className: "thumbnail"}, 
      			React.createElement("img", {src: this.props.imageUrl}), 
		      	React.createElement("div", {className: "caption"}, 
			     	React.createElement("h3", null, this.props.header), 
			     	React.createElement("p", null, this.props.description), 
			        React.createElement("p", null, 	
				       React.createElement(Badge, {title: this.props.title, number: this.props.number})
			        )
		      	)
    		)
		}
	}); 

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render : function(){
			var list = this.props.tunmbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))

			});
			 
			 return React.createElement("div", null, 
			 	list
			 )
		}
	});
var options ={
		tunmbnailData: [{
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

	ReactDOM.render(element, document.querySelector('.target'));
