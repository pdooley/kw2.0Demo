/**********************************************************************
 *
 * kwBs/state/curr/kwBsCurrMod.ts
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

import {kwBsCurr}               from './kwBsCurr';
import {kwBsCurrCtrlApi,
        kwBsCurrCtrlMdl}        from './kwBsCurrCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsCurr,
        kwBsCurrCtrlApi,
        kwBsCurrCtrlMdl,
    ],
    exports:
    [
        kwBsCurr,
        kwBsCurrCtrlApi,
        kwBsCurrCtrlMdl,
    ]
})
//@formatter:on
export class kwBsCurrMod
{

    constructor()
    {
        //console.log('kwBsCurrMod::constructor() called.');
    }
}
