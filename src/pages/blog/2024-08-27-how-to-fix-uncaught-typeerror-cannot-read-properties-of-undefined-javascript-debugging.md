---
templateKey: blog-post
title: "How To Fix 'Uncaught TypeError: Cannot read properties of undefined'"
date: 2024-08-27T16:18:16.438Z
description: "In this post we'll be going over how to fix one of the most common
  errors in JavaScript: 'cannot read properties of undefined'."
featuredpost: true
featuredimage: /img/win_20220605_16_23_05_pro.jpg
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/UZINZNWAE8Y?si=XHUqCsLC21jdstwE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

\==============

What's up Devs. Today we're going over how to fix one of the more common errors you'll run into in JavaScript: "cannot read property of undefined". First let's look at some code.

<div class="code-block">
<code>
const person = {
   name: "Garrett",
   age: 30,\
   location: "Dallas"
}
</code>
</div>

\-

Let's say you have a person (object) like the one above. We can access it's name property `person.name` , we could access it's age property `person.age`, and we could even access it's location property `person.location`, but what happens if we try to access something that doesn't exist on the object? 

Maybe this is the response from an API request and typically person comes back with a `favorites` property that has a bunch of their favorite things (color, food, ect). Then in our code we try to access their favorite food. 

<div class="code-block">
<code>
//Pretend we've made an API request and have the above person object in scope\
const favoriteFood = person.favorites.food;
</code>
</div>

\-

What happens when we try to access the food property on favorites? You get the error we're talking about (Or at least the "Cannot read properties of undefined" part. The second half complains about the property we're trying to access (aka `food`)).

Now, why does this happen? At the first level we've got our person object. If we just try to access `person.favorites`, everything is fine. Since our person object doesn't have a `favorites` property, `person.favorites` returns `undefined` (The value used in JavaScript to indicate something hasn't been initialized. Aka a variable hasn't been declared with this name or in our case a property.) 

BUT when we try to access the `food` property, we're trying to access a property on `undefined`. Since `undefined` is not an object, we can't access properties on it, eg. we '`cannot read properties of undefined`' `(reading food)` <-food being the property we're trying to access.

Make since? Hope so. Now how do we fix/avoid this issue? We could simply use optional chaining.

\*Typescript is definitely worth mentioning here. If implemented properly it helps catch these issues before they even happen.

<div class="code-block">
<code>
const favoriteFood = person.favorites?.food;
</code>
</div>

\-

By adding the optional chaining character \`?\` `favoriteFood` would resolve to `undefined` allowing us to easily bypass the issue. You would probably want to add a check after this the handle `favoriteFood` being undefined, but this is the easiest solution. 

Hope this helps explain the issue and helps get you unstuck! 

\-Garrett H