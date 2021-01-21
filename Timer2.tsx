import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import {Container, Row, Col, Modal} from 'react-bootstrap';
// import './Timer.scss';
// import classNames from 'classnames';

// let d=new Date();
// d.setMinutes(d.getMinutes()+1);

let systems=[
  // {name:'SystemA', time: d},
  {name:'SystemA', time: new Date()},
  {name:'SystemB', time: new Date()},
  {name:'SystemC', time: new Date()}
];
let show=false;

class Timer2 extends Component{
  state={
    date: new Date(),
    hours: 5,
    minutes: 59,
    seconds: 45,
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
    const handleClose = () => show=false;
    const handleShow = () => show=true;

    // this.setState({open: false});
    // const handleClose = () => this.setState({open: false});
    // const handleShow = () => this.setState({open: true});
    return (
      <div className="Timer">
        <Container> 
          <Row> 
            <Col sm={{span:1, offset:2}}>
                <Button variant={this.chooseColor()} size='lg' onClick={handleShow}>{this.state.time}</Button>
                <Modal show={show} onHide={handleClose}>
                {/* <Modal show={this.state.open} onHide={handleClose}> */}
                    <Modal.Header closeButton>
                        <Modal.Title>Recent Data Updates</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{table}</Modal.Body>
                </Modal>
            </Col>
          </Row>
        </Container>
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

export default Timer2;
