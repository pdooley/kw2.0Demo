/**********************************************************************
 *
 * kwBs/state/tz/kwBsSrvcMod.ts
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

import {kwBsSrvc}                   from './kwBsSrvc';
import {kwBsSrvcCtrlApi,
        kwBsSrvcCtrlLoad,
        kwBsSrvcCtrlMdl}            from './kwBsSrvcCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsSrvc,
        kwBsSrvcCtrlApi,
        kwBsSrvcCtrlLoad,
        kwBsSrvcCtrlMdl,
    ],
    exports:
    [
        kwBsSrvc,
        kwBsSrvcCtrlApi,
        kwBsSrvcCtrlLoad,
        kwBsSrvcCtrlMdl,
    ]
})
//@formatter:on
export class kwBsSrvcMod
{
    constructor()
    {
        //console.log('kwBsSrvcMod::constructor() called.');
    }
}
