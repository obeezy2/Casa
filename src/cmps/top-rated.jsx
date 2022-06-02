import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import hongkong from "../assets/img/logo/hongkong.jpg"
import rio from "../assets/img/logo/rio.jpg"
import barcelona from "../assets/img/logo/barcelona.jpg"
import newyork from "../assets/img/logo/newyork.webp"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { stayService } from '../services/stay.service'
export function TopRated({ onSetFilter }) {


  const [stay1, setStay1] = useState('')
  const [stay2, setStay2] = useState('')
  const [stay3, setStay3] = useState('')
  const [stay4, setStay4] = useState('')

  useEffect(() => {
    stayService.getById('622f337a75c7d36e498aab19').then(res => setStay1(res))
    stayService.getById('622f337a75c7d36e498aab4e').then(res => setStay2(res))
    stayService.getById('622f337a75c7d36e498aab36').then(res => setStay3(res))
    stayService.getById('622f337a75c7d36e498aaaf5').then(res => setStay4(res))


  }, [])
  //  const  loadStay = async() =>{

  // }
  // const stay2 = stayService.getById('622f337a75c7d36e498aab19')
  // const stay3 = stayService.getById('622f337b75c7d36e498aab82')

  return (
    <section className="top-rated">
      <h1 className="header-top-rated">Top Rated</h1>

      <section className="pop-cities">
        <Link to={`/stay/details/${stay1._id}`}>

          <div className="card" onClick={() => onSetFilter('Hong Kong')}>
            {stay1 && <img src={require(`../assets/img/houses/${stay1.imgUrls[0]}`)} />}

            <div className="city-details">
              <h3 className="color-city">Ipanema: moderno apê      <span>Rio de Janeiro</span></h3>
              <h4>

              </h4>
            </div>
          </div>
        </Link>
        <Link to={`/stay/details/${stay2._id}`}>
          <div className="card" onClick={() => onSetFilter('Rio de Janeiro')}>
            {stay2 && <img src={require(`../assets/img/houses/${stay2.imgUrls[0]}`)} />}

            <div className="city-details">
              <h3 className="color-city">Mike's House           <span>United States</span></h3>
              <h4>

              </h4>
            </div>
          </div>
        </Link>
        <Link to={`/stay/details/${stay3._id}`}> <div className="card">
          {stay3 && <img src={require(`../assets/img/houses/${stay3.imgUrls[0]}`)} />}

          <div className="city-details">
            <h3 className="color-city">Appartement lumineux     <span>Montreal</span></h3>
            <h4>

            </h4>
          </div>
        </div>
        </Link>
        <Link to={`/stay/details/${stay4._id}`}>

          <div className="card">
            {stay4 && <img src={require(`../assets/img/houses/${stay4.imgUrls[0]}`)} />}

            <div className="city-details">
              <h3 className="color-city">{stay4.name}        <span>Iceland</span></h3>
              <h4>

              </h4>
            </div>
          </div>
        </Link>
      </section>
    </section >
  )
}
