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

