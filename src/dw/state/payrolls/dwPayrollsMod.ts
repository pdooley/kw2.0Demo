//@formatter:off
import {NgModule}               from '@angular/core';

import {dwPayrolls}             from './dwPayrolls';
import {dwPayrollsCtrlPubSub,
        dwPayrollsCtrlInit,
        dwPayrollsCtrlView}     from './dwPayrollsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwPayrolls,
        dwPayrollsCtrlInit,
        dwPayrollsCtrlPubSub,
        dwPayrollsCtrlView,
    ],
    exports:
    [
        dwPayrolls,
        dwPayrollsCtrlInit,
        dwPayrollsCtrlPubSub,
        dwPayrollsCtrlView,
    ]
})
//@formatter:on
export class dwPayrollsMod
{
    constructor()
    {
        //console.log('dwPayrollsMod::constructor() called.');
    }
}
