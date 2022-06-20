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
import {NgModule} from "@angular/core";

import {kwUiCoreMod} from "@kwNgUiFuseCore/kwUiCoreMod";

import {kwUiBdyCtrMod} from "./ctr/kwUiBdyCtrMod";
import {kwUiBdyLftMod} from "./lft/kwUiBdyLftMod";
import {kwUiBdyRhtMod} from "./rht/kwUiBdyRhtMod";

import {kwUiBdy} from "./kwUiBdy";

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiBdyCtrMod,
                kwUiBdyLftMod,
                kwUiBdyRhtMod,
            ],
        declarations:
            [
                kwUiBdy,
            ],
        providers:
            [],
        exports:
            [
                kwUiBdy,
            ]
    })
//@formatter:on
export class kwUiBdyMod {

}
