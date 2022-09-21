import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'
const Books = () => {
    const [books, setbooks] = useState([])
    useEffect(() => {
        fetch('http://api.alquran.cloud/v1/meta')
            .then(res => res.json())
            .then(data => setbooks(data.data.surahs.references));
    }, [])

    return (
        <div>
            <h2>Total Surah: {books.length}</h2>
            <div className='Books-Container'>
                {
                    books.map(book => <Book book={book}></Book>)
                }

            </div>
        </div>
    );
};

export default Books;