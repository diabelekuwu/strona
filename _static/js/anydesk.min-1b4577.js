var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("header").outerHeight()/4;function hasScrolled(){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(e>lastScrollTop&&e>navbarHeight?($("header").removeClass("nav-down").addClass("nav-up"),$("#pricingStickyBar").removeClass("sticky-down").addClass("sticky-up")):(e+$(window).height()<$(document).height()&&($("header").removeClass("nav-up").addClass("nav-down"),$("#pricingStickyBar").removeClass("sticky-up").addClass("sticky-down")),e<navbarHeight&&($("header").removeClass("nav-down"),$("#pricingStickyBar").removeClass("sticky-up").addClass("sticky-down"))),lastScrollTop=e)}function setSameHeight(){var e,a,o,t,n=0,i=0,r=[],d=0;$(".sameHeight").each(function(){if((a=$(this)).css("height","auto"),o=a.height(),d=a.offset().top,!a.parent().hasClass("any-slider"))if(i!=d)r.length=0,i=d,n=o,a.height(n),r.push(a);else if(r.push(a),e=r.length,n<o)for(n=o,t=0;t<e;t++)r[t].height(n);else a.height(n)}),n=0,i=0,r=[],d=0,$(".any-slider > .sameHeight").each(function(){if((a=$(this)).css("height","auto"),o=a.height(),d=a.offset().top,r.push(a),e=r.length,n<o)for(n=o,t=0;t<e;t++)r[t].height(n);else a.height(n)})}function scrollToElementCentered(e){$("html,body").animate({scrollTop:e.offset().top-($(window).height()-e.outerHeight(!0))/2},400)}function getCookie(e){for(var a=e+"=",o=decodeURIComponent(document.cookie).split(";"),t=0;t<o.length;t++){for(var n=o[t];" "==n.charAt(0);)n=n.substring(1);if(0==n.indexOf(a))return n.substring(a.length,n.length)}return""}function setCookie(e,a,o){var t=new Date;t.setTime(t.getTime()+24*o*60*60*1e3);var n="expires="+t.toUTCString();document.cookie=e+"="+a+";"+n+";path=/;"}function deleteCookie(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;"}$(window).scroll(function(e){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),$(hasScrolled),$(document).ready(function(){setDarkMode(),setTimeout(setSameHeight,200),$(window).on("resize",function(e){setSameHeight()}),$(window).on("orientationchange",function(e){setSameHeight()}),$(".selectpicker").selectpicker(),$("#teams-tab, #personal-tab").on("click",function(){setTimeout(setSameHeight,200)})}),$(document).ready(function(){document.cookie.indexOf("accept_cookies")>-1&&$("#any-cookieBar, #btnCookieBarPlaceholder").fadeOut(100),$("#any-cookieBar-close").change(function(){var e=new Date;e.setTime(e.getTime()+31536e6),document.cookie="accept_cookies=true; expires="+e.toGMTString()+"; path=/; domain=.anydesk.com",$("#any-cookieBar, #btnCookieBarPlaceholder").fadeOut(100)})}),$(function(){$(window).scroll(function(){$(this).scrollTop()>500?$("#any-backToTop").show().removeClass("fadeOutRight").addClass("fadeInRight"):$(this).scrollTop()<500&&$("#any-backToTop").removeClass("fadeInRight").addClass("fadeOutRight")}),$("#any-backToTop").click(function(){return $("html, body").animate({scrollTop:0},600,function(){window.location.hash=""}),!1})}),$(document).ready(function(){$('a[rel="relativeanchor"]').click(function(){return $("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},800),!1})}),$(".any-logo-white").hide(),$(".navbar-light .any-logo-white").show(),$(".any-logo-white-germany").hide(),$(".navbar-light .any-logo-white-germany").show(),$(".navbar-toggler").click(function(e){"true"==$(this).attr("aria-expanded")&&($(".navbar-bg").fadeOut(100),$(".navbar-light .any-logo-white").show(),$(".navbar-light .any-logo-black").hide()),"false"==$(this).attr("aria-expanded")&&($(".navbar-bg").fadeIn(100),$(".navbar-light .any-logo-black").fadeIn(100),$(".navbar-light .any-logo-white").fadeOut(100)),e.preventDefault()}),$(".navbar-bg").click(function(e){$(e.target).is(".navbar-collapse")||($(".navbar-collapse").collapse("hide"),$(".navbar-light .any-logo-white").show(),$(".navbar-light .any-logo-black").hide()),$(this).hide()}),$(".any-bannerSlideClose").click(function(){$(".any-bannerSlide").slideUp(300,function(){$(this).alert("close")})}),$(document).ready(function(){$("[data-cookie-value]").each(function(){$(this).val(getCookie($(this).data("cookie-value"))),$(this).removeAttr("data-cookie-value")})}),$(document).ready(function(){$(".embed-responsive-textvideo").hide(),$(".embed-icon-red").hide(),$(document).on("click",".embed-image",function(e){var a=$(this).data("ref");$("."+a+"-embed-image").hide(),$("."+a+"-embed-video").show();var o=videojs.getPlayer(a);o&&o.play()}),$(".embed-image, .modal-image").mouseenter(function(e){var a=$(this).data("ref");$("."+a+"-embed-icon-white").fadeOut(),$("."+a+"-embed-icon-red").fadeIn()}).mouseleave(function(e){var a=$(this).data("ref");$("."+a+"-embed-icon-white").fadeIn(),$("."+a+"-embed-icon-red").fadeOut()}),$(document).on("click",".modal-image",function(e){var a=$(this).data("ref"),o=videojs.getPlayer(a);o&&o.play()}),$(document).on("click",".modal-video-close",function(e){var a=$(this).data("ref"),o=videojs.getPlayer(a);o&&o.pause()}),$(".modal-video").on("hidden.bs.modal",function(e){var a=$(this).data("ref");if(a){var o=videojs.getPlayer(a);o&&o.pause()}}),$(".clickable-content").on("click",function(e){var a=$(this),o=a.data("url");return a.data("newtab")?(window.open(o,"_blank"),!1):(window.location.href=o,!1)}),$(".clickable-content").addClass("cursor-pointer");var e=0;["Work.","Create.",'<span class="home-animation-text-letters">Monitor.</span>','<span class="home-animation-text-letters">Manage.</span>',"Access."].forEach(function(a){setTimeout(function(){$("#home-animation-text").fadeOut(200,function(){$(this).html(a).fadeIn(200)})},700*++e)}),$("#submit-contact-form")&&$("#submit-contact-form").click(function(){$(".required-checkbox").each(function(e,a){$(a).prop("checked")?$(a).removeClass("border-solid-primary"):$(a).addClass("border-solid-primary")})}),$("video").each(function(){var e=this.id,a=$(this).parent().attr("id");if(e){var o=videojs.getPlayer(e);o.on("ended",function(){$("#overlay-"+a).removeClass("d-none")}),o.on("play",function(){$("#overlay-"+a).addClass("d-none")})}})}),$('[data-toggle="popover-hover"]').popover({html:!0,trigger:"hover",placement:"auto"});const $dropdown=$(".dropdown"),$dropdownToggle=$(".dropdown-toggle"),$dropdownMenu=$(".dropdown-menu"),showClass="show";function pad(e,a){return(e=e.toString()).length<a?pad("0"+e,a):e}function setDarkMode(){("dark"===localStorage.getItem("color-mode")||window.matchMedia("(prefers-color-scheme: dark)").matches&&!localStorage.getItem("color-mode"))&&(document.documentElement.classList.add("dark-theme"),$(".change-theme-text").text("Dark Mode"),$(".change-theme").attr("checked",!0),$(".darkmode").each(function(e,a){var o=$(a);(o.hasClass("container-hero")||o.hasClass("container-squareHoverImg"))&&o.addClass(o.data("darkmode")),o.is("img")&&(o.data("lightmode",o.attr("src")),o.attr("src",o.data("darkmode")))}))}function fontAvailable(){var e=!1;if(document.fonts)for(var a=0;a<=20;a++)if(document.fonts.check("12px TeamViewer"+a)){e=!0;break}return e}$(window).on("load resize",function(){this.matchMedia("(min-width: 992px)").matches?$dropdown.hover(function(){const e=$(this);e.addClass("show"),e.find($dropdownToggle).attr("aria-expanded","true"),e.find($dropdownMenu).addClass("show")},function(){const e=$(this);e.removeClass("show"),e.find($dropdownToggle).attr("aria-expanded","false"),e.find($dropdownMenu).removeClass("show")}):$dropdown.off("mouseenter mouseleave")}),$(document).ready(function(){$(window).width()<=768&&($(".card .collapse").removeClass("show"),$(".card .card-header").addClass("collapsed").attr("aria-expanded","false"),$(".card .card-link").addClass("collapsed").attr("aria-expanded","false"))}),$(document).ready(function(){$(".contact-hover-number").mouseenter(function(e){$(".arrow-icon-red").hide(),$(".arrow-icon-white").show()}).mouseleave(function(e){$(".arrow-icon-red").show(),$(".arrow-icon-white").hide()})}),$(document).ready(function(){setTimeout(function(){$("#onLoadModal")&&$("#onLoadModal").modal("show")},300)}),$(".change-theme").on("click",function(){$("html").hasClass("dark-theme")?(document.documentElement.classList.remove("dark-theme"),$(".change-theme-text").text("Light Mode"),localStorage.setItem("color-mode","light"),$(".darkmode").each(function(e,a){var o=$(a);(o.hasClass("container-hero")||o.hasClass("container-squareHoverImg"))&&o.removeClass(o.data("darkmode")),o.is("img")&&(o.data("darkmode",o.attr("src")),o.attr("src",o.data("lightmode")))})):(document.documentElement.classList.add("dark-theme"),$(".change-theme-text").text("Dark Mode"),localStorage.setItem("color-mode","dark"),$(".darkmode").each(function(e,a){var o=$(a);(o.hasClass("container-hero")||o.hasClass("container-squareHoverImg"))&&o.addClass(o.data("darkmode")),o.is("img")&&(o.data("lightmode",o.attr("src")),o.attr("src",o.data("darkmode")))}))}),$(document).ready(function(){if(fontAvailable()){var e=new Date;e.setTime(e.getTime()+864e5),document.cookie="info_var_cookie=true; expires="+e.toGMTString()+"; path=/; domain=.anydesk.com"}}),$(document).ready(function(){var e=new URLSearchParams(window.location.search),a=e.get("utm_source"),o=e.get("utm_campaign"),t=null!=a&&-1!==["inapp","adwin","admacos","adlinux","adios"].indexOf(a),n=null!=o&&-1!==["trial","upgrade"].indexOf(o);t&&n&&setCookie("adtl","rvn",1/24),""!==getCookie("adtl")&&($(".shopOrderUrl").each(function(e){var a=$(this).attr("href")+"&adtl="+getCookie("adtl");$(this).attr("href",a)}),$("#adtl").val(getCookie("adtl")))});