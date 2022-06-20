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
import {NgModule}           from "@angular/core";

import {kwUiCoreMod}      from "@kwNgUiFuseCore/kwUiCoreMod";

import {kwUiFrmMod}         from "@kwNgUiFuseCmp/frm/kwUiFrmMod";
import {kwUiRouterMod}      from "@kwNgUiFuseCmp/router/kwUiRouterMod";
import {kwUiRowsMod}        from "@kwNgUiFuseCmp/rows/kwUiRowsMod";

import {kwUiBdyCtr}         from "./kwUiBdyCtr";

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiFrmMod,
                kwUiRouterMod,
                kwUiRowsMod,

            ],
        declarations:
            [
                kwUiBdyCtr,
            ],
        providers:
            [],
        exports:
            [
                kwUiBdyCtr,

                kwUiFrmMod,
                kwUiRouterMod,
                kwUiRowsMod,
            ]
    })
//@formatter:on
export class kwUiBdyCtrMod {

}
