import React, {Component} from "react";
import {Form, Button, Container} from "react-bootstrap";
import axios from 'axios';

class Login extends Component {

    constructor(props) {
        super(props);
        this.onChangePassWord = this.onChangePassWord.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }

    onChangePassWord(e) {
        this.setState({password: e.target.value});
    }

    onChangeUserName(e) {
        this.setState({username: e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        let baseUrl = 'http://localhost:8080';
        let self = this;
        const payload = {
            username: this.state.username,
            password: this.state.password
        };
        axios.post(`${baseUrl}/login`, payload)
            .then(function (response) {
                self.props.history.push('home');
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleClick}>
                        <Form.Group controlId="formUserName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text"
                                          placeholder="Enter User Name"
                                          value={this.state.username}
                                          onChange={this.onChangeUserName}/>
                            <Form.Text className="text-muted">
                                We'll never share your username with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formPassWord">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"
                                          value={this.state.password}
                                          onChange={this.onChangePassWord}/>
                        </Form.Group>
                        <Form.Group controlId="formCheckbox">
                            <Form.Check type="checkbox" label="Remember Me"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }

}

export default Login;