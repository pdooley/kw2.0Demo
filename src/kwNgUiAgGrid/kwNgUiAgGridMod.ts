/**********************************************************************
 *
 * kwNgUiAgGrid/kwUiAgGridMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import { AgGridModule }         from 'ag-grid-angular';

import { kwUiAgGrid }           from './kwUiAgGrid';



@NgModule(
{
    imports:
    [
        AgGridModule.withComponents([
        ]),

        CommonModule,

    ],
    declarations:
    [
        kwUiAgGrid,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiAgGrid
    ],
})
//@formatter:on
export class kwNgUiAgGridMod
{
    constructor()
    {
        //console.log('dwpCompanysMod::constructor() called.');
    }
}
