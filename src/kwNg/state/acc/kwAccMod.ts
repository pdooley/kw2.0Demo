/**********************************************************************
 *
 * kwNg/state/acc/kwAccMod.ts
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

import {kwAcc}                  from './kwAcc';
import {kwAccCtrlApi,
        kwAccCtrlLoad,
        kwAccCtrlMdl}           from './kwAccCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwAcc,
        kwAccCtrlApi,
        kwAccCtrlLoad,
        kwAccCtrlMdl,
    ],
    exports:
    [
        kwAcc,
        kwAccCtrlApi,
        kwAccCtrlLoad,
        kwAccCtrlMdl,
    ]
})
//@formatter:on
export class kwAccMod
{
    constructor()
    {
        //console.log('kwAccMod::constructor() called.');
    }
}
