# Timezone Station

Deployed site: https://xiongkb.github.io/timezone-station/
An app that can display other timezones in "time cards". Time cards are just a small card that display the name, country (if applicable), date, and time.

## How to Use

1. Click on the deployed link.
2. Enter an timezone into the search bar.
3. Click on a timezone that pops up.
4. Timezone card will be displayed.

## How It Works

By default, there is a time card that is always displayed onto the html, which is the user's local time based on their system time. User can find any timezone by typing into the search bar. Upon entering a letter, a list of existing timezones will be displayed. As they continue to add more letters/words, the list will be filtered to find the best match based on the input. When the timezone user is looking for has been found, user can click on the name. When the name is clicked, a time card will be created, displaying useful information. The time and date displayed in the time cards will dynamically update to the current time with the seconds running to show it's working.

## Screenshot

![image of demo look](/public/demoSS.png)

## Technology Used

* MomentJS
* ReactJS
* Javascript
* HTML
* CSS

#### Motivation notes

I created this to further improve my skills and learning to use react hooks. At first, I just wanted to create a clock that could run every second, but then thought what about checking the time of another timezone? So this project was born. I learned quite a lot about timezones and how time is/was percieved.

#### Future Ideas?

* Adding time cards for every country/state/provinces and their major cities.
* Can be more user friendly.
* Adding a database so individual users can save their selected time cards.
* Ability to remove time cards.
* Animations for time cards or more features in them.