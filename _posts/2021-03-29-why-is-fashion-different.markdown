---
title: 'Why is Fashion Different? Part 1: Quantifying Fashion Data'
date: 2021-03-29 15:32:00 Z
categories:
- technology
tags:
- technology
- product tagging
- business insights
image: "/uploads/WhyFashionDifferentBanner.jpg"
author: Nick Landia
description: 'Dressipi’s Data Scientist explains why fashion recommendations are so
  hard to achieve, compared to music or movie domains and what obstacles need to be
  addressed.

'
post_title: 'Why is Fashion Different? Part 1: Quantifying Fashion Data'
---

## Quantifying Fashion Data

Fashion is very different to the domains where recommender systems originated, both in terms of the industry and in terms of consumer behavior. In this blog series we examine the main characteristics that make fashion different to other domains, and dive into the challenges that this causes for recommendation algorithms. 

Although recommendation approaches built on and inspired by datasets from Netflix and Spotify have their own interesting characteristics, they do not encounter the conditions specific to the fashion domain, such as the rapidly changing product catalogue and the short lifetime of garments. This article will dig deeper into these specific characteristics and how they have to be addressed when building recommender systems for fashion.

## Brief History of Recommender Systems

Since the 2000s, recommender systems have gained popularity and received increased attention as online commerce has increased. A lot of research has gone into developing recommendation algorithms that can improve how we choose which items to show to which customers. An important aspect in this development was how the recommendation problems were framed. The datasets used to experiment and measure the success of different approaches came primarily from domains such as: movies (Netflix, MovieLens etc), music (Spotify, Last.fm etc), books (Amazon etc) and research articles (CiteULike etc). 

One of the biggest motivators was the 1 million dollar Netflix prize of 2006-2009 in which research teams competed to build the best recommender on a Netflix dataset. More recently, datasets from different domains are becoming available, but it is important to realise that most of the established approaches to date were driven by experimenting on datasets from movies, music and print domains. These datasets shaped the direction that researchers would take to solve the recommendation problem, and decide whether to pursue one research direction or another.

## Recommenders for the Fashion Domain

When building our recommender system at Dressipi, we have learnt that applying standard, off-the-shelf recommendation approaches do not work well for the fashion domain. One of the biggest reasons for this is that most existing approaches are a product of which datasets were available at the time and the domains of companies that were driving research as mentioned above. 

The algorithms that were most successful in these domains were the ones that were developed further, and are the foundation for the standardised approaches that are available in code libraries today. There are implicit assumptions built into the algorithms as a result of this process. They work well for the characteristics of the datasets they were built with and evaluated on. However, these characteristics are not the same in other retail domains, and especially different in fashion.

## Fashion vs Other Domains

This article will look at the stats that we can use to quantify the characteristics of fashion data, compared with music and movie domains. The numbers we are looking at are:
* How many items are available at any one time?
* How many new items become available per month?
* How many items leave the product catalogue per month?
* How long is an item usually available for?
* How many of each item are available?

