/**********************************************************************
 *
 * kwNgUiFuse/crud/hdr/kwUiCrudHdrMod.ts
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
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';

import {kwUiCoreMod}          from '../../core/kwUiCoreMod';
import {kwUiCrudSrchMod}      from '../srch/kwUiCrudSrchMod';
import {kwUiCrudTitleMod}     from '../title/kwUiCrudTitleMod';

import {kwUiCrudHdr}          from './kwUiCrudHdr';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,
        kwUiCrudSrchMod,
        kwUiCrudTitleMod,
    ],
    declarations:
    [
        kwUiCrudHdr,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudHdr
    ],
})
//@formatter:on
export class kwUiCrudHdrMod
{
    constructor()
    {
        //console.log('kwUiCrudHdrMod::constructor() called.');
    }
}
