var React = require('react');
var Thumbnail = require('./Thumbnail');
module.exports = React.createClass({
		render : function(){
			var list = this.props.thunmbnailData.map(function(thumbnailProps){
			return <Thumbnail {...thumbnailProps}/>

			});
			 
			 return <div>
			 	{list}
			 </div>
		}
	});