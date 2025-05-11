---
title: Week5
published_at: 2025-11-04
snippet: An week 5 of a blog post.
disable_html_sanitization: true
allow_math: true
---

# This is 5A

# Post-Digital Art Analysis: Looking at Makoto Aida's Work

## Hello!

I was given an assignment to write a blog post about a post-digital artist. To be honest, I didn't even know what post-digital meant, so I had to look through class materials and search the internet. That's when I discovered this Japanese artist named Makoto Aida and his work "Ash Color Mountains," which was so impressive that I decided to write about it!

## Makoto Aida's "Ash Color Mountains"

When I first saw this painting, I thought it was just some foggy mountain landscape. But when I looked closely... wait, what? It was all people! Office workers in suits piled up like garbage in mountains... it was kind of shocking, but I couldn't stop looking at it.

I read about this work online, and apparently Aida created it to criticize modern corporate culture and how humans are treated like disposable products. It's meticulously hand-painted, but from a distance, it looks almost like a computer desktop wallpaper.

## Why is this "Post-Digital"?

To be honest, I wasn't sure what the term "post-digital" meant, so I looked up Florian Cramer's text from our class materials. It was difficult to read, but from what I understand, post-digital refers to when the illusion of digital technology is broken, and we become interested in analog things again.

I think Aida's work is post-digital because:

1. **It's hand-painted but criticizes the digital age**: He used traditional methods instead of cutting-edge technology, but the content criticizes modern digital society. This kind of irony seems very post-digital.

2. **It looks digital from far away, analog up close**: From a distance, it looks like a digital image, but up close, you can see the hand-painted people. The boundary between digital and analog becomes blurry.

3. **It's skeptical about technological progress**: This work seems to question whether technological advancement really makes us happy.

These characteristics seem to match the concept of post-digital. To be honest, I still don't fully understand it...

## What Technology Was Used to Create It?

Aida's work seems to be made mostly with traditional materials
Acrylic paint on canvas, Brushes, Photo references..

He probably only used digital technology in the planning stages. But I'm not an expert, so I can't be sure!

## If You Made a Similar Work with JavaScript?

I just started learning coding, so I don't know much about JavaScript libraries, but I found these online:

1. **Three.js**: Apparently this is a library for creating 3D effects. You could probably use it to make mountains and then show people when you zoom in.

2. **p5.js**: This is a graphics library, and you might be able to use it to create lots of human shapes.

3. **Matter.js**: This is a physics library, which could help make the people stack naturally.

4. **Tone.js**: This is a sound library. You could add sound effects to the artwork.

Umm... honestly, I've only seen the names of these libraries and have no idea how to use them. I hope to learn someday and create something myself!

## Poem Made with RiTa.js

The assignment asked us to use something called RiTa.js, which I found out is a library that automatically generates text. I found an example online and modified it a bit to create a poem about Aida's work:

```
Ash Color Mountains
A response to Makoto Aida's work

A mountain of business transforms under a digital sky.
Human dissolves into panorama inside digital structure.
Corporate transforms while vistas Digital workers.
A digital ash of office figures.

The terrain of disposal pixelates under a virtual expanse.
Person crumbles into gray throughout digital wasteland.
Salary disintegrates while summits Digital employees.
A virtual peak of redundant salarymen.

The vista of worker fades under a corporate cloud.
Worker transforms into mist within digital landscape.
Productivity distorts while horizons Digital bodies.
A digital slope of burnout figures.
```

I don't really know how to write the code... I just modified an example I found online. But I'm proud that it created an interesting poem!

## Conclusion

As a beginner who doesn't really understand the post-digital concept or coding, I was a bit afraid to write this post. It's hard to understand complex art concepts, and I only know the names of coding libraries, not how to actually use them.

Still, through Aida's work, I learned that art isn't just about making pretty pictures but can include criticism and reflection on our society. I hope to learn coding more seriously so that someday I can create meaningful digital artwork like this!

You should definitely search for Makoto Aida's work! It's really impressive~

# This is 5A

# Implementing Three.js Camera Array and Exploring Digital Glitch Aesthetics

