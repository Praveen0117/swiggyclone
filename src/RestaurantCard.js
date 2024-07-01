import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { info } = restaurant;
  const {
    id,
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    locality,
    cuisines,
    costForTwo,
  } = info;
  return (
    <Link
      to={`/restaurant/${id}`}
      className=" m-4 p-4 w-[260px] text-wrap bg-white rounded-lg hover:bg-gray-400 "
    >
      <img
        alt="res-logo"
        className=" rounded-lg w-[240px] pb-0 h-[150px]"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4 className="font-bold  text-lg text-ellipsis w-[240px] overflow-hidden text-nowrap mt-0">
        {" "}
        {name}
      </h4>
      <h4
        style={{ color: "green" }}
        className="flex items-center font-bold text-lg"
      >
        {" "}
        <i className="mr-2">
          <IoStarHalfOutline />
        </i>{" "}
        {avgRating}
      </h4>
      <h4> {locality}</h4>
      <h4 className="text-ellipsis w-[240px] overflow-hidden text-nowrap">
        {cuisines.join(",")}
      </h4>
      <h4>{costForTwo}</h4>
    </Link>
  );
};

export default RestaurantCard;
