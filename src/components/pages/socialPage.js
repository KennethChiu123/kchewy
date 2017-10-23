import React, { Component } from 'react';
import 'react-twitter-widgets'


class Social extends Component {

	constructor(props) {
	  super(props);
	  this.state = { width: '0', height: '0' };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	componentDidMount() {

	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);

	    var scriptNode = document.getElementById('twitter-wjs')
	    if (scriptNode) {
	      scriptNode.parentNode.removeChild(scriptNode)
	    }

	    !function(d,s,id){
	      var js,
	          fjs=d.getElementsByTagName(s)[0],
	          p=/^http:/.test(d.location)?'http':'https';
	      if(!d.getElementById(id)){
	        js=d.createElement(s);
	        js.id=id;
	        js.src=p+'://platform.twitter.com/widgets.js';
	        fjs.parentNode.insertBefore(js,fjs);
	      }
	    }(document, 'script', 'twitter-wjs');
	}	

  render() {

  	var instaSlideshow;
  	if (window.innerWidth > 426 ){
  		instaSlideshow = "c54f9001e50055318fc3aa5286d0eee0"
  		console.log("big")

  	}
  	else {
  		console.log("small")
  		instaSlideshow = "624976af3717534c9d605fa71c9952af"
  	}
  	console.log(instaSlideshow);

    return (
	    <div className="content">
	      <div className="container">
	    		<div>
	    			<script src="//lightwidget.com/widgets/lightwidget.js">
	    			
	    			</script>
	        		<embed className="instaFeed2" src={'//lightwidget.com/widgets/' + instaSlideshow + '.html'} />
				</div>

	    		{/*
	    			<!-- LightWidget WIDGET --><script src="//lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/c54f9001e50055318fc3aa5286d0eee0.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>
    			*/}

	    		<div className="twitterSphere">
					<a className="twitter-timeline" 
					href="https://twitter.com/kchewy89?ref_src=twsrc%5Etfw">
					</a> 
					<script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

	    		</div>
			</div>
		</div>

    );
  }
}

export default Social;
