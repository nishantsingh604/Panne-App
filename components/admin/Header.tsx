import { Session } from "next-auth";
import React from "react";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
          {session?.user?.name}
        </h2>
        <p>Monitor all the users and the books right here.</p>
      </div>
      {/* <p>Search</p> */}
    </header>
  );
};

export default Header;
