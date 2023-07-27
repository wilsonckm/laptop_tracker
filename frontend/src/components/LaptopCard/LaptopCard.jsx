import LaptopDetails from '../LaptopDetails/LaptopDetails';

const LaptopCard = ({laptops}) => {
  return (
    <div className="container">
        {laptops.map((laptop)=>(
      <div key={laptop._id} className='laptops-container'>
         <LaptopDetails laptop ={laptop} />
      </div>
    ))}
      
    </div>
  );
};

export default LaptopCard;
