---
title: Accurate Garment Data and Personalized Outfits
date: 2022-02-07 09:30:00 Z
categories:
- personalization
tags:
- personalization
- data & insights
- product tagging
- personalized outfits
- customer experience
image: "/uploads/accurate-garment-data-for-outfits-banner.jpg"
author: Marija Mandić
description: Dressipi Software Engineer Marija Mandić explains why accurate and consistent
  product attribution is the key to truly personalized outfits.
post_title: Accurate Garment Data is Key for Personalized Outfits
---

### Right from the start brands have showcased their product through outfitting: from catwalk collections to window displays, shop mannequins to advertising campaigns and on today’s social media platforms. They play a huge part in our everyday life. 

At Dressipi, we have always known they are an important part of how a customer shops and as fashion consumption moves increasingly online, we needed to replicate this. In the early Dressipi days, outfits were hand-picked by stylists and shown to the customers via weekly emails. It was bi-directional communication where customers could give their feedback, helping to unravel their expectations. As Dressipi grew, this approach became unsustainable and definitely not scalable. We found a better way to approach generating outfits would come from a technical and data-driven point of view, thus avoiding implicit human biases and along the way overcoming several challenges in combining fashion and technology.

Dressipi is now able to create around ~10 million outfits for retailers with smaller numbers of distinct products (<1K) and up to 100 million outfits for retailers with larger numbers - depending on garment categories and number of occasions a single garment can be worn in. Dressipi provides a bridge between the user’s needs and retailer stock. Personalising recommendations and styling garments as outfits in multiple ways for more than one occasion (& including items from a customer’s wardrobe), inspires individuals whilst upselling a garment by showing its versatility. 

## Approaching personalized outfits from a technical point of view

Not all garments can be matched together and their compatibility depends on factors such as occasion, season, category, features and trends. It is crucial to build a system that will handle all these factors while being efficient and performant at the same time. It also must be able to tune different inputs to match potential changes in starting requirements over time.

## Attributes

The first step in building outfits is knowing the garments’ characteristics. Each garment has a number of attributes (category, season, occasions, garment attributes such as fit, style, length, neckline, etc) that describe it in a uniform way and those attributes must be accurate. At Dressipi we combine technology, text classification and image recognition, with the human labelling of our expert stylists, to deliver the best results. For example, the neckline of a dress can be described through one of 25 different attributes. That is the level of detail and accuracy Dressipi provides.

<p style="text-align:center"><img style="margin-left: 0px; width: 800px;" alt="Example of a set of garment attributes for a dress" src="/uploads/Outfit_Blog_1-e924d5.JPG"/></p>

As a tech company, Dressipi uses a number of technologies to make garment labelling effective. Unfortunately, Computer Vision models or Convolutional Neural Networks are still not good enough to provide 99% accurate results. Hence, we constantly work on improving those models. 

## Templates

Another thing a machine needs to know is which garment categories can be combined together and for which occasion. The occasion is important because rules will be different for different occasions. A tennis dress shouldn’t be styled with heels while for an evening dress that’s not the case. To achieve this, we create a set of templates that reflects those relationships and can be customised per retailer. 

<p style="text-align:center"><img style="margin-left: 0px; width: 800px;" alt="Example of outfits for Casual and Out and About occasions for a pair of jeans" src="/uploads/Outfit_Blog_2.JPG"/></p>

## Rules

However, templates don’t handle combinations of different garment attributes and how they can be styled together. For that purpose, we introduced a set of outfit rules where combinations of attributes that cannot go together are listed - e.g. animal print dress shouldn’t be styled with an animal print jacket. Rules are written by senior stylists and can be easily and quickly updated as new trends may “break” rules already set. For example, a pink-and-red color-blocking trend showed up a few years ago and we promptly incorporated it within our rules.

## Creating the outfits

Once garments are labelled and a set of templates is created, outfits can be created. Our approach is to use a “brute-force” algorithm but in a smart and sustainable way. In technology, brute-force and performance don’t go well together so we found a way how to overcome this challenge.

Before actually generating all possible garment combinations, we create a partial resolution of the garment’s attributes in a template set following the outfit rules. Attributes that violate the rules are eliminated which allows large numbers of combinations of garments to be excluded without ever considering them.

The final step is to find all the garments that match the partially resolved attributes for every garment category in the template set. At this step, other factors, such as color restrictions and different ranges (e.g. curve range) all also applied. 

## Adding the personalization to personalized outfits

At this stage, outfits aren’t personalized yet. Personalization happens in real-time when a garment is requested. At that moment we pick the remaining garments in the outfit by checking if they are recommended for a user. As not all garments have an equal recommended score, they are sorted in order of descending goodness. Even though always returning the best-recommended garments sounds good in theory, in practice, that means there will be a lot of homogeneous outfits. Outfits’ diversity is equally important as the best-recommended garments. That is why we aggregate outfits to ensure diversity and blocklist garments that have already been shown for a short period of time. Consequently, slightly less recommended garments are returned but a diversity of outfits is increased.

<p style="text-align:center"><img style="margin-left: 0px; width: 400px;" alt="Example of a personalized outfit for a dress" src="/uploads/Outfit_Blog_3.JPG"/></p>

## Conclusion

Dressipi is unique in its ability to deliver personalized outfits. Although 'What The Model Is Wearing' delivers some uplift (~1%), personalising outfits will deliver an additional 2-3% incremental revenue, demonstrating that there is a clear user appetite for personalized outfits. The success has been proven by numerous AB tests with our clients, improving revenue, conversion, AOV and retention whilst also inspiring the customer and creating amazing experiences.

Personalized outfits tell stories about garments and help show customers how different garments can be styled together. There will always be a need for outfitting and whether your vision is for a customer to try on outfits through AR or VR, you will still need the Dressipi technology to pick out the best outfit for you.

If you’d like to learn how to get started on delivering personalized outfits at scale to your customers, please get in touch.

<p style="text-align:center"><a href="/company/demo/" class="button button-primary">BOOK A DEMO</a></p>

<hr>

We’ve got a case study that you might find interesting, follow the link below to read the full story

<p style="text-align: center; font-size:12pt;"><a href="https://dressipi.com/downloads/success-story-john-lewis/"><img style="margin-left: 0px; width: 830px;" alt="John Lewis achieved a significant increase in revenue with outfit recommendations" src="/uploads/success_story_blog_footer-JL.png"/></a></p>