---
templateKey: blog-post
title: How To Disable Secure Boot Mode
date: 2024-08-20T00:19:33.975Z
description: "In this entry we go over how to disable secure boot mode on your
  computer. One of my most popular videos in blog form. "
featuredpost: true
featuredimage: /img/screenshot-2024-08-19-192511.png
---
Once upon a time I wanted to dual boot Kali Linux and Windows (Don't ask me why. I was young and naive.), but to do that I needed to disable secure boot mode. Here's how to do it:

**1.** The first thing we need to do is access the BIOS menu. 

Method 1: \
- Restart your computer\
- To get to the BIOS menu, as soon as your manufacturers logo appears on screen you need to press the designated BIOS key. You can google what your manufacturers designated bios key is, but if you can't find it, it is usually one of these: 'F2', 'DEL', 'F12', 'ESC', or 'F10'. You really only need to press the key right as the manufacturers logo comes on, but I sometimes miss, so I prefer to just SPAM the correct key after my computer starts to restart. 

Method 2:\
- Assuming you have windows 11, you can go to settings -> system -> recovery and click "Restart Now" by the Advance Startup options. \
- This will get us to the advanced options menu (Should be a blue screen with options on it). From here go to "Troubleshoot" -> "Advanced Options" -> "UEFI Firmware Settings" and this will load the BIOS menu. 

**2.** Depending on your manufacturer, your BIOS could have varying layouts. For my computer, 'Secure Boot' is under security settings, so look for something related to that. Once you find it, you simply need to press enter on the option, change it from 'Enabled' to 'Disabled' and press whatever key allows you to save and exit (For me it's F10). 

**3.** From here your computer should restart with secure boot mode disabled. Congrats!

Here's the video if you somehow landed on the blog and prefer video format: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/brXcxmdWU9Q?si=HI7jFsy6ZqKaaOmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>