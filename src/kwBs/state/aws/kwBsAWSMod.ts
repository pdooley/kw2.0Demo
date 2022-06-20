/**********************************************************************
 *
 * kwBs/state/aws/kwBsAWSMod.ts
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

import {kwBsAWS}                from './kwBsAWS';
import {kwBsAWSCtrlVal}         from './kwBsAWSCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsAWS,
        kwBsAWSCtrlVal,
    ],
    exports:
    [
        kwBsAWS,
        kwBsAWSCtrlVal,
    ]
})
//@formatter:on
export class kwBsAWSMod
{

    constructor()
    {
        //console.log('kwBsAWSMod::constructor() called.');
    }
}