## My Three.js Adventure as a Coding Beginner

Hello everyone! As someone who's just started learning coding, I was super intimidated when our assignment asked us to implement a Three.js example directly in our blog. I chose the "camera array" example from the Three.js website (the one with red cups rotating on a blue background) because it looked cool but not too complicated.

## Getting the Three.js Example Working

Let me be honest - this was a struggle! I had no idea what I was doing at first. After some research, I discovered I needed to include several JavaScript files to make this work.

Here's what I learned about setting this up:

```html
<!-- First, I needed to include the main Three.js library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

<!-- Then I needed these extra controls -->
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<!-- I also discovered I needed this helper for loading the 3D models -->
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js"></script>
```

After including these files, I tried to follow the camera array example code from Three.js. I'm not going to pretend I understood everything, but I did figure out that it creates a grid of red cups (or cylinders) and then sets up multiple camera views of them.

The hardest part was figuring out how to use these CDN links correctly. Some of them didn't work at first because the versions weren't compatible! I had to make sure all the Three.js versions matched.

## Sabato Visconti's Glitch Art

After struggling with the Three.js implementation, I looked at Sabato Visconti's glitch art piece. It's a flower that seems to be glitching out in 3D space, and honestly, it felt like I was looking at what happened when my code didn't work properly! 😅

### Aesthetic Register and Effective Complexity

This glitched 3D flower does something really interesting with its aesthetic register. If I understand correctly from our readings on Ngai's aesthetic categories, this seems to shift between:

- The **beautiful** (the flower in its original form)
- The **interesting** (the way it breaks apart makes you wonder how it was made)
- The **zany** (there's something energetic and almost chaotic about how it moves)

What's fascinating is how it creates what our readings called "effective complexity" - that sweet spot between total order and complete chaos. Parts of the flower still look like a flower (order), but other parts break apart into digital fragments (chaos). This balance makes it visually captivating - not so orderly that it's boring, and not so chaotic that it's just noise.

As a beginner, I'm amazed how something "broken" can actually be aesthetically pleasing. It's like the digital equivalent of finding beauty in a cracked ceramic vase!

### How Does it Work? (My Beginner's Guess)

I have no idea how Visconti actually created this, but based on what we've learned in class, here's my guess. It might start with a 3D model of a flower. Then perhaps some data in the 3D file gets corrupted on purpose - maybe by opening the file in a text editor and changing some numbers? Or maybe it's done by manipulating the texture coordinates so parts of the image map to the wrong places. It could also be using something called "vertex displacement" where the points that make up the 3D model get moved in glitchy ways

Again, I'm just guessing here! But I think what makes it interesting is that it's not just a 2D image being distorted - the actual 3D structure seems to be falling apart, which creates that unique spatial glitch effect.

## Bonus Round: Adding My Own Glitch to the Three.js Example

Inspired by Visconti's work and what we learned in session 4b, I tried to add some glitch effects to my Three.js camera array example. Since I'm a beginner, I kept it simple:

1. I added random disruptions to the positions of some cylinders
2. I occasionally flip the colors of the cylinders from red to blue (and the background from blue to red)
3. I made some of the cylinders suddenly grow or shrink at random intervals

To be honest, the results aren't as artistic as Visconti's work, but it was exciting to see how even simple disruptions can create interesting visual effects. The ordered grid of cylinders becomes something more unpredictable and alive.

What I find most interesting about adding these glitches is how it transforms something rigid and perfect (the mathematically precise 3D cylinders) into something that feels more organic and unpredictable - almost like the digital world is breaking down into something more natural.

## Final Thoughts

As a coding beginner, this assignment was really challenging but also eye-opening. I never thought I'd be implementing 3D graphics or thinking about the aesthetics of digital glitches when I first started learning to code!

I'm starting to see that coding isn't just about making things work perfectly - there can be artistic value in the imperfections and disruptions too. Maybe that's what post-digital art is partly about: finding the humanity in the breakdown of digital perfection.

Now if only I could get my Three.js example to work consistently... 😅​​​​​​​​​​​​​​​​
