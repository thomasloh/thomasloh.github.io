
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function Particle(ctx, o, position) {

  var color = o.color;
  var opacity = o.opacity;

  /* position */
  this.x = position ? position.x : Math.random() * o.w;
  this.y = position ? position.y : Math.random() * o.h;

  /* size */
  // this.radius = Math.random() * 2.5;
  this.radius = 1;

  /* color */
  this.color = color;

  /* opacity */
  this.opacity = opacity;

  /* animation - velocity for speed */
  this.vx = -.5 + Math.random();
  this.vy = -.5 + Math.random();

  /* draw function */
  this.draw = function() {
    ctx.fillStyle = 'rgba('+this.color.r+','+this.color.g+','+this.color.b+','+this.opacity+')';
    var circle = new Path2D();
    circle.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill(circle);
  }

};

module.exports = {

  splash: function(el, n) {

    var particles = [];

    var ctx = el.getContext("2d");
    ctx.translate(0.5, 0.5);

    var o = {
      w: el.offsetWidth,
      h: el.offsetHeight,
      color: hexToRgb('#C5C5C5'),
      opacity: 1
    };
    el.width = o.w;
    el.height = o.h;

    _.range(0, n).forEach(() => {

      particles.push(new Particle(ctx, o));

    });

    function launch() {
      ctx.clearRect(0, 0, o.w, o.h);

      _.each(particles, (p) => {

        p.x += p.vx;
        p.y += p.vy;

        /* change particle position if it is out of canvas */
        if(p.x - p.radius > o.w) p.x = p.radius;
        else if(p.x + p.radius < 0) p.x = o.w + p.radius;
        if(p.y - p.radius > o.h) p.y = p.radius;
        else if(p.y + p.radius < 0) p.y = o.h + p.radius;

        p.draw()
      });

      requestAnimationFrame(launch);

    }

    // Main
    launch();
    requestAnimationFrame(launch);

    window.onresize = function(){

        el.width = el.offsetWidth;
        el.height = el.offsetHeight;

        /* repaint canvas */
        ctx.fillRect(0, 0, el.width, el.height);

        launch()
    }


  },

};
