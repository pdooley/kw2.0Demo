/**********************************************************************
 *
 * kwBs/state/routes/kwBsRoutesMod.ts
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

import {kwBsRoutes}             from './kwBsRoutes';
import {kwBsRoutesCtrlVal}      from './kwBsRoutesCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsRoutes,
        kwBsRoutesCtrlVal,
    ],
    exports:
    [
        kwBsRoutes,
        kwBsRoutesCtrlVal,
    ]
})
//@formatter:on
export class kwBsRoutesMod
{

    constructor()
    {
        //console.log('kwBsRoutesMod::constructor() called.');
    }
}
