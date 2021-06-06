---
templateKey: blog-post
title: Where To Host Your Developer Projects For Free
date: 2021-06-06T21:45:25.055Z
description: "Whether you're trying to find your first developer job and don't
  want to pay to host your portfolio, or just need a place to build a few side
  projects for free, check out this post and we'll find something that works for
  you. "
featuredpost: false
featuredimage: /img/win_20210511_08_15_55_pro.jpg
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/V8Uwu5eB6DQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<h5>Site 1: <a href="https://www.netlify.com/" target="_blank">Netlify</a> </h5>
Netlify's easy to use. Just stick your project on GitHub, bitbucket, ect, connect it to your Netlify account, and Netlify will rebuild your site/project any time there's a change to the GitHubrepo. 

<p class="bold white-text">What I like:</p>

They have a great free tier. The only thing I've ever had to pay for is pro forms. If you're using their form processing there's a limit of 100 submissions per month. But that leads to point to...

They make it super easy to process forms. All you have to do is stick a few extra attributes on your form and Netlify will be able to receive and store form submission for you without you having to handle any backend logic. 

Lambda functions (Serverless functions): Netlify allows you to have functions hanging around in the back that you can call to do things you'd usually need to set up a server for (like sending payment processing requests to Stripe's API, or talk to a database)

<p class="bold white-text">What I don't like:</p>

There's a reason this is the first hosting platform I recommend. 

<h5>Site 2: <a href="https://www.heroku.com/" target="_blank">Heroku</a> </h5>
Heroku's pretty similar to Netlify. Connect your repo and build!
 
<p class="bold white-text">What I like:</p>

Plugins. There are some great plugins you can use. One I'm currently using is basically a chron jobs plugin that calls functions on a node server to reset my todo list items. 

It's free.

<p class="bold white-text">What I don't like:</p>

When your project hasn't been accessed in a while it gets spun down to save space on their servers. This means whenever you go to your project again it takes a few minutes to rebuild and show up. 

<h5>Site 3: <a href="https://codesandbox.io/" target="_blank">CodeSandbox</a> </h5>

<p class="bold white-text">What I like:</p>

You can build your entire project in codesandbox. Just make an account, select what you want to work in (react, vue, Node HTTP Server, Gatsby, Next.js Cx.js ect). No other IDE/Text editor needed.

You can also connect to github and pull projects in from there. 

<p class="bold white-text">What I don't like:</p>

Just like Heroku your projects don't stay up. But it's free so hey, can't complain. 