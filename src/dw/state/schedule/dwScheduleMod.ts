//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwSchedule}                 from './dwSchedule';
import {dwScheduleCtrlApi,
        dwScheduleCtrlInit,
        dwScheduleCtrlLoad,
        dwScheduleCtrlMap,
        dwScheduleCtrlMdl,
        dwScheduleCtrlPubSub}        from './dwScheduleCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwSchedule,
        dwScheduleCtrlApi,
        dwScheduleCtrlInit,
        dwScheduleCtrlLoad,
        dwScheduleCtrlMap,
        dwScheduleCtrlMdl,
        dwScheduleCtrlPubSub
    ],
    exports:
    [
        dwSchedule,
        dwScheduleCtrlApi,
        dwScheduleCtrlInit,
        dwScheduleCtrlLoad,
        dwScheduleCtrlMap,
        dwScheduleCtrlMdl,
        dwScheduleCtrlPubSub
    ]
})
//@formatter:on
export class dwScheduleMod
{

    constructor()
    {
        //console.log('dwScheduleMod::constructor() called.');
    }
}
