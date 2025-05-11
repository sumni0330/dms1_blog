---
title: Week7
published_at: 2025-11-04
snippet: An week7 of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 7A

# Experimenting with Sound Design for My AT2 Project

## What is Chaos in Sound?

As a coding beginner, creating chaotic sound felt really challenging. From the class materials, I learned that 'chaos' in sound isn't just random noise, but something that has some structure while still being unpredictable.

The way we hear sounds seems to be influenced by a few elements:

- Temporal patterns like rhythm or tempo
- Relationships between high and low sounds
- The texture or character of sounds
- How sounds exist in space

If you listen to natural sounds, they seem to exist at a middle point that's neither completely disordered nor too regular. For example, I listened to MyNoise's "Water" sound and was surprised by how beautiful water sounds (which might normally be considered just noise) can be!

I also looked at Pink Trombone, a voice simulation that shows how human voice exists somewhere between noise and structure. From "How to Kill a Zombie," I learned how everyday sounds can be transformed to become strange and unfamiliar.

## My Sound Experiment

To create sound for my mycelium (fungal root network) project, I tried a simple experiment. I wanted to make sounds that seemed like the mycelium 'talking' to each other.

```html
<button id="start-sound">Start Sound</button>
<div id="feedback"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.26/Tone.min.js"></script>
<script>
  // Basic variables
  let playing = false;
  let chaosLevel = 0;
  let startTime;

  // Basic sound setup
  const reverb = new Tone.Reverb().toDestination();
  reverb.decay = 3;

  // Create several different sounds
  const sounds = [];
  for (let i = 0; i < 3; i++) {
    // Use pink noise (closer to natural sounds)
    const noise = new Tone.Noise("pink").connect(reverb);
    noise.volume.value = -30;

    // Shape the noise with filters
    const filter = new Tone.Filter({
      type: "bandpass",
      frequency: 300 + i * 200,
    }).connect(reverb);

    noise.connect(filter);

    sounds.push({
      noise: noise,
      filter: filter,
      lastPlayed: 0,
    });
  }

  // Start sound when button is clicked
  document.getElementById("start-sound").addEventListener("click", async () => {
    await Tone.start();
    console.log("Sound started!");

    // Turn on noise sources
    sounds.forEach((s) => s.noise.start());

    startTime = Tone.now();
    playing = true;

    // Start updating sound
    updateSound();

    // Hide button
    document.getElementById("start-sound").style.display = "none";
  });

  // Sound update function
  function updateSound() {
    if (!playing) return;

    // Set chaos level to change every 24 seconds
    const now = Tone.now();
    const elapsed = now - startTime;
    const cycle = (elapsed % 24) / 24;

    // Use sine wave to move between order and chaos
    chaosLevel = 0.5 + 0.5 * Math.sin(cycle * Math.PI * 2);

    // Update visual feedback
    updateFeedback(chaosLevel);

    // Change sound based on chaos level
    reverb.wet.value = 0.2 + chaosLevel * 0.6;

    // Play each sound randomly
    sounds.forEach((sound, i) => {
      // Higher chaos = more frequent sounds
      if (
        Math.random() < 0.01 + chaosLevel * 0.03 &&
        now - sound.lastPlayed > 0.3
      ) {
        // Slightly random pitch
        const randomFreq =
          300 + i * 200 + (Math.random() * 200 - 100) * chaosLevel;
        sound.filter.frequency.value = randomFreq;

        // Change sound volume
        sound.noise.volume.rampTo(-30 + chaosLevel * 10, 0.1);
        sound.lastPlayed = now;
      }
    });

    // Keep updating
    requestAnimationFrame(updateSound);
  }

  // Visual feedback
  function updateFeedback(level) {
    const el = document.getElementById("feedback");
    el.textContent = `Order ${Math.round(
      (1 - level) * 100
    )}% - Chaos ${Math.round(level * 100)}%`;
    el.style.background = `hsl(${260 + level * 60}, 70%, 50%)`;
  }
</script>
```

## How It Works

Honestly, I don't understand all the code, but I referenced examples from the Tone.js library. The basic idea is:

1. I used pink noise (a more natural kind of noise) to create a natural mycelium feeling
2. I created several different sounds to represent different parts of the mycelium network
3. I set it up to cycle between order and chaos every 24 seconds:
   - In ordered states: sounds happen less frequently and are more predictable
   - In chaotic states: sounds happen more often and more randomly

