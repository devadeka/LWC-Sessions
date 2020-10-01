import { api, wire, LightningElement } from "lwc";
import { fireEvent } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class MeetingRoom extends LightningElement {
  @api meetingRoomInfo = { roomName: "A-01", roomCapacity: "12" };
  @api showRoomInfo = false; //since a boolean, always set to false

  @wire(CurrentPageReference) pageRefference;

  tileClickHandler() {
    const infoString = JSON.stringify(this.meetingRoomInfo);
    const tileClicked = new CustomEvent("tileclick", {
      detail: infoString,
      bubbles: true
    });

    this.dispatchEvent(tileClicked);
    fireEvent(this.pageRefference, "pubsubTileClick", this.meetingRoomInfo);
  }
}
