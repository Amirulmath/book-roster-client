/* eslint-disable @typescript-eslint/no-unsafe-argument */
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/types/globalTypes";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function AllBooks() {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    void fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto relative ">
      <div className="flex items-center justify-center  h-60 max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">Search Book</h1>
        <Input className="ml-4" />
        <Button className="ml-4">
          <HiOutlineSearch size="25" />
        </Button>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">All Books</h1>
          <Button className="relative">Add New</Button>
        </div>
        <div className="grid grid-cols-4 gap-10 pb-20">
          {data.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
