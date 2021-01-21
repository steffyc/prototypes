# prototypes
The timer file is in popout form
The timer2 file is in modal form
Both files' functionality is otherwise the same and meant to
- assume it has a list of data platforms with corresponding Date objects specifying last data pull (these are currently initialized as new date objects at timer initialization for simulation/testing)
-count up from the time of last timer component load/initialization which is assumed to be the last time the data was pulled from platforms
- turn red to indicate error when the date object from any platform is more than a minute off of the timer load date
- turn red to indicate error when the timer count is greater than 6 hours
- remain green otherwise
- present information on platform names and last pulls to user

Some lines are commented out to be used to test for trigger cases. 
Future edits expected. 
