/**********************************************************************
 *
 * kwDlg/modules/shared.module.ts
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

//import {AngularSvgIconModule} from 'angular-svg-icon';
import {CommonModule}           from '@angular/common';
import {FlexLayoutModule}       from '@angular/flex-layout';
import {FormsModule}            from '@angular/forms';
import {ReactiveFormsModule}    from '@angular/forms';

import {materialModule}         from './material.module';


@NgModule(
    {
        declarations: [],
        imports:
            [
                //AngularSvgIconModule,
                CommonModule,
                FlexLayoutModule,
                FormsModule,
                materialModule,
                ReactiveFormsModule,
            ],
        exports:
            [
                //AngularSvgIconModule,
                CommonModule,
                FlexLayoutModule,
                FormsModule,
                materialModule,
                ReactiveFormsModule,
            ],
        entryComponents: [],
        providers: []
    })

export class sharedModule {

}

//@formatter:on
