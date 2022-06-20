/**********************************************************************
 *
 * kwBs/state/mode/kwBsModeMod.ts
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

import {kwBsMode}               from './kwBsMode';
import {kwBsModeCtrlVal}        from './kwBsModeCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsMode,
        kwBsModeCtrlVal,
    ],
    exports:
    [
        kwBsMode,
        kwBsModeCtrlVal,
    ]
})
//@formatter:on
export class kwBsModeMod
{

    constructor()
    {
        //console.log('kwBsModeMod::constructor() called.');
    }
}
