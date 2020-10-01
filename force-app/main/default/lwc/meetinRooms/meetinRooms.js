import { LightningElement, track } from "lwc";

export default class MeetinRooms extends LightningElement {
  @track selectedMeetingRoomInfo;

  meetinRoomsInfo = [
    { roomName: "A-01", roomCapacity: "12" },
    { roomName: "A-02", roomCapacity: "5" },
    { roomName: "A-03", roomCapacity: "12" },
    { roomName: "A-04", roomCapacity: "12" },
    { roomName: "A-05", roomCapacity: "13" },
    { roomName: "A-06", roomCapacity: "10" }
  ];

  onTileSelectHandler(event) {
    const meetingRoomInfo = JSON.parse(event.detail);
    this.selectedMeetingRoomInfo = meetingRoomInfo.roomName;
  }

  constructor() {
    super();
    this.template.addEventListener(
      "tileclick",
      this.onTileSelectHandler.bind(this)
    );
  }
}
