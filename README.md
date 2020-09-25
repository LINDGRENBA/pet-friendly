<h1 align = "center"> Pet Friendly

<h2 align = "center"> Developer : Brittany Lindgren
<br>
<br>

<h3 align = "center"> <u>Description</u>

This app will make it easier for pet owners to travel with their pets. Searching for various pet friendly places in your travel destination can take forever. Here, we collect all of that data for you, to make planning your next vacation a smoother experience. We know you don't want to leave your loved one in a hot car or with thatno further notes at this timee not so responsible friend that you don't really trust. With Pet Friendly at your fingertips, you can stop worrying and start relaxing, with your pet by your side. 
<br>
<br>
<br>

## <p align = "center">  <u>**Project Proposal**</u>
|  |  | 
| ----- | ----- | 
|  Target demographic  |  Pet owners, people who can't leave their pet at home, someone who has their vacation planned and finds out last minute that their friend or pet sitter can't take care of their pet for them, someone who has a family emergency and has to leave quickly with their pet. User ages most likely between 20 and up - old enough to own a pet autonomously  | 
| What problems does this app solve  | Looking for pet friendly places takes a long timee, there are many different hotels or vacation services and some allow pets while others do not, users would have to look at each separate place individually and then use each location's filter to find a pet friendly option, then to compare prices would have to repeat that process. During a vacation, a user may not be sure if a certain shop is pet friendly or not. If a user does not have a friend or partner to stay with their pet, it may be unsafe for them to leave their pet outside, or they may not even have that option depending on the pet. Pet friendly will minimize timee and frustration spent searching for options and allow users to see if there are pet friendly businesses nearby so that they don't have to wonder whether or not they can take their pet inside with them.  |
<br>
<br>

### <p align = "center"> **MVC**
| Minimum Viable Product | What technologies or tools will be needed to achieve this MVP | Notes and Considerations |
| ----- | ----- | ------ |
|  Users should be able to search by location and receive results for pet friendly restaurants, shops, hotels, etc.  |  Custom API / Pre-existing API (Google Maps, AirBnB, etc.) / .NET-Core backend to handle fetching from API  |  Integrating several APIs in one project may be complex. May need to begin with a single custom faux-API created as proof of concept and integrate other API as stretch goal.  |
|  Users should be able to create a 'favorites' list and save search results to the 'favorites' list  |  Will need a database - MySQL, Firebase / Firestore or MongoDB  |  no further notes at this time  |
|  Users should be able to leave reviews / read reviews about how pet friendly each location is - this will help take the guesswork out of choosing a place to stay / eat / shop, etc.  |  Register / Login capabilities so that users have full CRUD functionality for their own reviews and read only for other users' reviews. Use React / Redux frontend  |  no further notes at this time  |    
<br>
<br>

### <p align = "center"> **Stretch Goals**
| What additional features will be added | What technologies or tools will be needed | Notes and Considerations |
| ----- | ----- | ------ |
|  Map display of a search area  |  Google Maps API / Google Places API  |  limited number of API uses, then charged for each use  |
|  Use IP address to limit number of reviews per day or searches per second  |  ?  |  no further notes at this time  |
|  Infinite scroll or paginations to limit number of search results displayed  |  JavaScript / jQuery for infinite scroll or .NET-Core for pagination  | no further notes at this time  |
|  Email verification for new users  |  Firebase - custom email action handlers  |  no further notes at this time  |
|  Sign in with Google or Facebook account  |  Facebook and Google Authentication  |  no further notes at this time  |
|  Display login / register in a modal  |  CSS or Sass  |  no further notes at this time  |
|  Style the app  |  CSS or Sass  |  no further notes at this time  |
|  Users can add additional search parameters. For example `traveling with dog` and `require wheel chair access` or add more specific information about what type of pet they're traveling with, such as `dog` or `boa-constrictor`  |  Complex search queries  |  Firebase / Firestore may work well for MVP, but has limited query capabilities - need to research which databases work well with React and have complex query capabilities  |
|  Travel section where users can specify `1. Where they're traveling, 2. How they're getting there` and `3. What type of pet they're traveling with.` The user will then be shown or directed to information about what they need to know to successfully travel with their pet  |  ?  |  no further notes at this time  |
|    |    |    |

### <p align = "center"> **Other Considerations**
1. What type of license should I use if I want to maintain ownership of this application - look into licensing, re-read MIT license terms

<br>
<br>

## <p align = "center">  <u>**Process and Decision Making**</u>
1. Read Documentation, decide which version of React to use
2. Will use React with Redux + ASP.NET Core 
3. Create new application using `dotnet new reactredux -o Pet-Friendly`
4. 
5.

Timeline
1. 8:00 am - use npx-create-react-app to set up application with gitignore and readme
2. 8:30 am - begin to document in README
3. 9:30 to approx 11:00 - read react documentation, read postresql documentation, watch videos on different databases to use with react, then remembered plan to use react-redux with asp.net
4. 11:00 to noon - read documentation for react with asp.net, research project setup and use of api / authentication / etc. 
5. 1:00 - Look at resources posted in discord. 
6. 1:30 - Create new application (see step 3 in process and decision making) and transfer README content to new application.
7. Read through article on react with ASP.NET Core https://www.red-gate.com/simple-talk/dotnet/asp-net/a-real-world-react-js-setup-for-asp-net-core-and-mvc5/ and then continue to follow along with react-redux with ASP.NET Core setup documentation https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli


## <p align = "center"> Documentation used for this project
* https://reactjs.org/docs/getting-started.html
* https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.2&tabs=netcore-cli
* https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react-with-redux?view=aspnetcore-2.2
* https://www.youtube.com/watch?v=da7pyc918jo
* https://www.youtube.com/watch?v=lW7DWV2jST0
* https://www.red-gate.com/simple-talk/dotnet/asp-net/a-real-world-react-js-setup-for-asp-net-core-and-mvc5/
* 
* 
* 


## <p align = "center">  <u>**Set Up on Your Local Machine**</u>
1. 
2. 
3.
4.
5.
<br>
<hr>
<br>
<hr>

### Technologies used for this project
* Visual Studio Code IDE
* Git for Version Control
* Markdown for documentation
* React with Redux
* ASP.NET Core
* 
* 
* 
* 


### License