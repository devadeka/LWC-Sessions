import { api, LightningElement, track } from "lwc";

export default class PublicMethodChild extends LightningElement {
  @track value = ["option1"];

  options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "White", value: "white" },
    { label: "Black", value: "black" }
  ];

  @api
  selectCheckbox(checkboxValue) {
    const selectedCheckbox = this.options.find(
      (checkbox) => checkbox.value === checkboxValue
    );

    console.log("cbVal", checkboxValue);
    console.log("sVal", selectedCheckbox);

    if (selectedCheckbox) {
      this.value = selectedCheckbox.value;
      return "Checkbox found";
    }

    return "No checkbox found";
  }
}
