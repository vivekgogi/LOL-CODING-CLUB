import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FutureEvents from "../components/FutureEvents";
import PastEvents from "../components/PastEvents";

function EventsPage() {
  return (
    <div>
      <Header />
      <FutureEvents />
      <PastEvents />
      <Footer />
    </div>
  );
}

export default EventsPage;
