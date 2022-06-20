/**********************************************************************
 *
 * kw/kwUiTabsLinkTitleMod.ts
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

import {kwUiTabsLinkTitle} from './kwUiTabsLinkTitle';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiTabsLinkTitle,
            ],
        providers:
            [],
        exports:
            [
                kwUiTabsLinkTitle,
            ]
    })
//@formatter:on
export class kwUiTabsLinkTitleMod {

}
