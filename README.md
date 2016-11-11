# modernizr-scss
>
[Modernizr]: https://modernizr.com/


## Description
scss functions to create classes to display/hide elements with class "show-for-(no-)[TEST]" / "hide-for-(no-)[TEST]"

It is using the [Modernizr] principle meaning that there must be a parent element (typical the html-element) that ***must*** have the class `TEST` or `no-TEST`
If no parent element have class `TEST` or `no-TEST` the class e.g. `hide-for-TEST` will have no effect  

## Installation
### bower
`bower install https://github.com/FCOO/modernizr-scss.git --save-dev`

## Usage

In any scss-file in the `\src` directory include

	@import "../bower_components/modernizr-scss/dist/modernizr-scss";


### mixin

	@include show-and-hide-for-modernizr-test( 
		$modernizr-test , 
		$parent-element-type: '', 
		$incl-no-selector: true, 
		$fail-as-default: false,
		$incl-table-display: true 
	)


The mixin insert scss for classes to show or hide element with classes `show-on-TEST` and `hide-on-TEST` and the complementary `show-on-no-TEST` and `hide-on-no-TEST`

**Element that are displayed by its modernizr-class can be hidden by setting `style="display:none"`, but element that are hidden by its modernizr-class *can't* be made visible by setting `style="display:block"`**

#### Example 1 `$modernizr-test: my-test`
	@include show-and-hide-for-modernizr-test( my-test );

Would include the following scss

	.my-test {
	  show-for-my-test	{ display: inherit;			}
	  hide-for-my-test	{ display: none	!important; }

	  hide-for-no-my-test	{ display: inherit; 		}
	  show-for-no-my-test	{ display: none	!important; }
	  
      //.. and specific visibility for tables 
	}

	.no-my-test {
	  show-for-my-test	{ display: none	!important; }
	  hide-for-my-test	{ display: inherit; 		}

	  hide-for-no-my-test	{ display: none	!important; }
	  show-for-no-my-test	{ display: inherit;			}

      //.. and specific visibility for tables 
	}


#### Example 2 `$parent-element-type: div`
	@include show-and-hide-for-modernizr-test( my-test, div );

Would include the following scss

	div.my-test {
	  show-for-my-test	{ display: inherit; 		}
	  hide-for-my-test	{ display: none	!important; }

	  hide-for-no-my-test	{ display: inherit; 		}
	  show-for-no-my-test	{ display: none	!important; }
	  
      //.. and specific visibility for tables 
	}

	div.no-my-test {
	  show-for-my-test	{ display: none	!important; }
	  hide-for-my-test	{ display: inherit;			}

	  hide-for-no-my-test	{ display: none	!important; }
	  show-for-no-my-test	{ display: inherit; 		}

      //.. and specific visibility for tables 
	}

#### Example 3 `$incl-no-selector: false`
	@include show-and-hide-for-modernizr-test( my-test, '', false );

Would include the following scss

	.my-test {
	  show-for-my-test	{ display: inherit;			}
	  hide-for-my-test	{ display: none	!important; }
  
      //.. and specific visibility for tables 
	}

	.no-my-test {
	  show-for-my-test	{ display: none	!important; }
	  hide-for-my-test	{ display: inherit;			}

      //.. and specific visibility for tables 
	}

#### Example 4 `$fail-as-default: true`
	@include show-and-hide-for-modernizr-test( my-test, null, null, true );

Would include the following scss

	show-for-my-test	{ display: none	!important; }
	hide-for-my-test	{ display: inherit;			}

	hide-for-no-my-test	{ display: none	!important; }
	show-for-no-my-test	{ display: inherit;			}

    //.. and specific visibility for tables 

	.my-test {
	  show-for-my-test	{ display: inherit;			}
	  hide-for-my-test	{ display: none	!important; }

	  hide-for-no-my-test	{ display: inherit;			}
	  show-for-no-my-test	{ display: none	!important; }
	  
      //.. and specific visibility for tables 
	}

#### Example 5 `$incl-table-display: false`
	@include show-and-hide-for-modernizr-test( my-test, null, null, null, false );

Would include the following scss

	.my-test {
	  show-for-my-test	{ display: inherit;			}
	  hide-for-my-test	{ display: none	!important; }

	  hide-for-no-my-test	{ display: inherit;			}
	  show-for-no-my-test	{ display: none	!important; }
	  
      //But NO specific visibility for tables 
	}

	.no-my-test {
	  show-for-my-test	{ display: none	!important; }
	  hide-for-my-test	{ display: inherit;			}

	  hide-for-no-my-test	{ display: none	!important; }
	  show-for-no-my-test	{ display: inherit;			}

      //But NO specific visibility for tables 
	}


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/modernizr-scss/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](http://github.com/NielsHolt)


