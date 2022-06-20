/**********************************************************************
 *
 * app/comp/opts/kwUiOptsMod.ts
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

import {kwUiOptsChkMod} from './chk/kwUiOptsChkMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';
import {kwUiCoreMod} from '@kwNgUiFuse/core/kwUiCoreMod';


import {kwUiOpts} from './kwUiOpts';

@NgModule(
    {
        imports:
            [
                kwUiOptsChkMod,
                kwUiTitleMod,
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiOpts,
            ],
        providers:
            [],
        exports:
            [
                kwUiOpts,

            ]
    })
//@formatter:on
export class kwUiOptsMod {

}
