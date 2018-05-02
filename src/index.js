import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Table, Carousel, Button, Image, Jumbotron, Grid, Row, Col,Navbar, Nav, NavItem, NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';


class Hobbies extends React.Component{

		 
	constructor(props){
		super(props);

		//I'm pretty sure this is what you mean by a JSON blob
		//Stack Overflow people seem to recommend this way of keeping track of data:
		this.state = {
			hobbies : ["Drumming", "Travelling", "Socks"]
		}

		

		this.add_hobby2 = this.add_hobby2.bind(this);
	}

	render(){
		const hobbies = [];

		for(var i = 1; i < this.state.hobbies.length + 1; i++)
			hobbies.push(<tr>
							<td> {i} </td>
							<td>{this.state.hobbies[i-1]}</td>
						 </tr>)

		return (
			<div className = "Hobbies">
				<Navbar inverse>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <a href="localhost:3000">Profiler</a>
				    </Navbar.Brand>
				  </Navbar.Header>
				  <Nav>
				    <NavItem eventKey={1} href="#">
				      These
				    </NavItem>
				    <NavItem eventKey={2} href="#">
				      Don't
				    </NavItem>
				    <NavDropdown eventKey={3} title="Do" id="basic-nav-dropdown">
				      <MenuItem eventKey={3.1}>Anything</MenuItem>
				    </NavDropdown>
				  </Nav>
				</Navbar>

				<ControlledCarousel />
				 
				<Grid>
						<br></br>
						<Row className="show-grid">
						<h1> My hobbies: </h1>
						<Table striped bordered condensed responsive>
						  <thead>
						    <tr>
						      <th>#</th>
						      <th>Hobby</th>
						    </tr>
						  </thead>
						  <tbody>
						    {hobbies}
						  </tbody>
						</Table>;
						</Row>

						<hr />

						<Row className="show-grid">
							<h1> Fam, try adding some more hobbies down below: </h1>
							<input id = "Input" type = "text"></input>
							<br></br>
							<Button onClick = {this.add_hobby2} bsStyle="danger">Add another hobby</Button>
						</Row>
				</Grid>
			
			</div>)
			;
	}

	add_hobby2(){
		this.setState({ hobbies: [...this.state.hobbies, document.getElementById('Input').value] })
		document.getElementById('Input').value = "";
	}


}

class Adder_Button extends React.Component{
	
	constructor(props){
		super(props);
	}

	render(){
		return(
			<button> Click Me </button>
		);
	}

	add_hobby(){
		alert("getting somewhere...");
	}



}

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img className = "center-block" alt="900x500" src="img/profile_picture.jpeg" />
          <Carousel.Caption>
            <h3>Slayyyyyyy</h3>
            <p>Me slaying at a mini-golf course</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className = "center-block" alt="900x500" src="img/profile_picture_horse.jpeg" />
          <Carousel.Caption>
            <h3>Fuck Horses</h3>
            <p>No seriously, I have an irrational problem with horses</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className = "center-block" alt="900x500" src="img/profile_picture_mary.jpeg" />
          <Carousel.Caption>
            <h3>This is my girlfriend</h3>
            <p>
              Sorry about the image sizes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

ReactDOM.render(
	<Hobbies/>,
	document.getElementById('root')
	);
registerServiceWorker();
