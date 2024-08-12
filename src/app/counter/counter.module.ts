import { NgModule } from "@angular/core";
import { CounterComponent } from "./componenents/counter.component";


@NgModule({
  declarations: [
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
