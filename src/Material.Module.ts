import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    exports:[
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatToolbarModule,
        MatMenuModule,
        MatBadgeModule,
    ]
})

export class MaterialModule {
}
