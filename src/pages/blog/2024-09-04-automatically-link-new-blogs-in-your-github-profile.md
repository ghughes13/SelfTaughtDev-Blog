---
templateKey: blog-post
title: Automatically Link New Blogs In Your Github Profile
date: 2024-09-04T20:57:35.932Z
description: Do you have a tech blog? Did you know you can automatically add
  them to your GitHub profile? You can do it for YouTube videos too, which is
  what I used this for, I just assume more people will use this to post blogs
  so...
featuredpost: true
featuredimage: /img/win_20240901_10_14_03_pro.jpg
---
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jg4F8v0wbKM?si=jLBb6chD0g-NqVAn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



What's up Devs! Did you know if you have a blog, you can automate posting links to new blogs in your GitHub profile? Well today you're going to learn how. 

First off, credit to gautamkrishnar for his blog-post-workflow because we take advantage of that.

Now, we are going to assume you've already got a github profile setup (meaning the README.md in https://github.com/<YourUsername>/<YourUsername> - ex Mine). 

The only thing we're going to need to add to your README.md is: 

<!-- YOUTUBE-VIDEOS-LIST:START -->

<!-- YOUTUBE-VIDEOS-LIST:END -->



This is the hook the blog-post-workflow is going to look for, and it's going to add the list of posts between them. The 'YOUTUBE-VIDEOS-LIST' is basically a variable. You could make this "BLOG-POST-LIST" or really whatever your hear desires. We tell the workflow what to look for in the .yml file we're about to setup. 

Back in our portfolio repo (https://github.com/YourUsername/YourUsername) click on 'Add file' -> 'Create new file'. We're actually creating a directory called .github with another directory inside it called workflows and finally a file called (Mine is called update-youtube.yml, but if your updating blog posts something like 'update-blogs.yml' should suffice).

Inside that yml file, you'll include what you find here - https://github.com/ghughes13/ghughes13/blob/main/.github/workflows/update-youtube.yml

Change the two name properties to something appropriate. What they are doesn't really matter. What does matter is what we have in the `comment_tag_name`. This should be what we used earlier (in my case: YOUTUBE-VIDEOS-LIST. It should be capitalized exactly like we wrote it).

The other thing we need to change is the feed_list. This is where our data will come from. It needs to be an RSS feed. Popular feeds are listed in the [blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow#user-content-popular-sources) repo [here.](https://github.com/gautamkrishnar/blog-post-workflow#user-content-popular-sources)

After that's committed and saved, all that's left is to run the action. It runs on it's own every hour, but if we just go to 'Actions' -> `The name of your workflow` -> Run workflow and your workflow should run. (It will also run ever hour and add any new blogs you create.)