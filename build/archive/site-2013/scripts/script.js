// JavaScript Document

var projectID;
var projectName;
var projectDesc;
var projectThumb;
var projectImgs;
var projectLink;
var projectTags;
var activeProjects;
var currNav;
var prevNav;
var initNavPos;
var initBodyHeight;
var docURL;
var thumbTotal;
var thumbCount;
var thumbH;
var thumbW;

var initRun = true;
var firstRun = true;
var unClick = false;
var inMotion = false;
var isMobile = false;
var loadDone = false;

var thumbCols = 3;
var thumbIndex = 3;
var thumbInterval = 2;
var currNavItem = 'All';

var shadowHeight = 12;

var initThumbIndex = thumbIndex;
var thumbRows = thumbIndex;
var maxIndex = thumbIndex;

window.scroll(0,0);

var browserName = navigator.appName;
var ua = window.navigator.userAgent;
var ieVer = getInternetExplorerVersion();

var browserPref = 'html';
if (ua.indexOf('Safari') != -1 || ua.indexOf('Chrome') != -1){	browserPref = 'body'; }	

function getInternetExplorerVersion(){
	
   var rv = -1;
   
   if (browserName == 'Microsoft Internet Explorer'){
	   
	  var ua = navigator.userAgent;
	  
	  var re  = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
	  
	  if (re.exec(ua) != null){
		  
		 rv = parseFloat( RegExp.$1 );
	  }
   }
   return rv;
}

$(document).ready(function(){
	
	docURL = String(document.location.href);
	
	if(ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/iPod/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i)){
		
		isMobile = true;
	}
	
	if (browserName == 'Microsoft Internet Explorer' && ieVer < 9){
	
		alert("Hi there, Internet Explorer User!\n\nThis website was designed using the latest and greatest technology which, unfortunately, is not supported by this browser.\n\nYou really shouldn't be using IE at all as it's the worst browser ever created.\n\nI would suggest switching to Chrome or Firefox as soon as possible.\nYour browsing experience will be universally improved.\n\nThanks!");	
	}
	
	$('#nav_' + currNav).addClass('active');
	
	$('#nav a').each(function(index){
	
		$(this).mouseenter(function(){
			
			if (String($(this).attr('class')).indexOf('active') == -1){
				
				$(this).stop().animate({ opacity: .67 }, 333);
			}
		});
		$(this).mouseleave(function(){
			
			if (String($(this).attr('class')).indexOf('active') == -1){
				
				$(this).stop().animate({ opacity: 1 }, 200);
			}
		});
		$(this).click(function(){
			
			if (String($(this).attr('class')).indexOf('active') == -1 && inMotion == false){
				
				inMotion = true;
				prevNav = currNav;
				currNav = this.innerHTML;
				updateMainNav(currNav,prevNav);
			}
		});	
	});
	
	$('#workHead').fitText(.967, { minFontSize: '85px' });
	$('#workNav ul').fitText(5.5);
	$('#workThumbs').fitText(6);
	$('#workNav li').each(function(index){
		
		$(this).attr('id','work'+index);
		
		$(this).mouseenter(function(){
			
			if ($(this).attr('class') != 'active'){
				
				$(this).stop().animate({ backgroundColor : '#fbffd1' }, 400); 
			}
		});
		$(this).mouseleave(function(){
			
			if ($(this).attr('class') != 'active' && $(this).attr('class') != 'on'){
				
				$(this).stop().animate({ backgroundColor : '#DCE858' }, 200); 
			}

		});
		$(this).click(function(){
			
			updateProjectNav(this.innerHTML,index);
		});
	});
	
	$('#wrapAbout').fitText(6);
	$('#wrapAboutHead').fitText(4);
	
	$('#wrapContact').fitText(6);
	$('#wrapSocial').fitText(8);
	
	$('.aboutBtn').each(function(index){
		
		$(this).mouseenter(function(){
			
			$(this).stop().animate({ backgroundColor : '#af5f2f' }, 400, 'swing');		
		});
		$(this).mouseleave(function(){
			
			$(this).stop().animate({ backgroundColor : '#888' }, 400, 'swing');		
		});
	});

	$('#contactSlides img').each(function(index){
		
		$(this).attr('id', 'contact' + index);
		$(this).css({ zIndex: Number($('#contactSlides').children().length) - index });
	});

	calibratePage();
	initWork();
});


