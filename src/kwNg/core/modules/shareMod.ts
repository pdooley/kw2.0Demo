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
import {NgModule}                    from '@angular/core';

import {CommonModule}                from '@angular/common';
import {FlexLayoutModule}            from '@angular/flex-layout';
import {FormsModule}                from '@angular/forms';
import {ReactiveFormsModule}        from '@angular/forms';

import {matMod}                    from './matMod';

@NgModule(
{
    declarations:
    [

    ],
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,

        matMod,

    ],
    exports:
    [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,

        matMod,

    ],
    entryComponents: [],
    providers: []
})
//@formatter:on
export class shareMod
{

}

