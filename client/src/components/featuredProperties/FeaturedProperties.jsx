import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/hotels?featured=true&limit=4");
  // const photos = ['./m1hotel.jpg','./m2hotel.jpg']
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
   
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
