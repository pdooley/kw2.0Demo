/**********************************************************************
 *
 * kw/kwUiTabsLinksMod.ts
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

import {kwUiTabsLinkMod} from '../link/kwUiTabsLinkMod';

import {kwUiTabsLinks} from './kwUiTabsLinks';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiTabsLinkMod,
            ],
        declarations:
            [
                kwUiTabsLinks,
            ],
        providers:
            [],
        exports:
            [
                kwUiTabsLinks,
            ]
    })
//@formatter:on
export class kwUiTabsLinksMod {

}
