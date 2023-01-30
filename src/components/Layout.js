import React from "react";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Layout = () => {
  let location = useLocation();

  return (
    <>
      <nav>
        <NavLink to="motion">Motion</NavLink>
        <NavLink to="router">Router</NavLink>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.key}
            initial={{ opacity: 0, x: -1200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 1200 }}
            transition={{ duration: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default Layout;