I also made a simple visual feedback to show how orderly or chaotic the sound currently is.

## Evaluating My Experiment

Through this simple experiment, I learned a few things:

**What Worked Well**:

- Pink noise gave a surprisingly natural and organic feel
- The pattern of moving between order and chaos felt similar to how fungi grow
- I learned that even with really simple code, you can create interesting sounds

**What Could Be Improved**:

- I'd like to add more varied sounds
- It would be nice if the visual mycelium and the sound were more directly connected
- More interaction where users can influence the sound would be great

For my final AT2 project, I'd like to better integrate this sound experiment with my visual mycelium network. Even though I'm still a coding beginner and have a lot to learn, I want to create a sound and visual experience that expresses the mysterious nature of fungal networks!​​​​​​​​​​​​​​​​

# This is 7A

# Understanding Zaniness in My AT2 Project

## Exploring Wark's Quote on "The Zany"

In her essay on Sianne Ngai, McKenzie Wark writes: "Unlike the interesting, the zany really works against its constraints." When I first read this, I wasn't sure what she meant, but after thinking about it more, I think she's saying that while the "interesting" operates within given boundaries and structures, the "zany" actively pushes back against limits and tries to break free from them.

The zany seems to have this manic energy that's always testing boundaries, overflowing, and refusing to stay in its assigned place. Think of characters like Jim Carrey in his comedies or the Animaniacs - they're constantly breaking rules, stretching reality, and creating chaos through their excessive energy.

## Comparing the Chaotic and the Zany

### Similarities:

- Both involve unpredictability and surprise
- Both push against orderly structures
- Both have a certain energy and vitality
- Both can create a sense of discomfort or tension

### Differences:

- Chaos feels more neutral or natural, while zaniness has a distinctly human, performative quality
- Chaos can be peaceful (like in natural systems), while zaniness always has a frantic, almost desperate energy
- Chaos is often about randomness, while zaniness feels more purposeful in its boundary-breaking
- Chaos can be beautiful, but zaniness often has elements of the absurd or comic

## Is My AT2 Project Zany?

Reflecting on my mycelium-inspired project that combines shader effects with recursive growth patterns, I wouldn't call it particularly zany yet. It has chaos and unpredictability, but it lacks that manic, boundary-pushing energy of zaniness.

My project currently has:

- **Chaotic elements**: The unpredictable growth patterns and shader effects that create visual complexity
- **Interesting aspects**: The way it visualizes ideas from Sheldrake's text about fungal networks
- **Some cuteness**: In the organic, growing forms that might evoke an emotional response

But it's missing the frenetic energy, the sense of things being pushed to absurd extremes, and the performative quality that would make it truly zany.

## Making My AT2 More Zany

To push my project into the realm of zaniness, I could:

1. Add extreme, unexpected reactions to user interaction - like the mycelium exploding into thousands of tiny fragments when clicked, then reforming in wild, impossible ways

2. Incorporate absurd, mismatched audio elements - perhaps having the fungi "speak" with human voices saying nonsensical phrases from Sheldrake's text

3. Break the fourth wall - have the mycelium network become "aware" of being in a digital environment and start to invade other parts of the webpage or user's screen

4. Add impossible physics and exaggerated movements - make the growth patterns defy gravity, stretch to ridiculous proportions, or move with cartoon-like bounciness

5. Introduce random glitches that distort not just the imagery but the entire user experience - sudden color inversions, melting interfaces, or elements that refuse to stay in place

These additions would push my project from merely chaotic (which can still be serene in its complexity) to truly zany (which has that quality of manic energy working against constraints).

## My AT2 Project: Technical Implementation

