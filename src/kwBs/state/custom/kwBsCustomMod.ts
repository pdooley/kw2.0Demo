/**********************************************************************
 *
 * kwBs/state/custom/kwBsCustomMod.ts
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

import {kwBsCustom}             from './kwBsCustom';
import {kwBsCustomCtrlApi,
        kwBsCustomCtrlLoad}     from './kwBsCustomCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsCustom,
        kwBsCustomCtrlApi,
        kwBsCustomCtrlLoad
    ],
    exports:
    [
        kwBsCustom,
        kwBsCustomCtrlApi,
        kwBsCustomCtrlLoad
    ]
})
//@formatter:on
export class kwBsCustomMod
{
    constructor()
    {
        //console.log('kwBsCustomMod::constructor() called.');
    }
}
