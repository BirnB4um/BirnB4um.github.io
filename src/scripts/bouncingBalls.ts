export class Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;

  constructor(private canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.radius = 8 + Math.random() * 8;
    this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.radius || this.x > this.canvas.width - this.radius) this.vx *= -1;
    if (this.y < this.radius || this.y > this.canvas.height - this.radius) this.vy *= -1;

    if (this.x < this.radius) this.x = this.radius;
    if (this.x > this.canvas.width - this.radius) this.x = this.canvas.width - this.radius;
    if (this.y < this.radius) this.y = this.radius;
    if (this.y > this.canvas.height - this.radius) this.y = this.canvas.height - this.radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0.1, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// main function to start animation
export function initBouncingBalls(canvas: HTMLCanvasElement, count: number = 50) {
    const ctx = canvas.getContext("2d")!;
  
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        }
    resize();
    window.addEventListener("resize", resize);

    const balls = Array.from({ length: count }, () => new Ball(canvas));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const ball of balls) {
        ball.update();
        ball.draw(ctx);
        }
        requestAnimationFrame(animate);
    }

    animate();
}
