/**********************************************************************
 *
 * kwBs/state/apis/kwBsApisMod.ts
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

import {kwBsApis}               from './kwBsApis';
import {kwBsApisCtrlObj}        from './kwBsApisCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsApis,
        kwBsApisCtrlObj
    ],
    exports:
    [
        kwBsApis,
        kwBsApisCtrlObj
    ]
})
//@formatter:on
export class kwBsApisMod
{
    constructor()
    {
        //console.log('kwBsApisMod::constructor() called.');
    }
}
