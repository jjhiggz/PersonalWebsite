# Personal Website
This website is my personal website. It is built in vanilla JS, HTML, and CSS and utilizes a single page implementation with different parts of the page being conditionally rendered. 

## Topics
Each of the topics was conditionally rendered to the application using Javascript
- ### About     
    ![About Page Demo](https://github.com/jjhiggz/PersonalWebsite/blob/master/gifs/Personal_Website_Walkthrough%20(1).gif)
    
    The about page contains information about me. It's meant to read like a resume but contain information that is a little bit less formal. At the top of the page I have included a slideshow with pictures of me.
  


- ### Projects
    ![Projects Page Demo](https://github.com/jjhiggz/PersonalWebsite/blob/master/gifs/Personal_Website_Walkthrough%20(3).gif)
    
    The project page page contains information about all of the projects I am involved with or personally working on. As I grow as a software developer so will this section. 

- ### Skills
    ![Skills Page Demo](https://github.com/jjhiggz/PersonalWebsite/blob/master/gifs/Personal_Website_Walkthrough%20(4).gif)
    
   The skills page contains information of all the non-software related skills that I have built up in the past, including alot of Music/Videography related things.

- ### Contact
    ![Contact Page Demo](https://github.com/jjhiggz/PersonalWebsite/blob/master/gifs/Personal_Website_Walkthrough%20(5).gif)
    
    The contact page just contains some simple Icons to click on in order to get in contact with me on linkedinl, Github, or on Medium.
    
## Responsive Web Design
![About Page Demo](https://github.com/jjhiggz/PersonalWebsite/blob/master/gifs/Personal_Website_Walkthrough%20(2).gif)

This was my first project incorporating a responsive web design. Because the design was fairly simple, I was surprised at just how easy it was to incorporate an elegant responsive design. 

## Greatest Challenge / Lesson Learned

 Making a conditionally rendered application only using Javascript not only challenged me greatly, but was very insightful as to the "why" behind frontend applications. After a couple of days slaving away to accomplish fairly simple functionality, I developed a much greater apprecieation for the following things.
 
 1) Render cycles remove the complexities of event-driven logic. 
 
As I built my app I realized that when you try to reactively design a website in vanilla Javascript you wind up having to rewrite a lot of code involving working with the dom. For example if you want to change one slide to another, you have to make sure you select and remove the previous slide, figure out what you want your new slide to be. Select the previous parent element, and insert the new slide into that parent element. Furthermore if your new slide has different properties, perhaps you want to switch between videos instead of pictures, then the compatibilty of the same code working becomes questionable. 

When you are working in a framework like React or Vue, instead of all that logic, a render cycle simply makes sure that each component is constantly checking for updates to state and your logic becomes alot simpler. 

2) Templating Libraries make life way easier

Whether it be Vue, React, Angular, or HandlebarsJS, all of these templating languages can save you a significant amount of time by removing the need to query the dom at all. The logic of inserting templating language instead of querying allows for a much more modular approach. In doing so this reduces the amount of code that is dependent on other code in your project

3) Node Based Projects have more file structure freedom

Your browser can't naturally import/ export files modularly like node can. As a junior developer, I took for granted libraries like webpack that add this behavior. React and Vue both give you these types of libraries for free.  As a result, in vanilla JS, my javascript code was all lumped into one file. In the future I'd like to explore webpack, and possibly build my own framework to better understand the inner workings of the ones that I get the privilege to use. 

## Future of this Project

While I consider this project a great learning experience, ultimately I'm going to ditch this version of my personal website and start from scratch. I will likely either use a framework like Vue, or use a more lightweight templating language like handlebarsJS. 

The reason why is that as I build up my portfoliio over the years, I'd like a simpler interface for adding new projects. The way that the code is set up now makes it a pain in the butt to add projects. It requires too much manual work. 

I will likely create a new website that has both a front-end and a backend thus allowing me to have some sort of backend website where I can easily add and remove projects. I think that it will be good practice to build as well. 
