const LaptopDetails = () => {
  // container component needs to go to parent component, LaptopCard.jsx
  return (
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="https://static.independent.co.uk/2022/06/22/11/macbook%20pro%20m2%20indybest.jpg" />
          <span className="card-title">'Brand + Model'</span>
        </div>
        <div className="card-content">
          <p>Color: </p>
          <p>SSD: </p>
          <p>Ram: </p>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
