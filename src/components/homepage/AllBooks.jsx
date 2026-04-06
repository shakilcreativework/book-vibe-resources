import React, { use } from "react";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

// {
//     "bookId": 1,
//     "bookName": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
//     "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     "totalPages": 192,
//     "rating": 4.5,
//     "category": "Classic",
//     "tags": [
//         "Fiction",
//         "Romance"
//     ],
//     "publisher": "Scribner",
//     "yearOfPublishing": 1925
// }

const AllBooks = () => {
  const books = use(bookPromise);
  console.log(books);
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center">Books</h2>

      <div>
        {books.map((book) => {
          return (
            <div key={book.bookId} className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img
                  src={book.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <div className="flex flex-wrap gap-2 w-fit">
                    {book.tags.map((tag, idx) => <p key={idx} className="badge badge-secondary">{tag}</p>)}
                </div>
                <h2 className="card-title text-2xl">
                  {book.bookName}
                </h2>
                <p className="font-semibold text-lg">{book.author}</p>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
