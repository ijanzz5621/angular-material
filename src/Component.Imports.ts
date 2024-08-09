import { NgModule } from "@angular/core";
import { InputComponent } from "./app/input/input.component";
import { ToggleComponent } from "./app/toggle/toggle.component";
import { SelectComponent } from "./app/select/select.component";

NgModule({
    exports: [
        InputComponent,
        ToggleComponent,
        SelectComponent
    ]
})

export class ComponentImports {}