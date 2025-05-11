---
title: Week5
published_at: 2025-11-04
snippet: An example of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 6A

# Exploring Creative JavaScript Libraries and Philosophical Texts

## Introduction: My Journey with JavaScript Libraries

As a coding beginner, exploring JavaScript libraries feels like stepping into a whole new world! I was asked to learn about three libraries: q5.js, c2.js, and svg.js. I'll share what I found out about each one from their GitHub pages and official websites.

## What is each library for?

### q5.js

q5.js is basically a lightweight version of p5.js. Looking at its GitHub page (https://github.com/LingDong-/q5xjs), I discovered it keeps the main features of p5.js but drastically reduces the file size. It says it's "small enough to paste into a forum post," so it must be really lightweight! It has similar graphics and drawing capabilities but works with much smaller code.

### c2.js

When I checked out the GitHub page for c2.js (https://github.com/soulwire/c2.js), it seems to be a library for 2D physics effects and data visualization. Looking at the examples, you can create simulations like bouncing balls, shapes colliding with each other, or objects responding to gravity. It looks like it would be useful for making games or interactive websites!

### svg.js

I learned about svg.js from their official website (https://svgjs.dev). It's a library for creating and editing SVG (vector image) files. Vector images don't get pixelated when you enlarge them, so they're great for making logos or icons. With svg.js, you can create these images with code and even animate them.

## In what ways are they different?

Comparing these libraries:

1. **They have different purposes**:

   - q5.js is for general drawing and creative coding
   - c2.js focuses on physics effects and movement
   - svg.js specializes in vector graphics

2. **They draw differently**:

   - q5.js and c2.js use Canvas (pixel-based)
   - svg.js uses SVG (vector-based)

3. **They vary in size and focus**:

   - q5.js is small and simple
   - c2.js concentrates on physics simulations
   - svg.js is only for vector work but has diverse features within that area

4. **They vary in learning difficulty**:
   - q5.js is easy to learn if you know p5.js
   - c2.js might require some knowledge of physics concepts
   - svg.js is easier if you have basic knowledge of what SVG is

## Can we use these libraries from within a JavaScript module?

To find out if these libraries can be used in JavaScript modules (the import and export style), I looked at the descriptions and documentation on each GitHub page:

- **q5.js**: The GitHub description shows it supports ES modules, so you should be able to import it with an import statement.

- **c2.js**: This seems to be an older library, and the GitHub hasn't been updated in a while. There's no mention of ES modules, so it might not be compatible right out of the box.

- **svg.js**: The documentation specifically states it supports ES modules, so you can import it using import.

The reason some libraries don't work directly with modules is that they were built using older methods (using global variables or CommonJS style). Modern modules have stricter rules about how code is loaded.

## In what situations might a tool like esm.sh be useful?

I visited the official site for esm.sh (https://esm.sh) to learn about it. It's a service that converts npm packages to ES modules so you can import them directly in browsers!

This is really helpful in situations like:

1. When you want to use an older library (that doesn't support ES modules) in your modern code
2. When working in environments like Deno or modern browsers that only accept ES modules
3. When you want to start a project quickly without complex build processes
4. When you want to easily import libraries for simple demos or experiments

For example, if you wanted to use an older library like c2.js in a modern project, you could convert it through esm.sh:

```javascript
import c2 from "https://esm.sh/c2";
```

Just like that!

## Brief Summaries of Philosophical Texts

### Information & Thinking by Michel Serres

I looked up Michel Serres' writing online and read a few reviews, and the main point seems to be that kids today handle information completely differently.

In the past, knowledge was scarce. Books were expensive, and you had to go to school or a library to get information. So education was mostly about "memorize this fact." But now? With just a smartphone, you can find anything you're curious about in 5 seconds.

Serres uses a character called "Thumbelina" as an example, referring to the current generation that grew up using their thumbs on mobile phones. This generation doesn't need to memorize information but rather needs to know where to find it and how to connect different pieces.

So education needs to change too. Instead of simple memorization, we should teach the ability to find, evaluate, and connect information. I feel this while learning coding - it's much more important to know "where to find information when you have a problem" than to memorize all the syntax!

### What Is It Like to Be A Fungus? by Merlin Sheldrake

I found reviews and interviews about Sheldrake's book, and it was really fascinating! This text talks about how amazing fungi (things like molds and mushrooms) actually are.

We usually don't think of fungi as very important. But it turns out they create incredibly complex networks. Thread-like structures called mycelium extend for kilometers underground, connecting with each other and even connecting trees. Trees in a forest share information and nutrients through this fungal network - isn't that amazing?

What's interesting about Sheldrake's suggestion is that these fungal networks might have a kind of "distributed intelligence." While humans have a central processing unit (the brain), fungi seem to "think" across their entire network.

Learning about this while studying coding made me think of distributed computing or blockchain technology. It's like systems that work together across a network without a central server. It's really cool how nature's designs can inspire technology!

### Xenofemenism: A Politics for Alienation by Laboria Cuboniks

I found summaries and reviews of this text online, and honestly, it was harder to understand than the other texts. But the main idea seems to be:

Xenofeminism is about actively using technology to eliminate gender inequality rather than rejecting it. They take the position that "natural isn't always good." For example, statements like "women are naturally supposed to be this way" often end up restricting people.

So they believe technology can free us from biological limitations. Technology itself isn't neutral, but depending on what values we design it with, it can become either a tool of oppression or a tool of freedom.

The concept of 'alienation' is interesting too. Usually, alienation is seen as bad, right? But they see alienation from "nature" or "tradition" as something that opens new possibilities for us. It gives us the freedom to define ourselves anew, not bound by biological destiny or social roles.

From a coding learner's perspective, I think it's really important what values our technology embodies. For example, some algorithms might work unfavorably for certain groups. So when creating technology, we should always ask, "Who does this help, and who might it exclude?"

## Conclusion

I learned a lot by looking up these JavaScript libraries directly on GitHub and their official sites. And these philosophical texts, which I learned about through various reviews and summaries, made me think more broadly about how technology affects our way of thinking and society. I'm increasingly feeling that coding isn't just about giving commands to computers but about creating new worlds!​​​​​​​​​​​​​​​​

# This is 6b

# Implementing a Simple Shader and Planning My AT2 Project

## My First Shader Experience

As a coding beginner, I decided to try implementing a simple shader using p5.js. I had no idea what shaders were until our class, but I discovered they're programs that run directly on the GPU and can create amazing visual effects! Here's my attempt at creating a very basic fragment shader:

```html
<div id="shader-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>

<script>
  let theShader;

  function preload() {
    // Load the shader
    theShader = loadShader("basic.vert", "ripple.frag");
  }

  function setup() {
    // Create canvas and position it in the shader-container
    let canvas = createCanvas(400, 400, WEBGL);
    canvas.parent("shader-container");
    noStroke();
  }

  function draw() {
    // Set uniform variables that will be passed to the shader
    theShader.setUniform("u_resolution", [width, height]);
    theShader.setUniform("u_time", millis() / 1000.0);
    theShader.setUniform("u_mouse", [mouseX, height - mouseY]);

    // Apply the shader
    shader(theShader);

    // Draw a rectangle covering the entire canvas
    rect(0, 0, width, height);
  }
</script>
```

And here are the shader files I created after watching some tutorials:

```glsl
// basic.vert - Vertex shader
attribute vec3 aPosition;
attribute vec2 aTexCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = aTexCoord;
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
  gl_Position = positionVec4;
}
```

```glsl
// ripple.frag - Fragment shader
precision mediump float;

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main() {
  // Get the normalized coordinates (0-1)
  vec2 st = vTexCoord;

  // Calculate distance from mouse position
  vec2 mouseNorm = u_mouse / u_resolution;
  float dist = distance(st, mouseNorm);

  // Create ripple effect based on distance and time
  float ripple = sin(dist * 50.0 - u_time * 5.0) * 0.5 + 0.5;

  // Create color based on position and ripple
  vec3 color = vec3(st.x, st.y, ripple);

  // Output the color
  gl_FragColor = vec4(color, 1.0);
}
```

Honestly, I'm still not sure I understand everything that's happening here, but I was excited to see rippling color patterns that respond to my mouse movements! Shaders seem super powerful, and I want to learn more about them.

## Choosing a Text for AT2

For my AT2 project, I've decided to respond to "What Is It Like to Be A Fungus?" by Merlin Sheldrake. I found this text so fascinating because it completely changed how I think about networks, intelligence, and connection.

### Three Passages That Speak to Me

1. "Mycelium is a living network, continuously remodeling itself and the environment around it. Unlike our brains, which are enclosed within our skulls, mycelial networks are open systems interwoven with their surroundings."

2. "Fungi form relationships with plants, animals, and bacteria that can be mutually beneficial, harmful, or somewhere in between. These relationships are dynamic, shifting as conditions change."

3. "Perhaps we should think of mycelium not as a thing but as a process—an exploratory, irregular tendency that brings distant points into relation with one another."

These passages resonated with me because they challenge our human-centered notion of intelligence and suggest a different way of understanding connection - as distributed, adaptive, and embedded in the environment rather than centralized and separate.

## Techniques I Want to Use

1. **Shaders**: I want to use shaders to create organic, flowing visual patterns that mimic how mycelium networks spread and connect.

2. **Recursion**: I plan to implement recursive functions to generate branching structures similar to how fungal networks grow and extend outward.

## My Project Plan

- I want to create a mycelial structure that branches out like a tree using recursive functions
- I'll apply shaders to give it an organic, living texture
- If possible, I'd like to make it respond to user mouse movements

After showing my draft idea to some friends, they suggested using more natural colors and exploring different types of fungal relationships.

Moving forward, I plan to refine my shader to create a more organic feel and develop different types of interacting fungal networks. There are still many technical challenges, but I'm excited to explore the intersection of nature and technology through this project!

To be honest, I'm still figuring out all the technical aspects, especially shaders! But I'm thrilled about creating something that captures the fascinating, decentralized intelligence of fungal networks. I think this project will help me continue exploring the intersection of technology, nature, and alternative forms of intelligence that Sheldrake's text introduced me to.​​​​​​​​​​​​​​​​
