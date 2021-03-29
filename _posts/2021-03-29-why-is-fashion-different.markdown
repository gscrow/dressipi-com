---
title: Why is Fashion different?
date: 2021-03-29 15:32:00 Z
---

## Part 1: Fashion Behaviour Data

Fashion is very different to the domains where recommender systems originated, both in terms of the industry and in terms of consumer behaviour. In this blog series we examine the main characteristics that make fashion different to other domains, and dive into the challenges that this causes for recommendation algorithms. 

Although recommendation approaches built on and inspired by datasets from Netflix and Spotify have their own interesting characteristics, they do not encounter the conditions specific to the fashion domain, such as the rapidly changing product catalogue and the short lifetime of garments. This article will dig deeper into these specific characteristics and how they have to be addressed when building recommender systems for fashion.

## Brief History of Recommender Systems

Since the 2000s, recommender systems have gained popularity and received increased attention as online commerce has increased. A lot of research has gone into developing recommendation algorithms that can improve how we choose which items to show to which customers. An important aspect in this development was how the recommendation problems were framed. The datasets used to experiment and measure the success of different approaches came primarily from domains such as: movies (Netflix, MovieLens etc), music (Spotify, Last.fm etc), books (Amazon etc) and research articles (CiteULike etc). 

One of the biggest motivators was the 1 million dollar Netflix prize of 2006-2009 in which research teams competed to build the best recommender on a Netflix dataset. More recently, datasets from different domains are becoming available, but it is important to realise that most of the established approaches to date were driven by experimenting on datasets from movies, music and print domains. These datasets shaped the direction that researchers would take to solve the recommendation problem, and decide whether to pursue one research direction or another.
Recommenders for the Fashion Domain
When building our recommender system at Dressipi, we have learnt that applying standard, off-the-shelf recommendation approaches do not work well for the fashion domain. One of the biggest reasons for this is that most existing approaches are a product of which datasets were available at the time and the domains of companies that were driving research as mentioned above. 

The algorithms that were most successful in these domains were the ones that were developed further, and are the foundation for the standardised approaches that are available in code libraries today. There are implicit assumptions built into the algorithms as a result of this process. They work well for the characteristics of the datasets they were built with and evaluated on. However, these characteristics are not the same in other retail domains, and especially different in fashion.
