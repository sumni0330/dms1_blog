---
title: Week10
published_at: 2025-11-04
snippet: An week10 of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 10A

## Brainstorming: Simulating Mycelial Connectivity in My K-Skincare AT3 (with WebSockets)

### How Could I Use WebSockets in My Project (Solo Version)?

For my AT3, I’ve been exploring the world of K-skincare communities—how people share advice, compare skin troubles, and build collective knowledge. I wanted to try bringing a bit of that “mycelial” connectivity into my digital project, using the WebSockets API.

But honestly, I don’t have a bunch of friends to test with, and I can’t count on lots of users to interact live. So, here’s my workaround: I’ll simulate multiple users by creating different “persona” tabs or browser windows—each one representing a typical K-skincare community member. Each tab can pick a skin concern (like “T-zone oiliness” or “cheek redness”) and see how their data updates a shared, living skin map in real time.

When I change a skin concern in one tab, the whole visualization updates everywhere—no page reload, just instant feedback. Even though it’s all me behind the scenes, it still captures the energy of lots of different experiences flowing together, like how real mycelium networks connect many roots into one.

### Technical Stuff I’d Need to Learn

To get this working, there are a few technical things I’d have to figure out:

- How to set up a simple WebSocket server (probably with Node.js or a free cloud service) that can keep a shared “skin map” state for all connected tabs.
- How to write client-side code (maybe p5.js or plain JavaScript) so each window can send its skin data and instantly receive updates from others (…which, in my case, are really just more tabs I opened!).
- How to handle things like: what happens if two “personas” (aka, me) try to update the same area at the same time? What info should be sent back and forth—just raw skin concern data, or maybe also some random usernames for flavor?
- Making sure everything updates smoothly without weird bugs when tabs are opened/closed or left idle.

### What Else Would I Need to Learn or Do?

- I’d need to deploy my WebSocket server somewhere public, or at least locally on my computer so I can open lots of tabs and watch the system work.
- To make it visually clear what’s happening, I might design a simple dashboard or visual skin map that instantly changes as each “persona” sends in their concerns.
- I’d need some code to “reset” or randomize persona data so I can test lots of scenarios by myself, and maybe even fake some community chatter for a more realistic vibe.
- Testing and debugging are key—since I’m acting as all users, I’ll need to stress-test my code to make sure it doesn’t break with lots of simulated activity.

### What Would My Project Gain from This?

Adding this simulated real-time interactivity turns my K-skincare project from a static visualization into something much more alive and responsive. Each “persona” (even if they’re all just me!) acts like a little hypha in a fungal network, sending in skin concerns that collectively shape the look and feel of the whole skin map.

This fits the spirit of mycelial creativity perfectly: not just individual ideas or problems, but a web of connected experiences. Even if the community is “imaginary,” the network’s creative potential comes from these overlapping, interacting data streams—constantly changing and reacting, just like real fungal mycelium.

Plus, running my own simulation means I can experiment with all sorts of scenarios—rashes of acne, waves of product recommendations, sudden changes in skin type—without needing a bunch of real users online. The project stays playful, flexible, and full of possibility!

### Simple Code Block Example

// Example pseudo-code for updating a shared skin concern map via WebSockets
socket.on("skinDataUpdate", function(data) {
// Update the visualization with new skin concern data
updateSkinMap(data);
});

function sendSkinConcern(area, issue) {
// Send a skin concern update to the server
socket.emit("skinDataUpdate", { area: area, issue: issue });
}

### Wrapping Up

Even if I’m the only one interacting with my K-skincare network, using WebSockets (and a few tabs!) lets me feel the power of collective, mycelial creativity. Each action, each change, weaves into the larger web. If you’ve ever done something similar, or have ideas for improving my simulation, let me know!

# This is 10B

## Getting Started with Scripting: My First Creative Journey with Manim (Python)

### Jumping into Scripting: Why I Picked Manim

Honestly, before this assignment, I’d never really tried any of the scripting workflows on the list. Lua? Ruby 2D? Unity scripting? They all sounded cool but also a bit scary—so I went for something that felt more approachable.

After a bit of research, I learned that **Manim** is a Python library built for creating math animations, explainer videos, and even experimental visual art. Since I know a little Python and there are tons of beginner tutorials out there, it felt like a great place to start my scripting journey.

