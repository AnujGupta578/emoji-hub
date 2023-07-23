import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { EmojisComponent } from "./emojis.component";
import { EmojisRoutingModule } from "./emojis.route";
import { PaginationComponent } from "../pagination/pagination.component";
import { PaginationModule } from "../pagination/pagination.module";


@NgModule({
  imports: [
    SharedModule,
    EmojisRoutingModule,
    PaginationModule
  ],
  declarations: [EmojisComponent]

})

export class EmojisModule { }