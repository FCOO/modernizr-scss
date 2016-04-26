# modernizr-scss
>


## Description
scss functions to create classes to display/hide elements with class "show-for-(no-)[TEST]" / "hide-for-(no-)[TEST]"

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

#### Example 1 `$modernizr-test: my-test`
	@include show-and-hide-for-modernizr-test( my-test );

Would include the following scss

	.my-test {
	  show-for-my-test	{ display: inherit	!important; }
	  hide-for-my-test	{ display: none		!important; }

	  hide-for-no-my-test	{ display: inherit	!important; }
	  show-for-no-my-test	{ display: none		!important; }
	  
      //.. and specific visibility for tables 
	}

	.no-my-test {
	  show-for-my-test	{ display: none		!important; }
	  hide-for-my-test	{ display: inherit	!important; }

	  hide-for-no-my-test	{ display: none		!important; }
	  show-for-no-my-test	{ display: inherit	!important; }

      //.. and specific visibility for tables 
	}


#### Example 2 `$parent-element-type: div`
	@include show-and-hide-for-modernizr-test( my-test, div );

Would include the following scss

	div.my-test {
	  show-for-my-test	{ display: inherit	!important; }
	  hide-for-my-test	{ display: none		!important; }

	  hide-for-no-my-test	{ display: inherit	!important; }
	  show-for-no-my-test	{ display: none		!important; }
	  
      //.. and specific visibility for tables 
	}

	div.no-my-test {
	  show-for-my-test	{ display: none		!important; }
	  hide-for-my-test	{ display: inherit	!important; }

	  hide-for-no-my-test	{ display: none		!important; }
	  show-for-no-my-test	{ display: inherit	!important; }

      //.. and specific visibility for tables 
	}

#### Example 3 `$incl-no-selector: false`
	@include show-and-hide-for-modernizr-test( my-test, '', false );

Would include the following scss

	.my-test {
	  show-for-my-test	{ display: inherit	!important; }
	  hide-for-my-test	{ display: none		!important; }
  
      //.. and specific visibility for tables 
	}

	.no-my-test {
	  show-for-my-test	{ display: none		!important; }
	  hide-for-my-test	{ display: inherit	!important; }

      //.. and specific visibility for tables 
	}

#### Example 4 `$fail-as-default: true`
	@include show-and-hide-for-modernizr-test( my-test, nil, nil, true );

Would include the following scss

	show-for-my-test	{ display: none		!important; }
	hide-for-my-test	{ display: inherit	!important; }

	hide-for-no-my-test	{ display: none		!important; }
	show-for-no-my-test	{ display: inherit	!important; }

    //.. and specific visibility for tables 

	.my-test {
	  show-for-my-test	{ display: inherit	!important; }
	  hide-for-my-test	{ display: none		!important; }

	  hide-for-no-my-test	{ display: inherit	!important; }
	  show-for-no-my-test	{ display: none		!important; }
	  
      //.. and specific visibility for tables 
	}

#### Example 5 `$incl-table-display: false`
	@include show-and-hide-for-modernizr-test( my-test, nil, nil, nil, false );

Would include the following scss

	.my-test {
	  show-for-my-test	{ display: inherit	!important; }
	  hide-for-my-test	{ display: none		!important; }

	  hide-for-no-my-test	{ display: inherit	!important; }
	  show-for-no-my-test	{ display: none		!important; }
	  
      //But NO specific visibility for tables 
	}

	.no-my-test {
	  show-for-my-test	{ display: none		!important; }
	  hide-for-my-test	{ display: inherit	!important; }

	  hide-for-no-my-test	{ display: none		!important; }
	  show-for-no-my-test	{ display: inherit	!important; }

      //But NO specific visibility for tables 
	}


## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/modernizr-scss/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

[Niels Holt](http://github.com/NielsHolt]


