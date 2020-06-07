---
title: Removing FOUC in a Netlify-deployed Gatsby Project
date: "2020-06-07"
description: "Fixing that flicker of unstyled content"
---

While deploying this blog to Netlify for the first time, I realized that on refresh of my hosted page, I'd experience a flicker of unstyled content. Here were a couple of steps that I took to fix this.

1. I discovered that had not imported the gatsby-styled-components plugin. I had only imported styled components.

After I installed the necessary packages and updated by `gatsby-config.js` file, I was still seeing a flicker of unstyled fonts.

After a little poking around, I discovered that this was due to the gatsby-webfont loader.

After following recommendations in this thread, I decided to import the typefaces instead. I required both of the fonts in my Layout file.

This fixed the problem.
