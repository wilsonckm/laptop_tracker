import LaptopDetails from "../LaptopDetails/LaptopDetails";
import NewLaptopForm from "../NewLaptopForm/NewLaptopForm";

const LaptopCard = ({ laptops, getLaptops, setLaptops }) => {
  //function that
  //MAKes POST REQUEST WHEN SUBMIT THE FORM
  //updates the state FOR THIS CURRENT component
  //updates model, brand etc NEW STATE here
  //then call the getLaptops function
  const handleDeleteLaptop = (laptopToDelete) => {
    setLaptops((prevLaptops) =>
      prevLaptops.filter((laptop) => laptop._id !== laptopToDelete._id)
    );
  };

  return (
    <>
      <div className="container">
        <div className="row " >
          {laptops.map((laptop) => (
            <div className="col s6 m12 " key={laptop._id}>
              <div className="card large " >
                <div className="card-image ">
                  <img src="https://static.independent.co.uk/2022/06/22/11/macbook%20pro%20m2%20indybest.jpg" />
                </div>
                <div className="card-content ">
                  <LaptopDetails
                    key={laptop._id}
                    onDelete={handleDeleteLaptop}
                    laptop={laptop}
                    getLaptops={getLaptops}
                  />
                </div>
              </div>
            </div>
          ))}
          {/* <NewLaptopForm getLaptops={getLaptops} setLaptops={setLaptops} /> */}
        </div>
      </div>
    </>
  );
};

export default LaptopCard;
