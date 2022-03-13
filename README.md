# FOODBack

### An app for giving feedback on St. Olaf food services.
##### By Areeba Khan, Victoria Nguyen, Jayel Versoza and Inna Sahakyan

Final project presentation can be found here:
- https://docs.google.com/presentation/d/1JjxOXfBY5wo2_2gzDUrPgQe12v1FRNPJR9jXR2Aee1U/edit#slide=id.g10963e407b9_0_10

Created in Expo, using NodeJS, PostgreSQL, RESTful API, and React Native.

## Features 

### Login/register screen

> Allows user to log in using **username** and **pin** that the user previously registered with. In the future, we plan on adding Google API to only allow St. Olaf students to log into this app to provide food feedback. 

### Home screen 

> Displays Caf's rating, a bar of green and red, indicating the number of positive or negative comments. This is based on each comment and the amount of upvotes it has. I.e. the more the negative comments/upvotes, the larger the red bar than green bar.  

### Comment section wall

> This is the main feature of the app. It includes a **carousel of food images**. Ideally, if we create a client side app, we would allow the school to add their own images to this carousel.

> Next there is the comment section that loads upon loading the page. We have a **reload button** which can be used to get the most updated information on dynamic votes and comments.

> For the comments, you can indicate weather it is a **positive comment** or a **negative comment** by pressing on the checkbox. This will allow the database to do it's calculations on the Caf ratings displayed on the home page. After posting the comment, it will probbaly go to the bottom because it's older in age. In the future we'd want to implement a way to sort comments by upvotes or by time posted. 

> Additionally for the comments posted, a user can **delete** their own comments whenever they please. 

> The **upvoting and downvoting** feature works flawlessly. A user can upvote or downvote their own comment or others comments to display agreement or disagreement respectively. Every users' votes are preserved so after they log out and log on again, they are displayed. 


In the future, it would be interesting to add replies to a comment. Discord does it **recursively**, so it sounds super interesting to implement this in the future. 

### Photo Section wall

> Like the comment section, users can **post** caf food photos here and also **delete** them as they please. 

### Caf flirts wall (coming soon)

> This is a comedic yet an interesting thing to add. It would be where users anonomously create a "flirt" message to someone they see at the cafeteria. We have something like this in the St. Olaf Flirts Facebook groun, so it would totally be a hit if implemented on here. 

