---
title: Week4
published_at: 2025-11-04
snippet: An week 4 of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 4A

# Exploring Generative Art Through Complexity Theory

## Introduction

As a coding beginner, this assignment on complexity theory and generative art felt really overwhelming at first. Terms like 'compressibility' and 'effective complexity' were completely new to me, and I had no idea how to express these concepts through code. But I tried to understand bit by bit, looking at examples and trying simple experiments.

## Creating a Work with High Compressibility

For my first task of creating something with 'high compressibility,' I used the most basic repetitive patterns. I needed something that looked complex but could actually be explained with a simple rule.

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 0; i < width; i += 10) {
    for (let j = 0; j < height; j += 10) {
      // Simply drawing circles in a grid pattern
      ellipse(i, j, 5, 5);
    }
  }
}
```

This code is super simple. It just draws small circles in a grid pattern across the screen. The result might look complex, but it can be described by a two-line loop. I think this is what 'high compressibility' means - creating complex patterns with simple rules. But honestly, I wasn't completely sure if I understood the concept correctly.

## Attempting a Work with Low Compressibility

Next, I tried to create something with 'low compressibility.' This seemed to mean something with lots of randomness and no clear patterns.

```javascript
function setup() {
  createCanvas(400, 400);
  background(220);
  // Run once and done
}

function draw() {
  // Drawing random dots each frame
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 5);

    fill(random(255), random(255), random(255));
    ellipse(x, y, size, size);
  }
}
```

This code places dots completely randomly on the screen. The positions, sizes, and colors are all random. The result doesn't seem to have any pattern or rules. I think this is what 'low compressibility' means - there's no simple way to describe the result. But doing it this way just seemed like meaningless noise to me.

## Finding Effective Complexity

The third task of 'high effective complexity' was the hardest. Reading Galanter's paper, it seemed to mean something between complete order and complete disorder, like the complexity we see in nature.

```javascript
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(220);

  // Using noise function for natural patterns
  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      // Noise value varies by position
      let n = noise(x * 0.01, y * 0.01, frameCount * 0.01);

      // Basic structure (grid) + random elements (noise)
      fill(n * 360, 80, 80);
      let size = n * 15;
      ellipse(x, y, size, size);
    }
  }
}
```

This code has a basic grid structure (structured element), but the size and color of each dot is determined by Perlin noise (probabilistic element). The result has some pattern but isn't completely predictable. Similar shapes repeat but aren't exactly the same.

To be honest, I wasn't sure if this properly implemented 'effective complexity.' I just did my best based on what I understood.

## What "Structure is in the Eye of the Beholder" Means

Galanter's statement that "structure is subjective and in the eye of the beholder" was hard to understand at first. But when I showed my works to friends, it started to make more sense.

Looking at my noise pattern, one friend said "it looks like waves," and another said "it looks like mountain ranges." What I intended was just an abstract pattern made with noise, but people found different patterns and meanings in it.

This subjectivity is useful for generative art because the artist doesn't have to control everything directly. The algorithm creates some pattern, and the viewers find their own meaning through their interpretation. I think this is what makes generative art special, even though it's hard for a beginner like me to fully understand.

## Elements Creating Structure in My Third Example

In my third work, the elements creating 'structure' were:

1. **Repetition and Pattern**: I used basic for loops to create a grid structure. This is probably the most fundamental kind of structure.

2. **Noise Function**: I used controlled randomness (noise) instead of complete randomness (random). Perlin noise creates randomness that has relationships between nearby values, making natural-looking patterns.

3. **Time Element**: By including `frameCount` in the noise function, I created patterns that change over time.

To be honest, I didn't fully understand these concepts when coding. I was mostly following examples and trying to get a feel for how things worked.

## Analysis of Jun Kiyoshi's Work

When I first saw Jun Kiyoshi's work (https://junkiyoshi.com), I was really overwhelmed. It was on a completely different level from what I could do. But I tried to analyze it anyway.

In Kiyoshi's work, 'structure' seems to come mainly from geometric shapes (circles, lines, cubes, etc.) and how they're arranged. Many works have basic shapes evenly placed in 3D space.

'Randomness' appears in the slight movements of shapes, changes in size, and transformations over time. It's not completely random, but there are unpredictable changes within certain patterns.

This balance between the two elements seems to create 'effective complexity.' The works have a basic structure that makes them understandable, but also unpredictable changes that keep them interesting.

As a coding beginner, I don't know if I could ever create work at this level, but I'm starting to understand the basic principles at least.

## Conclusion

Through this assignment, I tried to learn the basic concepts of generative art and complexity theory. Honestly, a lot of it still feels difficult and abstract, but by actually coding, I'm starting to get a feel for it.

Galanter's concept of 'effective complexity' seems to show the connection between patterns in nature and artistic expression. I learned that the most interesting point is neither complete chaos nor overly simple order, but the balance between the two.

As a coding beginner, I still have a long way to go, but through this assignment, I realized that coding isn't just a functional tool but can also be a tool for artistic expression. I want to learn more and keep experimenting!​​​​​​​​​​​​​​​​

# This is 4b

# Expressing Myself through Glitch: A Beginner's Self-Portrait Experiment

## Introduction

As someone just beginning to learn coding, I felt both excited and anxious when given this glitch self-portrait assignment. I couldn't attend the class but studied through the provided course materials and references on my own. I had no idea what glitch art was, and wasn't sure how to implement it with code. After searching YouTube and Google, I discovered techniques called pixel sorting and databending, which I decided to use to transform my photo.

I particularly referenced Daniel Shiffman's pixel manipulation tutorials from The Coding Train channel (https://www.youtube.com/c/TheCodingTrain), Kim Asendorf's blog post about pixel sorting algorithms (http://kimasendorf.com/mountain-tour/), and modified code from Jason Labbe's p5.js glitch examples found on GitHub (https://github.com/jasondlabbe/p5.glitch).

## My Glitched Self-Portrait Code

```javascript
// Glitched self-portrait using pixel sorting
// Inspired by Kim Asendorf's pixel sorting algorithm
// Some code borrowed from Jason Labbe's p5.glitch library (https://github.com/jasondlabbe/p5.glitch)

