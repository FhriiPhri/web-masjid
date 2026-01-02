import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar scrollToSection={scrollToSection} />
      {children}
    </div>
  );
};

export default Layout;