```javascript
// Mycelium Network Visualization
// Inspired by "What Is It Like to Be A Fungus?" by Merlin Sheldrake

// VARIABLES
let myceliumNetwork; // Main class instance
let growthRate = 0.8; // Controls growth speed
let maxDepth = 7; // Maximum recursive depth
let shader; // GLSL shader for organic effects
let zaniness = 0; // Zaniness level that increases with user interaction

// SETUP FUNCTION
function setup() {
  createCanvas(800, 800, WEBGL);

  // Initialize our shader
  shader = createShader(vertShader, fragShader);

  // Create main mycelium network
  myceliumNetwork = new MyceliumSystem(0, 0, 0);

  // Add initial branches
  myceliumNetwork.addInitialBranches(5);
}

// DRAW FUNCTION - Main animation loop
function draw() {
  background(10, 5, 20);

  // Update shader uniforms
  shader.setUniform("u_time", millis() / 1000.0);
  shader.setUniform("u_zaniness", zaniness);
  shader.setUniform("u_resolution", [width, height]);

  // Apply shader
  shader(shader);

  // Update and display mycelium network
  myceliumNetwork.update();
  myceliumNetwork.display();

  // Gradually decrease zaniness over time
  zaniness *= 0.99;
}

// MOUSE INTERACTION - Increases zaniness when clicked
function mousePressed() {
  // BOOLEAN LOGIC to determine response
  if (dist(mouseX, mouseY, width / 2, height / 2) < 300) {
    // Closer to center = more zaniness
    zaniness += 0.5;

    // Add new growth from click point
    let x = map(mouseX, 0, width, -300, 300);
    let y = map(mouseY, 0, height, -300, 300);
    myceliumNetwork.addBranch(x, y, 0);
  } else {
    // Less zaniness in outer areas
    zaniness += 0.2;
  }

  // Cap zaniness level using BOOLEAN LOGIC
  if (zaniness > 5) {
    // At very high zaniness, system becomes temporarily unstable
    myceliumNetwork.triggerZanyMode();
  }
}

// CLASS for mycelium system
class MyceliumSystem {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.branches = []; // ARRAY to store all branches
    this.age = 0;
    this.zanyMode = false;
  }

  // Add initial set of branches
  addInitialBranches(count) {
    // ITERATION to create multiple branches
    for (let i = 0; i < count; i++) {
      let angle = map(i, 0, count, 0, TWO_PI);
      this.addBranch(cos(angle) * 50, sin(angle) * 50, 0);
    }
  }

  // Add a new branch at position
  addBranch(x, y, z) {
    // Create new branch and add to ARRAY
    let pos = createVector(x, y, z);
    let branch = new Branch(pos, random(30, 50), null);
    this.branches.push(branch);
  }

  // Update entire system
  update() {
    this.age++;

    // ITERATION through all branches
    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].update();

      // Occasionally grow new branches using BOOLEAN LOGIC
      if (random() < 0.03 * growthRate && this.branches.length < 200) {
        let parent = this.branches[i];

        // Only branch if not too deep
        if (parent.depth < maxDepth) {
          // Create child branch with slight direction change
          let newDir = parent.direction.copy();
          newDir.rotate(random(-0.5, 0.5));

          let newPos = parent.tipPosition.copy();
          let newBranch = new Branch(newPos, parent.length * 0.8, parent);
          newBranch.direction = newDir;
          newBranch.depth = parent.depth + 1;

          this.branches.push(newBranch);
        }
      }
    }

    // Special behaviors when in zany mode
    if (this.zanyMode) {
      // ITERATION to update all branches in zany mode
      for (let branch of this.branches) {
        branch.applyZanyEffects();
      }

      // Exit zany mode after a while
      if (frameCount % 120 === 0) {
        this.zanyMode = false;
      }
    }
  }

  // Display the system
  display() {
    push();
    // Translate to system position
    translate(this.position.x, this.position.y, this.position.z);

    // ITERATION to display all branches
    for (let branch of this.branches) {
      branch.display();
    }
    pop();
  }

  // Trigger zany behaviors
  triggerZanyMode() {
    this.zanyMode = true;

    // ITERATION to apply initial zany effect to all branches
    for (let branch of this.branches) {
      branch.zanyFactor = random(0.5, 2);
    }
  }
}

// CLASS for individual branches
class Branch {
  constructor(position, length, parent) {
    this.position = position.copy();
    this.length = length;
    this.parent = parent;
    this.age = 0;
    this.depth = parent ? parent.depth + 1 : 0;
    this.thickness = map(this.depth, 0, maxDepth, 8, 2);
    this.direction = createVector(
      random(-1, 1),
      random(-1, 1),
      random(-0.5, 0.5)
    ).normalize();
    this.tipPosition = this.calculateTip();
    this.zanyFactor = 1.0;
  }

  // Calculate tip position based on direction and length
  calculateTip() {
    let tip = this.position.copy();
    let dirCopy = this.direction.copy();
    dirCopy.mult(this.length);
    tip.add(dirCopy);
    return tip;
  }

  // Update branch
  update() {
    this.age++;

    // Slightly adjust direction over time for organic movement
    if (frameCount % 10 === 0) {
      this.direction.rotate(random(-0.05, 0.05));
      this.tipPosition = this.calculateTip();
    }
  }

  // Display branch
  display() {
    push();
    // BOOLEAN LOGIC for color choice
    if (this.zanyFactor > 1.5) {
      // Zany branches get weird colors
      fill(sin(frameCount * 0.1) * 127 + 127, 100, 200);
    } else if (this.depth < 3) {
      // Main branches are whitish
      fill(220, 230, 255, 200);
    } else {
      // Smaller branches have color variation
      fill(180 + this.depth * 10, 220, 200, 150);
    }

    noStroke();

    // Draw branch as cylinder between position and tip
    translate(this.position.x, this.position.y, this.position.z);

    // Face cylinder in direction of growth using lookAt
    let target = this.calculateTip();
    lookAt(target);

    // Draw cylinder with thickness based on depth and zanyFactor
    let adjustedThickness = this.thickness * this.zanyFactor;
    cylinder(adjustedThickness, this.length);

    pop();
  }

  // Apply special effects when in zany mode
  applyZanyEffects() {
    // Quickly oscillate size
    this.zanyFactor = 1 + sin(frameCount * this.zanyFactor * 0.2) * 0.5;

    // Wildly rotate direction
    if (frameCount % 5 === 0) {
      this.direction.rotate(sin(frameCount * 0.1) * 0.2);
      this.tipPosition = this.calculateTip();
    }
  }
}

// RECURSIVE function to create mycelium growth
function growRecursively(x, y, z, direction, length, depth) {
  // Base case for RECURSION
  if (depth >= maxDepth || length < 5) {
    return;
  }

  // Calculate end point
  let dir = direction.copy().normalize();
  let endX = x + dir.x * length;
  let endY = y + dir.y * length;
  let endZ = z + dir.z * length;

  // Draw current segment
  push();
  translate(x, y, z);
  // Code to draw segment...
  pop();

  // Number of branches
  let numBranches = floor(random(1, 4));

  // Create branches recursively
  for (let i = 0; i < numBranches; i++) {
    // Create new direction with some variation
    let newDir = direction.copy();
    newDir.rotate(random(-0.5, 0.5));

    // RECURSIVE call for new branch
    growRecursively(
      endX,
      endY,
      endZ,
      newDir,
      length * random(0.6, 0.8),
      depth + 1
    );
  }
}
```

