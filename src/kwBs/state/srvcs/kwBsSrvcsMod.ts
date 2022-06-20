/**********************************************************************
 *
 * kwBs/state/srvcs/kwBsSrvcsMod.ts
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

import {kwBsSrvcs}              from './kwBsSrvcs';
import {kwBsSrvcsCtrlObj}       from './kwBsSrvcsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsSrvcs,
        kwBsSrvcsCtrlObj,
    ],
    exports:
    [
        kwBsSrvcs,
        kwBsSrvcsCtrlObj,
    ]
})
//@formatter:on
export class kwBsSrvcsMod
{
    constructor()
    {
        //console.log('kwBsSrvcsMod::constructor() called.');
    }
}
