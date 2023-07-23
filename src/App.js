import './App.css';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import PaymentForm from './components/paymentForm/PaymentForm';
import TicketPromise from './components/ticketPromise/TicketPromise';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PaymentForm />
      <Faq />
      <TicketPromise />
      <Footer />
    </div>
  );
}

export default App;
