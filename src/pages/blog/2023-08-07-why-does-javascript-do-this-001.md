---
templateKey: blog-post
title: "Why Does JavaScript Do This?! #001"
date: 2023-08-06T22:51:53.420Z
description: >-
  Today we're taking a look at the following:


  c﻿onsole.log("3" + "3" - "3")


  As simple as this seems, it might be tricky. Take a minute to think about it... No cheating and running it in the console yet. What's the answer?
featuredpost: true
featuredimage: /img/why-does-js-do-this.jpg
---
Today we're taking a look at the following:

<div class="code-block">
<code>
c﻿onsole.log("3" + "3" - "3")
</code>
</div>

\
As simple as this seems, it might be tricky. Take a minute to think about it... No cheating and running it in the console yet. What's the answer? 

L﻿et's break it down.

First we've got the string 3, plus the string 3.

<div class="code-block">
<code>
"3" + "3"
</code>
</div>

\
In JavaScript, '+' is the addition operator as well as the concatenation operator. Since it sees that these are strings (and not numbers, since they have quotes around them), it will concatenate the two strings, giving us...

<div class="code-block">
<code>
"33"
</code>
</div>

\
Moving on, we now have the following:

<div class="code-block">
<code>
"33" - "3" 
</code>
</div>

\
T﻿he '-' sign is ONLY a math operator and since we can't (subconcatenate?) JavaScript will try to coerce the values to numbers, which in this case is successful and gives us...

<div class="code-block">
<code>
33 - 3
</code>
</div>

\
F﻿rom there it's a simple math operation and thus when you try to console.log("3" + "3" - "3"), the result will be the number 30.

C﻿heck out the video here - https://youtube.com/shorts/lMutpIV4mtg?feature=share