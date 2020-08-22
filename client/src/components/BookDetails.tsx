import React from "react";

import {getBookQuery} from "../queries/queries";
import {useQuery} from "@apollo/client";

type Props = {
    bookId: string
}

const BookDetails = (props: Props) => {

    const {bookId} = props;

    const {loading, error, data} = useQuery(getBookQuery, {
        variables: {
            id: bookId
        }
    });

    const displayBookDetails = () => {
        if (data) {
            const {book} = data;
            if (book) {
                return <div className="text-xl">
                    <h2 className="text-4xl mb-4 font-semibold">Name: {book.name}</h2>
                    <p className="mb-3"><b className="font-extrabold text-2xl">Genre:</b> {book.genre}</p>
                    <p className="mb-3"><b className="font-extrabold text-2xl">Author:</b> {book.author.name}</p>
                    <p className="mt-8 mb-3 text-2xl">All books by this author:</p>
                    <ul className="other-books list-disc ml-6">
                        {book.author.books.map((item: { id: string; name: string; }) => {
                            return (<li className="mb-2" key={item.id}>{item.name}</li>);
                        })}
                    </ul>
                </div>
            } else {
                return <div className="text-xl my-3">Please select a book to get information</div>
            }
        } else {
            return <div className="text-xl my-3">Please select a book to get information</div>
        }
    }

    return (
        <div id="book-details" className="fixed top-0 right-0 w-4/12 h-screen">
            {displayBookDetails()}
        </div>
    )

}

export default BookDetails;