# Adidas Cart

This is a simplified implementation of the shopping and checkout workflow for the Adidas shopping experience.

## How to use

### Installation and running the app locally

1. Download the source code
2. `cd` into the base directory and run `npm install`
3. Run `npm start` to start up the Express server
4. `cd` into the client directory and run `npm install`
5. Run `npm start` and navigate to localhost:3000
6. Success!

### Building and deploying the app

This app is deployed and hosted via Heroku with automated deploys synced with Github. Whenever a code change is pushed to master branch, the app will automatically redeploy. You can view the hosted app [here](https://damp-fortress-95731.herokuapp.com/).

### Using the app

The first page you see is a list of several products that you can interact with. Clicking on "select item" will bring up a modal screen that allows you to select a size and quantity to add to your bag. In the top right, there is a menu button, that when clicked will open up the bag view. This view shows all of the items that you have added to your bag as well as the quantity of those items. You are able to change the quantity of the items listed there as well as remove any. Once you are finished with your bag, click on "show order overview" to review your order. This order summary shows the pricing breakdown of your bag. Clicking on "checkout" would continue the checkout process (ie. billing and shipping info) but that is outside the scope of this assignment.


