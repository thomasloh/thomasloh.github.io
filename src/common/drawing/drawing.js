
var conf = {
  particles: {
    color: hexToRgb('#fff'),
    shape: 'circle',
    opacity: 1,
    size: 2.5,
    size_random: true,
    nb: 200,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 65000,
        rotateY: 65000
      }
    },
    anim: {
      enable: true,
        speed: 1
    },
    array: []
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 100
    },
    detect_on: 'canvas',
    mode: 'grab',
    line_linked: {
      opacity: 1
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push',
        nb: 4
      }
    }
  },
  retina_detect: false,
  fn: {
    vendors:{
      interactivity: {}
    }
  }
};

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

function Particle(o, position) {

  var color = o.color;
  var opacity = o.opacity;

  /* position */
  this.x = position ? position.x : Math.random() * pJS.canvas.w;
  this.y = position ? position.y : Math.random() * pJS.canvas.h;

  /* size */
  this.radius = (pJS.particles.size_random ? Math.random() : 1) * pJS.particles.size;
  if (pJS.retina) this.radius *= pJS.canvas.pxratio;

  /* color */
  this.color = color;

  /* opacity */
  this.opacity = opacity;

  /* animation - velocity for speed */
  this.vx = -.5 + Math.random();
  this.vy = -.5 + Math.random();

  /* draw function */
  this.draw = function(){
    pJS.canvas.ctx.fillStyle = 'rgba('+this.color.r+','+this.color.g+','+this.color.b+','+this.opacity+')';
    pJS.canvas.ctx.beginPath();

    switch(pJS.particles.shape){
      case 'circle':
        pJS.canvas.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(this.x, this.y, this.radius*2, this.radius*2);
      break;

      case 'triangle':
        pJS.canvas.ctx.moveTo(this.x,this.y-this.radius);
        pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius);
        pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius);
        pJS.canvas.ctx.closePath();
      break;
    }

    pJS.canvas.ctx.fill();
  }

};


module.exports = {

  createParticles: function(el, n) {

    var particles = [];

    var ctx = el.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
    ctx.fillRect (0, 0, el.offsetHeight, el.offsetWidth);

    var o = {
      w: el.offsetWidth,
      h: el.offsetHeight,
      color: conf.color,
      opacity: conf.opacity
    };

    _.range(0, n).forEach(() => {

      particles.push(new Particle(o));

    });

    return particles;

  },

};
