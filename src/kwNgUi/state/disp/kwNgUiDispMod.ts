/**********************************************************************
 *
 * kwNgUi/state/disp/kwNgUiDispMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {kwNgUiDisp}             from './kwNgUiDisp';
import {kwNgUiDispCtrlObj}      from './kwNgUiDispCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwNgUiDisp,
        kwNgUiDispCtrlObj,
    ],
    exports:
    [
        kwNgUiDisp,
        kwNgUiDispCtrlObj,
    ]
})
//@formatter:on
export class kwNgUiDispMod
{
    constructor()
    {
        //console.log('kwNgUiDispMod::constructor() called.');
    }
}
