import { LightningElement, track, wire } from "lwc";
import { createRecord, getRecord } from "lightning/uiRecordApi";

const fieldArray = ["Account.Name", "Account.Phone", "Account.Website"];

export default class AccontManagerLDS extends LightningElement {
  @track accountName;
  @track accountPhone;
  @track accountWebsite;

  @track recordId;

  @wire(getRecord, { recordId: "$recordId", fields: fieldArray }) accountRecord;

  accountNameChangeHandler(event) {
    this.accountName = event.target.value;
  }
  accountPhoneChangeHandler(event) {
    this.accountPhone = event.target.value;
  }
  accountWebsiteChangeHandler(event) {
    this.accountWebsite = event.target.value;
  }

  get retAccountName() {
    if (this.accountRecord.data) {
      return this.accountRecord.data.fields.Name.value;
    }
    return undefined;
  }

  get retAccountPhone() {
    if (this.accountRecord.data) {
      return this.accountRecord.data.fields.Phone.value;
    }
    return undefined;
  }

  get retAccountWebsite() {
    if (this.accountRecord.data) {
      return this.accountRecord.data.fields.Website.value;
    }
    return undefined;
  }

  createAccount() {
    const fields = {
      Name: this.accountName,
      Phone: this.accountPhone,
      Website: this.accountWebsite
    };

    const recordInput = {
      apiName: "Account",
      fields
    };

    createRecord(recordInput)
      .then((data) => {
        console.log("Account created wiht id:", data.id);
        this.recordId = data.id;
      })
      .catch((err) => console.log("Error:", err));
  }
}
