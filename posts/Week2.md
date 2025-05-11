---
title: Week 2
published_at: 2025-11-04
snippet: An week2 of a blog post.
disable_html_sanitization: true
allow_math: true
---

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

### **Describing the Kindred Spirit for Your AT1:**

**1. Who is your kindred spirit?**
In this context, my kindred spirit is an energetic and playful puppy. The puppy is a symbol of innocence, joy, and curiosity—traits that mirror my creative approach to interactive design. The puppy embodies a sense of wonder and excitement, making it the perfect companion for my AT1 project, which aims to engage users with a delightful and lighthearted experience. The playful nature of the puppy perfectly aligns with the whimsical and evolving aesthetic I want to create, where the audience can feel the transformation from minimalism to cuteness as they interact with the sketch.

**2. What is the context of your kinship?**
The kinship I share with my kindred spirit, the puppy, is one of shared curiosity and playfulness. Both the puppy and I are motivated by the pursuit of joy through simple, interactive experiences. Just like a puppy might explore and engage with the world with enthusiasm and wonder, my creative work invites the user to explore and interact with a space that evolves from minimalist simplicity to a more joyful, playful cuteness. The relationship is grounded in a mutual desire to make people smile, to inspire engagement, and to introduce a sense of innocence through interaction.

**3. What is your common purpose?**
Our shared purpose is to evoke happiness and delight through interaction. I aim to create a moment of playful escape for the user, where they can temporarily leave behind the weight of everyday concerns and engage in a lighthearted, interactive experience. The puppy, as my kindred spirit, helps me fulfill this purpose by being the central character that the user can interact with and enjoy. The user becomes both an observer and a participant in this joyful environment, with the puppy’s actions and the visual elements responding to their interactions.

**4. Who or what is your shared challenge/adversary?**
Our shared challenge is the potential for the experience to become predictable or mundane. The adversary here is monotony—the risk that the interaction, while engaging at first, could become repetitive or lose its playful energy. To combat this, I’ve designed the sketch to transition from minimalism to cuteness, ensuring that the experience remains dynamic. This transition is essential to keep the user’s engagement fresh and exciting. The challenge lies in how well I balance the simplicity of minimalism with the charm and energy of cuteness. It’s a fine line to walk, as I want to maintain the playful, evolving nature of the interaction without losing the core essence of fun.

---

### **Explaining How Your Chosen Kindred Spirit Relates to the Visual, Sonic, and Interactive Elements of Your AT1 Idea:**

**1. Visuals:**
Visually, my kindred spirit—the puppy—will be rendered in two distinct phases: minimal and cute. Initially, the puppy will appear minimal and sleek, with clean lines and simple shapes. The background and the puppy will embody a sense of calmness, without excessive detail. As the user interacts and drags the wheel, the puppy will gradually evolve into a more detailed, playful character—one with larger eyes, a rounder shape, and a joyful expression. This transition from minimalism to cuteness mirrors the user’s journey from subtle interaction to joyful engagement.

In the minimal phase, the visuals will be simple and monochromatic, emphasizing geometric shapes and a calm color palette. As the puppy becomes more expressive in the cute phase, the color palette will shift to softer pastels, and the design will become rounder and more exaggerated. This visual transformation will be guided by the user’s interaction, with the puppy slowly becoming more "adorable" in response to their actions.

```javascript
// Minimal mode - clean, simple shapes for the puppy
fill(200, 200, 200); // light, neutral color
ellipse(100, 100, 50, 50); // minimalist circle for the puppy
```

```javascript
// Cute mode - exaggerated, round shapes for the puppy
fill(250, 230, 190); // soft, warm color
ellipse(100, 100, 60, 60); // rounder, more playful form for the puppy
```

**2. Sonic Elements:**
Sonically, the experience will start with subtle background noises, like a soft rolling sound or light wind, aligning with the minimal aesthetic. These sounds will remain calming and unobtrusive, creating an environment that feels serene and peaceful. However, as the user engages more actively with the wheel, the sounds will begin to transition into playful, cheerful tones. The puppy’s movement will trigger sound effects like light barking or cheerful yips, emphasizing the shift toward a more lively and interactive atmosphere.

For example, when the puppy begins to run, a higher-pitched "woof!" sound could play, and as the wheel spins faster, the background noise could increase in volume, mimicking the excitement of the puppy’s playful behavior. These audio cues will deepen the user’s connection to the visual and interactive elements, reinforcing the transformation from minimalism to cuteness.

```javascript
// Minimal mode - subtle, background rolling noise
rollingNoise.amp(0.1); // low amplitude for soft sounds
```

```javascript
// Cute mode - playful puppy sounds
clickOsc.freq(1000); // high-pitched sound as the puppy runs
clickEnv.play(clickOsc); // play the sound as the puppy moves
```

