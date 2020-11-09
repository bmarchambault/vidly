import React, { Component } from 'react';

class Movies extends Component {
    state = {
        count: 0

    };
    render() {
        return (
            <div>
                <span>Showing {this.formatCount()} movies in the database.</span>
            <table>
                <tr>
                    <th> Title </th>
                    <th> Genre </th>
                    <th> Stock </th>
                    <th> Rate </th>
                </tr>
            </table>
            </div>
        )
    }
    formatCount (){
        const {count} = this.state;
        return count === 0 ? "No movies listed" : count;
    }
}

export default Movies