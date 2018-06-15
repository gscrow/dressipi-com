---
title: Dressipi Technical Considerations
date: 2017-05-06 10:17:00 Z
header:
  title: Dressipi Technical Considerations
  width: extend
  height: tight
width: narrow
layout: considerations
sitemap: false
---

<div id="Security">
  <h2> Security </h2>
</div>
We highly recommend that all Dressipi functionality be provided over HTTPS only.

We can provide DV only certificates through Amazon’s certificate manager: <a target="blank" href="https://aws.amazon.com/certificate-manager/faqs/" >https://aws.amazon.com/certificate-manager/faqs/</a>; this requires you to approve the certificate requests we make and for this to be permitted by CAA records (if present).

Alternatively we can provide CSRs for the relevant domains that you pass on to your HTTPS certificate vendor (if so please supply the details we should use for the CSR)

<div id="Subdomains">
  <h2> Subdomains </h2>
</div>

To avoid issues with 3rd party cookies, Dressipi content should be served from a subdomain. For example if your production site is

<pre class="language-html">
  <code class="language-html">
    www.example-clothing.com
  </code>
</pre>

And your test site is

<pre class="language-html">
  <code class="language-html">
    www.example-clothing-test.com
  </code>
</pre>

We would want subdomains <em>dressipi-production.example-clothing.com</em> and <em>dressipi-staging.example-clothing-test.com</em> to be setup as CNAMEs of our servers.

<div id="ProductFeed">
<h2> Product Feed </h2>
</div>
We need a product feed with at least these attributes:

- Name
- Brand name (if relevant)
- Product identifier: a unique, non reused identifier for the item
- URL for a product page where the item can be bought
- URL for an image for the product
- Current price

Ideally it will also contain:

- Category information
- Previous price (for discounted items)
- Image urls for other views of the product (alternatively, a recipe for transforming the main image url)
- Per size stock levels
- An identifier for grouping colour variants of a product
- Short description

If products are sold in sets (eg suits, swimwear etc.) it is very useful to have something that can link such products.

The product identifier can either identify the product and a colour or a product, colour and size. If the former then a list of available sizes should be provided.

XML or CSV based formats are acceptable. When using CSV care must be taken if fields may contain commas, quote marks or newlines. Our preferred text encoding is UTF-8.

The feed should be available for us to download on a daily basis. If more frequent updates are required we can process the feed more often (if it is updated during the day) or make use of stock check APIs.

<div id="TransactionData">
  <h2> Transaction Data </h2>
</div>

We make use of transaction data in our recommendations. Ideally for each bought item this comprises of:

- A customer identifier
- An order / line item identifier
- A product identifier (that matches the feed)
- Size purchased (unless the product identifier also identifies the size purchased)
- Quantity
- Date of purchase
- Price Paid
- Returned quantity
- Return Date

Transaction data should be copied to our S3 bucket on a daily basis. We can either provide s3 api keys (to be rotated periodically) or we can delegate access to your AWS account (if applicable). Files are encrypted at rest via AWS-KMS but can also be encrypted with PGP before they are sent to us if required.

The combination of the order and line item identifiers should be unique & not reused.

Customer identifier is usually email, unless a separate mechanism can be agreed to pass the web application a stable identifier for each customer

<div id="TrackingAnalytics">
  <h2> Tracking & Analytics </h2>
</div>

<div id="ForDressipi">
  <h3> For Dressipi </h3>
</div>

Dressipi will provide javascript snippets to embed on the product page and order confirmation page. These scripts will need the following data be available to them:

<div id="ProductPage">
  <h4> Product Page </h4>
</div>

- Identifier for the viewed product (that matches the identifier in the feed)
- Whether the page is being viewed on the retailer’s mobile site (if applicable)

This tracking provides product view data (used by the recommendations)

<div id="OrderconfirmationPage">
  <h4> Order confirmation Page </h4>
</div>

- Order number (that matches the transaction data)

- Whether the page is being viewed on the retailer’s mobile site (if applicable)

This tracking allows us to connect the offline transaction data we receive with on site activity

Ideally the tracking part of the project is deployed a few weeks before any end-user functionality is made visible. This required that subdomains and ssl certificates be setup and ideally that the product feed (or at the very least a representative sample) be available.

