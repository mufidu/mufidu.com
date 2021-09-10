---
title: "Getting The Perfect Score with Wordpress"
date: "2021-05-23"
category: "devs"
tags:
  - "tutorial"
coverImage: "/img/stephen-phillips-hostreviews-co-uk-sSPzmL7fpWc-unsplash.webp"
layout: post-en
permalink: /wordpress-optimization/
lang: en
translation: /optimasi-wordpress/
featured: true
---

![wordpress](/img/stephen-phillips-hostreviews-co-uk-sSPzmL7fpWc-unsplash.webp)

> This post is written when I was still using Wordpress. I'm no longer using it, but I think the experience is still worth sharing and still relevant.

It's been about a year since I've hosted my blog on Blogger. All I need to do is just write and publish. I don't need to worry about the configuration because it's all done for me. There is not much we can customize in Blogger either.

Because I want to be able to optimize this blog (and I really want to mess up the configs), I then bought a cheap hosting and move the blog to Wordpress.

The process is not simple, as I can expect. I spent about 5 days to finish setting up the blog on WordPress, as I'm actually new to cPanel et al.

Every day I focus on working on one aspect, the first day is setting up hosting, continuing to install and set up WordPress for the first time, continue to install Themes, continue to install plugins, and finally SEO.

I spend most of my time browsing, there are lots of tools that can be used and I have to choose the best one. I prioritize the speed to be as high as possible, because I use shared hosting, so it has to be optimal.

Now I want to share some of the configurations that I use on this blog, who knows, it might save time for people who need it. It can also be a guide for those who want to move or just want to try WordPress on their blog.

## Installing Wordpress

First, what you have to do is install the WordPress. Usually hosting providers already provide Softaculous on cPanel so that you can install WordPress in one click.

But if it doesn't exist, you can install it yourself, download the files you need and upload them to your hosting via FTP. There is a complete guide on the [Wordpress official website](https://wordpress.org).

## Installing theme

Secondly, after installing WordPress, in my opinion, the best thing to do is to select and install a theme. There are so many choices, some are free, some are paid. But there are a lot of free ones that are good, we just need to modify it.

The difference between free and paid themes is that they are usually can be highly customized, sometimes if there is a paid version of the theme, the free version is very limited if you want to customize it.

Make your own choice of theme depending on your individual needs. What do you want to prioritize first? For me, the important thing is that it's light (the size is small) and can be modified until I like it.

The choices at that time were [Astra](https://wordpress.org/themes/astra/) and [Neve](https://wordpress.org/themes/neve/), but in the end I chose Neve because it was more suitable for me.

When you modify the theme, keep in mind that everything is must be easy to read, the navigation is clear (users must know how to get back to Home), and the menu doesn't get crowded.

I myself deleted the menu on the right sidebar, so that when a user is reading a post, they just see the post. Then, I created a new page to display categories.

If you want, before modifying the Theme you can make a [Child Theme](https://codeable.io/what-is-a-child-theme-wordpress/#:~:text=A%20child%20theme%20is%20a,of%20modifying%20an%20existing%20theme.) first, so that when the Theme is updated, your modifications will not be lost.

## Installing Plugins

Third, plugins. One of the things that makes Wordpress superior to Blogger is these plugins. We can add features that don't exist in the default Wordpress, without having to understand coding.

In addition to adding features, plugins are also important for optimizing our blog, especially in speed.

There are lots of plugins that we can install to add features to our website. But if we install a lot, the web can actually be slow, or even worse, the plugins clash with each other. Sometimes there are problems because the plugins don't match each other.

It will be better if we just use some of them, according to what we prioritize, like when we chose the theme earlier. For example, if we make this website as just a landing page, we don't need to install a comment plugin like Disqus.

For blogs, I will give some recommendations for plugins, that I use here. I group them according to their function.

### Caching

By default if we access a web that use Wordpress, the server will build the web from scratch, each visit. Now this cache provides the finished web version, so the server doesn't have to build from scratch every time we open the web.

This of course reduces the load on our servers because it doesn't have to do many process to display the web in the browser.

For caching, I've tried a lot of plugins, first I tried [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) because they say it has the most complete features. Then I moved to [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/) because the settings are simpler, so it minimizes the possibility of conflicts with other plugins.

But in the end, I found out that my hosting uses Litespeed Web Server and it says that it will be more optimal if I use [Litespeed Cache](https://id.wordpress.org/plugins/litespeed-cache/), so until now I'm using it.

After I explored again, there is one cooler cache plugin, so it can save our cache on Cloudflare's CDN automatically. CDN is like a backup hosting that exists everywhere, so our website can be opened smoothly even by people from different continents, too.

Well, it's usually really complicated to set up a CDN like that, that's why I immediately installed it as soon as there was [WP Cloudflare Super Page Cache](https://wordpress.org/plugins/wp-cloudflare-page-cache/). Just connect your Cloudflare account, and this plugin will do the rest.

For the setup, I followed [this guide](https://webspeedtools.com/litespeed-cache-cloudflare/), which explains the details. Actually, it is recommended to turn off Litespeed Cache if you already use this plugin, to avoid conflict on the caching. But we can be set them up so that the local cache remains from the Litespeed plugin and then deployed to Cloudflare by the WP Cloudflare Super Page Cache. Just try it and find which works best for you.

### Security

Initially I installed [All in One WP Security](https://wordpress.org/plugins/all-in-one-wp-security-and-firewall/), but then I can't login to the admin page. So I replaced it with [Jetpack](https://wordpress.org/plugins/jetpack/) and [Akismet](https://wordpress.org/plugins/akismet/ "https://wordpress.org/plugins/akismet/").

The Jetpack plugin actually has a lot of [features](https://jetpack.com/support/features/), but I only use the security features (anti brute-force), related posts, and for commenting system. Akismet is for anti-spam.

### SEO

To increase rankings in Google Search, we can use [All in One SEO](https://wordpress.org/plugins/all-in-one-seo-pack/), it has complete features, just install and follow the guide .

And because my blog is also moved from Blogger, the URL that links to the old Blogger post must also be redirected so that when users still access, they don't get a 404 error. It's important, because your rank will drop if there is 404s in your website. I used [Redirection](https://wordpress.org/plugins/redirection/) for handling theme.

### Optimization

Before the file is cached, it should be optimized first, especially images and static files (CSS, JavaScript) that can be minified. I use [Autoptimize](https://wordpress.org/plugins/autoptimize/), this plugin is most likely will not conflict with other plugins, because many people are using it.

In the Litespeed Cache settings, there is actually an option to minify and optimize images, so I use both. Autoptimize to optimize HTML, CSS, JavaScript. Litespeed Cache to optimize the image.

### Addition

I also installed [AMP](https://wordpress.org/plugins/amp/) to make the web mobile-friendly, and [UpdraftPlus](https://wordpress.org/plugins/updraftplus/) for backup purposes.

---

Done. Don't install too many plugins, they will bloat your site and they can clash. Installing everything that I mentioned earlier is more than enough. Using them, this blog can already get a pretty good score in tests.

![pagespeed test result](/img/lighthouse.webp)
![gtmetrix test result](/img/gtmetrix.webp)

But this site is usually reach the maximum results in the second test. The problem is that in the first test sometimes the caching has not been completed. Yes, there are still many things that can be optimized, that's one of them. But I think it's enough today.