let img;
let sortedImg;
let threshold = 80; // Brightness threshold for sorting

function preload() {
  img = loadImage("selfportrait.jpg"); // Load my original photo
}

function setup() {
  createCanvas(img.width, img.height);
  sortedImg = createImage(img.width, img.height);
  sortedImg.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  sortedImg.loadPixels();

  // Apply vertical sorting to portions of the image
  // This part references The Coding Train channel's pixel manipulation tutorial
  // https://www.youtube.com/watch?v=nBKwCCtWlUg
  for (let x = 0; x < sortedImg.width; x++) {
    // Get all pixels in this column
    let column = [];
    for (let y = 0; y < sortedImg.height; y++) {
      let index = (x + y * sortedImg.width) * 4;
      let r = sortedImg.pixels[index];
      let g = sortedImg.pixels[index + 1];
      let b = sortedImg.pixels[index + 2];
      let brightness = (r + g + b) / 3;

      column.push({
        index: index,
        r: r,
        g: g,
        b: b,
        a: sortedImg.pixels[index + 3],
        brightness: brightness,
      });
    }

    // This part is Kim Asendorf's pixel sorting algorithm converted to JavaScript
    // Original: http://kimasendorf.com/mountain-tour/
    let sortingRanges = [];
    let startIndex = 0;
    let sorting = false;

    for (let i = 0; i < column.length; i++) {
      // Start sorting when we cross the threshold
      if (!sorting && column[i].brightness > threshold) {
        startIndex = i;
        sorting = true;
      }

      // Stop sorting when we go below threshold
      if (sorting && column[i].brightness <= threshold) {
        sortingRanges.push({ start: startIndex, end: i });
        sorting = false;
      }
    }

    // If we're still sorting at the end of the column
    if (sorting) {
      sortingRanges.push({ start: startIndex, end: column.length });
    }

    // Sort each range by brightness
    for (let range of sortingRanges) {
      // This code references an example found on the p5.js forum
      // https://discourse.processing.org/t/pixel-sorting-in-p5js/22765
      let subColumn = column.slice(range.start, range.end);

      // Sort by brightness (ascending)
      subColumn.sort((a, b) => a.brightness - b.brightness);

      // Put the sorted pixels back
      for (let i = 0; i < subColumn.length; i++) {
        let pixelData = subColumn[i];
        let originalIndex = range.start + i;
        let index = column[originalIndex].index;

        sortedImg.pixels[index] = pixelData.r;
        sortedImg.pixels[index + 1] = pixelData.g;
        sortedImg.pixels[index + 2] = pixelData.b;
        sortedImg.pixels[index + 3] = pixelData.a;
      }
    }

    // Add some databending-style corruption (inspired by Georg Fischer's Glitch Art Tutorial)
    // https://medium.com/@GeorgFischer/glitch-art-tutorial-databending-4bf346bc8a62
    if (random() < 0.05) {
      // 5% chance for each column
      let corruptStart = floor(random(sortedImg.height - 50));
      let corruptLength = floor(random(20, 50));

      // Shift RGB values
      for (let y = corruptStart; y < corruptStart + corruptLength; y++) {
        if (y < sortedImg.height) {
          let index = (x + y * sortedImg.width) * 4;
          // Swap R and B values to create color shift
          let temp = sortedImg.pixels[index];
          sortedImg.pixels[index] = sortedImg.pixels[index + 2];
          sortedImg.pixels[index + 2] = temp;

          // Occasionally introduce totally random colors
          if (random() < 0.2) {
            sortedImg.pixels[index] = random(255);
            sortedImg.pixels[index + 1] = random(255);
          }
        }
      }
    }
  }

  sortedImg.updatePixels();
  image(sortedImg, 0, 0);

  // Add horizontal glitch effect at random locations (technique from Ted Davis's glitch workshop)
  // https://teddavis.org/2017/glitch-workshop/
  for (let i = 0; i < 5; i++) {
    let y = floor(random(height));
    let glitchHeight = floor(random(5, 20));
    let offset = floor(random(-30, 30));

    // Copy a slice of the image and draw it with offset
    copy(sortedImg, 0, y, width, glitchHeight, offset, y, width, glitchHeight);
  }

  // Save the result
  save("glitched_portrait.jpg");
}