<div id="ForRetailers">
  <h3> For Retailers </h3>
</div>

We can usually emit tracking data to any pre-existing analytics solution (for example google analytics). We require you to document & provide any tracking calls or javascript that should be added to our content.

<div id="UserIdentity">
  <h2> User Identity </h2>
</div>

Typically the Dressipi application manages user identity on its own: we track the user using a cookie, users completing signup enter an email address and password to save their data.

It may be possible to use or augment this with the retailer’s knowledge of the user’s identity. This is only worthwhile if visitors to the site are usually logged in and usually requires some integration effort. We would normally advise against requiring visitors to create an account with the retailer before/during signup with Dressipi

<div id="Email">
  <h2> Email </h2>
</div>

<div id="Productrecommendationemails">
  <h3> Product recommendation emails </h3>
</div>
Dressipi can provide product recommendations to embed in an email. Typically this will be a combination of a theme (configured by our stylists after discussion with your email team) and new in products. Products are selected to match the theme & user preferences and ordered by the recommendation engine.

We can provide email data via one of three mechanisms.

<div id="Filebasedemails">
  <h4> File based emails </h4>
</div>

We send you a CSV file with one row for each customer able to receive an email for the selected theme. Typically this is > 95%, usually 98-99%. The row contains the customer email address and data on each product recommended for that customer (for example a purchase link, and image and the product name). You work with your email provider to build an email template that will use this data to generate personalised emails for each partner.

<div id="Imagebasedemails">
  <h4> Image based emails </h4>
</div>

We send you a file with the email address of every customer able to receive the email. We also provide markup that you can add to your email. This markup contains an image link and a product link for each item. The image is a composite image that we generate, containing the actual product image plus any other product details to include in the email (price, name, brand etc.) The link redirects to the product page for the item.

This can be simpler to integrate as the only piece of information varying from user to user is the user identifier. You design and implement the email template as normal, however all product data (product images, product price, product name etc) is contained in the images we generate, so those layout details need to be implemented by us. This may impose some constraints on layout.

<div id="DressipiManagedemails">
  <h4> Dressipi Managed emails </h4>
</div>

We send the emails directly to the customers, without using your existing email provider. We manage unsubscribes from emails and can also receive lists of emails to unsubscribe if this data is generated by you elsewhere.

We would normally use an email template provided by you in order to maintain a consistent user experience for your customers.

We provide reporting on the performance of the emails and can also add tracking information to clicks from the email to that the journey from email to site can be tracked & understood.

<div id="Transactionalemails">
  <h3> Transactional emails </h3>
</div>

Dressipi typically sends a welcome email after signup and password reset emails when requested by the user. Typically the retailer’s email supplier provides an api that allows us to trigger these emails. This allows the retailer to be in full control of the design of these emails. It is also usually possible for Dressipi to deliver these, if the retailer can provide the HTML & assets for the emails.

<div id="Styleadvicehub">
  <h2> Style advice hub </h2>
</div>

The Dressipi content is hosted on a single page of your site. This page should contain an iframe that loads content from the Dressipi Servers. We provide a javascript file to include on that page that enables integration such as resizing of the iframe.

If clicking on a product should trigger functionality other than sending the customer to the corresponding product page (eg opening a lightbox with product information) then we need integration information for those components.

<div id="Widgets">
  <h2> Widgets </h2>
</div>

Widgets embed Dressipi content (size recommendation, signup CTA, outfits etc) in pre-existing retailer pages.

A Dressipi hosted javascript file provides a number of functions for adding widgets to a page. This file should be loaded asynchronously, the widget entrypoint functions also operate asynchronously.

The general model for the widgets is that the javascript function configures and inserts an invisible iframe into the page at the requested location. When the content has loaded, the iframe reveals itself.

Many widgets require a product identifier for a viewed product, this identifier should match the product identifier present in the feed.

Alternatively, you can make requests to the Dressipi api and render the JSON responses into HTML yourself.

<div id="MiscellaneousInformation">
  <h2> Miscellaneous Information </h2>
</div>