### How I Got Set Up

The first step was getting Manim running on my laptop. Here’s what I did:

1. Installed Python (if you don’t already have it).
2. Opened the terminal and ran `pip install manim` to install the Manim library.
3. Made a project folder, opened VSCode, and created my first Python file.

Manim uses the command line to render scenes—so instead of hitting “Run,” you type something like
`manim -pql example.py HelloWorld`
and Manim creates an MP4 video of your animation.

### What I Learned from the Tutorial

I followed [this beginner YouTube tutorial](https://www.youtube.com/watch?v=Z5eZnsSAQ6Q) which covered:

- How to make a **Scene** class (like a mini-movie director for your animation)
- Drawing simple shapes (circles, squares, arrows)
- Animating text (writing on, fading out, moving around)
- Changing colors and using scaling/rotation for fun effects

I was amazed how just a few lines of code could create smooth, professional-looking animations.
Here’s my first “Hello, Manim!” scene:

```python
from manim import *

class HelloWorld(Scene):
    def construct(self):
        text = Text("Hello, Manim!").scale(1.5)
        self.play(Write(text))
        self.wait(1)
        self.play(FadeOut(text))
```

When I ran it, a video popped up with the message being written, paused, and then gently fading away.

### Exploring Beyond “Hello World”

Once I got that working, I wanted to experiment a bit:

- I changed the text and font, added color, and played with `.scale()` to make it bigger or smaller.
- I drew a circle, then animated it moving across the screen.
- I even made multiple objects appear one after another.

Example:

```python
from manim import *

class SimpleShapes(Scene):
    def construct(self):
        circle = Circle().set_color(RED).shift(LEFT)
        square = Square().set_color(BLUE).shift(RIGHT)
        text = Text("My first shapes!").scale(1.2).to_edge(UP)
        self.play(Write(text))
        self.play(Create(circle))
        self.play(Create(square))
        self.play(circle.animate.shift(RIGHT * 2), square.animate.shift(LEFT * 2))
        self.wait(1)
```

Every time I edited the code and rendered, I learned a bit more about how animations are layered and how timing works.

### Why I’m Excited About Manim

- **Beginner-friendly:** If you know even a little Python, it’s much less intimidating than learning something like Unity scripting.
- **Visual & instant feedback:** You see your results as a finished video. Even simple code feels rewarding.
- **Creative possibilities:** Manim isn’t just for math teachers! You can use it for generative art, process storytelling, data viz, and much more.
- **Huge community:** There’s a lot of support online, so if you’re stuck, you can usually find a solution.

### How I Could Use Manim in My Own Creative Work

Right away, I started thinking:

- What if I made a “skincare journey” animation showing how someone’s skin changes over time?
- Could I use Manim to visualize data (like the most common skin concerns in a community)?
- For future assignments, I could create animated infographics or abstract visual poems—anything that needs motion and storytelling!

Because it’s Python-based, Manim could also connect with other code: for example, I could use data from a survey or website, then auto-generate animations for a blog.

### Comparing Manim to Other Scripting Languages

**Strengths:**

- Very easy for new programmers, especially if you’ve seen Python before
- Specialized for visuals and animation—what you see is what you get
- Free and open source with lots of tutorials

**Weaknesses:**

- Rendering is a bit slow (it’s not instant like p5.js in the browser)
- Making interactive (real-time) art is trickier; Manim is best for pre-rendered videos
- More complex 3D scenes or video editing features are available, but not as intuitive for a total beginner

Compared to something like Lua or Ruby 2D, Manim’s combination of readable Python code, documentation, and video output makes it a super easy entry point.

### Scripting vs Compiled Languages: What I Noticed

- **Scripting languages (like Python):**

  - Easier to learn and read
  - Fast to prototype, great for experimenting and “just making things work”
  - Perfect for creative coding, animation, and small tools

- **Compiled languages (like C++, Rust):**

  - Much faster performance, can handle huge or complex apps
  - Better for hardware-level control or professional-grade software
  - More difficult to learn, and code-test cycle is slower

For creative coding, I’d pick scripting languages every time—they let you focus on ideas, not low-level details.

### Wrapping Up

Even as a total beginner, I made my own Manim animations and learned how scripts can bring creative ideas to life. Manim gave me the power to build, edit, and watch my art in action—all from a few lines of code.
