import React, { useState, useContext } from 'react';
import sublinks from './data';
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openModal = (text, coordinates) => {
    const pages = sublinks.find((link) => link.page === text);
    setPage(pages);
    setLocation(coordinates);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        modalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
