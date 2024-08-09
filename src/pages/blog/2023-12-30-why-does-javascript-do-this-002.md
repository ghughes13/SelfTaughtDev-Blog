---
templateKey: blog-post
title: "Why Does JavaScript Do This!? #002"
date: 2023-12-30T18:21:02.090Z
description: In JavaScript, if you try to compare `NaN === NaN`, you get False.
  What?! Why? That doesn't make since does it??
featuredpost: true
featuredimage: /img/why-does-js-do-this.jpg
---
In JavaScript this

<div class="code-block">
<code>N﻿aN === NaN</code></div>

a﻿nd this 

<div class="code-block">
<code> N﻿aN == NaN</code>
</div>
are false...

W﻿ait what? If both of those are false... then how can we tell if something is NaN? Well there's two ways.

T﻿he first is with the \`Math.isNaN()\` method. This one's kind of like a '==='. It's only going to return true if you literally pass it the 'NaN' value. If you pass in a string, boolean, or number it will return False.

T﻿he second is with just the isNaN() method. This one is a little looser and more like a '=='. This will coerce values and tell if you it is NaN or not. If you pass in the string 'hi', it will try to convert it to a number, realize that it's NaN, and return true. 

S﻿ee the full video here - https://youtube.com/shorts/JjxP1c1tj24?si=iHRKLMBq5WYMNT3G
