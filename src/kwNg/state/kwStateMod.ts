/**********************************************************************
 *
 * kwNg/state/kwStateMod.ts
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
import {NgModule}               from '@angular/core';

import {kwAccMod}               from "./acc/kwAccMod";
import {kwAccCreateMod}         from "./accCreate/kwAccCreateMod";
import {kwAccsMod}              from "./accs/kwAccsMod";
import {kwActTagMod}            from "./actTag/kwActTagMod";
import {kwActTagsMod}           from "./actTags/kwActTagsMod";
import {kwApisMod}              from "./apis/kwApisMod";
import {kwMdlsMod}              from "./mdls/kwMdlsMod";
import {kwMetricMod}            from "./metric/kwMetricMod";
import {kwMetricsMod}           from "./metrics/kwMetricsMod";
import {kwOrgMod}               from "./org/kwOrgMod";
import {kwRedirectMod}          from "./redirect/kwRedirectMod";
import {kwSignoutMod}           from "./signout/kwSignoutMod";
import {kwSignupMod}            from "./signup/kwSignupMod";

import {kwState}                from './kwState';

@NgModule(
{
    imports:
    [
        kwAccMod,
        kwAccCreateMod,
        kwAccsMod,
        kwActTagMod,
        kwActTagsMod,
        kwApisMod,
        kwMdlsMod,
        kwMetricMod,
        kwMetricsMod,
        kwOrgMod,
        kwRedirectMod,
        kwSignoutMod,
        kwSignupMod,
    ],
    declarations:
    [
        kwState,
    ],
    exports:
    [
        kwState,

        kwAccMod,
        kwAccCreateMod,
        kwAccsMod,
        kwActTagMod,
        kwActTagsMod,
        kwApisMod,
        kwMdlsMod,
        kwMetricMod,
        kwMetricsMod,
        kwOrgMod,
        kwRedirectMod,
        kwSignoutMod,
        kwSignupMod,
    ],
    providers:
    [

    ]
})
//@formatter:on
export class kwStateMod {

    constructor()
    {
        //console.log('kwFbStateMod::constructor() called.');
    }
}
