import {CloudTransLoader} from "inet-ui";
import {viLocale} from "./vi";
import {enLocale} from "./en";

export class CustomTranslateLoader extends CloudTransLoader{
  constructor(){
    super();
    this.assign('vi', viLocale);
    this.assign('en', enLocale)
  }
}
