var canvas = document.getElementById('starlight-canvas');
var ctx = canvas.getContext('2d');
var stars = [];

var star_count = 250;
for (var i = 0; i < star_count; i++) {
  stars.push(new star(true));
}

function loop() {
  requestAnimationFrame(loop);
  draw();
}

function star(isInit) {
  if (isInit) {
    this.loc = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height
    };
  } else {
    this.loc = {
      x: -(5 - Math.random() * 10),
      y: -Math.random() * canvas.height + Math.random() * canvas.height * 2
    };
    if (this.loc.y < 0) {
      this.loc.x = Math.random() * canvas.width;
    }
  }
  this.speed = {
    x: 0.1,
    y: 0.08
  };
  this.radius = 0.1 + Math.random() * 0.6;
  this.opacity = 0.6;
}

function draw() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';

  for (var i = 0; i < stars.length; i++) {
    var s = stars[i];
    ctx.beginPath();

    var opacity = s.opacity;
    var radius = s.radius;
    if (Math.floor(Math.random() * 10000) == 50) {
      opacity = 1;
      radius = 1.3;
    }

    ctx.fillStyle = "rgba(255,255,255," + opacity + ")";
    ctx.arc(s.loc.x, s.loc.y, radius, 0, Math.PI * 2, false);
    ctx.fill();

    s.loc.x += s.speed.x;
    s.loc.y += s.speed.y;

    if (s.loc.x > canvas.width || s.loc.y > canvas.height) {
      stars[i] = new star();
    }
  }


}

loop();