**3. Interactive Elements:**
The interactivity is where the transformation from minimalism to cuteness becomes most apparent. The user begins by dragging the wheel slowly, with subtle movement, but as they continue, the puppy starts running inside the wheel, and the environment shifts to a more energetic state. The interactivity is designed to make the user feel like they’re actively participating in the transformation, with the puppy’s actions reflecting their own engagement.

In the minimal mode, the wheel will rotate smoothly with no additional action from the puppy, but once the user drags faster, the puppy starts running, and more playful visual effects like sparkles and clouds will appear. This interaction creates a feedback loop: the more the user engages, the cuter and livelier the environment becomes. The user isn’t just an observer—they’re part of the narrative of the puppy’s transformation.

```javascript
// Minimal mode interaction - slow, smooth movement
rotation += currentSpeed * deltaTime;
```

```javascript
// Cute mode interaction - energetic, playful movement
isPuppyRunning = true; // Puppy starts running
puppyDirection = currentSpeed > 0 ? -1 : 1; // Puppy changes direction
```

---

### **Reflection and Feedback from a Colleague:**

**1. Visual Elements:**

- **How well did you achieve the cute aesthetic?**
  - "I think the transition from minimal to cute is effective. The shift in shapes and the use of softer colors help convey the 'cute' feeling, especially as the puppy becomes more expressive."
- **What could you try to increase the cuteness?**
  - "You could add more soft visual effects like floating hearts or sparkles to enhance the sense of playfulness."
- **How might you implement these improvements using JavaScript?**
  - "Consider adding a loop that randomly generates small heart shapes or sparkles around the puppy as it moves."

```javascript
// Add floating hearts around the puppy in cute mode
let heart = {
  x: random(width),
  y: random(height),
  size: random(5, 10),
  color: color(255, 120, 150),
};

drawHeart(heart.x, heart.y, heart.size, heart.color);
```

**2. Sonic Elements:**

- **How well did you achieve the cute aesthetic?**
  - "The audio transition from a neutral sound to a more playful one works well. I can imagine the puppy’s movements being accompanied by a joyful bark, which would make it feel even more interactive."
- **What could you try to increase the cuteness?**
  - "Maybe you could add more variation in the puppy's sounds, like a yawn or a happy whine."
- **How might you implement these improvements using JavaScript?**
  - "You could use `p5.SoundFile` to load and play different sound files based on the puppy’s actions, such as barking or whining."

```javascript
// Load puppy sounds
let barkSound;
function preload() {
  barkSound = loadSound("bark.mp3");
}

function mousePressed() {
  barkSound.play(); // Play bark sound when the user interacts
}
```

**3. Interaction:**

- **How well did you achieve the cute aesthetic?**
  - "The way the puppy’s actions change based on the user’s interaction is very engaging. It feels like the user is guiding the puppy’s transformation from minimal to cute."
- **What could you try to increase the cuteness?**
  - "Perhaps adding some exaggerated animations, like the puppy bouncing as it runs, would increase the sense of joy and playfulness."
- **How might you implement these improvements using JavaScript?**
  - "You can use a sine wave function to make the puppy's movement bounce up and down in a playful way as it runs."

```javascript
// Add a bouncing effect to the puppy in cute mode
let bounce = sin(frame) * 5;
translate(0, bounce);
```

---

### Conclusion:

This deeper exploration of the kindred spirit, the shared purpose, and the adversary highlights the emotional connection between the user and the puppy within the interactive experience. By refining the visuals, sounds, and interactions, I aim to achieve the perfect balance between minimalism and cuteness, ensuring that the puppy’s transformation is both delightful and engaging. The feedback from colleagues offers valuable insights that I can use to further enhance the cuteness of the sketch through small, yet impactful changes.

# Learning Journey: Understanding and Recreating Rafaël Rozendaal’s "Falling" Animation

In this post, I’ll walk through my journey of analyzing and understanding the p5.js recreation of **"Falling"** by Rafaël Rozendaal, and my experience working through the code. I'll describe the main features of the code, the challenges I faced, and the resources I used to help me understand difficult sections. Throughout the process, I’ll be documenting my thoughts, sharing screenshots, and embedding p5.js sketches to better explain my understanding and creative process.

---

## **Understanding the Code: Main Features and Explanation**

The provided code creates an animation of waves made from gradient shapes falling down the screen. The falling objects are drawn using a combination of curves and colors that change over time, creating a dynamic, organic movement. Here’s an in-depth look at how the code works:

### **1. Initialization: Creating and Storing Objects**

- The code starts by defining an object `faller`, which serves as a template for the falling waves. A list of `fallers` is initialized to store multiple instances of these objects.
- In the `setup` function, the canvas size is set to match the browser window size, and HSB (Hue, Saturation, Brightness) color mode is enabled for easier color manipulation.

```javascript
// Initializing the faller object template
const faller = {};

// Array to store multiple faller objects
const fallers = [];

// Background color variable
let bg;
```

### **2. Creating the Wave Path (Start and End Points)**

The `faller` object contains two main sets of points: **start points** and **end points**. These represent the positions where the waves start (on the top part of the screen) and where they end (towards the bottom).

