/**********************************************************************
 *
 * kwNgUi/page/metrics/kwNgUiMetrics.scss
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corp.
 *
 **********************************************************************/
//@formatter:off
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from "@angular/router";
import {Routes }              from "@angular/router";

import {kwNgUiFuseMod}        from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';

import {kwNgUiMetrics }       from './kwNgUiMetrics';


const routes: Routes = [
    {
        path     : '**',
        component: kwNgUiMetrics,
    }
];

@NgModule(
{
    imports:
    [
        RouterModule.forChild(routes),

        CommonModule,

        kwNgUiFuseMod,
        dwCoreMod,

    ],
    declarations:
    [
        kwNgUiMetrics,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class kwNgUiMetricsMod
{
    constructor()
    {
        //console.log('kwNgUiMetricssMod::constructor() called.');
    }
}
