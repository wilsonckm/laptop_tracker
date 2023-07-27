const LaptopDetails = ({laptop}) => {
  // container component needs to go to parent component, LaptopCard.jsx
  return (
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="https://static.independent.co.uk/2022/06/22/11/macbook%20pro%20m2%20indybest.jpg" />
          <span className="card-title">'Brand + Model'</span>
        </div>
        <div className="card-content">
          <p>Brand: {laptop.brand} </p>
          <p>Model: {laptop.model} </p>
          <p>Color: {laptop.color} </p>
          <p>SSD: {laptop.ssd} GB</p>
          <p>Ram: {laptop.ram} GB</p>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
