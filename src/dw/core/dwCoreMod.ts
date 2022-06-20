//@formatter:off
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { materialModule }       from './modules/material.module';
import { sharedModule }         from './modules/shared.module';
import { dwStateMod }           from '@dwState/dwStateMod';

@NgModule(
{
    imports:
    [
        RouterModule,

        materialModule,
        sharedModule,

        dwStateMod,
    ],
    declarations:
    [
    ],
    exports:
    [
        RouterModule,

        materialModule,
        sharedModule,

        dwStateMod,
    ]
})
//@formatter:on

export class dwCoreMod
{

    constructor()
    {
        //console.log('dwCoreMod::constructor() called.');

    }
}