- What browser versions should be supported?
- Is accessibility a requirement, to what standards
- How is the mobile site setup? (assuming mobile in scope for project) Eg is the site responsive, or is there a separate mobile site?
- Subdomains of the retailers domains to host the application should be agreed
- Is there a staging/testing environment available to test as many of the integration points as possible?
- A high level overview of expected traffic (both to the style adviser hub and any page that has one or more widgets on it) is useful
- Transfer mechanism for product & transaction data.

<div id="IntegrationSamples">
  <h2> Integration Samples </h2>
</div>

These samples are for reference only. It is acceptable (and may be necessary) to alter them in order to fit into existing environments (for example substituting the mechanism by which scripts are loaded asynchronously).

<div id="StyleHub">
  <h3> Style Hub </h3>
</div>

This page handles signup, recommendation pages, outfits etc. It is recommended that this page be served over https.

This page should include the following javascript:

<pre class="language-javascript">
  <code class="language-javascript">
    (function() {
      var checkOrigin, eventHandler, lightbox;
      checkOrigin = function(origin) {
        return (
          origin ===
            "[https://dressipi-staging.example-clothing-test.com](https://dressipi-staging.example-clothing-test.com)" ||
          origin ===
            "[https://dressipi-production.example-clothing.com](https://dressipi-production.example-clothing.com)"
        );
      };

      lightbox = function(productId) {
        //Assumes the host page provides an openLightbox function
        //not applicable if Dressipi content won't need to trigger lightboxes.
        //This approach can be extended if more communication between Dressipi content
        //and the host page is required (eg add to basket)
        window.openLightbox(productId);
      };

      eventHandler = function(event) {
        var match, offsetTop;
        if ((match = checkOrigin(event.origin))) {
          if ((match = event.data.match(/^resize;(\d+)$/))) {
            return (document.getElementById("dressipi-iframe").style.height =
              match[1] + "px");
          } else if ((match = event.data.match(/^scroll;/))) {
            return window.scrollTo(0, 0);
          } else if ((match = event.data.match(/^scrollToAnchor;(\d+)$/))) {
            offsetTop = document.getElementById("dressipi-iframe").offsetTop;
            return window.scroll(0, offsetTop + parseInt(match[1]));
          } else if ((match = event.data.match(/^dressipi.lightbox;(\w+)$/))) {
            return lightbox(match[1]);
          }
        }
      };
      if (typeof window.addEventListener !== "undefined") {
        window.addEventListener("message", eventHandler);
      } else {
        window.attachEvent("onmessage", eventHandler);
      }
    }.call(this));
  </code>
</pre>

This javascript allows the iframe contents to communicate with the parent page. This is used to allow the iframe to resize itself or scroll the host page, or trigger functionality from the host page. Dressipi will be able to advise on any modifications required to this javascript. This script assumes that the Dressipi iframe has the id dressipi-iframe

<div id="Iframe">
  <h4>Iframe</h4>
</div>:

<pre class="language-html">
  <code class="language-html">
   &lt;iframe id="dressipi-iframe" src="//dressipi-production.example-clothing.com" width="xxx" height="yyy" frameborder="0"&gt; &lt;/iframe&gt;
 </code>
</pre>

The widget should be set (either as an attribute or via CSS) to the desired width of the iframe, which need not be a fixed value. It is generally helpful for the initial height of the iframe (again either set as an attribute or via css) to be roughly correct for the initial content shown

<div id="Widgetstracking">
  <h3> Widgets / tracking</h3>
</div>

We provide a javascript bundle that exports functions for configuring the Dressipi widgets, hosted on our CDN. The host page should load it via your preferred asynchronous loading mechanism (we can supply a sample one) and then call the desired entrypoints. A number of partners choose to deploy these via a tag container.

Widgets work by injecting an invisible iframe at the desired location. When the content inside the iframe has loaded successfully, the iframe reveals itself. The use of an iframe prevents any unintended communication or conflicts between host page contents and the widget content. This example inserts an outfit widget for the product with identifier “XYZ123” into the DOM element identified by domElement (which should be the browser DOM element, rather than a JQuery object or similar).

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initOutfitsWidget(domElement, { productCode: "XYZ123" });
  </code>
</pre>

The second parameter is a document of options. The following options are common to all widgets:

