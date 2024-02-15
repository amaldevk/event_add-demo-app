import React, { useState } from "react";
import NavEvent from "./NavEvent";
import axios from "axios";

const AddEvent = () => {
  const [evt,setInput] = new useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventVenue: "",
  });
  const inputHandler=(event)=>{
    setInput({...evt,[event.target.name]:event.target.value})
  }
  const readValues=()=>{
    console.log(evt)
    axios.post("http://35.170.103.9:3009/addEvent",evt).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status == "success") {
                alert("data uploaded")
                setInput(
                    {
                        eventName: "",
                        eventDescription: "",
                        eventDate: "",
                        eventVenue: "",
                      }
                )
            } else {
                alert("failed")
            }
        }
    )
  }
  return (
    <div>
      <NavEvent />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  event name
                </label>
                <input type="text" className="form-control" name="eventName" value={evt.eventName} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form">
                  event description
                </label>
                <input type="text" className="form-control" name="eventDescription" value={evt.eventDescription} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  event date
                </label>
                <input type="date" className="form-control" name="eventDate" value={evt.eventDate} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <label htmlFor="" className="form-label">
                  event venue
                </label>
                <input type="text" className="form-control" name="eventVenue" value={evt.eventVenue} onChange={inputHandler}/>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 xol-xxl-6">
                <button className="btn btn-success" onClick={readValues}>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
