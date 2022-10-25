---
title: 'Why is Fashion Different? Part 2: Fashion Consumer Behavior'
date: 2021-05-07 14:07:00 Z
categories:
- personalization
tags:
- data & insights
- customer experience
- business insights
- fashion trends
image: "/uploads/WhyFashionDifferentBanner-b94292.jpg"
author: Nick Landia
description: Dressipi’s Data Scientist digs deeper into the impact consumer behavior
  has on building recommender systems for the fashion domain.
post_title: 'Why is Fashion Different? Part 2: Fashion Consumer Behavior'
---

## Fashion Consumer Behavior

Fashion is very different to the domains where recommender systems originated, both in terms of the industry and in terms of consumer behavior. In this blog series we examine the main characteristics that make fashion different to other domains, and dive into the challenges that this causes for recommendation algorithms. In our last blog entry we explored different stats to [quantify the characteristics of fashion retail](https://dressipi.com/blog/why-is-fashion-different/), compared with music and movie domains. In this entry we look at user behavior.

Recommender systems at their core rely on being able to find patterns in user behavior. For this to be possible the user behavior has to be fairly consistent. If the user’s actions contradict each other or give opposite signals the recommender’s job becomes very difficult. A very important difference between fashion and other domains is that users change their taste and preferences over relatively short periods of time. This can be caused by a number of things including trends, lifestyle changes, body shape changes and general public perception. In this article we examine these reasons further and dig deeper into the challenges it poses for traditional recommender systems.

## How Recommenders usually work

Recommenders learn from historical data to predict future behavior. They assume there is an underlying pattern in user taste or preference to be discovered and that the true preference of the user that we are trying to learn is fairly static. Even if the user does different things over time there is an underlying taste pattern that we are narrowing in on with each additional data point. In other words we assume the user is somewhat consistent in their actions.

## Fashion-specific challenges

Most algorithms assume that the true (hidden) preference of a user that we are trying to approximate is fairly static and does not change a lot in the timescales the recommender operates in. In other domains like movies, music etc this assumption is correct enough: big changes in the user’s taste happen a small number of times, if at all, in their customer lifetime with the service. In fashion this does not hold true, the user can go from disliking a type of item, such as a floral dress, to suddenly buying a floral dress when florals become a trend.

<p style="text-align:center"><img style="margin-left: 0px; width: 800px;" alt="Graphic of customer attribute preferences changing based on a particular trending attribute" src="/uploads/why_fashion_is_different_2.JPG"/></p>

## Fashion is public and social

People can see what you wear and wearing certain types of clothing causes different reactions. “Clothes make the man” - or person.

This is different from other domains like books, movies and music where all that matters is personal preference. Sure people listen to music and watch films together with their friends, but fashion is on another scale when it comes to involving others and involving the general public. To draw an analogy to music, fashion is like carrying around a speaker and blasting music wherever you go, for everyone around you to hear. If you were constantly doing that, with no choice to turn it off, then you would prune your playlist and maybe not put that explicit Cardi B song on there when you’re going to see your parents, even though it is your favourite song! You’re going to need music that you like but also that creates the public image that you want to have.

I might be personally very comfortable in my tracksuit that is loose and practical but when I go outside into a public space I like to wear jeans and a well-fitting top. We choose our clothes taking into consideration who will see us in them. With fashion everyone has to blend personal taste and comfort with public perception. Lifestyle and body changes affect what clothes we deem appropriate to wear in what environment. People ask their friend’s opinion  about clothes they are about to buy to get a reading on how they come across. Stylists are people who have an especially good eye for this. From a recommender perspective there is an opportunity to not only cater to a user’s personal taste, like we would do with movies, but also to play the role of the public eye and recommend items the same way a stylist would do, advising users to follow trends or steer clear because it doesn’t work for their body shape even though it’s very popular at the moment.

<p style="text-align:center"><a href="/contact/" class="button button-primary">FREE CONSULTATION</a></p>

## Change in Taste vs Discovery

When we think about modelling user behavior in fashion vs other domains, it is important to distinguish between change and discovery. Discovery is when the user discovers something new they were not aware of before, say they come across a new artist they have not heard of before and this becomes their new favourite music. Change is when they have already encountered the artist before and had decided they don’t like them, but later when the artist becomes more popular and releases a new song they really get into it and change their opinion on this type of music. This happens less frequently for music, film and books but in fashion we encounter real changes in taste where people already had an opinion on a type of item and then change that opinion pretty suddenly when a trend comes along and public perception shifts.

A very apt example is the [trend of heavy metal band shirts](https://www.theguardian.com/fashion/2017/jul/26/nirvana-nevermind-fashion-co-opted-band-t-shirt) that became popular and available at mainstream fashion stores.
 
* Music domain: You didn’t like Slayer before, you knew heavy metal existed and didn’t like it, you don’t like Slayer now.
* Fashion domain: You didn’t like Slayer t-shirts before, you knew heavy metal band shirts existed and didn’t like them, you buy a Slayer t-shirt now because it’s trending and cool: you have changed your existing opinion on heavy metal t-shirts.

From your past interactions a recommender would have learned that you don’t like heavy metal t-shirts and in theory when personalising for you we should never recommend them. But in the case of fashion even a fairly strong opinion can change depending on how trends and public opinion changes.

<p style="text-align:center"><img style="margin-left: 0px; width: 400px;" alt="Example image of a t-shirt with a graphic logo of a heavt metal band" src="/uploads/HeavyMetalTShirt.jpeg"/></p>

Traditionally, when we try to personalize for a user we think of it as an exploration and narrowing in on the user’s taste. The task of the algorithms is to start broad (most popular) and then narrow in on the user’s taste, getting more accurate with each piece of information. In fashion however the true taste of the user is not as static as we would traditionally assume in recommender systems. In fact what the user likes can be rapidly changing and inconsistent over relatively short periods of time, meanings we can’t blindly rely on past data. We have to figure out how representative past purchases and interactions really are for a given user and whether or not their actual preference is that they are on trend.

## Conclusion

Fashion behavioral data has some interesting characteristics that are different to other domains and challenging to deal with for traditional recommender systems. This is because fashion has such a big social component that tastes and preferences of users can change very rapidly. 

In other domains we deal with the problem of discovery where we don’t have user feedback on a subcategory of items. As a result, those items have low scores for the user and don’t make it into the top recommendations. This makes it hard for the user to discover new things they might like. There are approaches to deal with this, for example showing different types of items to the user to gather feedback and narrow in on their preferences. In fashion we have an additional problem on top of discovery which is actual change in taste: a preference that is established through several data points and that the system is confident in having learnt can change quickly. One of the reasons for this is trends. Trends can invalidate long-standing preferences that we thought we were sure about. To deal with this we have to take the trend-propensity of the user into consideration. Other challenges include changes in lifestyle, body shape and general public perception. 

While traditional recommender systems rely on user behavior being fairly consistent we have to be aware of a much more fluid user preference in the fashion domain and look at additional dimensions such as trends that drive preference changes for some users but not others.

<p style="text-align:center"><a href="/company/demo/" class="button button-primary">FREE CONSULTATION</a></p>