We have looked up and compiled these numbers for Netflix and Spotify as representatives of movie and music domains. The fashion number we give is an aggregation of the data we have seen across the small, medium and large fashion [retailers we work with](https://dressipi.com/customers/) (these are all aggregated numbers but the differences in characteristics are so large that even very rough numbers suffice).

### 1) Changes in product catalogue

The table below shows how many items are available at any one time, and what percentage of the product catalogue is changing each month by either adding or removing items.

<p style="text-align:center"><img style="margin-left: 0px; width: 600px;" alt="Table showing number of items available, number of items added per month, and number of items removed per month for movies (Netflix), music (Spotify), and fashion (Dressipi aggregate)" src="/uploads/WhyFashionDifferent_1.JPG"/></p>

We can observe that the movie and music domains have a large consistent product catalogue that on the whole remains unchanged from month to month, and is continuously growing in small increments. Looking at the new releases, only 5% of items are new per month, so 95% of candidate items that we could recommend have a user interaction history available and only 5% are in the new-item-problem group. At the same time, less than 2% of items get removed every month and the rest remain available to be recommended and for users to interact with. The majority of historical data remains directly relatable to new user interactions due to the same items being available then and now, without needing to use content data (or learn an additional feature space representation that introduces one more source of error in the model). 

On the other hand, in fashion, we have a very dynamic product catalogue where every month on average about a third of products are discontinued and equally as many new products get added. The new-item problem affects on average 33% of the product catalogue and can range between 20% to as high as 50% depending on the retailer. With as many items getting removed we are also at risk of losing a large chunk of data to learn from unless we use content data or make a specific effort to bridge the gap between discontinued and available products.

<p style="text-align:center"><img style="margin-left: 0px; width: 700px;" alt="Comparison of how many items are released per month versus how many items leave the product pool per month for Netflix, Spotify, and the fashion domain" src="/uploads/WhyFashionDifferent2.JPG"/></p>

Furthermore, if we look at larger time frames such as seasons or years, almost all items that were available before won’t be anymore. Seasons affect what clothes are sold. As the weather changes the product catalogue changes drastically. Not many winter items get sold in summer. There are staple items, basics, that remain in the product catalogue for longer but even those get slightly changed and re-released as new items. When comparing the product catalogue for a spring / summer season from one year to the next there is only a small percentage of items that are still available, usually less than 10%.

To address this problem the need for using content data is much bigger than other domains. In fashion the most valuable information is in the image, so we need a way to extract the content data from the image and turn the image into something our recommender can use. At Dressipi we have a process of labelling items with human-understandable fashion tags, as shown below.

<p style="text-align:center"><img style="margin-left: 0px; width: 700px;" alt="Example of a set of Dressipi's garment attributes for a jacket" src="/uploads/WhyFashionDifferent3.JPG"/></p>

Find out more about why accuracy and specificity of garment data is so critical to drive better predictions and better algorithms in our webinar [here](https://dressipi.com/downloads/personalized-outfits/).

### 2) Stock and lifetime of items

The other aspect we examine is how many of each item are available to purchase and how long each item remains in the catalogue. To examine this better we looked at print books to have a non-digital comparison as print is another domain where a lot of recommender research has been done. 

For Netflix and Spotify this problem does not really exist. The stock is unlimited since the products are digital and the lifetime of a product is theoretically infinite (we have taken this to mean 5 years). The median item lifetime for clothing items is only 70 days. This goes hand in hand with the big product catalogue changes we have observed and is the reason behind them. The short lifetime makes sense when we consider seasons since retailers want to offer relevant items to their customers and what clothing is relevant largely depends on the weather.

Books typically have a print run anywhere between 15k and 25k. In fashion, a retailer’s stock quantity for an item can be in the low 10s with the median stock quantity for clothing items in a retailer’s catalogue usually being around 100. AND that stock is split across multiple sizes, so the effective available stock for all users that are a certain size is even lower.

The situation this creates for the recommender system is that there are a lot of items available in low quantity and for a relatively short period of time. This means the recommender has to adapt quickly and start making fairly good predictions on limited interaction data. If we wait until the item has been bought enough times to build up a solid data profile, most of the item stock is already gone. However, if we recommend an item to a user and they buy it, but then end up returning it, we have wasted a valuable quantity of the item. By the time the return is processed and ready to be sold again the item might have been removed from the catalogue. The challenge is to be able to make accurate predictions within a very short period of a new item being released, thus using a very small amount of direct data on the item in question. This is another reason why content data and content-based approaches are so important in fashion. 

In other domains content data is an additional input to boost the accuracy for an incremental amount, or to bridge the gap for a small number of new items until they have accumulated enough direct interaction data for the more precise interaction-based approaches to work accurately. In fashion, because of the short lifetime and limited total stock of items, pure content-based approaches are a critical part of the recommender suite. 

The seasons add another layer of complication: When a new season starts and a new item drops, the closest items that it can be related to (based on content data) with some confidence are most likely items from a year ago. That is a pretty long time in fashion. Taste, lifestyle, body and trends all change over time and making an accurate prediction based on what we learned from a similar item from a year ago is tricky. At the same time if we want to use more recent data then we have to contend with the fact that if someone really likes sleeveless dresses in summer this does not mean they also like them in winter. Our content-based approaches have to be developed with these characteristics in mind. Working on these kinds of puzzles and coming up with novel content-based approaches that work for fashion is very exciting for us at Dressipi.

## Conclusions

When building recommender systems for the fashion domain, we cannot use off-the-shelf, generic algorithms that were built for movies, music and books as they do not encounter the conditions that are specific to fashion. Every month 20% - 50% of the items in fashion are new, and roughly the same amount of items get removed. On average half of the clothing items are available for 70 days or less, in some categories much less.

Recommendation approaches built on and inspired by datasets from Netflix, Spotify etc have their own interesting characteristics and the standard solutions available today address the problems presented there pretty well. However, fashion has a different set of challenges and we have addressed those specifically when building recommender systems for this domain.

* The product catalogue in fashion is much more dynamic than other domains.
* The new-item problem is much more pronounced with large portions of the product catalogue being new each month - using content data is critical. The data we need is in the product image.
* Items are short-lived and get discontinued - recommender has to react to new items quickly and we have to find a way to keep data on discontinued items useful.

At Dressipi, we have addressed these challenges - and many more! Stay tuned for our next blog on how consumer behavior has a huge impact on how recommender systems are built for the fashion domain. 

<p style="text-align:center"><a href="/company/demo/" class="button button-primary">FREE CONSULTATION</a></p>