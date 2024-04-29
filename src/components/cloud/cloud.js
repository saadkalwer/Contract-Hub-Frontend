import React from "react";
import { CloudSection} from "./style";
import cloudimg from "../../image/rafi.jpg";
import backup from "../../image/realtime.jpg";
import network from "../../image/network.jpg";


function Cloud() {
  return (
    <CloudSection>
      <div className="Cloud-Section">
        <div className="Cloud-Container">
     <img className="Cloud-image" src={cloudimg} alt="" />
 
        <div className="Cloud-Text-Section">
            <h1 className="Cloud-Title">Secure Cloud Storage</h1>
        <p className="Cloud-Text">We keep your documents secure using top of the art security and the <br/> worlds most trusted data centers owned by Amazon.
        <div className="Back-Network-Section">
            <div className="Backup-Section">
            <img className="Backup-Image" src={backup} alt="" />
                <span className="Network-Title">Real-time Backups</span>
                <p className="Backup-Text">With real-time backups across 6 <br/> individual data centers located on 2 <br/>  continents.</p>
            </div>
            <div className="Network-Section">
            <img className="NetworkImage" src={network} alt="" />
                <span className="Network-Title">Data Rooms</span>
                <p className="Network-Text">Create your own data room with <br/> properly coded documents</p>
                </div>
        </div>

</p>
</div>

        </div>
      </div>
    </CloudSection>
  );
}

export default Cloud;
