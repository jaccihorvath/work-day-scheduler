# Homework 05 Third-Party APIs: Work Day Scheduler

## Description
In this repository, you will find a simpler calendar application that allows a user to save events for each hour of the workday. This application will run in the browser and features dynamically updated HTML and CSS powered by jQuery.

The Moment.js library was utilized to work with dates and times.

## How it Works
Users are directed to web page that features:
* A header with a brief description of the app
* The current date and time
* Time blocks for hours of the workday, beginning at 8am and ending at 5pm
* An area to input tasks
* A save button to store the user's data in localstorage

The time blocks are color-coded to indicate whether they are past, present or future:
* A grey block indicates a past event
* A red block indicates the current event
* A green block indicates a future event

### Bugs
On refresh, I was unable to retrieve the user's saved data from localstorage and display on page.

## Mock-Up
The finished project can be deployed [here](https://jaccihorvath.github.io/work-day-scheduler/).

## Demo
![demo](Assets/demo.gif)