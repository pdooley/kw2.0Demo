/**********************************************************************
 *
 * kwNgUiFuse/cmp/kwNgUiCmpMod.ts
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
import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';

import {kwUiCoreMod}        from '../core/kwUiCoreMod';

import {kwUiDynMod}         from './dyn/kwUiDynMod';
import {kwUiBdyMod}         from './bdy/kwUiBdyMod';
import {kwUiBtnMod}         from './btn/kwUiBtnMod';
import {kwUiChkMod}         from './chk/kwUiChkMod';
import {kwUiContentMod}     from './content/kwUiContentMod';
import {kwUiCrumbsMod}      from './crumbs/kwUiCrumbsMod';
import {kwUiFldMod}         from './fld/kwUiFldMod';
import {kwUiFormMod}        from '../form/kwUiFormMod';
import {kwUiFrmMod}         from './frm/kwUiFrmMod';
import {kwUiFtrMod}         from './ftr/kwUiFtrMod';
import {kwUiHdrMod}         from './hdr/kwUiHdrMod';
import {kwUiIconMod}        from './icon/kwUiIconMod';
import {kwUiImgMod}         from './img/kwUiImgMod';
import {kwUiInputMod}       from './input/kwUiInputMod';
import {kwUiLinkMod}        from './link/kwUiLinkMod';
import {kwUiLinkTagMod}     from './linkTag/kwUiLinkTagMod';
import {kwUiListMod}        from '../list/kwUiListMod';
import {kwUiLogoMod}        from './logo/kwUiLogoMod';
import {kwUiNavMod}         from './nav/kwUiNavMod';
import {kwUiOptsMod}        from './opts/kwUiOptsMod';
import {kwUiRecMod}         from './rec/kwUiRecMod';
import {kwUiRouterMod}      from './router/kwUiRouterMod';
import {kwUiRowsMod}        from './rows/kwUiRowsMod';
import {kwUiSelectMod}      from './select/kwUiSelectMod';
import {kwUiSideMod}        from './side/kwUiSideMod';
import {kwUiSideBarMod}     from './sideBar/kwUiSideBarMod';
import {kwUiSpanMod}        from './span/kwUiSpanMod';
import {kwUiSubTitleMod}    from './subTitle/kwUiSubTitleMod';
import {kwUiSvgMod}         from './svg/kwUiSvgMod';
import {kwUiTabMod}         from './tab/kwUiTabMod';
import {kwUiTabHorMod}      from './tabHor/kwUiTabHorMod';
import {kwUiTabsMod}        from './tabs/kwUiTabsMod';
import {kwUiTitleMod}       from './title/kwUiTitleMod';
import {kwUiToolbarMod}     from '../form/toolbar/kwUiToolbarMod';
import {kwUiUtilMod}        from './util/kwUiUtilMod';

import {kwUiCmp}            from './kwUiCmp';

@NgModule(
    {
        imports:
            [
                CommonModule,
                kwUiCoreMod,

                kwUiBdyMod,
                kwUiBtnMod,
                kwUiChkMod,
                kwUiContentMod,
                kwUiCrumbsMod,
                kwUiDynMod,
                kwUiFldMod,
                kwUiFormMod,
                kwUiFrmMod,
                kwUiFtrMod,
                kwUiHdrMod,
                kwUiIconMod,
                kwUiImgMod,
                kwUiInputMod,
                kwUiLinkMod,
                kwUiLinkTagMod,
                kwUiListMod,
                kwUiLogoMod,
                kwUiNavMod,
                kwUiOptsMod,
                kwUiRecMod,
                kwUiRouterMod,
                kwUiRowsMod,
                kwUiSelectMod,
                kwUiSideMod,
                kwUiSideBarMod,
                kwUiSpanMod,
                kwUiSubTitleMod,
                kwUiSvgMod,
                kwUiTabHorMod,
                kwUiTabMod,
                kwUiTabsMod,
                kwUiTitleMod,
                kwUiToolbarMod,
                kwUiUtilMod,

                kwUiDynMod,
            ],
        declarations:
            [
                kwUiCmp,
            ],
        exports:
            [
                kwUiCmp,

                kwUiCoreMod,

                CommonModule,

                kwUiBdyMod,
                kwUiBtnMod,
                kwUiChkMod,
                kwUiContentMod,
                kwUiCrumbsMod,
                kwUiDynMod,
                kwUiFldMod,
                kwUiFormMod,
                kwUiFrmMod,
                kwUiFtrMod,
                kwUiHdrMod,
                kwUiIconMod,
                kwUiImgMod,
                kwUiInputMod,
                kwUiLinkMod,
                kwUiLinkTagMod,
                kwUiListMod,
                kwUiLogoMod,
                kwUiNavMod,
                kwUiOptsMod,
                kwUiRecMod,
                kwUiRouterMod,
                kwUiRowsMod,
                kwUiSelectMod,
                kwUiSideMod,
                kwUiSideBarMod,
                kwUiSpanMod,
                kwUiSubTitleMod,
                kwUiSvgMod,
                kwUiTabMod,
                kwUiTabHorMod,
                kwUiTabsMod,
                kwUiTitleMod,
                kwUiToolbarMod,
                kwUiUtilMod,

                kwUiDynMod,
            ]
    })
//@formatter:on
export class kwUiCmpMod {

    constructor() {
        //console.log('kwNgViewMod::constructor() called.');
    }
}
