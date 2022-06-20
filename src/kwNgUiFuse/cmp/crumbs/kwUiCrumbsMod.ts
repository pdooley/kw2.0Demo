/**********************************************************************
 *
 * kwNgUiFuse/cmp/crumbs/kwUiCrumbsMod.ts
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

import {kwUiCoreMod} from '@kwNgUiFuseCore/kwUiCoreMod';

import {kwUiCrumbs} from './kwUiCrumbs';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiCrumbs
            ],
        exports:
            [
                kwUiCrumbs
            ]
    })
//@formatter:on
export class kwUiCrumbsMod {

}
