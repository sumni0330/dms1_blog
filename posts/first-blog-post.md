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


## This is 1B

## 💬 Conversation with Classmates about Rafaël Rozendaal’s *Le Duchamp*

This time, I had a chat with my classmates Changjo and Wonjun about the artwork *[Le Duchamp](https://www.leduchamp.com)* by Rafaël Rozendaal. Like me, they don’t really know how to code, but we freely shared our impressions just by looking at the piece.

### 🗣️ What Changjo said:
**How does this work move internally?**  
> “It’s so cool how the wheel follows the mouse and even the shadow moves with it. It kind of feels like you’re spinning a real wheel with your hand. Maybe it’s just programmed to follow the mouse.”

**What would I need to learn to recreate this?**  
> “Probably how to draw things like the wheel and its shadow first. Then, maybe figure out how to make them follow the mouse.”

**How should I learn it?**  
> “I searched for stuff like ‘p5.js follow mouse’ on YouTube. At first it was confusing, but copying the videos helped a lot. I really like the channel *The Coding Train* — it’s super beginner-friendly! These days I also watch a Korean channel called *Brain Building*. It explains p5.js in Korean and it’s super kind and detailed. You should totally check it out!”

---

### 🗣️ What Wonjun said:
**How does this work move?**  
> “The wheel spins really slowly, and the shadow follows along—it’s kinda mesmerizing. It doesn’t seem random. It looks like it's moving in a regular pattern, which is really fascinating.”

**What would I need to learn to recreate this?**  
> “I think learning how to make things move smoothly is key. And also how to make the shadow follow along.”

**How should I learn it?**  
> “I once watched a p5.js video where a rainbow moved slowly. That’s how I learned about something called `frameCount`. It changes over time and makes animations happen. If you try following along like that, you’ll start to get the hang of it. I also like the *1MinuteCoding* channel. The videos are short and explain basic stuff really well—including p5.js!”

---

### 📘 What I need to learn:
- Practice drawing shapes like the wheel and its shadow  
- Learn how to make graphics respond to mouse movement  
- Make movements smooth and gradual using time or numbers (e.g., `frameCount`)

---

### 📚 Useful Resources:
- *The Coding Train* (YouTube, English but very visual and clear)  
- *Brain Building* (YouTube, Korean, friendly explanations of p5.js)  
- *1MinuteCoding* (YouTube, short and clear Korean videos for beginners)  
- The [p5.js official site](https://p5js.org) (lots of code examples)  
- Search terms on YouTube: “p5.js follow mouse,” “p5.js animation,” “p5.js move drawing”

---



🧪 *Following the Wheel Style of "Le Duchamp"*

After seeing the smooth, rotating black-and-white wheels on the [Le Duchamp](https://www.leduchamp.com) website and wondering, "Can I make something like this?" I decided to give it a try. Since I was just starting to learn coding and knew nothing, I asked ChatGPT for help step by step, very slowly. Below is a record of what I didn’t know, how ChatGPT helped me, and what I learned through it.



At first, I showed ChatGPT the wheel image and simply said, “I want to make this.” Naturally, I thought it would just provide the code immediately, but ChatGPT took me through the basics one by one.

ChatGPT explained that to draw a picture, you first need a canvas, like a piece of paper, and in p5.js, you can create this canvas with `createCanvas()`. For example, `createCanvas(600, 600)` would create a 600x600 canvas.

I actually knew this part, but I didn’t fully understand why `createCanvas()` needs to be inside the `setup()` function. Then ChatGPT explained that the `setup()` function is run only once when the program starts, so the canvas should be created there, and the `draw()` function is where you continuously draw on the canvas.

So, I wrote the code like this:


```js
function setup() {
  createCanvas(600, 600);
}
```


And since drawing shapes should be done inside the `draw()` function, I wrote:

```js
function draw() {
  background(255);
  ellipse(300, 300, 300, 300);
}
```

With this basic structure, when I ran the code, a perfect circle appeared right in the center of the screen! That’s when I realized, “Ah, I can start drawing the wheel here.”

I didn’t know the formula for `ellipse`, so I asked ChatGPT, and it explained:

`ellipse(x, y, w, h);`
- `x`: x-coordinate of the center of the circle
- `y`: y-coordinate of the center of the circle
- `w`: width (horizontal length)
- `h`: height (vertical length)

So, `ellipse(300, 300, 300, 300);` can be interpreted as:

“Draw a circle with a width of 300 and a height of 300 at the position x=300, y=300 on the screen.”  
Since the width and height are the same, it creates a circle. If they were different, it would create an ellipse.

I realized that it's not enough to just know `createCanvas()`, but understanding the roles of `setup()` and `draw()` is essential for structuring the code properly. I also learned that using `background()` inside `draw()` is necessary to clear the previous frame and draw a new one. As I adjusted the shape's position, I saw that changing the center coordinates moved the shape, and changing the size values made the shape bigger or smaller, which helped me slowly understand how things worked.

(Additionally, ChatGPT showed me how to apply this: `ellipse(mouseX, mouseY, 100, 100)` → This makes the circle follow the mouse. This also goes inside `draw()`.)



At first, I drew a single circle, but manually inputting numbers like `ellipse(300, 300, ...)` was really inconvenient. Especially, I wanted to perfectly align the wheel with the center of the screen, but it was cumbersome to constantly remember and calculate the width and height. So, I asked ChatGPT if there was an easier way.

ChatGPT explained that instead of manually inputting numbers like (300, 300), you can shift the coordinate system to be based on the center of the screen using `translate(width / 2, height / 2)`. This makes (0, 0) the center of the canvas, so whenever you want to draw something centered, you can just input (0, 0), which is much easier.

After hearing this, I added `translate()` inside the `draw()` function:

```js
function draw() {
  background(255);
  translate(width / 2, height / 2);
  ellipse(0, 0, 300, 300);
}
```

After making this change, the circle was now perfectly positioned at the center of the screen just by drawing it at (0, 0). Also, since I could now calculate left/right as negative/positive values and up/down the same way, it became much more intuitive and easier.

### What does `translate(width / 2, height / 2);` mean?
In p5.js, the default coordinate system has (0, 0) at the top-left of the screen, and the numbers increase as you move towards the bottom-right.  
For example:
- `width` is the horizontal length of the canvas
- `height` is the vertical length of the canvas

So, `translate(width / 2, height / 2);` moves the origin of the coordinate system to the center of the screen.  
In simple terms, it means, “From now on, I’m changing the reference point for drawing shapes to the center of the screen.” Initially, I was manually calculating the coordinates, but after using `translate()`, the coordinates became much simpler. I realized how convenient it is to have (0, 0) as the center.

### Why change the coordinate system?
The reason this is important is that it makes tasks like rotation, symmetry, and center alignment much easier.  
Let’s compare the two approaches:

1. **Without changing the coordinate system:**
```js
ellipse(width / 2, height / 2, 300, 300);
```
→ You have to manually calculate and input the center.

2. **After shifting the coordinate system:**
```js
translate(width / 2, height / 2);
ellipse(0, 0, 300, 300);
```
→ Since the origin is now at the center, you just input (0, 0).

👉 The second method is much simpler and more intuitive.  
Later, when using `rotate()` to rotate shapes, the center of rotation will naturally be the middle of the screen, because the origin is already there.

In the general coordinate system, it feels like you’re drawing with a sticky note in the top-left corner of your desk, but using `translate()` is like moving the sticky note to the center of your desk and drawing from there.

✨ **What I learned from using it:**
At first, I thought, “Why is this so complicated?” But after making things like a rotating wheel, I realized that shifting the coordinate system is essential for rotating or aligning shapes around their center.

---

Now, moving on to rotating the wheel!

I didn’t want just a stationary circle, I wanted to implement "rotation" like in *Le Duchamp*.

ChatGPT told me that there's a function called `rotate()`. `rotate()` is the function in p5.js that rotates shapes.  
But to rotate something, you need to tell it *how much* to rotate, right?  
This value is called the `rotation` variable.



```js
let rotation = 0;

function draw() {
  background(255);
  translate(width / 2, height / 2);
  
  ellipse(0, 0, 300, 300);
  rotation += 0.01;
}

rotate(PI / 4); // Rotate 45 degrees
```

But if we just rotate with a fixed number like this, the shape will only rotate once and stop.  
So, we need to create a variable called `rotation` and update its value slightly in each frame so the rotation continues.

So, what does `rotation += 0.01;` mean?

This is code that gradually increases the rotation angle.

- `rotation` is a variable that holds the angle (in radians).
- `+= 0.01` means "increase the rotation value by 0.01 each frame."

As a result:
`rotate(rotation);` will take the increasingly larger value and make the shape rotate continuously.

Here’s the example code again:

```js
let rotation = 0;

function draw() {
  background(255);
  translate(width / 2, height / 2);
  rotate(rotation);
  ellipse(0, 0, 300, 300);
  rotation += 0.01;
}
```

**What I learned at this stage:**  
I understood the concept that `rotate()` rotates the shape, and that using operations like `+=` allows the value to accumulate over time, creating an animation.


**Drawing the Spokes**

There were several spokes in the wheel, so how do you draw them?

At first, I thought, “Maybe I can just use `line()` multiple times,” but that seemed inefficient, and I’d have to manually calculate the exact position for each one. So, I asked ChatGPT for help.

ChatGPT suggested that since the spokes are evenly spaced like in a bicycle wheel, it would be better to divide the angles evenly and draw the lines. 

First, decide how many spokes you want (`numSpokes`), then divide 360 degrees (or 2π radians) by that number. Use `cos()` and `sin()` to calculate the coordinates of the outer points for each angle, and then draw a line from the center to each point.

When I heard that, I thought, “Ah, this is just like finding the points on a circle that are a certain distance (the radius) from the center!”

Here’s the first code I wrote:

```js
const numSpokes = 28;
for (let i = 0; i < numSpokes; i++) {
  let angle = (i / numSpokes) * TWO_PI;
  let x = cos(angle) * 150;
  let y = sin(angle) * 150;
  line(0, 0, x, y);
}
```

This part was really hard for me. It felt like math. But ChatGPT explained that "`cos` is for horizontal direction, `sin` is for vertical direction," and when I thought of it like a clock, I finally understood.

- `const numSpokes = 28;`  
This declares that I want 28 spokes. It means I’m dividing one circle into 28 equal parts.

- `for (let i = 0; i < numSpokes; i++) { ... }`  
This means that `i` will go from 0 to 27, so the loop runs 28 times, drawing 28 spokes.

- `let angle = (i / numSpokes) * TWO_PI;`  
`TWO_PI` means 360 degrees or 2π radians.  
This line divides the circle into `numSpokes` parts and calculates the angle for the `i`-th spoke. For example:  
  - When `i = 0`, the angle is 0.  
  - When `i = 14`, the angle is half a circle (π).  
  - When `i = 27`, the angle is almost 360 degrees (close to 2π).

- `let x = cos(angle) * 150;`  
- `let y = sin(angle) * 150;`  
These lines use trigonometry to calculate the position of the point at the specified angle.  
Since the radius is 150, it calculates the coordinates of the point 150 units away from the center of the wheel, at the specified angle.  
  - `cos(angle)` gives the horizontal position  
  - `sin(angle)` gives the vertical position  
In other words, this is the formula for finding the point that is a distance of 150 from the center in the direction of the given angle.

- `line(0, 0, x, y);`  
This draws a line from the center (0, 0) to the point `(x, y)` that we just calculated.

Visually, this means:
- The lines spread out in directions like 0°, 12°, 24°... all the way to 360°.
- Using `cos()` and `sin()` to find the end points, and then drawing lines from the center to those points.
- The spokes fan out from the center, just like on a wheel.

**What I learned at this stage:**  
I learned how to divide a circle into 360 degrees, how to convert angles into numbers, and how to use `cos` and `sin` to calculate directions. This felt like connecting math with coding.


**Wheel Center**

The center of the wheel felt too empty, so I wanted to add a point of focus.

```js
fill(0);
ellipse(0, 0, 15, 15);
fill(255);
ellipse(0, 0, 5, 5);
```

---

### Step 6: How to draw the fixed bar?

How do you draw the black bar under the wheel? In *Le Duchamp*, the wheel looks like it's fixed to some structure.

When I first asked this, I didn't even know how to differentiate between rotating and fixed elements. At first, I drew the bar along with the wheel, but when the wheel rotated and the bar moved with it, I realized "Something's wrong."

ChatGPT explained that the wheel is the rotating element, and the bar is the fixed element. In p5.js, everything drawn after the `rotate()` function will be rotated, so a fixed element like the bar should be drawn before the `rotate()` function. More precisely, after using `translate()` to move the coordinate system to the center, draw the bar with `line()` before the `rotate()` function. This way, the bar stays fixed and doesn't rotate.

That’s when I realized, "Ah, the order of functions in the code actually changes the behavior of the drawing."

```js
stroke(0);
strokeWeight(10);
line(0, 0, 0, radius * 1.2);
```

After doing this, finally! The wheel rotated, and the bar stayed fixed, making it look just like a real bicycle wheel.

Whether a shape rotates or stays fixed is determined by whether it’s drawn before or after the `rotate()` function. I understood that the order of the code doesn’t just edit the drawing but directly affects the movement.

---

### ✨ Final Result

Here’s the complete code for the wheel I created by learning step by step:

**Canvas API + p5.js**

```html
<script src="./scripts/p5.js"></script>
<canvas id="p5_example"></canvas>

<script>
let rotation = 0;
let wheelSize = 300;
let radius = wheelSize / 2;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // Fixed bar of the wheel
  stroke(0);
  strokeWeight(10);
  line(0, 0, 0, radius * 1.2);

  push();
  rotate(rotation);

  // Wheel outline
  stroke(0);
  strokeWeight(5);
  noFill();
  ellipse(0, 0, wheelSize, wheelSize);

  // Spokes of the wheel
  const numSpokes = 28;
  strokeWeight(1);
  for (let i = 0; i < numSpokes; i++) {
    let angle = (i / numSpokes) * TWO_PI;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    line(0, 0, x, y);
    strokeWeight(3);
    point(x, y);
    strokeWeight(1);
  }

  // Center hub
  fill(0);
  ellipse(0, 0, 15, 15);
  fill(255);
  ellipse(0, 0, 5, 5);

  pop();

  // Rotation speed
  rotation += 0.01;
}
</script>
```

---

### 🎯 Final Thoughts

What I realized through this process is that **even if you don't know coding at all, if you keep asking questions, trying things, and executing them, eventually you'll understand**.

It was just about making a wheel spin, but I learned about coordinate systems, loops, math functions, animation principles, and the importance of code order. While it's not perfect yet, I feel a great sense of pride whenever I see the code working.



# This is 2A

## 🧸 Experimenting with Cute Creations – Designing Cuteness with p5.js

For this project, I spent some time thinking and planning how to implement **cute visuals, cute sounds, and cute interactions** using p5.js. Initially, I got inspired by Le Duchamp’s rotating wheel artwork and wanted to create a scene where a puppy runs along with the wheel. I considered how to make it “cute” and organized my thoughts step by step.

---

### 🎨 1. Creating Cute Visuals

Cute visuals typically have the following features:

- **Round shapes** (round faces, short limbs)
- **Pastel colors** (soft, gentle colors)
- **Small, repetitive movements** (like hopping or gently swaying)

#### 📌 Examples:
- A small puppy running inside the wheel
- A bunny character with large eyes following the mouse
- A jelly creature shaking on a cloud

In p5.js, these can be created using functions like `ellipse()`, `colorMode()`, and `sin()`.

---

### 🎧 2. Creating Cute Sounds

Cute sounds are light and cheerful sounds that make you smile when you hear them. For example:

- A "boing" sound
- A small "squeak" sound like an animal
- A bouncing sound of an object hitting the floor

With p5.js, you can use the `p5.sound` library to create sounds like "boing" with an `Oscillator` or short, cute sounds using an `envelope`.

For my project, I found a cute sound from Mixkit, a free sound website. I’ll use this sound:

🔊 **Happy puppy barks** from [mixkit.co/free-sound-effects/dog](https://mixkit.co/free-sound-effects/dog/)

This sound will play every time the puppy runs along with the wheel.

#### 📌 Examples:
- Play a short "woof!" sound whenever the puppy runs
- Add a click sound at intervals as the wheel rotates
- Play the Happy puppy barks sound when clicked

---

### 🐾 3. Creating Cute Interactions

Cute interactions refer to responsive, lifelike behaviors, even with simple actions. For example:

- **When the mouse is dragged, the puppy starts running**
- **When it stops, the puppy pauses and looks like it's out of breath**
- **Clicking makes the puppy wag its tail or smile**

To make these reactions, I’ll need to use functions like `mousePressed()`, `mouseDragged()`, and `rotation` variables, along with conditional statements to change movements or expressions.

---

### 📅 AT1 Project Concept – Puppy Running in the Wheel

### 🧠 Basic Idea

I took the idea from Le Duchamp's rotating wheel and wanted to create a structure where **a puppy runs along with the wheel**.

- The wheel keeps rotating,
- The puppy starts running when the mouse is dragged or when the wheel rotates.
- When the rotation stops, the puppy also stops and appears to pant.
- The "Happy puppy barks" sound will play when the puppy runs.

### 🔧 Technical Implementation

- Wheel rotation: `rotate()`, `rotation += 0.01`, adjusting for drag speed
- Puppy animation: Use `frameCount` and conditional statements to animate the puppy’s movement frame by frame
- Mouse interaction: Using `mousePressed()`, `mouseDragged()`, and `mouseReleased()`
- Sound: Play the external sound file with `p5.sound`, and trigger the Happy puppy barks sound on click

---

### Sketch Example I Made

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  // Wheel outline
  stroke(0);
  strokeWeight(5);
  noFill();
  ellipse(0, 0, 300);

  // Spokes
  strokeWeight(1);
  const numSpokes = 12;
  for (let i = 0; i < numSpokes; i++) {
    let angle = (i / numSpokes) * TWO_PI;
    let x = cos(angle) * 150;
    let y = sin(angle) * 150;
    line(0, 0, x, y);
  }

  // Simple puppy drawing
  noStroke();
  fill(255, 200, 200);
  ellipse(0, 70, 40, 25); // Body
  fill(0);
  ellipse(-10, 65, 5); // Eye
  ellipse(10, 65, 5); // Eye
  stroke(0);
  line(-5, 75, 5, 75); // Mouth
}
```

---

### 🎯 Future Plans

- Add frames for the puppy animation to make it run with the wheel's rotation
- Make the puppy wag its tail when it runs, and pant when it stops
- Play a short laughing sound or **Happy puppy barks** when clicked
- Add the ability to actually drag and rotate the wheel

---
### 📚 Alternative References
The Nature of Code – Daniel Shiffman’s Book – Deep dive into simulation and generative systems, a great resource for creating interactive art and animations.
Creative Coding – Creative Coding YouTube Channel – Offers tutorials on generative art, interactive animations, and p5.js-based projects.
p5.js Web Editor Documentation – p5.js Web Editor – A platform for writing and testing p5.js code directly in the browser, useful for experimenting with sketches and sounds.
p5.js Sound Library – p5.js Sound Documentation – Detailed guide on how to integrate sound into your p5.js projects, including functions for oscillators, effects, and sound files.
Mixkit – Free Sound Effects Library – Mixkit Sound Effects – A great resource for free sound effects to use in interactive projects.

---

## 🧸 Conclusion

Through this project, I realized that it's possible to express cute elements through code. It wasn’t just about drawing shapes, but creating a "little world" full of emotions and reactions.

Especially, making the puppy react inside the rotating wheel was so much fun, and it sparked a desire to create even more interactive elements in the future. 🐶💨


# This is 2B
