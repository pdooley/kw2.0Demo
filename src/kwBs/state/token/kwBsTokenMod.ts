/**********************************************************************
 *
 * kwBs/state/tz/kwBsTokenMod.ts
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

import {kwBsToken}                  from './kwBsToken';
import {kwBsTokenCtrlApi,
        kwBsTokenCtrlLoad,
        kwBsTokenCtrlMdl}           from './kwBsTokenCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsToken,
        kwBsTokenCtrlApi,
        kwBsTokenCtrlLoad,
        kwBsTokenCtrlMdl,
    ],
    exports:
    [
        kwBsToken,
        kwBsTokenCtrlApi,
        kwBsTokenCtrlLoad,
        kwBsTokenCtrlMdl,
    ]
})
//@formatter:on
export class kwBsTokenMod
{
    constructor()
    {
        //console.log('kwBsTokenMod::constructor() called.');
    }
}
