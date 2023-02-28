import React from "react";
import { TabTitle } from "../../utils/GeneralFunctions";
import Billboard from "./Billboard";
import Books from "./Sections/Books";
import NewEvents from "./Sections/NewEvents";
import TShirt from "./Sections/TShirt";

function Home() {
  TabTitle("Home");
  return (
    <main className="min-h-[calc(100vh-70px)] py-8">
      <div className="w-10/12 mx-auto">
        <Billboard />
        <NewEvents />
        <Books />
        <TShirt />
      </div>
    </main>
  );
}

export default Home;