## How My Project Responds to Sheldrake's Text

My AT2 project responds to Merlin Sheldrake's "What Is It Like to Be A Fungus?" in several ways:

1. It visualizes the **distributed network structure** of mycelium, showing how fungi create connections that spread throughout their environment rather than having a centralized "brain"

2. It incorporates **adaptive growth patterns** that respond to user interaction, similar to how Sheldrake describes fungi as constantly remodeling themselves in response to environmental conditions

3. The recursive branching pattern reflects Sheldrake's discussion of how fungi **connect distant points** in space, creating networks that transport nutrients and information

4. The shader effects create organic, flowing textures that hint at what Sheldrake calls the **"liquid intelligence"** of fungi - a form of cognition very different from our own

5. The zaniness elements (when activated) playfully explore the alien nature of fungal experience, challenging our human-centered notions of what intelligence and experience might be

## Why My Project is Post-Digital

I consider my project post-digital for several reasons:

1. It **combines digital and biological aesthetics** - using digital tools (shaders, recursion) to model biological processes, creating a hybrid form that isn't purely digital or purely natural

2. It **embraces glitches and imperfections** - especially in the "zany mode" where stability breaks down and unexpected behaviors emerge

3. It **questions the boundary between natural and artificial** - just as Sheldrake's text asks us to reconsider what intelligence means beyond human experience, my project blurs the line between coded algorithms and organic growth

4. It **rejects digital utopianism** - rather than presenting technology as perfect or idealizing the digital, it shows digital systems as messy, unpredictable, and embedded in biological contexts

5. It **uses technology to explore non-technological ideas** - employing code as a means to think about fungal consciousness and alternative forms of intelligence

While I'm still learning coding and these concepts are challenging, I'm excited about how digital tools can help us think about non-human experiences and intelligence. Through this project, I've tried to use technology not just as a tool but as a way to explore philosophical questions about consciousness, connection, and what it means to be alive.​​​​​​​​​​​​​​​​
