import React, { useState, useEffect } from "react"


export function AddGuestsFilter(props) {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [pets, setPets] = useState(0)

  useEffect(() => {
    props.setGuests(adults + children + infants + pets)
  }, [adults, children, infants, pets])

  function updateAdults(diff) {
    const sum=calcTotalGuests()
    if (adults + diff < 0||sum+diff>props.maxGuests) return
    setAdults(adults + diff)
  }

  function updateChildren(diff) {
    const sum=calcTotalGuests()
    if (children + diff < 0||sum+diff>props.maxGuests) return
    setChildren(children + diff)
  }

  function updateInfants(diff) {
    const sum=calcTotalGuests()
    if (infants + diff < 0||sum+diff>props.maxGuests) return
    setInfants(infants + diff)
  }

  function updatePets(diff) {
    const sum=calcTotalGuests()
    if (pets + diff < 0||sum+diff>props.maxGuests) return
    setPets(pets + diff)
  }

  function calcTotalGuests() {
    return adults + children + infants + pets
  }

  return <div className="add-guest-container">
    <div className="add-guest-box">
      <div className="guests">
        <p>Adults</p>
        <p>Ages 13 or above</p>
      </div>
      <div className="guests-btns">
        <button onClick={() => updateAdults(1)} className='add-btn'>+</button>
        <span className="guests-number-display">{adults}</span>
        <button onClick={() => updateAdults(-1)} className='add-btn'>-</button>
      </div>
    </div>
    <div className="add-guest-box">
      <div className="guests">
        <p>Children</p>
        <p>Ages 2–12</p>
      </div>
      <div className="guests-btns">
        <button onClick={() => updateChildren(1)} className='add-btn'>+</button>
        <span className="guests-number-display">{children}</span>
        <button onClick={() => updateChildren(-1)} className='add-btn'>-</button>
      </div>
    </div>
    <div className="add-guest-box">
      <div className="guests">
        <p>Infants</p>
        <p>Under 2</p>
      </div>
      <div className="guests-btns">
        <button onClick={() => updateInfants(1)} className='add-btn'>+</button>
        <span className="guests-number-display">{infants}</span>
        <button onClick={() => updateInfants(-1)} className='add-btn'>-</button>
      </div>
    </div>
    <div className="add-guest-box">
      <div className="guests">
        <p>Pets</p>
        <p>Bringing a service animal?</p>
      </div>
      <div className="guests-btns">
        <button onClick={() => updatePets(1)} className='add-btn'>+</button>
        <span className="guests-number-display">{pets}</span>
        <button onClick={() => updatePets(-1)} className='add-btn'>-</button>
      </div>
    </div>
    <div className="total-guests-contanier">
      <p className="total">Total Guests:</p>
      <p className="total-calc"> {calcTotalGuests()}</p>
    </div>
  </div>
}


