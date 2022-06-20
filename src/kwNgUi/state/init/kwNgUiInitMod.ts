/**********************************************************************
 *
 * kwNgUi/state/tz/kwNgUiInitMod.ts
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
import {NgModule}                   from '@angular/core';

import {kwNgUiInit}                   from './kwNgUiInit';
import {kwNgUiInitCtrlApi}            from './kwNgUiInitCtrl';
import {kwNgUiInitCtrlLoad}           from './kwNgUiInitCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwNgUiInit,
        kwNgUiInitCtrlApi,
        kwNgUiInitCtrlLoad,
    ],
    exports:
    [
        kwNgUiInit,
        kwNgUiInitCtrlApi,
        kwNgUiInitCtrlLoad,
    ]
})
//@formatter:on
export class kwNgUiInitMod
{

    constructor()
    {
        //console.log('kwNgUiInitMod::constructor() called.');
    }
}
