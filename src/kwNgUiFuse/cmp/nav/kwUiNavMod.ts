/**********************************************************************
 *
 * kw/kwUiNavMod.ts
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

import {kwUiNavLinkMod} from './link/kwUiNavLinkMod';
import {kwUiTitleMod} from '@kwNgUiFuseCmp/title/kwUiTitleMod';

import {kwUiNav} from './kwUiNav';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiNavLinkMod,
                kwUiTitleMod,
            ],
        declarations:
            [
                kwUiNav,
            ],
        providers:
            [],
        exports:
            [
                kwUiNav,

                kwUiNavLinkMod
            ]
    })
//@formatter:on
export class kwUiNavMod {

}
