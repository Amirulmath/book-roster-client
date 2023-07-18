import { IProduct } from "@/types/globalTypes";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface IProps {
  book: IProduct;
}

export default function BookCard({ book }: IProps) {
  return (
    <div>
      <div className="rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${book._id}`} className="w-full">
          <img src={book?.image} alt="book" />
          <h1 className="text-xl font-semibold">{book?.title}</h1>
        </Link>
        <p>Author: {book?.author}</p>
        <p>Genre: {book?.genre}</p>
        <p>Publication Date: {book?.publication_date}</p>
        <Link to={`/book-details/${book._id}`}>
          <Button>Book Details</Button>
        </Link>
      </div>
    </div>
  );
}
