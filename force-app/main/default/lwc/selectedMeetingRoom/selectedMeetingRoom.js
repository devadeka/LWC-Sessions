import { LightningElement, track, wire } from "lwc";
import { registerListener, unregisterAllListeners } from "c/pubsub";
import { CurrentPageReference } from "lightning/navigation";

export default class SelectedMeetingRoom extends LightningElement {
  selectedMeetingRoom = { roomName: "-", capacity: "-" };
  @track roomName;
  @track roomCap;
  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    registerListener("pubsubTileClick", this.onMeetingRoomSelectHandler, this);
  }

  disconnectedCallback() {
    unregisterAllListeners(this);
  }

  onMeetingRoomSelectHandler(payload) {
    const payloadString = JSON.stringify(payload);
    console.log("onMeetingRoomSelectHandler", payloadString);
    this.selectedMeetingRoom = JSON.parse(payloadString);
    this.roomName = this.selectedMeetingRoom.roomName;
    this.roomCap = this.selectedMeetingRoom.roomCapacity;
  }
}
