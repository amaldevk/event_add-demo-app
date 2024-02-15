import React, { useEffect, useState } from "react";
import NavEvent from "./NavEvent";
import axios from "axios";

const ViewEvent = () => {
    const [data,setData] = new useState([])
    const getData=()=>{
        axios.get("http://35.170.103.9:3009/events").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
      <NavEvent />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">event name</th>
                  <th scope="col">event description</th>
                  <th scope="col">event date</th>
                  <th scope="col">event venue</th>
                </tr>
              </thead>
              <tbody>
               
               {
                data.map(
                    (value,index)=>{
                        return  <tr>
                        <td>{value.eventName}</td>
                        <td>{value.eventDescription}</td>
                        <td>{value.eventDate}</td>
                        <td>{value.eventVenue}</td>
                      </tr>
                    }
                )
               }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEvent;
