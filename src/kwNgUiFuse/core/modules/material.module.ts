/**********************************************************************
 *
 * kwDlg/modules/material.module.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTableModule,
    MatToolbarModule
}                               from '@angular/material';
import {MatTabsModule}          from '@angular/material/tabs';

@NgModule(
    {
        imports:
            [
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatSelectModule,
                MatSidenavModule,
                MatSlideToggleModule,
                MatStepperModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
            ],
        exports:
            [
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatSelectModule,
                MatSidenavModule,
                MatSlideToggleModule,
                MatStepperModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
            ],
    })
export class materialModule {
}

//@formatter:on
