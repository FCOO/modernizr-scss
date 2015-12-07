/****************************************************************************
	modernizr-scss.js, 

	(c) 2015, FCOO

	https://github.com/FCOO/modernizr-scss
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";
	
	//Create fcoo-namespace
	window.fcoo = window.fcoo || {};

	//If fcoo.namespace() is defined create a name-space
	var ns = window.fcoo.namespace ? window.fcoo.namespace(''/*Enter the fcoo-namespace here*/) : window.fcoo; 
	//or var ns = window;

	var plugin_count = 1000;

	function ModernizrScss( $elem, options, plugin_count) {
		this.plugin_count = plugin_count;
		this.VERSION = "{VERSION}";
		this.options = $.extend({
			//Default options
		}, options || {} );


		//If ModernizrScss is a extention of class "ParentClass" include the next line 
		//window.ParentClass.call(this, input, options, plugin_count );

	
	}
  
  // expose access to the constructor
  ns.ModernizrScss = ModernizrScss;


	//modernizrScss as jQuery prototype
	$.fn.modernizrScss = function (options) {
		return this.each(function() {
			if (!$.data(this, "modernizrScss"))
				$.data(this, "modernizrScss", new window.ModernizrScss(this, options, plugin_count++));
		});
	};


	//Extend the prototype
	ns.ModernizrScss.prototype = {

		//myMethod
		myMethod: function( /*arg1, arg2*/ ){
		},
		


	};

	//If ModernizrScss is a extention of class "ParentClass" include the next line 
	//window.ModernizrScss.prototype = $.extend( {}, window.ParentClass.prototype, window.ModernizrScss.prototype );


	/******************************************
	Initialize/ready 
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

	
	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));