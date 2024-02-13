import { Suspense, lazy, useState } from "react";
import { Box, useTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import MobileSidebar from "./components/MobileSidebar";

// Lazy loaded pages
const Customer = lazy(() => import("./pages/Customer"));

function App() {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <Box display="flex" height="100vh">
        {/************ Sidebar **************/}
        <Sidebar />

        {/************ Content  **************/}
        <Box flex={"1"}>
          {/************ Topbar  **************/}
          <Topbar handleDrawerToggle={handleDrawerToggle} />

          {/************  Main content  **************/}
          <Box p={4} bg={theme.colors.grayBg}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/customers" element={<Customer />} />
                {/* Add more routes here */}
              </Routes>
            </Suspense>
          </Box>
        </Box>

        {/*Sidebar for Mobile screen (Drawer) */}
        <MobileSidebar
          closeDrawer={handleDrawerToggle}
          openDrawer={isDrawerOpen}
        />
      </Box>
    </Router>
  );
}

export default App;
