/**********************************************************************
 *
 * kwBs/state/tokens/kwBsTokensMod.ts
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

import {kwBsTokens}             from './kwBsTokens';
import {kwBsTokensCtrlVal}      from './kwBsTokensCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsTokens,
        kwBsTokensCtrlVal,
    ],
    exports:
    [
        kwBsTokens,
        kwBsTokensCtrlVal,
    ]
})
//@formatter:on
export class kwBsTokensMod
{

    constructor()
    {
        //console.log('kwBsTokensMod::constructor() called.');
    }
}
