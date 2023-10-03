import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './page/HomePage';
import Shop from './page/Shop';
import Product from './page/Product';
import GlobalStyles from './styles/GlobalStyles';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              index
              element={<Navigate to={'/home'} replace={true} />}
            ></Route>

            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
