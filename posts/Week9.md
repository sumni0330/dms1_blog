---
title: Week9
published_at: 2025-11-04
snippet: An week9 of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 9A

# Brainstorming My AT3 with 3 Local AIs 😮‍💨🤖

For this post, I wanted to do something a bit geeky but honestly kind of fun—I ran three different AI models (locally on my laptop!) and had a brainstorming session with each one for my AT3 project. I used Ollama to download Llama-3, Mistral, and Zephyr, all from different places. Here’s how it went!

---

## 1. Who did I talk to? (The AI Crew)

- **Llama-3** (by Meta)
- **Mistral-7B** (by Mistral AI)
- **Zephyr** (by Huggingface/open community)

All running locally—no cloud, no waiting. Pretty cool, right?

---

## 2. What did I ask them?

I kept it simple for each AI:

1. What are the domain, repertoire, and values of a community I care about? (Mostly thinking K-skincare or creative coding stuff)
2. Can you suggest any fun or creative ways I could use code to interact with that community?
3. If I actually tried to build that—what would be the best tech stack or way to deploy it?

---

## 3. The AI Conversations

### 🦙 Llama-3 says:

- **Domain?** K-beauty, skincare, routines, healthy skin.
- **Repertoire?** Product reviews, sharing routines, Q&As, lots of before/after pics.
- **Values?** Honesty, helpfulness, trust, community vibes.

**Cool ideas:**

- Make an interactive “skin map” where people tag their trouble spots and share stories.
- Code a chatbot that dishes out routine suggestions from real data.
- Visualize common skin concerns with colorful, artsy charts.

**Tech tips:**

- Go with React or Next.js for web stuff.
- Use p5.js or D3.js for data viz.
- Store user stuff on Firebase or Supabase.
- Deploy on Netlify or Vercel, so it’s easy and cheap.

---

### 🌊 Mistral-7B’s take:

- **Domain:** Sharing practical skincare, always up on K-beauty trends.
- **Repertoire:** Q&A, product testing, voting, community feedback.
- **Values:** Openness, creative experiments, global sharing.

**Fun ideas:**

- Crowd-sourced “heatmap” of skin issues.
- AI-powered routine generator.
- A simple forum where folks can swap and rate home remedies.

**Stack tips:**

- MERN stack (Mongo, Express, React, Node)
- Visuals with Chart.js or p5.js
- Deploy on Railway or Render

---

### ☁️ Zephyr’s thoughts:

- **Domain:** Beauty, wellness, and peer advice—digital community style!
- **Repertoire:** Interactive guides, real-time Q&As, collaborative stories.
- **Values:** Inclusivity, kindness, respecting data.

**Ideas:**

- Let users make their own face avatar and annotate it.
- Real-time “skin diary” everyone can update together.
- Even a live coding workshop for data viz!

**Stack ideas:**

- SvelteKit or Vue for the site.
- Use open APIs for data.
- Host on Netlify or Cloudflare Pages.

---

## 4. So… which AI was best?

All of them had their own style!

- **Llama-3** was the practical planner, very solid, businesslike, but still creative.
- **Mistral** threw out the most playful ideas, very “community” focused.
- **Zephyr** was super warm and people-centered, really pushing for collaboration.

I actually liked how some of the ideas overlapped—like making a skin diary, or those interactive maps. And honestly, just chatting with these AIs made me feel a little less stuck. Each one had a different “personality” and it felt like a real brainstorming session, just without the awkward silences.

---

## 5. Final Thoughts

Trying out three different AIs on my own laptop was way easier than I thought, and they really did help me come up with some new project ideas. For AT3, I’m now even more excited to build something interactive and data-driven, maybe with a skin map or some kind of live diary. And next time I’m feeling stuck, I might just “call a friend”—except the friend is actually three little robots living in my laptop.

_If you want to try this yourself, Ollama and LM Studio make it super simple to run these models at home!_

# Making a Looping Gif in Processing: My Own Twist

## Getting Started

I wanted to make a looping animation gif using Processing, but when I checked the bleuje tutorial, the link was down. So I decided to piece together what I’d learned from other Processing resources and open code examples.

First, I set up Processing and installed the GifAnimation library, which lets you export animations as gifs. You can add this library directly from Processing through the menu: Sketch → Import Library... → Add Library..., then search for “gifAnimation.”

## My Idea

For this project, I wanted to create a soft, wavy circle that loops smoothly. I used Perlin Noise to generate an organic, “alive” feeling, and I made sure the animation would seamlessly repeat.

Here’s my code. You can copy and paste this into Processing (the Java version) and run it right away, as long as the GifAnimation library is installed. This will generate a looping gif called `looped_wave.gif`.

```js
import gifAnimation.*;

GifMaker gifExport;
int totalFrames = 60;
int currentFrame = 0;

void setup() {
  size(500, 500);
  gifExport = new GifMaker(this, "looped_wave.gif");
  gifExport.setRepeat(0);
  gifExport.setDelay(33);
}

void draw() {
  background(250, 245, 230);

  translate(width/2, height/2);
  stroke(70, 130, 180);
  strokeWeight(5);
  noFill();

  beginShape();
  for (int i = 0; i < 100; i++) {
    float angle = TWO_PI * i / 100.0;
    float loopPhase = map(currentFrame, 0, totalFrames, 0, 1);
    float r = 120 + 40 * noise(cos(angle)*2 + loopPhase*2, sin(angle)*2 + loopPhase*2);
    vertex(r * cos(angle), r * sin(angle));
  }
  endShape(CLOSE);

  gifExport.addFrame();
  currentFrame++;
  if (currentFrame == totalFrames) {
    gifExport.finish();
    println("GIF export complete!");
    noLoop();
  }
}
```

