import { LightningElement, track } from "lwc";
import Account_Name from "@salesforce/schema/Account.Name";
import Account_Phone from "@salesforce/schema/Account.Phone";
import Account_Website from "@salesforce/schema/Account.Website";

export default class AccountRecordForm extends LightningElement {
  @track recordId;
  @track objectApiName = "Account";
  fieldsArray = [Account_Name, Account_Phone, Account_Website];

  handleSuccess(event) {
    this.recordId = event.detail.id;
  }
}