function launchLightbox(ID){
	
	var projectArray;
	var findProjectImgs = projectImgs[ID];
	
	if (projectImgs[ID].indexOf(',') != -1){
	
		projectArray = new Array; 
		var splitImgs = String(projectImgs[ID]).split(',');
	
		$(splitImgs).each(function(index){
			
			projectArray.push({ href: splitImgs[index], title: 'Visit the Site', url: projectLink[ID] });	
		});
	}
	else {
		
		projectArray = [{ href: projectImgs[ID], title: projectLink[ID], url: projectLink[ID] }];		
	}
	
	$.fancybox.open(projectArray, { 
		padding : 0,
		margin : [36, 85, 36, 85],
		openEffect : 'elastic',
		openSpeed : 500,
		openEasing : 'easeOutExpo',
		closeEffect : 'fade',
		closeSpeed : 300,
		helpers: {
			title: {
				type: 'over'
			}
		},
		afterShow : function(){
			
			$('.siteLink').hover(function(){
				
				$('#siteDisclaimer').fadeToggle(300, 'swing');
			});
		}
	});
}

function updateMainNav(curr,prev){

	$('#nav_' + curr).addClass('active');
	$('#nav_' + curr).stop().animate({ opacity: .5 }, 400);
	
	$('#nav_' + prev).removeClass('active');
	$('#nav_' + prev).stop().animate({ opacity: 1 }, 400);	
}

function findInitHash(){

	if (docURL.indexOf('#') == -1){ currNav = 'work'; }
	else {
	
		var findHashString = docURL.slice(docURL.indexOf('#') + 1, docURL.length);
		currNav = findHashString;
	}
		
	//$('#workThumbs li.first').ready(function(){
		
		initNavPos = $('#wrapNav').offset().top;
				
		$('#wrapIntro').fadeOut(500, function(){
			
			//history.pushState(null, null, '#' + currNav);
		
			window.scroll(0,Number($('#'+currNav).attr('data-position')) + 1);
			
			if (currNav != 'work'){ updateMainNav(currNav,'work'); }
	
			$('#wrapNav').delay(50).animate({ opacity: .9 }, 400, 'swing');
			$('#wrapOuter').delay(100).animate({ opacity: 1 }, 800, 'swing');	
				
			loadDone = true;
		});
	//});	
}
	
jQuery.fn.stop().anchorAnimate = function(settings){

 	settings = jQuery.extend({
		
		speed : 1000
	}, settings);	
	
	return this.each(function(){
		
		var caller = this;
		
		$(caller).click(function(event){	

			event.preventDefault()
			
			var locationHref = window.location.href;
			var elementClick = $(caller).attr('href');
			var destination = $(elementClick).attr('data-position');
			
			$(browserPref + ':not(:animated)').stop().animate({ scrollTop: destination }, settings.speed, 'easeInOutExpo', function(){

				//history.pushState(null, null, '#' + currNav);
				inMotion = false;
			});
			
		  	return false;
		})
	})
}

$(window).bind('scroll', function(e){ 

	scrollEvents(); 
});
	
