MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
TweenMax.to(".eyeleft",.1, {morphSVG:".eye2",repeat:-1,yoyo:true,delay:2, repeatDelay:1,ease: Power2.easeOut});
TweenMax.to(".eyeright",.1, {morphSVG:".eye3",repeat:-1,yoyo:true,delay:2, repeatDelay:1,ease: Power2.easeOut});
TweenMax.to(".scarf1",.5, {morphSVG:".scarf2",repeat:-1,yoyo:true,delay:0, repeatDelay:0,ease: Power2.easeOut})
