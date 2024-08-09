import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    exports:[
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatAutocompleteModule
    ]
})

export class MaterialModule {
}