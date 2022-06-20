/**********************************************************************
 *
 * kw/kwUiBdyMod.ts
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
import {NgModule}       from "@angular/core";

import {kwUiCoreMod}  from "@kwNgUiFuseCore/kwUiCoreMod";

import {kwUiNavMod}     from "@kwNgUiFuseCmp/nav/kwUiNavMod";
import {kwUiSideMod}    from "@kwNgUiFuseCmp/side/kwUiSideMod";
import {kwUiOptsMod}    from "@kwNgUiFuseCmp/opts/kwUiOptsMod";
import {kwUiTabsMod}    from "@kwNgUiFuseCmp/tabs/kwUiTabsMod";

import {kwUiBdyLft}     from "./kwUiBdyLft";

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiNavMod,
                kwUiSideMod,
                kwUiOptsMod,
                kwUiTabsMod,
            ],
        declarations:
            [
                kwUiBdyLft,
            ],
        providers:
            [],
        exports:
            [
                kwUiBdyLft,
            ]
    })
//@formatter:on
export class kwUiBdyLftMod {

}
