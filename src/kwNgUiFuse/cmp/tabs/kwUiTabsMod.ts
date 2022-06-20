/**********************************************************************
 *
 * kw/kwUiTabsMod.ts
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

import {kwUiTabsLinksMod} from './links/kwUiTabsLinksMod';
import {kwUiTabsTitleMod} from './title/kwUiTabsTitleMod';

import {kwUiTabs} from './kwUiTabs';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod,

                kwUiTabsLinksMod,
                kwUiTabsTitleMod,
            ],
        declarations:
            [
                kwUiTabs,
            ],
        providers:
            [],
        exports:
            [
                kwUiTabs,
            ]
    })
//@formatter:on
export class kwUiTabsMod {

}
