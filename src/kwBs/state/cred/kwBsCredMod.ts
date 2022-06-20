/**********************************************************************
 *
 * kwBs/state/cred/kwBsCredMod.ts
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
import {NgModule}           from '@angular/core';

import {kwBsCred}           from './kwBsCred';
import {kwBsCredCtrlObj}    from './kwBsCredCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsCred,
        kwBsCredCtrlObj,
    ],
    exports:
    [
        kwBsCred,
        kwBsCredCtrlObj,
    ]
})
//@formatter:on
export class kwBsCredMod
{
    constructor()
    {
        //console.log('kwBsCredMod::constructor() called.');
    }
}
