# Front-end Nanodegree Project - 6 from Udacity 
# Feedreader Testing

## Overview
In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

View a live version [here](https://luzr.github.io/nanodegree-feedreader/) (make sure to load unsafe scripts).

## How to run
Clone or download the .zip repo to your desktop and index.html.

- Scroll to the bottom of the page and look for specs bar It should be green and say "5 specs, 0 failures". 
![passing test][1]

- If there are any failures there will be a red bar and it will say how many failures in it. 
 - If there are any failures read the error below the test suite to see what’s causing it ![failing test][2]

## Tests
The tests that are run against index.html are in the feedreader.js file in \jasmine\spec\ folder.

- The allFeeds variable isn't empty and is defined.
- The menu element is hidden by default and will change when clicked.
- The loadFeed function is called and completes its work properly.
- The loadFeed function loads new content.


  [1]: https://i.imgur.com/net1Pxb.png
  [2]: https://i.imgur.com/M3z7zss.png