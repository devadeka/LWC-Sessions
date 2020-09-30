import { api, LightningElement } from "lwc";

export default class MeetingRoom extends LightningElement {
  //   @api meetingRoomInfo = { roomName: "A-01", roomCapacity: "12" };
  @api showRoomInfo = false; //since a boolean, always set to false
}
