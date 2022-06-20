/**********************************************************************
 *
 * kwBs/state/api/kwBsApiMod.ts
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

import {kwBsApi}                    from './kwBsApi';
import {kwBsApiCtrlApi,
        kwBsApiCtrlLoad}            from './kwBsApiCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsApi,
        kwBsApiCtrlApi,
        kwBsApiCtrlLoad
    ],
    exports:
    [
        kwBsApi,
        kwBsApiCtrlApi,
        kwBsApiCtrlLoad
    ]
})
//@formatter:on
export class kwBsApiMod
{

    constructor()
    {
        //console.log('kwBsApiMod::constructor() called.');
    }
}
