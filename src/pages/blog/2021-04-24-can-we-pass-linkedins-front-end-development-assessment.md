---
templateKey: blog-post
title: Can We Pass Linkedin's Front End Development Assessment?!
date: 2021-04-23T14:05:49.637Z
description: What's up Devs! Last weekend I noticed LinkedIn had added a few new
  "Front-end Development Assessment" so obviously I had to record a video while
  I took it. In this post we'll go over the questions in the assessment in a
  little more detail, so without further ado...
featuredpost: true
featuredimage: /img/win_20210423_07_44_56_pro.jpg
tags:
  - LinkedIn Assessment
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/XqRTs19HezE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

What's up Devs! Last weekend I noticed LinkedIn had added a few new "Front-end Development Assessment" so obviously I had to record a video while I took it. In this post we'll go over the questions in the assessment in a little more detail, so without further ado...

<h5 class="large-p">1. Which image matches the flex layout defined in this style rule?  </h5>

<div class="code-block">
<code>
.container { 
   display: flex; 
}
</code>
<br/>
<code>
.container div:last-child {
margin-left: auto;
}
</code>
</div>

With no other styles, <code>display: flex</code> will display its child elements in a row, in the top left of the container. With the second style we're selecting the last child and giving it <code>margin-left: auto</code>. This tells the browser to auto calculate the elements left margin, which pushes it all the way to the right of the container. I made an example you can play with here: <https://codepen.io/ghughes13/pen/JjEwgvo>

<h5>2. Variables Declared with the <code>let</code> keyword have what type of scope?</h5>

There's not a lot to this one. Variables declared with <code>let</code> have block scope. 

<h5> 3. When might an empty alt attribute be the correct value?</h5>

It's important to have alt attributes on your img elements to assist people using screen readers. The only time you don't need an alt attribute is when the image is purely decorative (like a background image).

<h5> 4. Which HTML element is not considered a landmark element? </h5>

Landmark elements (Like footer, nav, aside, main, ect) are elements that can help assistive technology users understand your site better. Of the choices they gave, form, ul, main, and nav, ul was the element that was not a landmark element. 

<h5> 5. Which description correctly describes the initial values of flex items if the only thing you have done is apply display: flex to their parent?</h5> 

<code>display: flex</code>, used alone, will display its child elements in a row in the top left of it's container. Covered this in the first question, so gonna leave it at that.    

<h5> 6. Which HTML element represents either a scalar value within a known range or a fractional value?</h5>

  This is one of the questions I would have had to blindly guess on. I'd never seen elements like that before, but now that I've seen them, they'll probably be what I default to if I ever need to make a loading bar that moves to indicate how much has loaded. Hard to describe it aside from that so I'll just link to the [meter element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)

<h5> 7. Which line of code, if applied to all flex items in a flex container, would cause each flex item to take up an equal share of the total width of the container? For example, if there are four items, they would get 25% of each. </h5>

I don't use flex shorthand (or flex grow/shrink/basis) a lot, but when I test this questions answers in codepen, A, C, and D all work. So if you know what's going on with that/what the right answer is, send me an email or let me know in discord!

<h5> 8. What is the correct way to initialize an array of galaxies in JavaScript? </h5>

So...the correct answer was probably <code>galaxies = \["Milky Way", "Whirlpool", "Andromeda"]</code> BUT it's bad practice because it declares it in the global scope. 

<h5> 9. How many columns will there be, given this code?</h5> 

<code>.container { width: 600px; column-width: 200px; column-gap: 50px; }</code>

This one's just simple math. If the max width is 600px and column width is 200px, you can fit 3, but you need room for the column gap so you have to drop down to 2 columns.

<h5> 10. Which style will change the color of the text?</h5>

<code>cite { color: cyan; } </code> (aside from the bad formatting) this one's just basic css.

<h5> 11. Which choice is not a value of the type attribute of the input element?</h5>  

Again, one that's pretty straightforward. "Address" is the only choice that's not a valid type attribute for inputs.

<h5> 12. A video on your web page does not display, and the console shows an error about mixed content. What is happening?</h5> 

Mixed content is a warning you'll get when you're trying to use an image/video/font/ect with http in its url while you're on an https site. This can lead to security vulnerabilities, so you want to make sure everything's using https. So the answer was:

*The page is loaded via HTTPS, but the video is being served insecurely as HTTP and the browser is blocking it.*

<h5>13. You find this code in a stylesheet. What is it being used for?</h5>  

<code>.cf::after { content: ""; display: block; clear: both; }</code>

This one I'm not too sure on, and it's probably the one I got wrong. \
\
**A** doesn't seem correct because "inserting content that cannot be seen by screen readers" is more of a side effect. It wouldn't be the purpose of this code because why would you want to add content for the explicit purpose of inserting content screen readers cant see?

**B** Fixing an internet Explorer 11 bug doesn't seem correct either because there's nothing explicitly saying this style should only be applied on IE11.

**C** Doesn't make much since so **D** is the only one that might be correct.  

<h5>14. Which choice is not part of the CSS box model?</h5> 

Paragraph.   

<h5> 15. Which statement is true when an HTML tab had been deprecated?</h5>

It is obsolete and it is not recommended for use in marking web content. 

\-------------------

So that was my experience with Linkedin's Front-end Development Assessment. If you have any comments/questions feel free to reach out! I'll see you in the next one.