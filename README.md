# Amaysim Test Automation Exercise - Javascript/Cypress

Base Test framework for a test automation exercise. This version is built with cypress, using the javascript programming language.

## Important files/folders in this test tramework

### Tests
1. All tests are in the folder `cypress/e2e`. The test files have the name suffix `.spec.cy.js`.
1. There's currently only one test `cypress/e2e/mobile_usage_history.spec.cy.js`. This test does the below:
   1. Visit the amaysim home page, login as an existing customer and view the dashboard page. The username and password are read from the environment variables `CYPRESS_USERNAME` and `CYPRESS_PASSWORD`.
   1. From the dashboard page, click on the mobile service tile to go to the mobile plan details page.
   1. On the Mobile Plan details page, click on the Usage History to see the usage history page, and perform a search in that page.
1. The tests use the Page Object Model. The page classes are in `cypress/e2e/pageObjects`.
1. This Cypress framework works best in the headed `Chrome` browser.

### Cypress Configuration
These are in the file `cypress.config.js`. Among other things, it contains the base URL.

### Page Classes/Objects
These are in the folder `cypress/e2e/pageObjects`

## How to execute tests

### Install the git client
Install `git`. Please google for installation instructions. If you already have this installed, you dont need to do it again.

### Install Node and Npm
Install `node` and `npm` on your machine. Please google for installation instructions. If you already have this installed, you dont need to do it again.

### Clone the repository
Checkout the code, by running this in your terminal/command line: `git clone git@github.com:work-for-amaysim/cypress-test-automation-exercise-<your github username>.git`

### Install dependancies
1. Go to your folder where you checked out the code: `cd cypress-test-automation-exercise-<your github username>`
1. Run `npm install`.

### Run tests
#### Step 1: Set the enviornment variables
On your Terminal/Command prompt, set the username and password environment variables. These will be used by the test to login to the website.
##### On Linux/Mac
Run the below commands:

`export CYPRESS_USERNAME=<username provided in your instructions>`

`export CYPRESS_PASSWORD=<password provided in your instructions>`

##### On Windows
Run the below commands:

`set CYPRESS_USERNAME=<username provided in your instructions>`

`set CYPRESS_PASSWORD=<password provided in your instructions>`

#### Step 2: Run the test
From inside the `cypress-test-automation-exercise-<your github username>` folder, run the command `npx cypress run --browser chrome --headed`.

(You can also run `npx cypress open` to open the Cypress runner window. This might be useful while developing the test.)

## How to submit your code

### Complete the exercise
Please complete your exercise as per the instructions provided by the recruiter.

**Prioritise  Quality  over  Quantity  in  your  tests. Your  code submission  will  be assessed more on how well written and how well structured the code is, rather than number of tests.**
### Push your changes into your repo
1. Run `git status` to see all local changes.
2. Once you are happy with the changes, run `git add .` to stage all your local changes.
3. Run `git commit -m "<a commit message of your choice>"` to commit your changes.
4. Run `git push` to push your changes to your repository.

*ps: Feel free to use whatever steps you're familiar with to commit/push. You do not have to follow the exact same steps above. Some candidates feel more comfortable using GUI-based tools. Feel free to commit as you go and not just at the end*

### Let the recruiter know
After you're done with your changes, email the recruiter to let them know you're done, and what your github username is.
