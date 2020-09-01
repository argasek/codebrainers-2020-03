### 2020-09-01

### Task 1

Implement some code that displays an error message somewhere inside of <LoginForm></LoginForm> when user
does not authenticate successfully. (Use any garbage input as username and password in order to obtain this
effect).

### 2020-08-30

### Task 1

Change the code this way that it renders "Create Plant: Zielistka, Very easy" if user has typed "Zielistka" into
"Plant name" field and currently selected Difficulty option is "Very easy". If user changes the Difficulty option
it should be reflected in the card title accordingly. If "Plant name" is empty do not show anything (neither initially
nor later on up modifications).

### 2020-08-22

#### Task 1

Have a look at function `formatIntervalAsString()` in `PlantRow.jsx`. It's messy, alright? The reason behind is that
this function uses a lot of ["Magic numbers"](https://en.wikipedia.org/wiki/Magic_number_(programming)). Go be a hero
and refactor the code in such way that it:
* works correctly
* you're fully able to explain it to the absent students ;-)

You can either make your own computations or utilize an excellent [Moment.js](https://momentjs.com/) library.

Do not worry about leap years, [leap seconds](https://en.wikipedia.org/wiki/Leap_second), etc. 

#### Task 2

Currently, spinner is shown when loading Plants or Categories. However, if fetching Plants or Categories fails, the
spinner is shown as long as all of the operations do not finish. Make a change to the code so the spinner is no longer
presented to the user if any of the fetch operations from API fails (for whatever reason).

### 2020-08-20

Take a look what's being returned from API (fetch from server) for all pages (i.e.) Plants, Categories and Rooms.

#### Task 1

Modify code in such way that Rooms component displays some data fetched from API.

#### Task 2

Modify code in such way that Plants, Rooms and Categories display as much data as you can extract.

Hint: use Reactstrap [Table](https://reactstrap.github.io/components/tables/) element to make your job easier. 

### 2020-08-11

#### Task 1

Modify App.jsx in that way that:
1) it renders 3 text input fields
2) 1. and 3. field should accept a number (any number!)
3) 2. field should accept on of these characters: '+', '-', '*', '/'
4) if 2. has value '/', 3. field cannot accept 0 (!)
5) clicking on a 'Calculate' button should display result of a mathematical equation obtained this way, like

5 * 3 =
15

5 / 2 =
2.5


### 2020-08-09

#### Task 1

Modify App.jsx in such way that it displays three tables:
1) students attending Codebrainers bootcamp
2) students attending "some other" bootcamp
3) table with students attending both bootcamps at the same time.
(according to current criteria Marharyta and Kamil attend both bootcamps at the same time).

Algorithm should be generic, i.e. it should work properly with other set of students as long as both sets
are JS arrays of Student-class based items.

#### Task 2

Make first table sorted by Full Name ascending.
Make second table sorted by Frequency descending.

Tip: modify sorting method in such way that it accepts two parameters (i.e. field we should sort over and direction
(asc/desc)).

#### Task 3**

Make third table sorted by number of beers descending and then full name ascending.

### 2020-07-04

#### Task 1

In `index.js` implement body of `verifyIfTimeTableContainsNoMoreThan40h()` function in such way it calculates the sum of
time periods contained in `timeTable` and verifies if the number of hours and minutes total does not exceed 40h (and 0
minutes).

