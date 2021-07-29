import React from "react";

function Header({ onDarkModeClick, isDarkMode }) {
    // const [isInCart, setIsInCart] = useState(false);
  
    // function handleDarkModeClick() {
    //     setIsDarkMode((isDarkMode) => !isDarkMode);
    //  }
    // const itemsToDisplay = items.filter((item) => {
    //     if (selectedCategory === "All") return true;
    
    //     return item.category === selectedCategory;
    //   });

      
    return (
<header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    );
}

export default Header;