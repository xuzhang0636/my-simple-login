import React, {Component} from "react";
import Table from "react-bootstrap";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                </Table>
            </div>
        );
    }

}