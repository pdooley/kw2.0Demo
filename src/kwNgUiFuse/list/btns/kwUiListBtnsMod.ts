/**********************************************************************
 *
 * kwNgUiFuse/list/btns/kwUiListBtnsMod.ts
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

import {kwUiCoreMod}        from '../../core/kwUiCoreMod';

import {kwUiListBtnsBtnMod}      from "./btn/kwUiListBtnsBtnMod";

import {kwUiListBtns}            from "./kwUiListBtns";

@NgModule(
{
    imports:
    [
        kwUiCoreMod,

        kwUiListBtnsBtnMod
    ],
    declarations:
    [
        kwUiListBtns,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiListBtns,
    ]
})
//@formatter:on
export class kwUiListBtnsMod
{
    constructor()
    {
        //console.log("kwUiListBtnsMod::constructor() called.");
    }

}
