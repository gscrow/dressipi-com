---
title: Building Fashion Recommendation Systems
date: 2022-03-22 14:24:00 Z
categories:
- technology
tags:
- technology
- business insights
- personalization
- product discovery
- customer experience
image: "/uploads/Screen_Shot_2018-04-19_at_15.28.31.jpeg"
author: Nick Landia
description: Read about building fashion recommendation systems for ecommerce, and
  how Dressipi overcomes the challenges of personalized product recommendations.
download: 
post_title: Building Fashion Recommendation Systems for Ecommerce
---

### Nick Landia, Dressipi’s Chief Data Scientist, explores the challenges of building intelligent and effective personalized recommendation systems. The goal? To create truly personalized customer experiences.

# Building a Fashion Retail Recommendation Engine

Businesses such as Spotify and Netflix have been trailblazers in the recommendation systems world. More than 80% of the TV shows people watch on Netflix are discovered through the platform’s recommendation system ([Wired](http://www.wired.co.uk/article/how-do-netflixs-algorithms-work-machine-learning-helps-to-predict-what-viewers-will-like)). Spotify’s Discover Weekly playlists boasted 40 million unique users just a year after it launched in July 2015 ([TechCrunch](https://techcrunch.com/2016/05/25/playlists-not-blogs/)).

In contrast, recommender systems in fashion and retail have been relatively slow on the uptake; but for good reason.

<p style="text-align: center; font-size:12pt;"><img style="margin-left: 0px; width: 500px;padding-top: 10px;" alt="Personalized recommendations from Netflix and Spotify" src="/uploads/netflix-spotify-recs.png"/><br> Personalized recommendations from Netflix and Spotify</p>


## What are the Challenges?

Fashion is an extremely dynamic and ever-changing industry. When creating an ecommerce product recommendation engine, there are a number of challenges specific to fashion. Additionally, these challenges exist on both the retailer’s and the customer’s side.

<p style="text-align:center; padding-top:5px;padding-bottom:5px;"><a href="/subscribe/" class="button button-primary">SUBSCRIBE TO THE NEWSLETTER</a></p>

## Retailer Related Challenges


### 1. Short Lifetime of Items
Garments only exist to be sold for a very short period of time. This is different to other verticals where products remain available for a very long time. The result is that, in fashion, each individual item only has a short period in which to collect data about it. This means the domain ends up very sparse, even more so that in traditional domains of ecommerce recommendation engines. 

### 2. High Volume of Items
Large retailers release new garments daily, meaning there is a constant high turnover of products. On average, a third of fashion products are both released and removed from the product catalog every month.

<p style="text-align: center; font-size:12pt;"><img style="margin-left: 0px; width: 550px;" alt="Comparison of average monthly product catalog changes" src="/uploads/monthly-product-pool-graph.png"/><br></p>

This creates two problems. Firstly, around understanding product availability. Secondly, ensuring that the personalized product recommendations are sophisticated enough to capture data on the garments on an ongoing basis.

### 3. Data Sparsity
People shop across multiple retailers and channels; they don’t have a single source of recommendations for online shopping. A customer might buy their jeans from one retailer and then go to another to buy a top. Each retailer has a very limited view on their customer’s full preference profile and overall spend on clothing.

## Customer Related Challenges


### 1. Customer Preferences Can Be Fickle and Change Rapidly
Tastes change over time; this is another way in which [the fashion domain is different](https://dressipi.com/blog/why-is-fashion-different-part-2-fashion-consumer-behavior/). As trends come and go, so do people’s clothing preferences. A shopper might hate florals, but if florals become fashionable, they might actively search for a floral dress. 

Lifestyles also change, which can greatly influence a customer’s purchase decisions. For example, we might put on weight, have children or change careers. These changing preferences are something that should be reflected in product recommendation models specific to fashion.

<p style="text-align: center; font-size:12pt;"><img style="margin-left: 0px; width: 700px;" alt="Customer preferences affected by trend" src="/uploads/trend-driven-consumer.jpg"/><br></p>

### 2. Seasons
What people buy in the Winter varies drastically to what people buy in the Summer. So recommended products also need to adapt to people’s changing habits at different times of the year. At the start of Summer, the last available data about summer clothes for a particular customer is almost a year old. Using data properly to understand a customer’s changing tastes over that period can be difficult.

### 3. Everyone Is Different!
This may seem obvious, and is applicable to other industries, but what I like varies drastically to what my friend likes. A consumer may be trend-led, so will want to see the latest trend items. Another, however, may like the classics, so just wants to see basic, functional items. 

This means that a ‘one size fits all’ solution will not be good enough. [Neither will generic customer segmentation](https://dressipi.com/blog/segmentation-vs-personalization/) methods of recommendation in ecommerce. These solutions don’t have a very deep view of the customer.


## Developing Our Personalized Recommendation Engine

Automated product recommendations in the fashion domain should not be purely based on the customer’s personal taste and past activity. There are many external factors (many of which are emotional) that make building an apparel recommendation system all the more complex. Public perceptions must be taken into account, as well as fashion rules, outfit guidelines and current trends.

Furthermore, as established above, garments and customer preferences change over time, faster than in other domains. This is why a given product recommendations API must recognise changes in user preference and respond quickly.

<p style="text-align: center; font-size:12pt;"><img style="margin-left: 0px; width: 600px;padding-top:5px;padding-bottom:5px;" alt="Demonstration of session and purchase data gathered from visitors" src="/uploads/session-and-purchase-data.jpg"/><br></p>

At Dressipi, we established that:

**1. Customers are looking for guidance and validation of their fashion choices**

Customers might not know what fits them best, or may be seeking guidance on what items of clothing suit them. Some consumers may prioritize clothing that suits their body shape. Others are simply looking to get to the best pair of black jeans as quickly as possible. As such, it’s important to provide recommendations based on the customer’s session intention and preferences. 

**2. There are objective fashion do’s and don’ts that professional stylists know about, but customers might not**

This is where the importance of fashion expertise comes in. At Dressipi we have a team of stylists who work alongside our tech team. This ensures that the nuances surrounding fashion are captured in our personalized recommendation algorithms. You can read more about the importance of fashion expertise for product recommendation tools in [this blog](https://dressipi.com/blog/fashion-is-different/). 

<p style="text-align: center; font-size:12pt;"><img style="margin-left: 0px; width: 750px;" alt="Product attributes working together to create an outfit" src="/uploads/data_important_asset_blog-outfit.jpg"/><br></p>

**3. Trends and popular culture events influence user preference and public perception quickly and sometimes drastically**

It may be that red and pink are historically a no-go combination. But the catwalk may suddenly dictate that [bold color combinations are a trend for SS22](https://dressipi.com/blog/spring-summer-2022-fashion-trends/). If fashion recommender systems can understand that, outfits can be styled accordingly. Though perhaps these outfits should only be shown to people who have high fashion confidence.


Many B2B recommendation engine providers have realized that basic interaction data alone can only get suggested products so good. We’ve come to understand over time that you can’t blindly trust historical interaction data. That’s why at Dressipi, we give customers the option to provide additional information. By creating a profile on our partners’ websites, they can give us information such as:

- Body Shape
- Age
- Favourite Colors
- Lifestyle
- Attitudes to Fashion

This information works alongside our industry leading [product tagging technology](https://dressipi.com/solutions/product-tagging/). It allows the recommendation system to give [high-quality recommendation features](https://dressipi.com/solutions/product-discovery/), including AI product recommendations. Being able to do so on a truly one to one level greatly enhances the shopping experience based on the shopper’s intent.

## Final Thoughts

Customers are increasingly demanding and expecting highly personalized and curated shopping experiences. According to [Elastic](https://www.bloomberg.com/press-releases/2022-08-10/new-study-from-elastic-finds-84-of-online-shoppers-say-personalization-influences-their-purchases), 84% of consumers say personalization influences their purchases. This expectation also benefits retailers, however. According to [McKinsey](https://www.mckinsey.com/business-functions/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying), retailers that excel at personalization generate 40% more revenue from those activities than average players.

We have seen this ourselves with the retailers that we partner with. For example, we delivered a 25% reduction in returns for a [luxury retailer](https://dressipi.com/downloads/success-story-luxury-retailer/). You can learn more about how to make your data work harder to reduce your return rates in [our guide](https://dressipi.com/downloads/understanding-your-unique-return-rate-profile-whitepaper/).

<p style="text-align: center; font-size:12pt;"><img style="margin-left: 0px; width: 650px;padding-top:5px;padding-bottom:5px;" alt="Garment return rates comparison to Dressipi's recommended products" src="/uploads/SustainabilityBlog3.JPG"/><br></p>

In an environment where customer is king, retailers have to prioritize the delivery of effective and truly [personalized shopping experiences](https://dressipi.com/solutions/product-experience/). This piece highlights that highly intelligent and effective fashion recommendation systems are at the heart of this. The technology to achieve this has been available, and retailers have been slow to react. But good ecommerce personalization is an essential tool, translating into multiple business benefits and an improved customer experience.

<p style="text-align:center"><a href="/subscribe/" class="button button-primary">SUBSCRIBE TO THE NEWSLETTER</a></p>

<hr>

We’ve got a case study that you might find interesting, follow the link below to read the full story

<p style="text-align: center; font-size:12pt;"><a href="https://dressipi.com/downloads/success-story-river-island/"><img style="margin-left: 0px; width: 830px;" alt="River Island increased their revenue by 6% in 12 months" src="/uploads/success_story_blog_footer-RI.png"/></a></p>