- host: Override the host the request is made too.
- protocol: Override the protocol used. Only relevant if widget available over both HTTPS and HTTP
- locale: a locale identifier. This requires Dressipi to be aware of possible values ahead of time
- callback: a callback to call when the widget has finished loading (or failed). The callback is passed the DOM element and a message. A message of loaded indicates that the widget has rendered successfully.

Other widgets follow a similar pattern. Extra options may be available, such as a callback function called upon successful widget load, or upon a user interaction with a widget. The PDP tracking widget has a similar interface but does not generate an iframe as it has no content to display.

The productCode should match the product identifier in the product feed. Where products have multiple identifiers, we will advise on the preferred one, but in general it should be possible to use any identifier within the feed.

The following widgets can be provided:

<div id="Sizingwidget">
  <h4>Sizing widget</h4>
</div>

Provides a sizing recommendation for the product. If the user has not completed signup, provides a CTA to signup. This widget will suppress itself if given a productCode is does not recognise (for example one that is not in the feed). This provides some insurance against it displaying against inappropriate content, but you should endeavour to only attempt to load it when it should be displayed

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initSizingWidget(domElement, {
      productCode: "XYZ123",
      host: "dressipi-production.example-clothing.com"
    });
  </code>
</pre>

<div id="Outfitswidget">
  <h4>Outfits widget</h4>
</div>

Displays an outfit containing the source item. This widget will suppress itself if the productCode is not recognise or outfits cannot be generated for the supplied item. If desired we can also return similar items to the source item (either alongside outfits or as a fallback if outfits not available).

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initOutfitsWidget(domElement, {
      productCode: "XYZ123",
      host: "dressipi-production.example-clothing.com"
    });
  </code>
</pre>

<div id="Promowidget">
  <h4>Promo widget</h4>
</div>

Displays content that either encourages the user to signup, or to return to the style hub, depending on whether the user has signed up.

<pre class="language-javascript">
  <code class="language-javascript">
  Dressipi.initPromoWidget(domElement, {
    host: "dressipi-production.example-clothing.com"
  });
  </code>
</pre>

<div id="Searchwidget">
  <h4>Searchwidget</h4>
</div>

Displays a set of search results to a query defined by the Dressipi stylists (for example, dark coloured evening dresses).

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initSearchWidget(domElement, {
      id: "search-label",
      host: "dressipi-production.example-clothing.com"
    });
  </code>
</pre>

The search labels configured for you will communicated to you by Dressipi.

<div id="PLPWidget">
  <h4>PLP Widget</h4>
</div>

Displays a set of recommendations according to a plpType property, typically on a product listing page. This should match the data recorded by the PLP tracking.

You must tell Dressipi which plpTypes you will be using ahead of time so that we can configure them to display the correct product type for the corresponding PLP. This can be plain categories or more complex constructions (eg “Evening Dresses”)

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initPlpWidget(domElement, {
      plpType: "Dresses",
      host: "dressipi-production.example-clothing.com"
    });
  </code>
</pre>

<div id="HomePageWidget">
  <h4>Home Page Widget</h4>
</div>

Displays a carousel of recommended garments, for use on the home page or other pages where there is no information to filter the request by

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initHomeWidget(domElement, {
      host: "dressipi-production.example-clothing.com"
    });
  </code>
</pre>

<div id="Trackingpseudo-widgets">
  <h3>Tracking pseudo-widgets</h3>
</div>

The tracking calls present a similar interface to the widgets, but do not display any content to the user

<div id="PDPtracking">
  <h4>PDP tracking</h4>
</div>

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initTracking(null, {
      productCode: "XYZ123",
      mobile: false,
      host: "dressipi-production.example-clothing.com"
    });
  </code>
</pre>

If deployed only on desktop, the mobile parameter can be omitted. It should be true for mobile devices, false for desktop or tablet.

<div id="PLPtracking">
  <h4>PLP tracking</h4>
