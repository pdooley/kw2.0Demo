//@formatter:off
import { NgModule }                    from '@angular/core';

import { CommonModule }                from '@angular/common';
import { FormsModule }                from '@angular/forms';
import { HttpClientModule }            from '@angular/common/http';
import { ReactiveFormsModule }        from '@angular/forms';
import { FlexLayoutModule }            from '@angular/flex-layout';

import {kwNgMod}                    from "@kwNg/kwNgMod";
import {kwNgUiFuseMod}                from "@kwNgUiFuse/kwNgUiFuseMod";

@NgModule(
{
    declarations: [],
    imports:
    [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,

        kwNgMod,
        kwNgUiFuseMod
    ],
    exports:
    [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    entryComponents: [],
    providers: []
})
//@formatter:on
export class sharedModule
{
    constructor()
    {
        //console.log('sharedModule::constructor() called.');
    }

}