function scrollEvents(){

	scrollPos = $(window).scrollTop();
	
	if (scrollPos >= initNavPos && loadDone == true){
		
		$('#wrapNav').css({ position: 'fixed', top: '0', opacity: '1' });
		$('#wrapNavInner').css({ height: '3em' });
	}
	if (scrollPos < initNavPos && loadDone == true){
		
		$('#wrapNav').css({ position: 'absolute', top: initNavPos + 'px', opacity: '.85' });
		$('#wrapNavInner').css({ height: '4em' });
	}
	
	if (isMobile == false){
		
		var findWorkHeight = scrollPos - $('#work').outerHeight(true);
		var findAboutHeight = scrollPos - $('#work').outerHeight(true) - $('#about').outerHeight(true);
	
		var findWorkPos = $('#work').outerHeight(true);
		var findAboutPos = $('#work').outerHeight(true) + $('#about').outerHeight(true);
		var findContactPos = $('#work').outerHeight(true) + $('#about').outerHeight(true) + $('#contact').outerHeight(true);
		
		if (findWorkHeight < 0){ findWorkHeight = 0; }
	
		if (scrollPos >= findWorkPos - window.innerHeight && scrollPos < findAboutPos){
	
			$('#about').css({ position: 'fixed', top: 0, height: $('#wrapAbout').outerHeight(true) });
			$('#aboutText').css({ top: findWorkHeight * -.25 + 'px' });

			$('#about').css({ top: findWorkHeight * -1 + 'px' });
			$('#wrapBG_About').css({ top: findWorkHeight + 'px' });
	
			$('#wrapAboutHead').css({ top: findWorkHeight * -.33 + 'px' });		
		}
		else {

			$('#about').css({ position: 'relative', top: $('#about').attr('data-position') + 'px' });
			$('#contact').css({ top: $('#contact').attr('data-position') + 'px' });	
		}
	
		if (scrollPos >= findAboutPos - $('#wrapAbout').outerHeight(true)){
	
			$('#wrapBG_About').css({ top: '-5000px' });
			$('#wrapBG_Contact').css({ position: 'fixed', top: 0 });
		}
		else {

			$('#wrapBG_Contact').css({ position: 'relative', top: '-5000px' });	
		}
	
		if (scrollPos < findWorkPos && currNav != 'work' && inMotion == false){
		
			prevNav = currNav;
			currNav = 'work';
			if (loadDone == true){ //history.pushState(null, null, '#' + currNav); 
			}
			updateMainNav(currNav,prevNav);	
		}
		else if (scrollPos >= findWorkPos && scrollPos < findAboutPos && currNav != 'about' && inMotion == false){
		
			prevNav = currNav;
			currNav = 'about';
			//history.pushState(null, null, '#' + currNav);
			updateMainNav(currNav,prevNav);	
		}
		else if (scrollPos >= findAboutPos && currNav != 'contact' && inMotion == false){

			prevNav = currNav;
			currNav = 'contact';
			//history.pushState(null, null, '#' + currNav);
			updateMainNav(currNav,prevNav);		
		}
	
		if (currNav == 'work' && scrollPos <= $('#work').height() / 2 || scrollPos <= 0){
			
			$('#workHead').css({ top: Math.round(scrollPos * -.5) + 'px' });
		}
	
		if (currNav == 'work' && scrollPos < $('#workMask').offset().top - $('#wrapNav').height() - ($('#workMask').outerHeight(true) - $('#workMask').height())){
	
			$('#workNav').css({ position: 'absolute', top: $('#workHead').outerHeight(true) + 'px' });	
		}
		
		if (currNav == 'work' && scrollPos >= $('#workMask').offset().top - $('#wrapNav').height() - ($('#workMask').outerHeight(true) - $('#workMask').height()) && scrollPos < $('#workMask').offset().top + $('#workMask').height() - $('#wrapNav').height()){
			
			$('#workNav').css({ position: 'fixed', top: ($('#wrapNav').height() - ($('#workNav').outerHeight(true) - $('#workNav').innerHeight())) + 'px' });
		}
		
		if (scrollPos >= $('#workMask').offset().top + $('#workMask').height() - $('#wrapNav').height()){
	
			$('#workNav').css({ position: 'absolute', top: $('#workMask').outerHeight(true) + $('#workHead').outerHeight(true) + 'px' });	
		}
	
		if (currNav == 'about' || currNav == 'work'){
		
			workNavCount = 0;
			$('#aboutBtns').css({ top: findWorkHeight * .44 + 'px' });	
		}

		if (scrollPos >= $('#work').height() + $('#about').height() - window.innerHeight + ($('#wrapSocial').outerHeight(true) - shadowHeight) && scrollPos < $('#work').height() + $('#about').height() - $('#wrapBG_Contact').height()){
		
			slidesOn = false;
			clearTimeout(slideTimerVar);
			clearTimeout(initSlideTimerVar);
			
			$('#wrapSocial').css({ top: $('#work').height() + $('#about').height() - scrollPos - shadowHeight + 'px' });	
		}
		else if (scrollPos >= $('#work').height() + $('#about').height() - $('#wrapBG_Contact').height()){
	
			if (slidesOn == false){

				slidesOn = true;
				initSlideTimerVar = setTimeout("slideTimer()", slideDelay / 2);
			}
	
			$('#contactForm').css({ top: (findAboutHeight * .25) + (($('#wrapBG_Contact').outerHeight(true) * .5) - ($('#contactForm').outerHeight(true) * .5)) + 'px' });
		
			if ($('#wrapBG_Contact').outerHeight(true) + $('#wrapSocial').outerHeight(true) - 12 < window.innerHeight){
				
				$('#wrapSocial').css({ top: $('#wrapBG_Contact').height() - 12 });
			}
		}
		else if (currNav == 'about' || currNav == 'work'){
	
			$('#wrapSocial').stop().css({ bottom: 0, top:'auto' });
		}
	}
	else {
	
		$('.curtains > li').css({ position: 'relative', minHeight: 'auto' });
		$('#about').css({ top: -shadowHeight + 'px' });
		$('#contact').css({ top: -shadowHeight * 2 + 'px' });
		$('#wrapSocial').css({ position: 'relative', top: -shadowHeight + 'px' });
		$('#aboutText h4').css({ height: 'auto' });
		$('#contactForm').css({ position: 'relative', marginTop: '8%', width: '38%', right: '0' });
	}
}

