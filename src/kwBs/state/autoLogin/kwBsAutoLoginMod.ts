/**********************************************************************
 *
 * kwBs/state/autoLogin/kwBsAutoLoginMod.ts
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

import {kwBsAutoLogin}          from './kwBsAutoLogin';
import {kwBsAutoLoginCtrlSmpl}  from './kwBsAutoLoginCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsAutoLogin,
        kwBsAutoLoginCtrlSmpl,
    ],
    exports:
    [
        kwBsAutoLogin,
        kwBsAutoLoginCtrlSmpl,
    ]
})
//@formatter:on
export class kwBsAutoLoginMod
{
    constructor()
    {
        //console.log('kwBsAutoLoginMod::constructor() called.');
    }
}
