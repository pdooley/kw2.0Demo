//@formatter:off
import {NgModule}               from '@angular/core';

import {dwJobs}                 from './dwJobs';
import {dwJobsCtrlApi,
        dwJobsCtrlInit,
        dwJobsCtrlLoad,
        dwJobsCtrlPubSub,
        dwJobsCtrlView}         from './dwJobsCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwJobs,

                dwJobsCtrlApi,
                dwJobsCtrlInit,
                dwJobsCtrlLoad,
                dwJobsCtrlPubSub,
                dwJobsCtrlView,
            ],
        exports:
            [
                dwJobs,

                dwJobsCtrlApi,
                dwJobsCtrlInit,
                dwJobsCtrlLoad,
                dwJobsCtrlPubSub,
                dwJobsCtrlView,
            ]
    })
//@formatter:on
export class dwJobsMod
{
    constructor()
    {
        //console.log('dwJobsMod::constructor() called.');
    }
}
