# Actor's Portfolio Site
This is a portfolio site designed and coded to a brief for actor Isobelle Pippin. You can visit the live site at [isobellepippin.co.uk](isobellepippin.co.uk)

## The Process
Isobelle and I sat down to talk through the aims of her portfolio site and the content she wanted to showcase. Once this was complete I set about creating a rough sketch on paper of the site's UI and it's flow before putting the structure together in HTML and CSS. 

At this point, with the basic structure of the site, I presented the progress to Isobelle who provided feedback. Using the feedback I reworked certain design elements and then used Javascript to add in some nice touches, such as the changing headshot photograph. 

Next was to incorporate a CMS so that Isobelle could edit the content of her site without needing to go through me. I had not included a CMS in any of my previous sites so this was a new challenge. After some research I settled of *NetlifyCMS* as I have found Netlify's hosting service, and related add ons, to be efficient, reliable and user friendly in the past. It didn't take me long to get to grips with it and set up the required inputs, as well as using *Netlify Identity* to authorise Isobelle as an editor for the site.

To make full use of the Netlify eco-system, the various contact forms on the site use *Netlify Forms* to filter out spam and take in correspondence, alterting Isobelle to new contacts via email notification.

Finally I presented Isobelle with her site, hosted on Netlify, which she has updated with the relevant content. I continue to maintain the site.

## The Technology
This is a static HTML site built from scracth with custom CSS. *NetlifyCMS* stores it's saved content as JSON files in the GitHub repo and I then use Javascript to make internal fetch calls to that data and display it where it is needed throughout the site. Thanks to Netlify's continuous build functionality, everytime the GitHub repo is updated Netlify triggers a new build incorporating any fresh edits Isobelle has made instantly.