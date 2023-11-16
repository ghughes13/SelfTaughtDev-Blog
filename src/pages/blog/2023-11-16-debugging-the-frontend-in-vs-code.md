---
templateKey: blog-post
title: Debugging The Frontend In VS Code
date: 2023-11-16T20:57:33.272Z
description: In this post we're going over some tips and tricks to make you more
  efficient in VS Code, as well as cover how to actually debug in VS Code.
featuredpost: true
featuredimage: /img/win_20231105_13_27_30_pro.png
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/w7_iMQ_sdZI?si=hVWFzicHVTfbKqX6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Keyboard Shortcuts

Useful Keyboard Shortcuts Above The Standard Copy/Paste/Cut

![](/img/screenshot-2023-11-16-150212.png)



The debugger in chrome and being able to add break points is great, but it’s even better being able to do it in VS Code. To do this:

1. Open the debugger in VS Code.
2. Click "Run and Debug".
3. Click ‘Web App (Chrome). This should setup a launch.json file. 
4. You need to change the 'URL' and 'webroot' to match the URL your app runs on, and the root of your app. Save your changes.
5. While the app is running, Go to the debugger, select ‘Launch Chrome’, and press play. 
6. You can now add breakpoints to your code in vs code.

## Useful Extensions

1. Prettier Typescript Errors - Formats typescript errors in a more readable way
2. Git History - Shows git history, who changed the line last, what the file looked like before, ect
3. Github Copilot - An incredibly useful coding companion
4. Code Spell Checker - Points out spelling mistakes in your code
5. Docker - Easily manage your docker info from VSCode