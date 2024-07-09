function Image() {
    const imageStyle = {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      border: "2px solid #000", // You can change the color and width as needed
      borderRadius: "8px" // Optional: to add rounded corners
    };
  
    return <img src={my2} alt="My Image" style={imageStyle} />;
  }
  
  export default Image;
  