```javascript
// Defining the start points for the waves (from top-left to top-right)
faller.start_points = [
  { x: 0, y: height / 2 }, // Left middle
  { x: 0, y: 0 }, // Top left
  { x: width / 4, y: 0 }, // Top-left quarter
  { x: width / 2, y: 0 }, // Center top
  { x: (width * 3) / 4, y: 0 }, // Top-right quarter
  { x: width, y: 0 }, // Top right
  { x: width, y: height / 2 }, // Right middle
];
```

### **3. Gradient Colors**

Each wave has a gradient color effect between two colors (`colours[0]` and `colours[1]`). These colors are dynamically generated using the `rand_col()` function that creates random hues for each wave.

```javascript
faller.colours = [rand_col(), rand_col()];
```

### **4. Curve Function: Creating Organic Movement**

The `rand_curve()` function generates random values between 1 and 3. These values determine how quickly or slowly each wave element moves along its path. This randomness gives the waves an organic feel, as each wave behaves differently.

```javascript
// Generate random curve values for the movement
faller.curves = new Array(7).fill().map(rand_curve);
```

---

## **Challenges and Things I Didn’t Understand Initially**

While analyzing and implementing this code, I encountered a few challenges. Some sections took a bit more time to understand fully, especially the logic behind the wave movement and the interpolation between points.

### **1. The `faller.curves` Initialization**

```javascript
faller.curves = new Array(7).fill().map(rand_curve);
```

This line creates an array with 7 elements, each filled with a random value between 1 and 3 (generated by `rand_curve`). Initially, I wasn’t sure how the array was being populated. It turns out that `fill()` generates `undefined` elements, and then `map()` applies `rand_curve` to each element. This generates 7 random values, which influence the movement curves of each wave.

### **2. The `find_point` Function**

```javascript
const p = find_point(s, f.end_points[i], f.phase ** f.curves[i]);
```

Here, `f.phase ** f.curves[i]` calculates a "curved" progression between the start and end points. The `**` operator is the exponentiation operator, so this is raising the phase value to a power defined by the corresponding curve value. This results in a non-linear movement along the wave's path, where higher curve values slow down the wave's movement initially and speed it up toward the end.

### **3. The `unshift` Method**

```javascript
fallers.unshift(new_faller);
```

The `unshift` method is used to add the new `faller` object to the beginning of the `fallers` array. This means that the new wave starts appearing on top of the older ones, giving the effect of waves continuously being generated as the animation progresses.

---

## **Resources and Communities I Reached Out To**

To better understand these sections of the code, I used a few key resources:

1. **p5.js Reference**: The official p5.js website (https://p5js.org) provided a lot of clarity on functions like `fill()`, `map()`, and `colorMode()`. I consulted it for syntax and function behavior.

2. **MDN Web Docs**: To better understand JavaScript operators (such as the `**` for exponentiation), I referred to the Mozilla Developer Network (MDN). Their explanations on operators and array methods like `map()` and `unshift()` were especially helpful.

3. **Stack Overflow**: For specific questions about `fill()` and `map()`, I found discussions and code examples on Stack Overflow that clarified their functionality and use cases.

4. **Creative Coding Community**: I connected with other p5.js enthusiasts and creative coders via forums and social media groups, where people share their projects and insights. This community provided inspiration and troubleshooting support.

---

## **Next Steps: Expanding and Modifying the Code**

Now that I have a better understanding of the code, here are a few modifications and ideas for expanding the animation:

1. **Speed Adjustment**:
   I could add a variable to control the speed of the wave movement. For example:

   ```javascript
   let waveSpeed = 0.008;
   ```

   Then, adjust the `phase` increment in the `draw()` function:

   ```javascript
   f.phase += waveSpeed;
   ```

2. **Interactive Modifications**:
   Adding mouse interaction could make the waves react to user input. For instance, waves could appear where the user clicks:

   ```javascript
   function mousePressed() {
     const new_faller = Object.assign({}, faller);
     new_faller.colours = [bg, rand_col()];
     new_faller.curves = new Array(7).fill().map(rand_curve);
     fallers.unshift(new_faller);
     bg = rand_col();
   }
   ```

3. **Limited Color Palette**:
   To create a more cohesive visual effect, I could limit the wave colors to a specific palette. For example:

   ```javascript
   const palette = [
     color(0, 100, 100),
     color(60, 100, 100),
     color(120, 100, 100),
   ];

   function rand_col() {
     return random(palette);
   }
   ```

These changes could enhance the aesthetic and interaction of the animation, making it feel more dynamic and user-driven.

---

## **Conclusion**

Recreating and understanding Rafaël Rozendaal’s **"Falling"** animation in p5.js has been a great learning experience. By breaking down each section of the code and experimenting with variations, I’ve gained a deeper understanding of how to manipulate shapes, colors, and animations programmatically. The next step in my journey will be to continue exploring ways to make the animation more interactive and visually striking, while applying these concepts to future creative coding projects.
