/**********************************************************************
 *
 * kwNgUi/state/kwNgUiStateMod.ts
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

import {kwNgUiAttrsMod}         from './attrs/kwNgUiAttrsMod';
import {kwNgUiDispMod}          from './disp/kwNgUiDispMod';
import {kwNgUiInitMod}          from './init/kwNgUiInitMod';
import {kwNgUiInitsMod}         from './inits/kwNgUiInitsMod';
import {kwNgUiMetricsMod}       from './metrics/kwNgUiMetricsMod';
import {kwNgUiViewsMod}         from './views/kwNgUiViewsMod';

import {kwNgUiState}            from './kwNgUiState';

@NgModule(
{
    imports:
    [
        kwNgUiAttrsMod,
        kwNgUiDispMod,
        kwNgUiInitMod,
        kwNgUiInitsMod,
        kwNgUiMetricsMod,
        kwNgUiViewsMod,
    ],
    declarations:
    [
        kwNgUiState,
    ],
    exports:
    [
        kwNgUiState,

        kwNgUiAttrsMod,
        kwNgUiDispMod,
        kwNgUiInitMod,
        kwNgUiInitsMod,
        kwNgUiMetricsMod,
        kwNgUiViewsMod,
    ],
    providers:
    [

    ]
})
//@formatter:on
export class kwNgUiStateMod
{
    constructor()
    {
        //console.log('kwFbStateMod::constructor() called.');
    }
}
