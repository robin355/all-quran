import React from 'react';
import './Book.css'
const Book = (props) => {
    const { name, englishName, englishNameTranslation, numberOfAyahs, revelationType } = props.book
    return (
        <div className='book-Container'>

            <h3>Surah Name: {name}</h3>
            <h3>English Name: {englishName}</h3>
            <h3>EnglishNameTranslation: {englishNameTranslation}</h3>
            <h3>NumberOfAyahs: {numberOfAyahs}</h3>
            <h3>RevelationType: {revelationType}</h3>


        </div>
    );
};

export default Book;