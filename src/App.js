import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/Products/SingleProduct";
import AllBrands from "./pages/Brands/AllBrands";
import AllCategories from "./pages/Categories/AllCategories";
//import Orders from "./pages/Orders/Orders";
import SingleOrder from "./pages/Orders/SingleOrder";
//import Users from "./pages/Users/Users";
//import Transactions from "./pages/Trasactions/Transactions";
import AllOffers from "./pages/Offers/AllOffers";
import ApprovedUsers from "./pages/ApprovedUsers/ApprovedUsers";
import BannedUsers from "./pages/BannedUsers/BannedUsers";
// import Complaint from "./pages/Complaint/Complaint"
import View from "./pages/View/View";
import Hospitals from "./pages/Hospitals/Hospitals";
import Requests from "./pages/Requests/Requests";
import DetailsPage from "./pages/DetailsPage/DetailsPage";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/brands" element={<AllBrands />} />
              <Route path="/categories" element={<AllCategories />} />
              <Route path="/offers" element={<AllOffers />} />
              {/* <Route path="/orders" element={<Orders/>} /> */}
              <Route path="/orders/:id" element={<SingleOrder/>} />

              {/* <Route path="/users" element={<Users />} /> */}
              {/* <Route path="/transactions" element={<Transactions />} /> */}

              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/approvedUsers" element={<ApprovedUsers/>}/>
              <Route path="/bannedUsers" element={<BannedUsers/>}/>
              {/* <Route path="/complaint" element={<Complaint  />}/> */}
              <Route path="/view" element={<View  />}/>
              <Route path="/hospitals" element={<Hospitals  />}/>
              <Route path="/requests" element={<Requests  />}/>
              <Route path="/detailsPage" element={<DetailsPage  />}/>

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