var slidesOn = false;
var slideTimerVar;
var initSlideTimerVar;
var prevSlide = 0;
var currSlide = 0;
var slideSpeed = 2000;
var slideDelay = 6000;

function slideTimer(){
	
	if (slidesOn == true){
		
		prevSlide = currSlide;
		if (currSlide < Number($('#contactSlides').children().length - 1)){ currSlide++; }
		else { currSlide = 0; }
	
		$('#contact' + prevSlide).css({ zIndex: 0 });
		$('#contact' + currSlide).css({ zIndex:  Number($('#contactSlides').children().length) });
		$('#contact' + prevSlide).stop().animate({ opacity: 0 }, slideSpeed);
		
		$('#contact' + currSlide).stop().animate({ opacity: 1 }, slideSpeed);
		
		slideTimerVar = setTimeout("slideTimer()", slideDelay);
	}
	else {
		
		clearTimeout(slideTimerVar);
		clearTimeout(initSlideTimerVar);
	}
}

$(window).resize(function(){
	
	scrollEvents();
	calibratePage();
	findThumbSize();
	updateCurtainHeight();
});

function calibratePage(){

	$('#wrapOuter').css({ height: window.innerHeight, width: window.innerWidth });
	$('#wrapSocial').css({ height: $('#socialRight').outerHeight(true) });
	$('#workNav').css({ width: $('#wrapWork').width() });
	$('#wrapBG_About').css({ height: $('#aboutImg').height() });
	$('#contactSlides').css({ height: $('#contactSlides img').height() });
}

