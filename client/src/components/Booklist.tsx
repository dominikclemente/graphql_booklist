import React, {useState} from "react";
import LoadingDots from "./LoadingDots";
import {getBooksQuery} from "../queries/queries";

import BookDetails from "./BookDetails";
import {useQuery} from "@apollo/client";

type Props = {}

type State = {
    selected: String
}

const Booklist = (props: Props) => {

    const [selected, setSelected] = useState("");
    const {loading, error, data} = useQuery(getBooksQuery);

    const displayBooks = () => {
        if (loading) {
            return (<div>
                <h1 className="text-2xl pb-10">Loading books</h1>
                <LoadingDots/>
            </div>)
        } else {
            return data.books.map((book: { id: any, name: string }) => {
                return (
                    <li key={book.id} className="inline-block m-3 p-2 list-item text-white" onClick={(e) => setSelected(book.id)}><p className="z-50">{book.name}</p></li>
                )
            })
        }
    }

    return (
        <div>
            <ul id={"book-list"} className="list-disc p-0 text-2xl">
                {displayBooks()}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
    )
}

export default Booklist;
