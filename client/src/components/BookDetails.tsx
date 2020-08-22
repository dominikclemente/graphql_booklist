import React from "react";

import {getBookQuery} from "../queries/queries";
import {useQuery} from "@apollo/client";

type Props = {
    bookId: string
}

const BookDetails = (props: Props) => {

    const {loading, error, data} = useQuery(getBookQuery);
    return (
        <div id="book-details">
            <p>Output book details here</p>
        </div>
    )

}

export default BookDetails;