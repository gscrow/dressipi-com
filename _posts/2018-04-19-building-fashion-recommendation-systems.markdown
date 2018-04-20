---
title: Building Fashion Recommendation Systems
date: 2018-04-19 14:24:00 Z
categories:
- data
tags:
- data science
- data
- recommender systems
- fashion technology
- fashion personalisation
- technology
- retail technology
- retail innovation
- one to one personalisation
- true personalisation
image: "/uploads/Screen%20Shot%202018-04-19%20at%2015.28.31.png"
author: Nick Landia
description: Nick Landia, Dressipi's Chief Data Scientist explores the challenges
  of building intelligent and effective fashion recommendation systems to create highly
  personalised shopping experiences.
download: Five Things Every Retailer Should Know About Personalisation
---

Nick Landia, Dressipi's Chief Data Scientist explores the challenges of building intelligent and effective fashion recommendation systems to create highly personalised shopping experiences.

# Building Fashion Recommendation Systems

Businesses such as Spotify and Netflix have been trailblazers in the recommendation systems world. More than 80% of the TV shows people watch on Netflix are discovered through the platform’s recommendation system ([Wired](http://www.wired.co.uk/article/how-do-netflixs-algorithms-work-machine-learning-helps-to-predict-what-viewers-will-like)) and Discover Weekly playlists boasted 40 million unique users just a year after it launched in July 2015 ([TechCrunch](https://techcrunch.com/2016/05/25/playlists-not-blogs/)).

In contrast, the fashion industry has been relatively slow on the uptake when it comes to robust recommendation systems, but for good reason.

## What are the Challenges?

Fashion is an extremely dynamic and ever-changing industry, with challenges existing on both the retailer’s and the customer's side:

### Retailer Related Challenges


> **1. Short Lifetime of Items** -
Garments only exist to be sold for a very short period of time. This is different to other verticals such as films or music which can always be purchased fairly easily for a very long time. The result is that in fashion each individual item only has a short period in which to collect data about it, meaning the domain ends up very sparse, even more so that in traditional recommendation system domains. 

> **2. High Volume of Items** -
Large retailers release new garments daily, meaning there is a constant high turnover of products. For example, fast fashion retailer Zara delivers new products to its stores every two weeks ([Forbes](https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/deborahweinswig/2017/08/28/retailers-should-think-like-zara-what-we-learned-at-the-august-magic-trade-show/&refURL=&referrer=#17bc3ac73e52)). Not only does this create problems around understanding product availability, but also ensuring that the recommendation system is sophisticated enough to capture data on the garments on an ongoing basis.

> **3. Data Sparsity** -
How well do retailers *really* know their customers? People shop across multiple retailers and channels. A customer might buy their jeans from one retailer and then go to another to buy a top. Each retailer has a very limited view on their customer’s full preference profile and overall spend on clothing.

### Customer Related Challenges


> **1. Customer Preferences Can Be Fickle and Change Rapidly** -
Tastes change over time. As trends come and go, so do people’s clothing preferences - I might hate florals, but suddenly they are in fashion so I’ll actively search for a floral shirt. Lifestyles also change, which can greatly influence a customer’s purchase decisions (for example, we might put on weight, have children or change careers). 

> **2. Seasonality** -
What people buy in the Winter varies drastically to what people buy in the Summer, which means the recommendation system needs to be aware of how people’s dressing and spending habits change at different times of the year. At the start of Summer, the last available data about summer clothes for a particular customer is almost a year old, so it can be challenging to successfully use that data and figure out if the customer’s taste has changed in the meantime.

> **3. Everyone Is Different!** -
This may seem obvious, and is applicable to other industries, but what I like varies drastically to what my friend likes. I may be very trend led so want to see the latest trend items, whereas my friend likes the classics so just wants to see basic, functional items. This means that a one size fits all solution simply won’t work, and neither will generic customer segmentation methods based on clicks etc that don’t have a very deep view of the customer.


## Building A Fashion Recommendation System

Unlike other domains, fashion recommendations should not be purely based on the customer’s personal taste and past activity. There are many external factors (many of which are emotional) that make building a fashion recommendation system all the more complex. Public perceptions must be taken into account, as well as fashion rules, outfit guidelines and current trends.

Furthermore, as established above, garments and customer preferences change over time, faster than in other domains. This is why recommenders must recognise changes in user preference and respond quickly.

At Dressipi we established that:

**1. Customers are looking for guidance and validation of their fashion choices**

Customers might not know what fits them best or be seeking guidance on what items of clothing suit them. For some, clothing that suits their body shape is important, whereas for others, they are simply looking to get to the best pair of black jeans as quickly as possible. 

**2. There are objective fashion do’s and don'ts that professional stylists know about but customers might not**

This is where the importance of fashion expertise comes in. At Dressipi we have a team of stylists who work alongside our tech team to ensure the nuances surrounding fashion are captured in our algorithms. Natalie Theo, Dressipi’s Style Director wrote about the important combination of fashion intuition and data in her [latest blog post](https://dressipi.com/blog/fashion-plus-data-equals-a-match-made-in-personalisation-heaven/). 

**3. Trends and popular culture events influence user preference and public perception quickly and sometimes drastically**

It may be that red and pink are historically a no-go combination. If all of a sudden the catwalk dictates that pink and red styled together is a top trend for SS18, the recommendation system needs to understand that so outfits are styled appropriately (but perhaps only shown to people who have high fashion confidence).


Many companies providing recommendations in this space have realised that the customer-item interaction data alone can only get you so far. We’ve come to understand over time that you can’t blindly trust historical interaction data. That’s why at Dressipi, we gather additional information about customers by asking them to create a profile where they give us information such as:

- Body Shape
- Age
- Favourite Colours
- Lifestyle
- Attitudes to Fashion

This information, alongside our garment tagging technology (each garment is tagged with a series of data points), allows the recommendation system to give high-quality recommendation features such as style advice, outfits, and [product recommendations on a truly one-to-one level](https://dressipi.com/one-to-one-personalisation/), enhancing the customer’s shopping experience based on their intent.

## In Summary

Customers are increasingly demanding and expecting highly personalised and curated shopping experiences, which not only benefit the customer, but also the retailer. According to [Forbes](https://www.forbes.com/sites/shephyken/2017/10/29/personalized-customer-experience-increases-revenue-and-loyalty/#663517f94bd6), personalisation leads to increased revenue, fewer returns and increased loyalty, and we see this already with the retailers that we partner with, delivering a 5% percentage point reduction in returns (you can read a whitepaper by our co-founder Sarah McVittie on making data work harder to reduce garment return rates [here](https://dressipi.com/downloads/how-to-make-your-data-work-harder-to-reduce-garment-return-rates-whitepaper/)).

In an environment where customer is king, retailers are prioritising creating delightful and efficient [personalised shopping experiences](https://dressipi.com/solutions/customer-experience/) both online and in store. This piece highlights that highly intelligent and effective fashion recommendation systems will be at the heart of this. Although complex to create (due to the multiple challenges posed by both the retailer and the customer), when integrated fully it becomes a essential tool, translating into multiple business benefits and an improved customer experience.

> Banner photo by rawpixel.com on Unsplash