function initWork(){
	
	$.ajax({
		type: 'GET',
		url: 'projects.xml',
		dataType: 'xml',
		success: projectParse
	});
	
	$('#submit').click(function(){	

		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var alertMsg = '';

		var nameVal = $('#name').val();
		if(nameVal == '' || nameVal == 'Name') {
			alertMsg += 'No Name\n';
			hasError = true;
		}
		
		var emailVal = $('#email').val();
		if(emailVal == '' || emailVal == 'Email') {
			alertMsg += 'No Email\n';
			hasError = true;
		} 
		else if(!emailReg.test(emailVal)) {	
			alertMsg += 'Wrong Email\n';
			hasError = true;
		}
		
		var messageVal = $('#message').val();
		if(messageVal == '' || messageVal == 'Message') {
			alertMsg += 'No Message\n';
			hasError = true;
		}
		
		if(hasError == false) {
	
			$.post('sendEmail.php', { 
			
				to: 'brendan@brendanenglish.com', name: nameVal, email: emailVal, subject: 'BrendanEnglish.com Message', message: messageVal },
   					
				function(data){
					
					$('#name').val('Name');
					$('#email').val('Email');
					$('#message').val('Message');
					$('#name').css('color','#777777');
					$('#email').css('color','#777777');
					$('#message').css('color','#777777');
					alert('Hey there! Thanks for the email!');
				}
			 );
		}
		else {
		
			alert('You forgot some stuff...\n\n' + alertMsg);	
		}
		return false;
	});
	
	$('input, textarea').each(function(){

		$(this).focus(function(){

			if ($(this).val() == 'Name' || $(this).val() == 'Email' || $(this).val() == 'Message'){
				$(this).val('');
			}
			$(this).css('color','#333333');
		});
		$(this).focusout(function(){
			
			if ($(this).val() == ''){
				if($(this).attr('name') == 'name'){ $(this).val('Name') }
				if($(this).attr('name') == 'email'){ $(this).val('Email') }
				if($(this).attr('name') == 'message'){ $(this).val('Message') }
				$(this).css('color','#777777');
			}
		});
	});
}

function projectParse(projects){
	
	projectID = new Array;
	projectName = new Array;
	projectDesc = new Array;
	projectThumb = new Array;
	projectImgs = new Array;
	projectLink = new Array;
	projectTags = new Array;

	var projectList = '';

	$(projects).find('project').each(function(){
		
		projectID.push($(this).find('id').text());
		projectName.push($(this).find('name').text());
		projectDesc.push($(this).find('desc').text());
		projectThumb.push($(this).find('thumb').text());
		projectImgs.push($(this).find('images').text());
		projectLink.push($(this).find('link').text());
		projectTags.push($(this).find('tags').text());
	});
	
	thumbTotal = projectID.length;
	thumbCount = thumbTotal;
	
	$(projectID).each(function(index){
		
		var tempLink = '';
		var projectTagLabels = '';
		var splitString = String(projectTags[index]).split(',');
		
		for (var a = 0; a < splitString.length; a++){
			
			var finalSplitString = splitString[a];
			if (finalSplitString == 'Javascript'){ finalSplitString = 'JS'; }
			projectTagLabels += '<span class="tagLabel">' + finalSplitString + '</span>';	
		}
		
		var isFirst = '';
		var isLast = '';
		
		if (index == 0){ isFirst = ' first'; }
		if (index == projectID.length - 1){ isLast = ' last'; }
	
		projectList += '<a href="javascript:launchLightbox('+index+')" class="fancybox" title="'+ projectName[index] +'"><div id="thumb' + index + '" class="thumb active' + isLast + isFirst + '" style="z-index:' + Number(projectID.length - index) + ';"><img alt="'+projectName[index]+'" src="' + projectThumb[index] + '" height="314" width="480" /><div class="thumbText"><h2>' + projectName[index] + '<div class="arrow"></div></h2><p id="desc">' + projectDesc[index] + '</p><p id="tags">' + projectTagLabels + '</p></div></div></a>';
	});
	
	$('#workThumbs').html(projectList);
	
	$('.thumb').mouseenter(function(){
		
		$('#' + this.id + ' .thumbText').stop().animate({ opacity: 1 }, 300, 'easeOutQuad');
	});
	$('.thumb').mouseleave(function(){
		
		$('#' + this.id + ' .thumbText').stop().animate({ opacity: 0 }, 200, 'easeOutQuad');
	});
	
	$('.thumb img').each(function(index){
		
		$('#thumb' + index + ' img').ready(function(){

			$('#thumb' + index + ' img').stop().fadeIn(300, function(){
				
				$('#thumb' + index).css({ background: 'none' });
				$('#thumb' + index).stop().animate({ opacity: 1 }, 500);
			});
		});
	});
	
	$('#moreArrow').mouseenter(function(){
		
		if ($(this).attr('class').indexOf('none') == -1){
			
			$(this).stop().animate({ opacity: 1, backgroundColor: '#DCE858', top: '-4px' }, 300, 'swing');
		}
	});
	$('#moreArrow').mouseleave(function(){
		
		if ($(this).attr('class').indexOf('none') == -1){
		
			$(this).stop().animate({ opacity: .5, backgroundColor: '#305f7a', top: 0 }, 200, 'swing');
		}
	});
	$('#moreArrow').click(function(){
		
		if ($(this).attr('class').indexOf('none') == -1){
			
			showWork();
		}
	});
	
	$('.socialLink').mouseenter(function(){
		
		$(this).stop().animate({ color: '#266581' }, 300, 'swing');
	});
	$('.socialLink').mouseleave(function(){
		
		$(this).stop().animate({ color: '#444444' }, 300, 'swing');
	});
	
	$('#workThumbs .last').ready(function(){
	
		$('#workThumbs').masonry({
			itemSelector: '.thumb:visible',
			isAnimated: true,
			animationOptions: {
				duration: 500,
				easing: 'easeInOutQuart',
				queue: false
			},
			columnWidth: function(containerWidth){
				return (containerWidth / thumbCols);
			}
		});
	});
	
	updateProjectNav('All',0);
	$('a.anchorLink').anchorAnimate();
}

