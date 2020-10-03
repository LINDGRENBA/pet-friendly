import * as React from 'react';
import { connect } from 'react-redux';


const ProfileControl = () => (

  <div>
    <img src="#" alt="user profile image"/>
    <h1>Image Here</h1>
    <p>This is your profile page.</p>
    <p>About Me: Dreamcatcher humblebrag master cleanse af kombucha small batch messenger bag you probably haven't heard of them. Intelligentsia poke health goth narwhal, small batch skateboard activated charcoal hot chicken pabst live-edge. Blue bottle keffiyeh humblebrag unicorn vexillologist.</p>

    <div>
      <h3>My Pets</h3>
      <div className="pets">
        <div className="pet">
          <img src="#" alt="pet profile image"/>
          <h4>Pet Name</h4>
          <p>Special needs?</p>
          <p>Typewriter plaid bushwick williamsburg fanny pack shaman direct trade tumblr photo booth irony unicorn gochujang. Truffaut brunch squid pabst vinyl shoreditch enamel pin gastropub yuccie iceland.</p>
        </div>
        <div className="pet">
          <img src="#" alt="pet profile image"/>
          <h4>Pet Name</h4>
          <p>Special needs?</p>
          <p>Typewriter plaid bushwick williamsburg fanny pack shaman direct trade tumblr photo booth irony unicorn gochujang. Truffaut brunch squid pabst vinyl shoreditch enamel pin gastropub yuccie iceland.</p>
        </div>
        <div className="pet">
          <img src="#" alt="pet profile image"/>
          <h4>Pet Name</h4>
          <p>Special needs?</p>
          <p>Typewriter plaid bushwick williamsburg fanny pack shaman direct trade tumblr photo booth irony unicorn gochujang. Truffaut brunch squid pabst vinyl shoreditch enamel pin gastropub yuccie iceland.</p>
        </div>
      </div>
    </div>
  </div>

);



export default connect()(ProfileControl);