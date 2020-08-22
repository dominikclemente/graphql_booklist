import React, {useState} from "react";
import {getAuthorsQuery, getBooksQuery, ADD_BOOK_MUTATION} from "../queries/queries";
import {useMutation, useQuery} from "@apollo/client";

const AddBook = () => {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const {loading, error, data} = useQuery(getAuthorsQuery);

    const displayAuthors = () => {

        if (loading) {
            return (
                <option disabled>Loading authors...</option>
            );
        } else {
            return data.authors.map((author: { id: any, name: string; }) => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                );
            })
        }
    }

    const [addBookMutation] = useMutation(ADD_BOOK_MUTATION);
    const submitForm = (e: any) => {
        e.preventDefault();
        addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }

    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field my-3">
                <label>Book name:</label>
                <input className="ml-3 focus:outline-none border-2 border-gray-500 p-1" type="text"
                       onChange={e => setName(e.target.value)}/>
            </div>
            <div className="field mb-3">
                <label>Genre:</label>
                <input className="ml-3 focus:outline-none border-2 border-gray-500 p-1" type="text"
                       onChange={e => setGenre(e.target.value)}/>
            </div>
            <div className="field mb-3">
                <label>Author:</label>
                <select className="ml-3 focus:outline-none bg-gray-400 p-1 cursor-pointer border-none"
                        onChange={e => setAuthorId(e.target.value)}>
                    <option className="border-none">Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button className="bg-gray-400 hover:bg-gray-500 px-3 ml-1">+</button>
        </form>
    );
}

export default AddBook;
