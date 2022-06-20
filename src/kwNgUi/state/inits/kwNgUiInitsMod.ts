/**********************************************************************
 *
 * kwNg/state/inits/kwNgUiInitsMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {kwNgUiInits}                from './kwNgUiInits';
import {kwNgUiInitsCtrlApi,
        kwNgUiInitsCtrlLoad,
        kwNgUiInitsCtrlMap,
        kwNgUiInitsCtrlMsg}         from './kwNgUiInitsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwNgUiInits,
        kwNgUiInitsCtrlApi,
        kwNgUiInitsCtrlLoad,
        kwNgUiInitsCtrlMap,
        kwNgUiInitsCtrlMsg,
    ],
    exports:
    [
        kwNgUiInits,
        kwNgUiInitsCtrlApi,
        kwNgUiInitsCtrlLoad,
        kwNgUiInitsCtrlMap,
        kwNgUiInitsCtrlMsg,
    ]
})
//@formatter:on
export class kwNgUiInitsMod
{
    constructor()
    {
        //console.log('kwNgUiInitsMod::constructor() called.');
    }
}
