---
title: This is a blog post!
published_at: 2025-11-04
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 1A
Learning the For Loop
I came from RMIT Vietnam, and I had a professor there who I became quite close with. I recently revisited their personal site and reviewed the concept of the for loop, something they had taught me before.
Using that professor’s website as a reference helped me refresh my understanding.
📌 Basic for loop structure




```js
for (initialization; condition; update) {
  // code to repeat
}
* Initialization: Declare a variable and set a starting value
* Condition: The loop continues as long as this condition is true
* Update: Updates the variable each time the loop runs
Example:
javascript
CopyEdit
for (let i = 0; i < 5; i++) {
  console.log(i); // prints 0 to 4
}
A nested for loop to create a grid:
javascript
CopyEdit
for (let y = 0; y < height; y += gridSize) {
  for (let x = 0; x < width; x += gridSize) {
    rect(x, y, gridSize, gridSize);
  }
}
```


📌 Creating a Grid Using Nested Loops Efficiently
When I first started learning p5.js, I practiced using a basic for loop to draw a single row of rectangles. But I wanted to try something more interesting, so I used multiple for loops to create a full grid efficiently. Here’s a look at the process I followed and what I learned.
📍 My first attempt
At first, I wasn’t quite sure how to draw a grid, so I asked ChatGPT for help. It gave me this simple example:




## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
function setup() {
  createCanvas(400, 400);
  let size = 40;

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      rect(x, y, size, size);
    }
  }
}
</script>

Explanation from ChatGPT:
* The outer loop goes horizontally across the canvas in steps of size.
* The inner loop moves vertically in the same way, drawing a square at each (x, y) position.
* rect(x, y, size, size) draws a rectangle at the specified location.

📌 Adding Color
I wanted to get more creative, so I asked ChatGPT how I could apply color to each square. It suggested using the HSB color mode to create a gradient effect based on position:


## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
  noStroke();
  let size = 40;

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      fill(x, y, 100);
      rect(x, y, size, size);
    }
  }
}
</script>

Using colorMode(HSB, width, height, 100) sets the color range based on canvas dimensions. By using (x, y) as inputs to fill(), each square takes on a slightly different hue, resulting in a gradient. It was so cool to see how position could influence color!

📌 Adding Mouse Interaction
Just using color wasn’t enough—I wanted to make it interactive. I asked ChatGPT how to change colors based on mouse movement:

## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
function draw() {
  background(240);
  let size = 40;

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      if (mouseX > x && mouseX < x + size && mouseY > y && mouseY < y + size) {
        fill(255, 0, 0); // red if hovered
      } else {
        fill(180); // grey otherwise
      }
      rect(x, y, size, size);
    }
  }
}
</script>

ChatGPT explained that by checking if mouseX and mouseY fall within a square’s boundaries, we can change the color of just that square. This helped me understand how to make interactive visual effects.

📌 Adding Animation
Finally, I wanted to explore animated color changes over time. ChatGPT suggested using frameCount:

## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
}

function draw() {
  background(255);
  let size = 40;

  for (let x = 0; x < width; x += size) {
    for (let y = 0; y < height; y += size) {
      fill((frameCount + x + y) % 360, 80, 100);
      rect(x, y, size, size);
    }
  }
}
</script>

ChatGPT explained that frameCount increases with every frame, creating dynamic, ever-changing colors when combined with (x + y). The % 360 keeps the hue within a valid range. It was fascinating to see how animation could be driven by time and position.

✨ Inspired by Rafaël Rozendaal’s Le Duchamp ✨
One digital art piece that really caught my attention was Le Duchamp by Rafaël Rozendaal. I love minimalism, and this piece immediately spoke to me with its black-and-white design and simple line art.
But what amazed me most was the interaction. When I moved the mouse, the wheels spun, and even their shadows shifted—it was so magical! I had so many questions: How was this even made?
So I started Googling, watching YouTube videos, and of course, asking ChatGPT. Here’s a little of what I learned.

📌 Technical Diagram (from ChatGPT)
mathematica
CopyEdit
Web Browser
 ├── Rendering Loop
 │   ├─ requestAnimationFrame
 │   ├─ Update State
 │   ├─ Clear Canvas
 │   ├─ Draw Elements
 │   └─ Apply Post-Effects
 └── Event Handling
     ├─ Mouse/Touch Events
     └─ Window/Resize Events
At first, this diagram was confusing. But ChatGPT explained it in simple terms:
* Rendering Loop: Repeatedly draws the screen using requestAnimationFrame, allowing animation.
* Event Handling: Detects user input (like mouse movement or resizing the window) and reacts to it.

📌 Example Code Structure (from ChatGPT)
## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
class LeDuchampApp {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.resizeCanvas();
    this.setupEventListeners();
    this.initializeElements();

