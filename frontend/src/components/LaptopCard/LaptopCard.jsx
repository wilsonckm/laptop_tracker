import LaptopDetails from '../LaptopDetails/LaptopDetails';

const LaptopCard = ({ laptops }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {laptops.map((laptop) => (
            <div className="col s12 m6">
              <div className="card large">
                <div className="card-image">
                  <img src="https://static.independent.co.uk/2022/06/22/11/macbook%20pro%20m2%20indybest.jpg" />
                </div>
                <div className="card-content">
                  <LaptopDetails laptop={laptop} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LaptopCard;
