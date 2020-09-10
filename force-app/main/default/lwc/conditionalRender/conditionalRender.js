import { LightningElement, track } from "lwc";

export default class ConditionalRender extends LightningElement {
  @track displayDiv = false;

  @track cityList = ["Mel", "Syd", "Bri", "Adl"];

  showDiv(event) {
    this.displayDiv = event.target.checked;
  }
}
