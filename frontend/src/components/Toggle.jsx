import React from "react";


function MyComponent() {
    const [visible, setVisible] = React.useState(true);
  
    const handleClick = (event) => {
      const element = event.target;
      const toggleVisibility = element.dataset.toggleVisibility === 'true';
      setVisible(toggleVisibility);
    };
  
    return (
      <div>
        <button data-toggle-visibility="false" onClick={handleClick}>
          Toggle Visibility
        </button>
        {visible && <p>Content is visible</p>}
      </div>
    );
  }
  
export default MyComponent;