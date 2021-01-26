# prototypes
NOTE: timer3 file is latest version
The timer3 file is round button/modal form with improved table
Timer3.tsx file is assumed to be stored in a component folder on a react project and is called with a corresponding import on the project's index.js file

Files' functionality is meant to
- assume it has a list of data platforms with corresponding Date objects specifying last data pull as input (these are currently initialized as new date objects at timer initialization for simulation/testing, but will be changed to a variable used in Adam's side of the code)
-count up from the time of last timer component load/initialization which is assumed to be the last time the data was pulled from platforms
- turn red to indicate error when the date object from any platform is more than a minute off of the timer load date (to be changed to when the connection variable to one of the data platforms returns false)
- turn red to indicate error when the timer count is greater than 6 hours (this can be manipulated for demo purposes by editing the value defined in state on the Timer3 file)
- remain green otherwise
- present information on platform names and last pulls to user

Some lines are commented out to be used to test for trigger cases. 
Future edits expected. 
