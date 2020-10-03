import * as React from 'react';
import { connect } from 'react-redux';


const MyTripsControl = () => (

  <div>
    <h1>Hello</h1>
    <p>This is the MyTripsControl page.</p>


    <button type="submit">Add a Trip</button> <br/>

    <div id="trips">
      <div className="trip">
        <h2>Trip to Place</h2>
        <p>Trip Details: Single-origin coffee jianbing synth, poke tbh raw denim butcher vexillologist. Next level gastropub glossier bitters, typewriter forage hell of crucifix bespoke etsy.</p>
      </div>
      <div className="trip">
        <h2>Trip to Place</h2>
        <p>Trip Details: Single-origin coffee jianbing synth, poke tbh raw denim butcher vexillologist. Next level gastropub glossier bitters, typewriter forage hell of crucifix bespoke etsy.</p>
      </div>
      <div className="trip">
        <h2>Trip to Place</h2>
        <p>Trip Details: Single-origin coffee jianbing synth, poke tbh raw denim butcher vexillologist. Next level gastropub glossier bitters, typewriter forage hell of crucifix bespoke etsy.</p>
      </div>
    </div>

    <form id="add-trip-form" action="#">
      <h3>Add a Trip</h3> 
      <div className="form-group">
        <label htmlFor="destination"><span className="required">*</span>Where are you going?</label>
        <input type="text" id="destination" className="form-control" placeholder="destination" required/>
      </div>
      <div className="form-group">
        <label htmlFor="dates">What are your travel dates? <span className="optional">( optional )</span></label>
        {/* update to date from and date to with calendar options */}
        <input type="text" id="dates" className="form-control" placeholder="dates"/>
      </div>
      <div className="form-group">
        <label htmlFor="pets">Which pets are you traveling with <span className="optional">( optional )</span></label>
        {/* update to checkbox someday - stretch goal */}
        <input type="text" id="pets" className="form-control" placeholder="who's going with"/>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Do you want to make any additional notes about your trip? <span className="optional">( optional )</span></label>
        <textarea id="notes" className="form-control" placeholder="notes to self"/>
      </div>
      <button type="submit">Save</button>
    </form>

  </div>

);



export default connect()(MyTripsControl);
