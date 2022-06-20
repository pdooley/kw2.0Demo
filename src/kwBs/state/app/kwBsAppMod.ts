/**********************************************************************
 *
 * kwBs/state/app/kwBsAppMod.ts
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

import {kwBsApp}                from './kwBsApp';
import {kwBsAppCtrlObj}         from './kwBsAppCtrl';
import {kwBsAppStObj}           from './kwBsAppSt';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsApp,
        kwBsAppCtrlObj,
    ],
    exports:
    [
        kwBsApp,
        kwBsAppCtrlObj,
    ],
    providers:
    [
        kwBsAppStObj,
    ]
})
//@formatter:on
export class kwBsAppMod
{
    constructor()
    {
        //console.log('kwBsAppMod::constructor() called.');
    }
}
