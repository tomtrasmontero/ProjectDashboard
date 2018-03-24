# ProjectDashboard
Mock Dashboard - A company dashboard project focused on having a back-end microservice using Docker and Netflix Zuul client.  Providing a different type of architecture for scaling vs monolithic architecture.

Technologies Used:
Front End: React, Semantic-UI, High Charts.
Backend: Java, Spring, Docker, Netflix Zuul, Netflix Eureka. 

## A clear problem statement from the client
As an Owner, I want to be able to see a quick summary in regards to the health of my company and quickly glance kpi's.

## Solution
A dashboard with all financial metrics and HR data.  This will provide all the required data with live update in regards to
the company's activity.  

In order to scale the system, we can leverage microservice to help modularize how the data are being organize.  This will help
with different application being able to fetch certain data quickly.

# How to Run
clone repo and run the following command to start up docker and setup the microservices:
- *docker-compose up*

 On the Front end, from the root directory:
- *cd clientdashboard*
- *yarn*
- *yarn start*
