import MainNav from "./components/MainNav";

import SecNav from "./components/SecNav";
import Details from "./components/Details";
import 'bootstrap/dist/css/bootstrap.min.css';
function App(){
  return(
    <>
      <MainNav/>
      <SecNav/>
      <h1 className="text-Center">Beauty Products</h1>
      <Details/>
    </>
  );

}
export default App;
