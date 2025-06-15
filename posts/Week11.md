---
title: Week11
published_at: 2025-11-04
snippet: An week11 of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 11A

# AT3 Project Plan: K-Skincare Collective Face Map

## Community Domain, Repertoire, and Values

**Domain:**  
The global K-skincare (K-beauty) community, focusing especially on people navigating K-skincare in Australia.

**Repertoire:**

- Sharing product reviews and skin concerns
- Group buying and community tips
- Translating instructions, ingredient lists, and troubleshooting routines
- Visual mapping of skin issues (collective, data-driven)

**Values:**

- Inclusivity and peer support
- Trust and honesty (against counterfeits and misinformation)
- Cultural/linguistic accessibility (Korean/English)
- Creative, participatory problem-solving
- Empathy for diverse skin types and environments

---

## Code Explanation

I’m building a **real-time collaborative face map** using JavaScript (vanilla JS + WebSockets + Node.js backend).  
Each “user” (tab) submits a skin concern (e.g., "cheek redness", "forehead acne") for a specific face region, language, and environment (dry, humid, etc).  
Every submission appears as a sticker on an illustrated face, in a random position within the region—live-updated for everyone.  
Stickers also show:

- environment tags
- influencer tips (randomly assigned)
- a button to “join group buy” (increments counter, live)
- a simple mock translation popup

The UI includes a sidebar with community tips and FAQ cards.

---

## Practical Description / How It Works

- I run the WebSocket server locally (Node.js with `ws`)
- I open multiple browser tabs as “different users” (since this is a solo simulation)
- Each tab can submit a skin concern, picking the area, language, and environmental context
- When anyone adds a concern or joins a group buy, all tabs update instantly—capturing the feeling of real-time collective knowledge
- The stickers visually and interactively represent shared pain points, cultural challenges, and community-based solutions, inspired by real research and interviews

---

## Haiku

Click, type, share a thought  
On this virtual face, we meet  
Healing in pixels

---

**This plan blends real-world research, playful creative coding, and the “mycelial” spirit of connection found in online K-skincare communities.**

# This is 11B

# Understanding Communities of Practice through My K-Skincare Project

## What is a Community of Practice?

A Community of Practice (CoP) is more than just a group of people with a shared interest. It's a living network where people learn together by doing, exchanging, and building on each other's experiences.

### Domain

The domain is what brings the community together—a shared topic or passion.  
For my project, the domain is “K-skincare,” especially how fans of Korean skincare connect, share, and solve problems together—whether they’re in Korea, Australia, or anywhere else.

### Repertoire

Repertoire is the set of shared tools, stories, routines, techniques, and language that the community develops over time.  
In the K-skincare world, this includes favorite routines, product reviews, tips for different climates, troubleshooting guides, memes, hashtags, and even DIY hacks.

### Values

Values are the principles or beliefs that hold the community together.  
For my CoP, these are trust (no fakes!), honesty, inclusivity, a willingness to help newbies, and creativity in adapting routines to different needs and environments.

### Brokering

Brokering is the process of connecting different communities or “translating” knowledge between them.  
For example, when someone explains Korean product instructions to English-speaking users or shares tips from Australian skincare communities in a K-beauty group, they’re acting as a broker—helping knowledge flow between different worlds.

---

## Mycelial Creativity in Communities

When I think about mycelial creativity, I imagine a network of roots (hyphae) spreading in all directions—constantly growing, connecting, and exchanging nutrients.  
This is exactly how a healthy Community of Practice works: everyone is a node, and the more connections, the more creative potential.

### Omnidirectional Growth

Ideas and advice don’t just flow top-down; they move in all directions.  
A new user can teach a pro something unexpected, and inspiration can come from anywhere.  
In my project, every sticker/concern added to the face map is another “hypha” branching out and enriching the network.

### Accumulative Growth

As more people join and share, the community’s knowledge deepens and becomes more diverse.  
Our “face map” gets busier, smarter, and more useful with every new concern, tip, or translation added.

### Transformational Growth

Sometimes, a community doesn’t just get bigger—it changes form.  
Maybe the group bands together to launch a group-buy, start a new forum, or co-create a guidebook.  
My project could even evolve into a full-fledged tool for real-time, crowdsourced skincare problem-solving.

### Fruiting Body

In nature, the fruiting body is the visible part of the fungus (like a mushroom)—the result of all that hidden network activity.  
In a CoP, the “fruits” are visible outputs: a helpful infographic, a group-buy event, or a new feature on our face map.  
For my AT3, the interactive map and all its real-time stickers are like the mushroom that pops up from the creative underground.

---

## Wrapping Up

Communities of Practice aren’t just about sharing—they’re about growing, transforming, and creating new “fruits” together.  
Mycelial creativity gives us a perfect metaphor for how ideas, support, and innovation can spread across even the most unexpected networks.  
Whether it’s skincare, coding, or something else, the connections we nurture make the community—and our projects—stronger and richer.
