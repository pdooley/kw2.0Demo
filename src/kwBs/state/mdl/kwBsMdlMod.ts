/**********************************************************************
 *
 * kwBs/state/tz/kwBsMdlMod.ts
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

import {kwBsMdl}                    from './kwBsMdl';
import {kwBsMdlCtrlApi,
        kwBsMdlCtrlLoad}            from './kwBsMdlCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsMdl,
        kwBsMdlCtrlApi,
        kwBsMdlCtrlLoad,
    ],
    exports:
    [
        kwBsMdl,
        kwBsMdlCtrlApi,
        kwBsMdlCtrlLoad,
    ]
})
//@formatter:on
export class kwBsMdlMod
{

    constructor()
    {
        //console.log('kwBsMdlMod::constructor() called.');
    }
}
