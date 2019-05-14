$(function(){


    var people = JSON.parse(localStorage.getItem('people'))
    if(people=='company'){
		$('.company-seul').css({"display":"block"})
	}else{
		$('.work-seul').css({"display":"block"})
    }
  })