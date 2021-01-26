import React from 'react';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

export interface DatabaseSet{
  name: string;
  time: Date;
  connectionStatus: boolean;
}

function TimerModal(props:any){
  return(
    <Dialog 
      open={props.show}
      onClose={props.onClose} 
      >
      <DialogTitle>
          <Grid container spacing={8} xs={12}>
              <Grid item xs={5} color='red'>
                <Typography variant='h5'>Database:</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant='h5'>Last Updated:</Typography>
              </Grid>
          </Grid>
      </DialogTitle>
      <DialogContent dividers>
          {displayRows(props.dataSources)} 
      </DialogContent>
    </Dialog>
  );
};

function displayRows(dataSources:any){
  return (
    <Grid container xs={12}>
      { 
        dataSources.map((system:DatabaseSet) => {
            const textColor= system.connectionStatus===false? 'error':'initial';
            const textWeight= system.connectionStatus===false? 'body1':'h6';
            return(
                <Grid key={system.name} item xs={12}>
                    <Grid container xs={12} spacing={8}>
                        <ThemeProvider theme={theme}>
                          <Grid item xs={5} >
                            <Typography variant={textWeight} color={textColor} gutterBottom={true}>{system.name}</Typography>
                          </Grid>
                          <Grid item xs={7}>
                            <Typography variant={textWeight} color={textColor} gutterBottom={true}>{system.time.toLocaleString()}</Typography>
                          </Grid>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            )
        })
      }
    </Grid>
  );
} 

const theme = createMuiTheme({
  typography: {
    h6: {
      fontWeight: 375,
      fontSize:20,
    },
    body1: {
      fontWeight: 500,
      fontSize:20,
    },
    h5: {
      fontWeight: 400,
      fontSize:25,
    },
  },
});

export default TimerModal;