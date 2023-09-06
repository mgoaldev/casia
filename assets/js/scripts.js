var urlParams = new URLSearchParams(window.location.search);
var urlParamLang = urlParams.get('lang');

var langJson;
if(urlParamLang = "id") {
	if(urlParamLang != 'id' && urlParamLang != 'vn' && urlParamLang != 'th' && urlParamLang != 'cn' && urlParamLang != 'mycn' && urlParamLang != 'krw') {
		urlParamLang = 'en';
	}
	fetchLangJson(urlParamLang);
}
else if (urlParamLang == null || urlParamLang == "") {
	fetchLangJson("en");
}
else {
	$.get("https://ipinfo.io", function(response) {
		var detectedCountry = response.country;
		switch(detectedCountry.toLowerCase()) {
			case 'id':
				langJson = 'id';
				break;
			// case 'vn':
			// 	langJson = 'vn';
			// 	break;
			// case 'th':
			// 	langJson = 'th';
			// 	break;
			// case 'cn':
			// 	langJson = 'cn';
			// 	break;
			// case 'mycn':
			// 	langJson = 'mycn';
			// 	break;
			// case 'krw':
			// 	langJson = 'krw';
			// 	break;
			// case 'jpy':
			// 	langJson = 'jpy';
			// 	break;
			default:
				langJson = 'en';
				break;
		}
		fetchLangJson(langJson);
	}, "jsonp");
}

function fetchLangJson(country) {
	$('.header__langs .sel-lang').prepend('<img src="assets/images/flags/'+country+'.svg">');
	$('body').attr('data-lang', country);
	$.ajax({
		url: "assets/js/langcontent/"+country+".json",
		type: 'GET',
		cache: false,
		dataType: 'json',
		success: function(result) {
			Object.entries(result).map(obj => {
				const key   = obj[0];
				const value = obj[1];
				$('[data-txt="'+key+'"]').html(value);
				$('[data-cta="'+key+'"]').attr('href', value);
			});
		},
		error: function() {
			alert("No");
		}
	});
}

// tnc content
const tncContent = document.querySelector('.tnc__content');
setTimeout(function(){
	if ( $('body').attr('data-lang') === 'en' ) {
		tncContent.innerHTML = tncEN;
	}
	if ( $('body').attr('data-lang') === 'id' ) {
		tncContent.innerHTML = tncID;
	}
	// if ( $('body').attr('data-lang') === 'cn' ) {
	// 	tncContent.innerHTML = tncCN;
	// }
	// if ( $('body').attr('data-lang') === 'mycn' ) {
	// 	tncContent.innerHTML = tncMYCN;
	// }
	// if ( $('body').attr('data-lang') === 'th' ) {
	// 	tncContent.innerHTML = tncTH;
	// }
	// if ( $('body').attr('data-lang') === 'vn' ) {
	// 	tncContent.innerHTML = tncVN;
	// }
	// if ( $('body').attr('data-lang') === 'krw' ) {
	// 	tncContent.innerHTML = tncKRW;
	// }
	// if ( $('body').attr('data-lang') === 'jpy' ) {
	// 	tncContent.innerHTML = tncJPY;
	// }
}, 1000)

// const tncContent2 = document.querySelector('.tnc__content_2');
// setTimeout(function(){
// 	if ( $('body').attr('data-lang') === 'en' ) {
// 		tncContent2.innerHTML = tncENa;
// 	}
// 	if ( $('body').attr('data-lang') === 'id' ) {
// 		tncContent2.innerHTML = tncIDa;
// 	}
// 	if ( $('body').attr('data-lang') === 'cn' ) {
// 		tncContent2.innerHTML = tncCNa;
// 	}
// 	if ( $('body').attr('data-lang') === 'mycn' ) {
// 		tncContent2.innerHTML = tncMYCNa;
// 	}
// 	if ( $('body').attr('data-lang') === 'th' ) {
// 		tncContent2.innerHTML = tncTHa;
// 	}
// 	if ( $('body').attr('data-lang') === 'vn' ) {
// 		tncContent2.innerHTML = tncVNa;
// 	}
// 	if ( $('body').attr('data-lang') === 'krw' ) {
// 		tncContent2.innerHTML = tncKRWa;
// 	}
// 	if ( $('body').attr('data-lang') === 'jpy' ) {
// 		tncContent2.innerHTML = tncJPYa;
// 	}
// }, 1000)

function toggleTnc() {
	$('.tnc__head').toggleClass("active");
	$('.to-top').toggleClass("active");
	$('.tnc__content').slideToggle();
}
function toggleTnc2() {
	$('.tnc__head_2').toggleClass("active");
	$('.tnc__content_2').slideToggle();
	$('.to-top_2').toggleClass("active");
}
$('.content__banner__tnc__head, .tnc__head').click(function(){
	toggleTnc();
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".tnc").offset().top 
	}, 500);
});

// Second TNC 
$('.content__banner__tnc__head_2, .tnc__head_2').click(function(){
	toggleTnc2();
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".tnc2").offset().top 
	}, 500);
});

$(".to-top .btn").click(function() {
	toggleTnc();
	$([document.documentElement, document.body]).animate({
			scrollTop: $("body").offset().top 
	}, 500);
});
$(".to-top_2 .btn").click(function() {
	toggleTnc2();
	$([document.documentElement, document.body]).animate({
			scrollTop: $("body").offset().top 
	}, 500);
});

// slider - swiper
setTimeout(function(){
      
	var sliderSports = new Swiper(".swiper--sports", {
		navigation: {
			nextEl: '.swiper-next',
			prevEl: '.swiper-prev',
		},
		slidesPerView: "auto",
		breakpoints: {
			320: {
				spaceBetween: 8,
			},
			960: {
				spaceBetween: 16
			}
		}
	});
}, 1000);

$(window).on('scroll', function() {
	if ($(window).scrollTop() >= $('.content__tiles').offset().top + $('.content__tiles').
		outerHeight() - window.innerHeight) {
		$(".content__teaser").fadeIn();
	} else {
		$(".content__teaser").fadeOut();
	}
});

// function openInNewWindow(url, wight, height) {
// 	window.open(url, '', 'width=' + wight + ', height=' + height);
// }

// For the accordion
const faqs = document.querySelectorAll('.option-hover');
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("roll-active");
    })
})