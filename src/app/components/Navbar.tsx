import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">Ayesha Malik Portfalio</div>

        <div className="right">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
