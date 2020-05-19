# Vonnue-Netninja-HtmlCss

---Net Ninja---

## Tutorial :1
# HTML & CSS Crash Course Tutorial #1 - Introduction
Total Time:19:59


* HTML used to structure content on the web page 
(Images,text,forms etc)
* Structure content using HTML tags


 ```
 <p>content</p>==Paragraph Tag [Time 3:22]
 <a> link </a> ==anchor Tag
 <img> == Image Tag (No clsoing tag)
 <head> tag -- This is for page information like Title.
 <title> tag -- List in the top
 <body> tag --  This is for visible page conten
 ```

* Add a local development server foe live refresh==Add extension [15:40]
* Inspect the page [17:45]

## Tutorial: 2
# HTML & CSS Crash Course Tutorial #2 - HTML Basics
Total Time :19:51

Tags
```
<strong> </strong> ==Make the letter bold. [2:20]
<em> </em> (empasise)== Make the content italics.
<small> </small> == Make the letter small.
<h1> </h1> == Heading tag (There are six diffrent types
<ul> </ul == Unordered list (Put bullet points in list) [4:50]
**** <li> </li> == single list item.
<ol> </ol> == Ordered list. (Put numbers infront of list)
**** <li> </li> == single list
<br> Break the line (No closing Tag)
<hr> Horizonal tag (No closing tag)
<span> </span> This tag will apply style in inline emlement.

Tags and Attributes.

<img (Tag) src (attribute) alt (attribute-- No visual effect) [10:51]
   *eg ; <img src="image.png" alt="a picture">
<a (Tag) href (attribute)> </a> (anchor tag)--Adding Link
   *eg ; <a href="www.sample.website.com> samplewebsite </a>
<blockquote (Tag) cite (attribute) --Quote the line from a link.
   *eg ; <blockquote cite="Website"> Line here </blockquote>
<p style="organge"> Line </p>
```

## Tutorial 3:
# HTML & CSS Crash Course Tutorial #3 - HTML Forms
Total time 31:54

**Tag and Attributes.**
```
<form (Tag) action (attribute)--Not important now.
<input (Tag) type = "text" id = "username"> (Username, search etc)
<label> (Tag)
```
**Notes:**
 ```
 <input> tag contains "type "attribute type of input field. eg (text,email,password)
 "id" attribute will identify the individual tag
  1.eg; <label for="lbl-name"> Enter the name </label>
        <input type="text" id="lbl-name" placeholder="Enter your name">
 ```
 **radio button**
``` eg; <input type= "radio" id="rad-age" name="gender1" value="0-25"> If it is name not need to give the "value" attribute.
    <label for="rad-age"> 0-25 </label>
```
**Notes:** 
* Input is a tag inside form tag
* Case should be same
* If we write two forms the it will separate the space
* The name attribute is important when using radio type because it helps group radio inputs

## Tutorial 4:
# HTML & CSS Crash Course Tutorial #4 - CSS Basics

**Important usage**
```
link -a link between a document and an external resource
usage -link rel="stylesheet" href="style.css" /
rel - specify the relationship between the two documents.
href - href attribute specifies the URL of the page the link goes to.
units in css - px,em,%,cm,ex,in,am,pc,pt etc..
text-decoration - values(underline,none,line-through)
font family
text align
line height
letter spacing
column-count
border
border-width: px;
border-color: ;
border-style: ;
```
## Tutorial 5:

# HTML & CSS Crash Course Tutorial #5 - CSS Classes & Selectors

**Notes**
* Class = We can add same class to diffrent element in a page.
   (We can make text color font etc)
*: class 1 : class="success">
  : Multiple classes : class="success.feedback"
* inner selector - div p{we can style here for p element that inside a div}
* attribute selector - a[href]{we can style here for a tag have href attribute}
* text-transform - for text transforming
* a[href*="google"] {we can style here for an a tag its href value include text 'google'}
* HTML element can inherit CSS properties thar are applied to thier parent property.
