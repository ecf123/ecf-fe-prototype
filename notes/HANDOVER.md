# EFC- NIUE Handover Notes

# Project Overview

As part of the client project section of the Nieu cohort, we have been tasked with designing and building a training app for the financial services industry. The aim of the app is to help students from lower socio-economic backgrounds find pathways into careers in the banking sector. Major financial organisations have provided online courses tailored towards different business areas such as Risk, Commercial and Investment banking, Asset Management, Wealth Management etc. The app provides pathways in skills aligned with these business areas that can be progressed through via a series of challenges and quizzes. After each stage, points are earned that can be redeemed against a list of rewards with the aim of incentivising the students to progress through the levels. Each course completed unlocks the next level until all are completed.

Niue have built the front end of this app using React, working in pairs to create the numerous components required to build a working prototype. Dummy data has been used in the form of JS data files to provide the required data to produce a functioning app. Besides the use of Firebase as an authentication tool, no 3rd party data or API’s have been used in the prototype.

# Folder Structure

The src folder contains the following:

Assets: each of the images used in the website is stored in the images folder. Variables and mixins files are kept in the Styles folder. The dummy data files are in the data folder and the video's used in the site are kept in the video folder.

Components: all of the website’s reusable UI components. Each of the components has its own folder with .jsx and .scss files within.

Containers: the files are either pages, or files that link together multiple components. Each of the containers has its own folder with .jsx and .scss files within.

Context: contains the authenticated user state which is passed to the rest of the website. The Firebase SDK is used to handle the authentication in this context file.

firebase.js: contains the firebase SDK config to setup authentication.

# App Features & Pages

This is a breakdown of all the pages and features on our web app.

# Welcome Page

The first screen a user will be greeted with is the welcome page where the user will be invited to either register or sign in. This process currently accepts log in with an email and password but can be extended to utilise google or apple login protocols.

# Home

The home page sets out a summery of the main routes for a user to explore at a high level. In this example, these are "Financial Forest" and "Business Bonanza".

Below this, there is a summery page of news articles the user may find useful. These are categorised in to "All", "Finance", "Business", "Design", "Digital Marketing", "Engineering" and "Programming".

# Pathways

The "Pathways" route takes the user on to lessons on their chosen topic, on the example showing in the figma designs, this can be "Financial Forest", "Business Bonanza", "Divine Design", "Magic Marketing", "Coding Camp" or "Epic Engineering". The only pathway to be fleshed out in the first phase was the Financial Forest route.

# Skills Tree

The Skills tree page shows a mapped layout to the next topic of learning as sponsored by a major financial institution. The first level is sponsored by Barclays. Once the user successfully passes this level, the next levels are unlocked allowing the user to select from courses provides by Goldman Sachs, HSBC or Halifax. On successful completion of the HSBC course, the user is granted access to final level of course sponsored by Santander. On completion of this final level, the user is presented with a "Congratulations" message for successfully completing all levels.

Before starting each section, the user is presented with a pop up box providing a brief overview of the course content

# Course Overview

The user navigates to the course overview from the skills tree. The cards are filtered dynamically using the menu bar. Displaying either lesson, challenge or additional info related content.

# Lesson Overview

When the user is on the course overview and clicks on a lesson card, they are taken to the lesson overview page. The lesson overview contains a view and lesson content.

# Challenge/ Quiz

When the user is on the course overview and clicks on a challenge card, they are taken to the challenge page. The challenge page is a multiple choice quiz. The cards change dynamically, depending on whether they are the right or wrong answer. A user score is calculated as a percentage and displayed in the end-screen.

# Marketplace

The marketplace page features rewards the user can earn by completing courses on the app. Some experiences may be locked depending on how many points the user has. The page is made up of marketplace cards which when clicked take you to the marketplace index which provides more information about the rewards.

# Articles

This page contains a list of articles that can be searched or filtered. An article can be bookmarked and once clicked on it will take you to the article index where you can read the full article.

# Outstanding Bugs

- The project is not connected to any back end so all of the data has been mocked.
- Only designed for a mobile view point.

# Resources

- [Live Site](https://ecf-future-hub.web.app/)
- [Github](https://github.com/nology-tech/niue-ecf)
- [Trello Board](https://trello.com/b/vXkrNAAj/ecf)
- [Wireframes](https://www.figma.com/file/ImHUEmoFd2UP7xDi1WKHCe/ECF---Future-Hub?node-id=376%3A644)
- [Component Tree](https://app.mural.co/invitation/mural/niueclientproject8578/1656342195507?sender=u0be897b7931cfb00fb096975&key=3719cda3-f1d6-40b9-9d69-4a52d3cc588d)
