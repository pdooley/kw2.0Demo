//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwMgmtPayrolls}             from './dwMgmtPayrolls';
import {dwMgmtPayrollsCtrlInit,
        dwMgmtPayrollsCtrlPubSub,
        dwMgmtPayrollsCtrlView}     from './dwMgmtPayrollsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwMgmtPayrolls,
        dwMgmtPayrollsCtrlInit,
        dwMgmtPayrollsCtrlPubSub,
        dwMgmtPayrollsCtrlView,
    ],
    exports:
    [
        dwMgmtPayrolls,
        dwMgmtPayrollsCtrlInit,
        dwMgmtPayrollsCtrlPubSub,
        dwMgmtPayrollsCtrlView,
    ]
})

//@formatter:on
export class dwMgmtPayrollsMod
{
    constructor()
    {
        //console.log('dwMgmtPayrollsMod::constructor() called.');
    }
}
