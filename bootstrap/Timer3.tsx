import React, {Component} from 'react';
import {Container, Row, Col, Modal} from 'react-bootstrap';
import styled from "styled-components";
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

class Timer3 extends Component{
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
      return 'red';
    }else{
      return 'green'
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

    return (
      <div className="Timer"> 
        <RoundButton color={this.state.color} onClick={handleShow}>{this.state.time}</RoundButton>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Container>
              <Row>
                <Col>
                  <Modal.Title>System</Modal.Title>
                </Col>
                <Col>
                  <Modal.Title>Last Updated</Modal.Title>
                </Col>
              </Row>
            </Container>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>{systems[0].name}</Col>
                <Col>{systems[0].time.toLocaleString()}</Col>
              </Row>
              <Row>
                <Col >{systems[1].name}</Col>
                <Col>{systems[1].time.toLocaleString()}</Col>
              </Row>
              <Row>
                <Col>{systems[2].name}</Col>
                <Col>{systems[2].time.toLocaleString()}</Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div> 
    );
  }
}

const RoundButton = styled.button`
  font-size: 32px;
  background-color: white;
  color: ${props => props.color === "green" ? "green" : "red"};
  width: 130px;
  height: 130px;
  padding: 10px;
  border: ${props => props.color === "green" ? "3px solid green" : "3px solid red"};
  display: inline-block;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: 'light'+this.state.color;
  }
`;

export default Timer3;
