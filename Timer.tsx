import React, {Component} from 'react';
import {Table, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';

// import './Timer.scss';
// import classNames from 'classnames';

let d=new Date();
d.setMinutes(d.getMinutes()+1);

let systems=[
  {name:'SystemA', time: d},
  // {name:'SystemA', time: new Date()},
  {name:'SystemB', time: new Date()},
  {name:'SystemC', time: new Date()}
];

class Timer extends Component{
  state={
    date: new Date(),
    hours: 0,
    minutes: 0,
    seconds: 0,
    time:'',
    color:''
  };
  timerID:any;
  

  componentDidMount(){
    this.timerID= setInterval(
      () => this.tick(),
      1000
    );
  }

  chooseColor(){
    if(this.state.hours >= 6 || this.systemsUpdateCheck()===false){
      return 'danger';
    }else{
      return 'outline-success'
    }
  }

  systemsUpdateCheck(){
    let time= this.state.date.getTime();
    for (var sys of systems){
      if (Math.abs(sys.time.getTime()-time)>2000)
        return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    let hr=this.state.hours;
    let min=this.state.minutes; 
    let sec= this.state.seconds;
    if (sec===59){ 
      if(min===59){ 
        min=0;
        sec=0;
        hr+=1;
      }else{
        min+=1;
        sec=0;}
    }else{sec+=1;}

    this.setState({
      hours: hr,
      minutes: min,
      seconds:sec,
      time: this.createTimeText(),
      color: this.chooseColor()
    });
  }

  createTimeText(){
    let time= String(this.state.hours)+':';
    time += this.state.minutes<10? '0'+String(this.state.minutes)+':':String(this.state.minutes)+':';
    time += this.state.seconds<10? '0'+String(this.state.seconds):String(this.state.seconds);
    return time;
  }
  
  render() {
    return (
      <div className="Timer">
        <Container> 
          <Row>
            <Col sm={{span:1, offset:0}}>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant={this.chooseColor()} size='lg'>{this.state.time}</Button>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
        {/* <Badge variant='primary' >Last Updated: {this.state.date.toLocaleString()}</Badge> */}
      </div>
    );
  }
}

let table = (
  <Table striped bordered variant="dark" size="sm">
    <thead>
      <tr>
        <th>System</th>
        <th>Last Updated</th>
      </tr>
    </thead>
      
    <tbody>
      <tr>
        <td>{systems[0].name}</td>
        <td>{systems[0].time.toLocaleString()}</td>
      </tr>
      <tr>
        <td>{systems[1].name}</td>
        <td>{systems[1].time.toLocaleString()}</td>
      </tr>
      <tr>
        <td>{systems[2].name}</td>
        <td>{systems[2].time.toLocaleString()}</td>
      </tr>
     </tbody>
  </Table>

);

let popover = (
  <Popover id="popover-basic">
    <Popover.Content>{table}
    </Popover.Content>
  </Popover>
);


export default Timer;