function showWork(){
	
	if (thumbIndex + thumbInterval <= thumbRows){
		
		thumbIndex += thumbInterval;
		maxIndex += thumbInterval;
		findThumbSize();
		updateArrow();
	}
	else if (thumbIndex != 1 && thumbIndex + 1 <= thumbRows){
	
		thumbIndex++;
		maxIndex++;
		findThumbSize();
		updateArrow();
	}
	else if (thumbIndex == thumbRows){
		
		$(browserPref).stop().animate({ scrollTop: $('#workMask').offset().top - $('#wrapNav').height() - ($('#workMask').outerHeight(true) - $('#workMask').height()) + 1 }, 600, 'easeInOutExpo', function(){
			
			thumbIndex = initThumbIndex;
			maxIndex = initThumbIndex;
			findThumbSize();
			updateArrow();
		});
	}
}

function shuffleProjects(navItem,navID){

	activeProjects = new Array;
	
	$('#workNav li').each(function(){
		
		if ($(this).attr('class') == 'active'){
		
			activeProjects.push(this.innerHTML);
		}
	});
	
	var thumbsOn = new Array;
	var thumbsOff = new Array;
	
	var colCountOn = 0;
	var colCountOff = 0;
	
	if (activeProjects == 'All'){

		$('#workThumbs .thumb').each(function(){
		
			if ($(this).attr('class') != 'thumb active'){
			
				thumbsOn.push(this);	
			}
		});
	}
	else {
		
		$('#workThumbs .thumb').each(function(index){
			
			var tagOnHit = 0;
			var tagOffHit = 0;
			var findTags = String(projectTags[index]).split(',');
			
			for (var a = 0; a < activeProjects.length; a++){
			
				for (var b = 0; b < findTags.length; b++){
	
					if (activeProjects[a].toUpperCase() == findTags[b].toUpperCase() && $(this).attr('class') != 'thumb active'){
					
						tagOnHit++;
					}
					if (activeProjects[a].toUpperCase() == findTags[b].toUpperCase() && $(this).attr('class') == 'thumb active'){
					
						tagOffHit++;	
					}
				}
			}
			
			if (tagOnHit == activeProjects.length){ 
			
				thumbsOn.push(this);
			}
			else if (tagOffHit == 0 || tagOffHit != 0 && tagOffHit < activeProjects.length){ 
			
				thumbsOff.push(this); 
			}
		});
	}

	updateThumbs(thumbsOn,thumbsOff);
}