    this.lastTime = 0;
    this.animate(0);
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  setupEventListeners() {
    window.addEventListener('resize', this.resizeCanvas.bind(this));
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  initializeElements() {
    this.particles = [];
  }

  animate(currentTime) {
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;

    this.update(deltaTime);
    this.render();

    requestAnimationFrame(this.animate.bind(this));
  }

  update(deltaTime) {
    // Update logic
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Drawing logic
  }

  handleMouseMove(event) {
    // Mouse interaction logic
  }
}
</script>

new LeDuchampApp();
Honestly, this looked super overwhelming at first. But after more questions, I understood that it’s doing three main things:
1. Creates a canvas and displays it on the webpage
2. Handles events like mouse movement and window resizing
3. Continuously updates and redraws the canvas for animation

📚 Concepts I Need to Learn
To understand and eventually create works like Le Duchamp, I realized I need to learn the following:
1. Canvas API Basics
    * Drawing with HTML canvas
    * Using requestAnimationFrame for animation
2. Principles of Generative Art
    * Creating visual forms with code
    * Using randomness and rules to generate images
3. Noise Functions
    * Creating smooth, organic movement
    * Learning about Perlin noise (random yet natural-looking motion)
4. Particle Systems
    * Simulating small moving elements
    * Learning basic motion physics
5. Animation Techniques
    * Easing, waves, and fluid motion
6. Interaction Design
    * Handling user input like mouse or touch
    * Making visuals responsive to different screen sizes

📚 Helpful Resources
* p5.js Official Docs
* Renick Bell’s site (my professor from RMIT Vietnam)
* The Coding Train YouTube – super beginner-friendly!
* The Nature of Code – for natural movement
* YouTube tutorials on Perlin Noise

✨ Final Thoughts
Through this learning journey and while preparing for this assignment, I feel like I gained a much deeper understanding of for loops and how to use them in creative ways.
When I first saw Le Duchamp, I was honestly just filled with wonder—How was that even made? I still don’t understand every technical detail, but through research and curiosity, I’ve discovered that generative art is such an inspiring field.
I'm still a beginner, but I hope that one day I can create something like that too. Thanks so much for reading! 😊


## This is A2

*This is italic.*[^1]

[^1]: This is a footnote, *which can also be italic*.

**This is bold.**

Hyperlinks can be written like this: `[text](https://URL)`

You can find a markdown cheat-sheet [here](https://www.markdownguide.org/cheat-sheet/).

## Codeblocks

Like this:

```js
function setup () {
    createCanvas (640, 360)
}

function draw () {
    background (`turquoise`)
    // etc.
}
```
... can be written like this:


````markdown
```js
function setup () {
    createCanvas (640, 360)
}

function draw () {
    background (`turquoise`)
    // etc.
}
```
````

The `js` at the top ^ gives the codeblock javascript syntax highlighting.  Replace it with `html` for HTML syntax highlighting, etc.


## Maths
... which can be written inline, like this: $\{ x, y, z \} \in \N$

... or block, like this:

$$ x^2 + y^2 = z^2 $$

Visit [ $\KaTeX$ ](https://katex.org/docs/supported#fractions-and-binomials) for more information about writing maths.

## Embedded video

<iframe id="coding_train_video" src="https://www.youtube.com/embed/rI_y2GAlQFM?si=RDgjkpunxk1mQzMI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<script type="module">

    console.log (`hello world! 🚀`)

    const iframe  = document.getElementById (`coding_train_video`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16

</script>

## Embedded p5 online editor sketch

<iframe id="falling_falling" src="https://editor.p5js.org/capogreco/full/Fkg05m7aA"></iframe>

<script type="module">

    const iframe  = document.getElementById (`falling_falling`)
    iframe.width  = iframe.parentNode.scrollWidth
    iframe.height = iframe.width * 9 / 16 + 42

</script>

## Canvas API

<canvas id="canvas_example"></canvas>

<script type="module">
    const cnv = document.getElementById (`canvas_example`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16

    const ctx = cnv.getContext (`2d`)
    const pos = {
        x: -100,
        y: cnv.height / 2 - 50
    }
    
    function draw_frame () {
        ctx.fillStyle = `turquoise`
        ctx.fillRect (0, 0, cnv.width, cnv.height)

        ctx.fillStyle = `deeppink`
        ctx.fillRect (pos.x, pos.y, 100, 100)

        pos.x += 2

        if (pos.x > cnv.width) {
            pos.x = -100
        }

        requestAnimationFrame (draw_frame)
    }

    draw_frame ()
</script>

## Canvas API + p5.js

<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
    const cnv = document.getElementById ("p5_example")
    const w = cnv.parentNode.scrollWidth
    const h = w * 9 / 16

    function setup () {
        createCanvas (w, h, P2D, cnv)
        noStroke ()
    }

    const pos = {
        x: -100,
        y: h / 2 - 50
    }

    function draw () {
        background (`turquoise`)

        fill (`deeppink`)
        square (pos.x, pos.y, 100)

        pos.x += 2

        if (pos.x > w) {
            pos.x = -100
        }
    }
</script>
