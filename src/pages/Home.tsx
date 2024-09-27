import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="min-h-screen bg-blue-100">
        <h1 className="text-center text-4xl py-24">Home Section</h1>
      </section>
      <section id="aboutUs" className="min-h-screen bg-green-100">
        <h1 className="text-center text-4xl py-24">About Us Section</h1>
      </section>
      <section id="services" className="min-h-screen bg-yellow-100">
        <h1 className="text-center text-4xl py-24">Services</h1>
      </section>
      <section id="contactUs" className="min-h-screen bg-red-100">
        <h1 className="text-center text-4xl py-24">Contact Section</h1>
      </section>
    </div>
  );
};