function updateArrow(){

	if (thumbRows < thumbIndex || thumbIndex == thumbRows && thumbIndex <= initThumbIndex){
	
		$('#moreArrow').addClass('none');
		$('#moreArrow').stop().animate({ backgroundColor: '#16415a', opacity: .15 }, 200, 'swing', function(){
		
			$(this).css({ cursor: 'default', pointerEvents: 'none' });	
			$(this).html('&nbsp;');
		});
	}
	else {
		
		if ($('#moreArrow').attr('class').indexOf('none') != -1){
		
			$('#moreArrow').removeClass('none');
			$('#moreArrow').stop().animate({ backgroundColor: '#16415a', opacity: .5 }, 200, 'swing', function(){
		
				$(this).css({ cursor: 'pointer', pointerEvents: 'auto' });	
			});
		}
		
		if (thumbIndex < thumbRows && thumbIndex >= initThumbIndex){
		
			$('#moreArrow').html('&#59228;');
		}
		else if (thumbIndex >= thumbRows && thumbIndex > initThumbIndex){
		
			$('#moreArrow').html('&#59231;');
		}
	}
}

function updateThumbs(thumbsOn,thumbsOff){

	thumbCount = 0;
	var thumbOnCount = 0;
	
	$(thumbsOn).each(function(){

		if (currNavItem != 'All'){ thumbCount++; }
		else { thumbCount = thumbTotal; }
	
		$(this).addClass('active');
		
		$(this).stop().show(200, 'easeInOutQuad', function(){
			
			$(this).css({ display: 'block' });
			
			if (thumbOnCount == thumbsOn.length - 1){
	
				$('#workThumbs').masonry('reload', function(){
					
					findThumbSize();
				});
			}
			thumbOnCount++;
		});
	});
	
	var thumbOffCount = 0;
	
	$(thumbsOff).each(function(){
		
		$(this).removeClass('active');
		
		$(this).stop().hide(200, 'easeInOutQuad', function(){
				
			$(this).css({ display: 'none' });
			
			if (thumbOffCount == thumbsOff.length - 1){
			
				$('#workThumbs').masonry('reload', function(){
				
					findThumbSize();
				});
			}
			thumbOffCount++;
		});
	});
	
	thumbRows = Number(thumbCount / thumbCols);
	
	if (thumbRows % 1 != 0){ thumbRows = parseInt(thumbRows) + 1; }
	
	if (thumbIndex > thumbRows && firstRun == false){
	
		thumbIndex -= (thumbIndex - thumbRows);
	}
	else if (thumbRows > thumbIndex && thumbIndex > maxIndex){
	
		thumbIndex += (thumbRows - thumbIndex);	
	}
	else if (thumbRows > thumbIndex && thumbIndex <= maxIndex && maxIndex <= thumbRows){

		thumbIndex = maxIndex;		
	}
	else if (thumbRows > thumbIndex && maxIndex < thumbRows || thumbRows > thumbIndex && thumbRows <= maxIndex){
	
		thumbIndex = thumbRows;
	}
	
	if (thumbIndex > thumbRows && firstRun == true){ thumbIndex = thumbRows; findThumbSize(); }
	
	if (thumbIndex * thumbH < $(window).scrollTop() - window.innerHeight && firstRun == false){
	
		$(browserPref).stop().animate({ scrollTop: $('#workMask').offset().top - $('#wrapNav').height() - ($('#workMask').outerHeight(true) - $('#workMask').height()) + 1 }, 600, 'easeInOutExpo');
	}
	
	updateArrow();
}

