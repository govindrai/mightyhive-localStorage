# MightyHive Coding Challenge

## Requirements
---
Build an HTML page or app that: 

1. Shows a user an image of either a red or blue ball upon visiting the page. This should be random, with a 50/50 split of users.

2.  Determine whether the user saw a red or a blue ball, and the next time a user visits the page shows them the same color ball of what they saw previously.

3.  This cookie should also record how many times a user has seen each color of ball. You should be able to provide a report on users and number of times they saw each color ball.

## Solution
___ 
Use the DOM API to record data using browser cookies and render view based on data stored in cookies. Please see comments in js.js for code explanations and code references.

### Typical Rendered View: 
![Typical View](https://mightyhive.herokuapp.com/view.png)

## Technologies Implemented ##
- JavaScript (ES6)
- CSS
- HTML

### Running the Application ###
Unfortunately opening the file from your local computer will not work in Chrome as:

Cookies are *strictly* a HTTP mechanism as per RFC 2109. There should be no
reasonable expectation for them to work for protocols other than HTTP, much less file:///, and it is not clear what their behavior should be, and what rules of security compartmentalization should apply.

In the past you could open ​C​hrome with the --enable-file-cookies flag but it seems that the --enable-file-cookies flag has been removed for all platforms except android.

We bypass this issue by using the localStorage WebAPI since we are not actually storing the view counts on a server, but if were to {theoretically} do so, we would want to continue using cookies instead of the localStorage API.

Code utilizing cookies has been preserved as comments.

## Author
Govind Rai