/**********************************************************************
 *
 * kwBs/state/langs/kwBsLangsMod.ts
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

import {kwBsLangs}              from './kwBsLangs';
import {kwBsLangsCtrlApi,
        kwBsLangsCtrlLoad,
        kwBsLangsCtrlMap,
        kwBsLangsCtrlMsg}       from './kwBsLangsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsLangs,
        kwBsLangsCtrlApi,
        kwBsLangsCtrlLoad,
        kwBsLangsCtrlMap,
        kwBsLangsCtrlMsg,
    ],
    exports:
    [
        kwBsLangs,
        kwBsLangsCtrlApi,
        kwBsLangsCtrlLoad,
        kwBsLangsCtrlMap,
        kwBsLangsCtrlMsg,
    ]
})
//@formatter:on
export class kwBsLangsMod
{

    constructor()
    {
        //console.log('kwBsLangsMod::constructor() called.');
    }
}