function findThumbSize(){
	
	thumbH = $('.thumb').outerHeight(true);
	thumbW = $('.thumb').outerWidth(true);
	
	if (thumbIndex > maxIndex){ thumbIndex = maxIndex; }
	
	$('#workMask').stop().animate({ height: thumbH * thumbIndex }, 
	
		{ easing: 'easeInOutQuint', duration: 500, complete: function(){
			
			if (firstRun == false){ updateCurtainHeight(); }
			else { firstRun = false; }
			
			updateCurtainHeight();
		
		 }, step: function(index){

			scrollEvents();
		}
	});
}

function updateCurtainHeight(){
	
	$('.curtain').each(function(index){
		
		$('#work').css({ minHeight: $('#wrapWorkOuter').outerHeight(true) });	
		$('#work').attr('data-height',$('#wrapWorkOuter').outerHeight(true));
		$('#work').attr('data-position',0);
		
		if ($('#work').attr('data-height') < window.innerHeight){ 
		
			$('#work').css({ minHeight: window.innerHeight });
			$('#work').attr('data-height',window.innerHeight) 
		}
	
		$('#about').css({ minHeight: $('#wrapAboutOuter').outerHeight(true) });	
		$('#about').attr('data-height',$('#wrapAboutOuter').outerHeight(true));
		$('#about').attr('data-position',$('#work').outerHeight(true));
		
		if ($('#about').attr('data-height') < window.innerHeight){ 
		
			$('#about').css({ minHeight: window.innerHeight });
			$('#about').attr('data-height',window.innerHeight) 
		}
		
		$('#contact').css({ minHeight: $('#wrapContactOuter').outerHeight(true) });	
		$('#contact').attr('data-height',$('#wrapContactOuter').outerHeight(true));
		$('#contact').attr('data-position',$('#work').outerHeight(true) + $('#about').outerHeight(true));
		
		if ($('#contact').attr('data-height') < window.innerHeight){ 
		
			$('#contact').css({ minHeight: window.innerHeight });
			$('#contact').attr('data-height',window.innerHeight) 
		}
	});
	
	$('body').css({ height: $('#work').outerHeight(true) + $('#about').outerHeight(true) + $('#contact').outerHeight(true) });
	
	if (initRun == true){
		
		initRun = false;
		findInitHash();	
	}
}

function updateProjectNav(navItem,navID){
	
	unClick = false;
	currNavItem = navItem;
	
	if (navItem == 'All' && document.getElementById('work0').className != 'active'){
	
		addActive(0);
	
		$('#workNav li').each(function(index){
			
			if (index != 0 && $(this).attr('class') == 'active'){
			
				removeActive(index);
			}
		});
	}
	else if (navItem != 'All' && document.getElementById('work0').className == 'active'){
	
		removeActive(0);
		addActive(navID);	
	}
	else if (document.getElementById('work' + navID).className != 'active'){

		addActive(navID);
	}
	else {
	
		var atleastOne = false;
		
		$('#workNav li').each(function(index){
			
			if ($(this).attr('class') == 'active' && this.innerHTML != navItem){ atleastOne = true; }
		});
		
		if (atleastOne == false){ addActive(0);	}
		
		removeActive(navID);
		unClick = true;
	}
	
	shuffleProjects(navItem,navID);
}

function addActive(navID){
	
	$('#work' + navID).addClass('active');	
	$('#work' + navID).css({ textShadow: '0 1px 1px #05151e' });		
	$('#work' + navID).stop().animate({ backgroundColor: '#16415a', color: '#dce858', border: '1px solid #f7fea3', boxShadow: 'inset 0px 1px 3px #05151e' }, 200);	
}

function removeActive(navID){
	
	$('#work' + navID).removeClass('active');
	$('#work' + navID).addClass('on');
	$('#work' + navID).css({ textShadow : '0 1px 1px #fff' });	
	$('#work' + navID).stop().animate({ backgroundColor: '#DCE858', color: '#0a2535', border: '1px solid #DCE858', boxShadow: '0 #DCE858' }, 200, function(){
	
		$('#work' + navID).removeClass('on');
	});
}