# UQLoft

## Initial ideas
- Homepage - basic search box to search for a course (with autofill)
- Each course has its own page - pull description and info for course, have a link to ECP, list of papers
- Reject invalid search queries (incorrect course code)
- Main focus is on multiple choice questions for now (going to use CSSE1001 because the tests are all multiple choice)

- Each test page will have a view paper option (pdf viewer), view answers/discussion
- Each question is collapsable -- potentially could use pop-up modals?

## Tech stack
- [ReactJS](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)

## Things to consider (2:18 9/12/2021):
- connection between the the paper.js page and the links on the course page do not sync. Will need to fix this. 
- optimisation of the .json file (particularly for answers)
- creating the bar graph functionality
- submitting data into the .json file (un updating concurrently)
- Toggle between pdf view and solutions
- Some style things

## Linking the database to the git-repository
- TBH I don't know how this system works. Integrating with gitHub and implementing version control functionality is much harder than I thought it would be and has become extremely convoluted. Give this route a go otherwise seek other much simplier methods (i.e. using a cloud-based API thing like Fauna or Firebase) to store data.
- However, below are some things I've tried (and seem to work?) but honestly not worth it. It's enterprise-grade SQL stuff. 

Some of these resources will also be useful with regards to uploading/editing data in the database. 
- Note with regards to large files: it is not advised to store large files in the database (i.e. pdfs). It's better practice to store the links to these files in the database and get them from within the repository itself. 
- download SSMS (SQL Server management studio) https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15
- Need to set up an SQL server *use SQL Server 2019 express edition* https://www.microsoft.com/en-us/sql-server/sql-server-downloads 
- download the version control plug in https://www.versionsql.com/download/VersionSQL_Setup.msi

- EDIT: Appears that the test version of the databsae was able to be uploaded to the repository. It may be tied to my account etc. (not ideal) so it may be worth while setting it up again (security issues). However, all the relevant sql files are in the folder so setting up the database again shouldn't be too difficult (once the first few steps mentioned above have been completed.
- Just another note: make sure to install SSMS and the SQL server before the version control. 