## What I Learned

Trying to make a seamless loop was really interesting. Using trigonometric functions with Perlin Noise helps everything wrap around smoothly, so the first and last frames connect perfectly. It was also fun to experiment with colors – I used an ivory background and a calm blue for the circle to keep things friendly and modern.

## My Reflections and Questions

I found that getting a smooth, natural motion with Perlin Noise takes some tweaking, but once it works, it feels kind of magical. One question I still have is how to export a gif directly from p5.js. Right now, I used a screen recorder, but I wonder if there is an easy way to export gifs with code only, especially if I want to automate it or make lots of variations.

## Wrapping Up

Even though the original tutorial wasn’t available, working through the process myself taught me a lot about creative loops and noise in p5.js. I liked how simple code can make such an organic effect. If anyone knows a better gif export method, let me know – I’d love to try it out!

# This is 9B

## Exploring Blender Geometry Nodes as a Graphical Programming Language

### Why I Chose Blender Geometry Nodes

I decided to dive into Blender Geometry Nodes for this blog because it's the graphical programming language I'm most interested in. I actually started this unit with Blender, and it's by far the GPL I'm most comfortable with. Blender's node system feels intuitive and visual, and it’s directly connected to 3D art and design, which is what I want to explore more deeply.

Another big reason is that I love the creative freedom it offers: you can go from a blank canvas to totally wild, procedural results, all without writing a single line of code. Since my creative practice is rooted in generative art, animation, and experimental workflows, Geometry Nodes feels like the perfect tool for pushing those ideas further.

## The Tutorial Series I Followed

To really get the hang of Geometry Nodes, I followed the [Erindale Geometry Nodes Fundamentals](https://www.youtube.com/playlist?list=PLFtLHTHhQa1wqyJb0luiK2YuQPDvJh0fd) playlist on YouTube. The series starts with the basics—how to add a Geometry Nodes modifier, how data flows between nodes, what attributes are, and how to use fields. I especially liked the chapters that show how to scatter objects on surfaces, procedurally generate patterns, and use noise or math functions for randomness.

After a few episodes, I was able to make basic parametric objects, procedural arrays, and even an animated “growing vine” mesh just by connecting nodes and tweaking parameters. Seeing geometry update in real-time while dragging sliders is honestly so satisfying!

## My Demo Patch

To demonstrate what I learned, I created a simple patch that scatters spheres over a plane and animates their scale based on a noise field. The basic node graph uses:

- a grid mesh as the base geometry,
- a “Point Distribute” node to scatter points,
- a “Point Instance” node to add spheres,
- a “Noise Texture” node to control scale, and
- a “Map Range” node to turn the noise value into something that looks good for scale.

I animated the noise “W” input to make all the spheres pulse and move organically. This project might sound simple, but setting it up taught me how Geometry Nodes handles data, how to combine nodes for randomness and repetition, and how animation can be procedural!

## How I Might Use Blender Geometry Nodes in My Creative Practice

My main interest is using generative processes to create 3D art and interactive environments. Geometry Nodes lets me create forms that would be really hard (or impossible) to model by hand, especially when I want to add randomness, chaos, or controlled variations.

In the future, I’d like to use Geometry Nodes for:

- Making generative sculptures or assets for game engines
- Creating procedural animations and looping GIFs
- Prototyping environments for VR/AR
- Rapidly iterating design ideas with parametric controls

Since Blender can export meshes, textures, and even animations, I see Geometry Nodes as an essential bridge between code, art, and real-time workflows.

## Strengths & Weaknesses of Blender Geometry Nodes vs Other GPLs

Strengths:

- Tight integration with Blender’s 3D environment and rendering pipeline
- Extremely visual and intuitive, especially for artists and designers
- Real-time feedback—change a value, see it update instantly
- Growing community and tons of open-source examples/tutorials

Weaknesses:

- Some complex logic is harder to represent visually than in code
- For certain effects (like advanced simulations), nodes can get messy and hard to debug
- Scripting (Python) sometimes needed for automation or very advanced setups
- As of now, not every modifier or feature in Blender is available via Geometry Nodes

Compared to other GPLs like TouchDesigner or Unity Visual Scripting, Blender Geometry Nodes feels more focused on shape, mesh, and surface logic than real-time interaction or audio/visual programming. But for geometry and procedural modeling, it's incredibly powerful.

## Strengths & Weaknesses of GPLs vs Text-Based Scripting

Graphical Programming Languages (GPLs) make programming accessible for visual thinkers and artists. It’s easier to learn and experiment by dragging, connecting, and visually inspecting data flow—perfect for exploring creative ideas quickly.

However, text-based scripting languages (like Python or JavaScript) are better for:

- Expressing complex logic and algorithms
- Automation and large projects
- Code versioning and reusability

GPLs can become cluttered when the project scales up. Some logic just gets awkward in node graphs. Still, for rapid prototyping and creative flow, GPLs feel freeing, fun, and incredibly satisfying—especially when you just want to “see what happens” and discover new forms as you work.

## Wrapping Up

Learning Blender Geometry Nodes has been really inspiring. I love how quickly you can go from an idea to a visual result, and how the patch-based logic opens up new ways of thinking about form, pattern, and animation. I plan to keep exploring this workflow, and maybe even combine it with code for more advanced projects. If anyone has tips or favorite node setups, let me know!
