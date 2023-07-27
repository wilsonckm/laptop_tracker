const EditLaptopForm = ({ laptop }) => {

  

  return (
    <div className="row">
      <form className="col">
        <input
          className="input-field col s6"
          type="text"
          value={laptop.brand}
        />
        <input
          className="input-field col s6"
          type="text"
          value={laptop.model}
        />
        <input
          className="input-field col s6"
          type="text"
          value={laptop.color}
        />
        <input className="input-field col s6" type="text" value={laptop.ssd} />
        <input className="input-field col s6" type="text" value={laptop.ram} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditLaptopForm;