function draw() {
  // No animation needed, everything happens in setup()
}
```

## Aesthetic Transformation Through Glitch

To be honest, I didn't fully understand most of this code as I was combining and modifying examples from online sources. Particularly, the pixel sorting algorithm is a JavaScript conversion of Kim Asendorf's work, which I can't claim to understand 100%. But I was amazed by the result! My face got stretched in strange ways and the colors became distorted, completely transforming the feeling of the image.

### Engaging with Effective Complexity

From reading Galanter's paper "What is Generative Art: Complexity Theory as a Context for Art Theory" in the course materials, I learned that "effective complexity" refers to a balance between complete order and total chaos. Looking at my glitched self-portrait, I think it achieves this kind of balance. Parts of my face are still recognizable (order), while other parts have transformed into colored streaks or corrupted pixels (chaos). This in-between state seems to draw people's attention more than either extreme would.

The pixel sorting algorithm created long streaks by sorting pixels based on brightness, and interestingly, these streaks somewhat follow the contours of my face. These areas maintain enough structure to still be "read" as a face, while introducing unpredictable elements that require the viewer to mentally reconstruct my image.

### From Cute to Interesting: Shifting Aesthetic Registers

Reading about Sianne Ngai's three aesthetic categories (the cute, the interesting, and the zany) in the course materials, I think my glitched portrait definitely moves from the realm of the "cute" (which my original selfie might embody with its direct appeal) into the realm of the "interesting."

According to Ngai, the "interesting" aesthetic involves defamiliarization and intellectual engagement. My glitched portrait requires the viewer to analyze and interpret what they're seeing – parts of my face need to be mentally reconstructed. This invites more intellectual engagement than emotional response. Viewers might ask: "What am I looking at? How was this made? What does this say about digital representation?" These questions place the work firmly in Ngai's "interesting" category.

### Digital Failure as Aesthetic Strategy

Reading Rosa Menkman's "Glitch Studies Manifesto" from the "Glitch Readings" section of the course materials helped me understand what I had created. Menkman writes about how glitches "rupture flow, expectations and conventions," which is exactly what my portrait does. By corrupting my image through code, I'm challenging the convention that a portrait should be an accurate representation.

As Menkman suggests, glitches "reveal [a medium's] inner workings" – in this case, exposing how digital images are really just collections of pixels with RGB values that can be manipulated. What was once a seemingly continuous image becomes visibly discrete, revealing the underlying structure of digital imagery.

### Connection to Net Art Traditions

From reading Olia Lialina's "Net Art Genealogies" in the "Net Art Readings" section, I learned that my experiment connects to early net artists' interest in exposing the medium. Like those artists who highlighted the browser as a frame rather than trying to hide it, my glitched portrait celebrates rather than conceals the digital nature of the image.

This follows what Lialina describes as a tradition of "making the medium visible" – by breaking the expected functionality of digital imagery, I'm drawing attention to its constructed nature. The portrait becomes less about me as a subject and more about the digital mediation that shapes how we see each other online.

## Conclusion

To be honest, I didn't fully understand the theoretical aspects when doing this assignment. I just combined codes found online and experimented, looking at the results and wondering, "Is this what the course materials meant by effective complexity?" As a coding beginner, it was really challenging to create such complex code while trying to understand theoretical concepts at the same time.

But through creating this glitched self-portrait, I started to learn about both coding techniques and aesthetic concepts. It was fascinating to see how using code to disrupt my image shifted its aesthetic register from simple representation to something that invites contemplation about digital imagery itself.

This project helped me begin to understand how effective complexity can create visually engaging work that balances between order and chaos. I also learned how digital failures can be repurposed as aesthetic strategies, challenging conventions and revealing the constructed nature of digital representation.

Most importantly, I realized that portraits don't need to be accurate to be meaningful. Sometimes, it's in the breakdown and reconstruction of an image that we find new ways of seeing ourselves and understanding our relationship with technology.​​​​​​​​​​​​​​​​
