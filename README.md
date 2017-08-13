# Die Hard 3 Jug Challenge

### Contents
- [Summary](#summary)
- [Scenario](#scenario)
- [Heroku Link](#heroku-link)
- [Installation](#installation)
- [Screen Shots](#screen-shots)
- [Test Driven Development (TDD)](#tdd)
- [Author](#author)
- [License](#license)

### <a name="summary">Summary</a>
In the movie Die Hard 3, Bruce Willis is given this task: he has to figure out how to get exactly 4 litres of water in a jug. He has a tap with running water, a 3 litre jug and a 5 litre jug. There is no shortage of water in the tap, but time is limited, so he needs to get to the answer in the minimum number of steps. In this prjoect a javascript app is developed to stimulate the Bruce Willis jug challenge.


### <a name="scenario">Scenario</a>
Welcome Bruce I want you to solve a task, you will either Die Hard or Live Hard, it's in your hands. You are given two jugs with capacities of 3 & 5 litres, a scale and accessible tap with running water to fill the jugs. Your challenge is to figure out exactly how to get 4 litres of water in a jug.
There is no shortage of water in the tap, but we got a surprise in hand, so you might need to consider how to get to the answer in the minimum number of steps.

### <a name="heroku-link">Heroku Link</a>
[http://die-hard-3-jug-challenge.herokuapp.com/](http://die-hard-3-jug-challenge.herokuapp.com/)

### <a name="installation">Installation</a>
Follow the instructions below to install and setup all the tools to run the project app.

##### 1) Install Project to Local Device
To install the code on your local device, do the following:

* Clone repository
* `cd` to the project's root directory

##### 2) Install Node

Open your terminal and type this line in:
```
  brew install node
```

##### 3) Download Required Node Packages

Open your terminal and type this line in:
```
  npm install
```

##### 4) Start the local server
Open your terminal and type this line in:
```
node dieHard3JugChallenge
```
or
```
npm start
```
or
```
open index.html
```
##### 5) Open in your browser
In your browser type the following url:
```
http://localhost:5000/
```
### <a name="screen-shots">Screen Shots</a>
The following are the screen shots of all the pages for this app:

##### Homepage
Here the user is given a description of the challenge and is required to click the start button to start the challenge.
![](./images/homepage.png?raw=true)

##### Challenge Page
Here the user is informed that a countdown timer of 5 minutes has started and they have to complete the challenge in this time frame.
Additionally, a description of all the tools the user has is given. They are required to click the images and complete the challenge by submitting with clicking the weigh jug 2 button.
![](./images/challenge-page.png?raw=true)

##### Unsuccessful Completion of Challenge Page
Here the user is informed that they haven't completed the challenge correctly and are able to replay the challenge by clicking the try again button.
![](./images/boom-page.png?raw=true)

##### Successful Completion of Challenge Page
Here the user is informed that they have completed the challenge correctly and are able to replay the challenge by clicking the play again button. They are also informed that a new challenge will appear in 24 hours.
![](./images/congratulations-page.png?raw=true)

### <a name="tdd">Test Driven Development (TDD)</a>
This project was developed using Jasmine and TDD. To run the tests, in the terminal type:
```
open SpecRunner.html
```
This will return the following output:
![](./images/jasmine-test.png?raw=true)

### <a name="author">Author</a>
- [Hasan Sonmez](https://github.com/UltimateCoder00)

### <a name="license">License</a>

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
