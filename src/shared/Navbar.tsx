import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { DropdownMenuSeparator } from "../components/ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../components/ui/dropdown-menu";
import logo from "../assets/book-logo.png";

export default function Navbar() {
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg z-10">
      <div className="h-full w-full bg-blue-300">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto ">
          <div className="flex">
            <img className="h-8" src={logo} alt="log" />
            <h1 className="text-2xl font-black ml-3">Book Roster</h1>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger>Book Catalog</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Novel</DropdownMenuItem>
                    <DropdownMenuItem>Poetry</DropdownMenuItem>
                    <DropdownMenuItem>Short Story</DropdownMenuItem>
                    <DropdownMenuItem>Drama</DropdownMenuItem>
                    <DropdownMenuItem>Text Books</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/all-books">All Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/marked-books">Marked</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