</div>

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.initPlpTracking({
      listing: {
        items: [{id: "some_id1"}, {id: "some_id2"}, ...]
        filters: []
      },
      page: {
      breadcrumb: [ ... ] //an array of strings describing the current page's
                          // position in the hierarchy,
                          //for example ["women","dresses","on-sale"]
    }, {host: "dressipi-production.example-clothing.com"})
  </code>
</pre>

The payload should be a javascript document describing the page the user is looking at. Ideally this should include category information & identifiers for any products shown.

We can generally extract this from a universal variable (<a target="blank" href="http://docs.qubitproducts.com/uv/">http://docs.qubitproducts.com/uv/</a>) if present, if not we’ll work with you to determine the format of this based on what is possible.

<div id="Orderconfirmationtracking">
  <h4>Order confirmation tracking</h4>
</div>

<pre class="language-javascript">
  <code class="language-javascript">
    Dressipi.submitData(
      {
        transaction: {
          order_id: "12345689",
          line_items: []
        },
        user: {},
        host: "dressipi-production.example-clothing.com"
      },
      {}
    );
  </code>
</pre>

The payload should be a javascript document describing the order that has been placed. Assuming that purchase data files are being sent, the only information that needs to be included is an order identifier (that should match what is in the purchase data files)

We can generally extract this from a universal variable (<a href="http://docs.qubitproducts.com/uv/" target="blank">http://docs.qubitproducts.com/uv/</a>) if present. If not we’ll work with you to determine the format of this based on what is possible.

<div id="HomepageTracking">
  <h4>Homepage Tracking</h4>
</div>

For use in conjunction with the homepage widget. Append a script tag to the page with the path /widgets/track_homepage?nocache=
For example:

<pre class="language-javascript">
  <code class="language-javascript">
    var script = window.document.createElement("script");
    var head = window.document.getElementsByTagName("head")[0];
    script.src =
      "https://dressipi-production.example-clothing.com/widgets/track_homepage?nocache=" +
      new Date().getTime();
    script.async = true;
    head.appendChild(script);
  </code>
</pre>

<div id="GoogleTagManagerExamples">
  <h3> Google Tag Manager Examples </h3>
</div>

These samples show how to use google tag manager to trigger Dressipi tracking and widgets. They are given as a reference and can be tailored to your needs (for example a different mechanism for loading the script might be used).

<div id="PDPTracking-gtm">
  <h4> PDP Tracking </h4>
</div>

This assumes that the following GTM variables exist:

- <em>productID</em>: the identifier for the viewed product (and that matches the identifiers in the feed). Generally this identifies the product and its colour. Confirm with Dressipi which identifiers are available.

We will confirm the script url to use.

<pre class="language-javascript">
  <code class="language-javascript">
    &lt;script type="text/javascript"&gt;
        var importScript = (function(oHead) {
            return function(sSrc, fOnload) {
                var oScript = document.createElement("script");
                oScript.type = "text/javascript";
                oScript.async = true
                if (fOnload) {
                    oScript.onload = fOnload;
                }
                oHead.appendChild(oScript);
                oScript.src = sSrc;
            }
        })(document.head || document.getElementsByTagName("head")[0]);
        var callback = function() {
            Dressipi.initTracking(null, {
                productCode: {{ productID }},
                host: "dressipi-production.example-clothing.com"
            });
        }
        if (typeof window.Dressipi !== 'undefined') {
            callback();
        } else {
            importScript("https://example.com/assets/widget_loader.js", callback)
        }
    &lt;/script&gt;
  </code>
</pre>

<div id="OrderConfirmationTracking-gtm">
  <h4>Order Confirmation Tracking</h4>
</div>

This assumes that the following GTM variables exist:

- <em>orderID</em>: A unique identifier for the order, that matches an identifier present in the transaction files sent to Dressipi.

<pre class="language-javascript">
  <code class="language-javascript">
    &lt;script type="text/javascript"&gt;
    var importScript = (function (oHead) {
      return function (sSrc, fOnload) {
        var oScript = document.createElement("script");
        oScript.type = "text/javascript";
        oScript.async=true
        if (fOnload) { oScript.onload = fOnload; }
        oHead.appendChild(oScript);
        oScript.src = sSrc;
      }
    })(document.head || document.getElementsByTagName("head")[0]);

    importScript("https://example.com/assets/widget_loader.js", function(){
        Dressipi.submitData({
          transaction: {
            order_id: {{orderID}},
            line_items:[],
            host: "dressipi-production.example-clothing.com"
          },
          user: {}},
          {})
    })
    &lt;/script&gt;
  </code>
</pre>

<div id="PLPtracking-gtm">
  <h4>PLP Tracking</h4>
</div>

This assumes that the following GTM variables exist:

- <em>plp_type</em>: A string identifying the category displayed, as agreed with Dressipi.
- <em>plp_items</em>: An array of objects, each with an id property that is the identifier for the product displayed. Can be the empty array if problematic.

<pre class="language-javascript">
  <code class="language-javascript">
    &lt;script type="text/javascript"&gt;
    var importScript = (function (oHead) {
      return function (sSrc, fOnload) {
        var oScript = document.createElement("script");
        oScript.type = "text\/javascript";
        oScript.async=true
        if (fOnload) { oScript.onload = fOnload; }
        oHead.appendChild(oScript);
        oScript.src = sSrc;
      }
    })(document.head || document.getElementsByTagName("head")[0]);

    var callback = function() {
      var category = {{plp_type}};
      var items = {{plp_items}}
      Dressipi.initPlpTracking({listing: {items: items, filters: []}, page: {breadcrumb: [category]}}, {host: "dressipi-production.example-clothing.com"});
    }

    if(typeof window.Dressipi !== 'undefined'){
      callback();
    }else{
      importScript("https://example.com/assets/widget_loader.js", callback)
    }
    &lt;/script&gt;
  </code>
</pre>

<div id="PLPWidget-gtm">
  <h4>PLP Widget</h4>
</div>

This assumes that the following GTM variables exist:

- <em>plp_type</em>: A string identifying the category displayed, as agreed with Dressipi.

It also assumes that:

<pre class="language-javascript">
  <code class="language-javascript">
    $('.plp-widget-parent')
  </code>
</pre>

evaluates to the DOM element the widget should be placed into

<pre class="language-javascript">
  <code class="language-javascript">
    &lt;script type="text/javascript"&gt;
    var importScript = (function (oHead) {
      return function (sSrc, fOnload) {
        var oScript = document.createElement("script");
        oScript.type = "text\/javascript";
        oScript.async=true
        if (fOnload) { oScript.onload = fOnload; }
        oHead.appendChild(oScript);
        oScript.src = sSrc;
      }
    })(document.head || document.getElementsByTagName("head")[0]);

    var callback = function() {
      var category = {{plp_type}};
      var container = $('.plp-parent')
      Dressipi.initPlpWidget(container[0], {plpType: category, host: "dressipi-production.example-clothing.com"});
    }

    if(typeof window.Dressipi !== 'undefined'){
      callback();
    }else{
      importScript("https://example.com/assets/widget_loader.js", callback)
    }
    &lt;/script&gt;
  </code>
</pre>

##### Homepage Widget

This assumes that:

<pre class="language-javascript">
  <code class="language-javascript">
    $('.home-widget-parent')
  </code>
</pre>

evaluates to the DOM element the widget should be placed into

<pre class="language-javascript">
  <code class="language-javascript">
    &lt;script type="text/javascript"&gt;
    var importScript = (function (oHead) {
      return function (sSrc, fOnload) {
        var oScript = document.createElement("script");
        oScript.type = "text\/javascript";
        oScript.async=true
        if (fOnload) { oScript.onload = fOnload; }
        oHead.appendChild(oScript);
        oScript.src = sSrc;
      }
    })(document.head || document.getElementsByTagName("head")[0]);

    var callback = function() {
      var category = {{plp_type}};
      var container = $('.home-widget-parent')
      Dressipi.initHomeWidget(container[0], {plpType: category, host: "dressipi-production.example-clothing.com"});
    }

    if(typeof window.Dressipi !== 'undefined'){
      callback();
    }else{
      importScript("https://example.com/assets/widget_loader.js", callback)
    }
    &lt;/script&gt;
  </code>
</pre>

<div id="APIexamples">
  <h3>API examples</h3>
</div>

As an alternative to using the Dressipi javascript to embed an iframe, you can call the underlying APIs directly. This can be done as a JSONP or cross domain ajax call (as described at <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS" target="blank"> https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS </a>). If using CORS you will need to provide Dressipi with the origins making API calls so that we can whitelist them. If using CORS, the withCredentials property must be set on the XMLHttpRequest object. For example:

<pre class="language-javascript">
  <code class="language-javascript">
    $.ajax({
      url: ...,
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true
    });
  </code>
</pre>

Please see the OpenAPI formatted documentation for more extensive information on this api

<div id="OutfitsWidget">
  <h4>Outfits Widget</h4>
</div>

###### Request Details

<pre class="language-html">
  <code class="language-html">
    Path: /api/items/{itemid}/related
  </code>
</pre>

##### Parameters:

- <em>itemid</em>: The product code to fetch data for (mandatory)
- <em>methods</em>: An array of strategies that should be used. The default is ["outfits", "similar_items"]. This attempts to return outfits first and then similar items if no outfits found
- <em>try_all_methods</em>: If set to 1, requests that results for all methods are returned instead of the first successful one

The parameters should be sent as URL encoded query parameters, eg:

<pre class="language-html">
  <code class="language-html">
    /api/items/ABC123/related
  </code>
</pre>

The response is a JSON document with the following structure:

<pre class="language-javascript">
  <code class="language-javascript">
    {
      "event_id": "57fe1f6f44b3a71e07000018", // use this when reporting events
      "outfits": [{
          "content_id": "57fe1f6f44b3a71e07000019", // use this when reporting events
          "occasion": "creative_work",
          "items": [{
              "raw_garment_id": "3240858",
              "garment_id": "ABC-123", // these are ids as found in the feed supplied to dressipi
            },
            {
              "raw_garment_id": "3199685"
              "garment_id": "ABC-456",
            },
            {
              "raw_garment_id": "3158918"
              "garment_id": "ABC-789",
            }
          ]
        }, //repeated for each outfit
      ],
      "garment_data": [
        { // the keys here are the garment_id from above
          "id": 123456,
          "feed_image_urls": [
            "http://example.com/images/some_image.png" // image as supplied in product feed
          ],
          "brand_name": "A Brand",
          "name": "Sequined Mock Top",
          "price": "14.25",
          "old_price": "25.00",
          "url": "http://example.com/images/some_image.png",
          "rating": null,
          "garment_category_id": 6,
          "image_url": "//d3q79gj8wzq668.cloudfront.net/garment-123456-4264110.jpg", // Dressipi generated / hosted thumbnails
          "thumbnail_image_url": "//d3q79gj8wzq668.cloudfront.net/thumbnail-123456-4264110.jpg",
          "product_code": "ABC123", //The retailer specific product code
          "why": []
        },
        //repeated for each garment
      ]
    }
  </code>
</pre>

#### Response Data

The following top level keys should be present:

<em>event_id</em>: An opaque event identifier. Use this when sending events back to dressipi

<em>outfits</em>: The returned outfits. Each element is a document with the following keys:

- occasion: the occasion for the outfit
- items: the items that make up the outfit. These are documents with a single property, the Dressipi garment id
- content_id: an identifier used when sending events back to Dressipi

<em>similar_items</em>: The returned similar items. An array of documents with a single property: the Dressipi garment id.

<em>garment_data</em>: A document containing data about each garment used in an outfit or returned as a similar item. The keys are the Dressipi garment ids. This is optional if not required

<div id="Tracking">
  <h4> Tracking </h4>
</div>

If a user clicks on a garment displayed by the widget a request should be made to the Dressipi events api. This allows us to tracking performance of the widget and underpins attribution tracking.

This is done by making a POST request to /events with the following payload, serialised as a url-encoded form.

<pre class="language-javascript">
  <code class="language-javascript">
    {
      event: {
        product_code: "ABC123", //your identifier for the clicked garment
        event_type: "quickview",
        garment_id: "123456", //the Dressipi garment id
        root_event_id: "57fe1f6f44b3a71e07000018" //the event id returned in the api response
        content_id: "57fe1f6f44b3a71e07000019 //the content id for where the event took place
      }
    }
  </code>
</pre>

For example, with JQuery:

<pre class="language-javascript">
  <code class="language-javascript">
    $.ajax({
      url: '//example.com/events',
      crossDomain: true,
      dataType: 'json',
      data: data,
      method: 'POST',
      xhrFields: {
        withCredentials: true
      }
    });
  </code>
</pre>

The events api returns an empty 200 response on success.
