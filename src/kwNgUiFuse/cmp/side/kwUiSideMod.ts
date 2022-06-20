/**********************************************************************
 *
 * kw/kwUiSideMod.ts
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
import {NgModule} from '@angular/core';

import {kwUiCoreMod} from '@kwNgUiFuse/core/kwUiCoreMod';

import {kwUiSide} from './kwUiSide';
import {kwUiInputMod} from '@kwNgUiFuseCmp/input/kwUiInputMod';
import {kwUiLogoMod} from '@kwNgUiFuseCmp/logo/kwUiLogoMod';
import {kwUiTabsMod} from '@kwNgUiFuseCmp/tabs/kwUiTabsMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiInputMod,
                kwUiLogoMod,
                kwUiTabsMod,
                kwUiTitleMod
            ],
        declarations:
            [
                kwUiSide,
            ],
        providers:
            [],
        exports:
            [
                kwUiSide,
            ]
    })
//@formatter:on
export class kwUiSideMod {

}
