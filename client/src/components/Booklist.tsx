import React from "react";
import {gql} from '@apollo/client';
import {graphql} from 'react-apollo';
import LoadingDots from "./LoadingDots";

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

class Booklist extends React.Component<any, any> {

    displayBooks() {
        const data = this.props.data;
        if (data.loading) {
            return (<div>
                <h1 className="text-2xl pb-10">Loading books</h1>
                <LoadingDots/>
            </div>)
        } else {
            return data.books.map((book: { name: string }) => {
                return (
                    <li>{book.name}</li>
                )
            })
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <ul id={"book-list"} className="list-disc list-inside text-2xl">
                    {this.displayBooks()}
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(Booklist);
