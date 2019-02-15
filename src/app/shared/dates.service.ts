import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DatesService {
  constructor() {}
  destination: string = "";
  from: string = "";
  to: string = "";
}
