//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwSchedules}                from './dwSchedules';
import {dwSchedulesCtrlApi,
        dwSchedulesCtrlInit,
        dwSchedulesCtrlLoad,
        dwSchedulesCtrlPubSub,
        dwSchedulesCtrlView}        from './dwSchedulesCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwSchedules,
        dwSchedulesCtrlApi,
        dwSchedulesCtrlInit,
        dwSchedulesCtrlLoad,
        dwSchedulesCtrlPubSub,
        dwSchedulesCtrlView,
    ],
    exports:
    [
        dwSchedules,
        dwSchedulesCtrlApi,
        dwSchedulesCtrlInit,
        dwSchedulesCtrlLoad,
        dwSchedulesCtrlPubSub,
        dwSchedulesCtrlView,
    ]
})
//@formatter:on
export class dwSchedulesMod
{
    constructor()
    {
        //console.log('dwSchedulesMod::constructor() called.');
    }
}
