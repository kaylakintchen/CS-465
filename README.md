# CS-465 Fullstack 1 

This project uses a combination of Express HTML, JavaScript, and a single-page application (SPA). Express HTML is simple and allowed me to quickly create a structure, however JavaScript added interactivity to the project, allowing users to interact with and navigate throughout the page. The SPA was built with Angular which features modular components in the code making the code easier to manage and giving logged in users access to CRUD functionalities within the trips database. 

For the back end, I used a NoSQL MongoDB database because it is easier to navigate changes in data structure than SQL databases. 

JSON tied the front end and the back end together allowing for a smooth data exchange because it's a data format, whereas JavaScript is a programming language. 

During development I refactored some of the code to add additional logs to assist with troubleshooting. I also refactored some of the pages to return to trips-list rather than an empty homepage after updating and adding trips. Because the code was modular, I was able to make these amendments without touching unnecessary files.

For testing I used Postman to assist me in understanding errors I was seeing while navigating the webpage in the terminal. By keeping an eye on the terminal while clicking around in the website I was able to catch things that weren't functioning as intended so I was able to further explore them by checking the endpoints in Postman which allowed me to see much more information in regards to the GET, PUT, and POST methods. I also had to refactor my code to include security, making sure that only logged in users could alter the database.

This course helped me explore full stack development and I learned to create an web application I can add to my portfolio. I learned a lot of new technologies including Angular, Express HTML, and Postman for testing, while I was able to brush up on my skills with MongoDB.
