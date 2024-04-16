import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import books from './booksData'
import Book from './Book'

const BestSellers = () => {
  return (
    <>
      <h2 className='title'>Amazon Bestsellers</h2>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book key={book.id} {...book} index={index}></Book>
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BestSellers />)
