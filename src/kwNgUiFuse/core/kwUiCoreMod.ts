//@formatter:off
import {NgModule} from '@angular/core';
import {Optional} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SkipSelf} from '@angular/core';

import {materialModule} from './modules/material.module';
import {sharedModule} from './modules/shared.module';

@NgModule(
{
    imports:
    [
        RouterModule,

        materialModule,
        sharedModule
    ],
    declarations:
    [

    ],
    exports:
    [
        RouterModule,

        materialModule,
        sharedModule,
    ]
})
export class kwUiCoreMod
{

    constructor(@Optional() @SkipSelf() parentModule: kwUiCoreMod)
    {
        //console.log('kwUiCoreMod::constructor() called.');

        //throwIfAlreadyLoaded(parentModule, 'kwUiCoreMod');
    }
}

//@formatter:on
