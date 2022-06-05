import { stayService } from "../services/stay.service";
import { useState } from "react";
import { AiOutlineHome, AiOutlineWifi, AiOutlineCheckSquare } from 'react-icons/ai';
import { BiCameraHome, BiBath } from 'react-icons/bi';
import { TiKeyOutline } from 'react-icons/ti';
import { HiOutlineLocationMarker, HiOutlineSparkles } from 'react-icons/hi';
import { FiMonitor, FiSpeaker } from 'react-icons/fi';
import { FaTemperatureLow, FaSwimmingPool } from 'react-icons/fa';
import { MdOutlineTakeoutDining, MdOutlineBeachAccess, MdOutlinePets, MdOutlineLocalLaundryService, MdOutlineElevator, MdOutlineLuggage, MdOutlineMicrowave, MdOutlineIron, MdOutlineCoffeeMaker } from 'react-icons/md';
import { CgSmartHomeWashMachine, CgSmartHomeRefrigerator } from 'react-icons/cg';
import { GiCigarette } from 'react-icons/gi';
export const StayInfo = ({ stay }) => {
  const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false);

  if (!stay) return <section className="stay-main-info-container"></section>;
  const amenities = stayService.getAmenities();
  return (
    <section className="stay-main-info-container">
      <div className="short-info-container">
        <div className="txt-info">
          <h2>
            {stay.roomType} hosted by {stay.host.fullname}
          </h2>
          <h4>
            {" "}
            {stay.capacity} guests · {stay.bedrooms} bedrooms · {stay.beds} beds
            · {stay.bathrooms} baths
          </h4>
        </div>
        <div className="host-img-container">
          <img src={stay.host.thumbnailUrl} alt="" />
        </div>
      </div>
      <div className="summary">
        <p>{stay.summary}</p>
      </div>
      <div className="amenities-container">
        <h2>What this place offers
        </h2>
        <div
          className="amenities"
          style={isAmenitiesExpanded ? { height: "fit-content" } : null}
        >
          {amenities.map((amenity, idx) => {
            switch (amenity) {
              case 'TV':
                return <p key={idx}> <FiMonitor /> {amenity}</p>
                break;
              case 'TV with standard cable':
                return <p key={idx}> <FiMonitor /> {amenity}</p>
                break;
              case 'Wifi':
                return <p key={idx}> <AiOutlineWifi /> {amenity}</p>
                break;
              case 'Kitchen':
                return <p key={idx}> <MdOutlineTakeoutDining /> {amenity}</p>
                break;
              case 'Cooking basics':
                return <p key={idx}> <MdOutlineTakeoutDining /> {amenity}</p>
                break;
              case 'Washer':
                return <p key={idx}> <CgSmartHomeWashMachine /> {amenity}</p>
                break;
              case 'Paid washer - In building':
                return <p key={idx}> <CgSmartHomeWashMachine /> {amenity}</p>
                break;
              case 'Beach access':
                return <p key={idx}> <MdOutlineBeachAccess /> {amenity}</p>
                break;
              case 'Beach access - Beachfront':
                return <p key={idx}> <MdOutlineBeachAccess /> {amenity}</p>
                break;
              case 'Pets allowed':
                return <p key={idx}> <MdOutlinePets /> {amenity}</p>
                break;
              case 'Sound system with aux':
                return <p key={idx}> <FiSpeaker /> {amenity}</p>
                break;
              case 'Dryer':
                return <p key={idx}> <MdOutlineLocalLaundryService /> {amenity}</p>
                break;
              case 'Security cameras on property':
                return <p key={idx}> <BiCameraHome /> {amenity}</p>
                break;
              case 'AC':
                return <p key={idx}> <FaTemperatureLow /> {amenity}</p>
                break;
              case 'Elevator':
                return <p key={idx}> <MdOutlineElevator /> {amenity}</p>
                break;
              case 'Luggage drop off allowed':
                return <p key={idx}> <MdOutlineLuggage /> {amenity}</p>
                break;
              case 'Smoking allowed':
                return <p key={idx}> <GiCigarette /> {amenity}</p>
                break;
              case 'Bathtub':
                return <p key={idx}> <BiBath /> {amenity}</p>
                break;
              case 'Refrigerator':
                return <p key={idx}> <CgSmartHomeRefrigerator /> {amenity}</p>
                break;
              case 'Microwave':
                return <p key={idx}> <MdOutlineMicrowave /> {amenity}</p>
                break;
              case 'Pool':
                return <p key={idx}> <FaSwimmingPool /> {amenity}</p>
                break;
              case 'Iron':
                return <p key={idx}> <MdOutlineIron /> {amenity}</p>
                break;
              case 'Coffee maker':
                return <p key={idx}> <MdOutlineCoffeeMaker /> {amenity}</p>
                break;

              default:
                return <p key={idx}><AiOutlineCheckSquare /> {amenity}</p>
                break;
            }
          })}
        </div>

      </div>
    </section>
  );
};
