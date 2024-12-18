[![License: MIT](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=for-the-badge&color=%23FBBC04)](https://opensource.org/licenses/MIT)
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/hilepoofffgmdlappbbggkhppjijhkch?style=for-the-badge&logo=chromewebstore&logoColor=white&color=%2334A853)](https://chromewebstore.google.com/detail/pupsis-schedule-exporter/hilepoofffgmdlappbbggkhppjijhkch)
[![Chrome Web Store Rating](https://img.shields.io/chrome-web-store/rating/hilepoofffgmdlappbbggkhppjijhkch?style=for-the-badge&logo=chromewebstore&logoColor=white&color=%23EA4335)](https://chromewebstore.google.com/detail/pupsis-schedule-exporter/hilepoofffgmdlappbbggkhppjijhkch)


***
<h1 align="center">
    <sub>
        <img src="./web-extension/src/web-icons/web-icon.png" alt="extension-icon" height="38" width="38"> 
    </sub>
    PUPSIS Schedule Exporter
</h1>
<p align="center">
A web extension that converts the schedule of students from PUPSIS to ICalendar (.ics), csv or json so that they can easily import their schedules on other popular calendar tools like Google Calendar.
</p>
<p align="center">
    <a href="https://chrome.google.com/webstore/detail/pupsis-schedule-exporter/hilepoofffgmdlappbbggkhppjijhkch">
        <img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get PUPSIS Schedule Exporter">
    </a>
    <a href="https://microsoftedge.microsoft.com/addons/detail/pupsis-schedule-exporter/fpphljadlnfmcefbcicdbmpckjdjedia">
        <img src="https://user-images.githubusercontent.com/585534/107280673-a5ece780-6a26-11eb-9cc7-9fa9f9f81180.png" alt="Get PUPSIS-Schedule-Exporter for edge">
    </a>
</p>


> [!NOTE]  
> **🦊 Mozilla Firefox:** This extension cannot be published on the Mozilla Web Store (AMO) due to [Mozilla's policy](https://extensionworkshop.com/documentation/publish/add-on-policies/). However, Firefox users can still use the extension by installing it as a **temporary add-on**.  
**[Follow this guide](./img/README.md#firefox)** for detailed steps on how to install the extension in Firefox.  


***



This project aims to help PUP Students to easily sync their Schedules to their desired Calendar tools.


## Features
- convert to ICalendar (.ics) format, used for easy export on popular calendar tools like Google Calendar
- convert to CSV, in a calendar style format, for users that do not use any calendar tools. 
- convert to JSON, which can be imported on [schedulemaker.io](https://schedulemaker.io/)

*Tip: it's a good idea to set the end date to the last day of their semester. This way, the recurring events will automatically stop when the semester ends.*

## TODO
- [x] Finish readme and introduction
- [x] Add guide, image tutorial 
- [x] Add image icons for web extension
- [x] Implement "End Date of Recurring Schedule" feature
- [x] Return error at empty schedule
- [x] Implement CSV feature (Implemented by @szy-kenn!)
- [x] Add UI/Styling (Thanks @egg-lou, @yam-1111, @szy-kenn!)
- [x] Implement export to schedulemaker.io via json feature
