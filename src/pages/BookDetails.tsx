/* eslint-disable @typescript-eslint/no-unsafe-argument */
import BookReview from "@/components/BookReview";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    void fetch("../data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const book = data?.find((item) => item._id === Number(id));
  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="flex flex-col items-center justify-center  h-60 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Book Details</h1>
      </div>
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="flex max-w-7xl mx-auto items-center p-4 w-auto bg-gray-300">
          <div className="w-[30%]">
            <img src={book?.image} alt="" />
          </div>
          <div className="w-[50%] space-y-3 ml-20">
            <h1 className="text-3xl font-semibold">{book?.title}</h1>
            <p>Author: {book?.author}</p>
            <p>Genre: {book?.genre}</p>
            <p>Publication Date: {book?.publication_date}</p>
            <ul className="space-y-1 text-lg">
              {book?.reviews?.map((review) => <li key={review}>{review}</li>)}
            </ul>
            <Button>Marked</Button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Reviews</h1>
      <BookReview />
    </div>
  );
}
