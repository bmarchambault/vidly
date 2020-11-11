import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService";
class Movies extends Component {
    state = {
        count: 0,
        movies: getMovies()

    };
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.state.movies.map(movie => (
                        <tr>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                        </tr>
                    )) }
                    </tbody>
                </table>
                <span>Showing {this.formatCount()} movies in the database.</span>

            </div>
        )
    }
    formatCount (){
        const {count} = this.state;
        return count === 0 ? "No movies listed" : count;
    }
}

export default Movies
//
// {/*    MY ATTEMPT BELOW:  */}
// {/*<table className='table'>*/}
// {/*    <thead>*/}
// {/*    <tr>*/}
// {/*        <th> Title </th>*/}
// {/*        <th> Genre </th>*/}
// {/*        <th> Stock </th>*/}
// {/*        <th> Rate </th>*/}
// {/*    </tr>*/}
// {/*    </thead>*/}
// {/*    <tbody>*/}
// {/*    <tr>*/}
// {/*        <th>*/}
// {/*        <td> {getMovies()} </td>*/}
// {/*        </th>*/}
// {/*        </tr>*/}
// {/*    </tbody>*/}
// {/*</table>*/}