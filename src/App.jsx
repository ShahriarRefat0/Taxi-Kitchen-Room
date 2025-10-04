import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import { Suspense } from "react";
import OrderContainer from "./Components/OrderContainer";
import { Bounce, ToastContainer } from "react-toastify";


const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={"loading"}>
          <OrderContainer ordersPromise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
