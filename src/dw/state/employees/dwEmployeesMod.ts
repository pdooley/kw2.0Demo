//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwEmployees}                from './dwEmployees';
import {dwEmployeesCtrlApi,
        dwEmployeesCtrlInit,
        dwEmployeesCtrlLoad,
        dwEmployeesCtrlPubSub,
        dwEmployeesCtrlView}        from './dwEmployeesCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwEmployees,

        dwEmployeesCtrlApi,
        dwEmployeesCtrlInit,
        dwEmployeesCtrlLoad,
        dwEmployeesCtrlPubSub,
        dwEmployeesCtrlView,
    ],
    exports:
    [
        dwEmployees,

        dwEmployeesCtrlApi,
        dwEmployeesCtrlInit,
        dwEmployeesCtrlLoad,
        dwEmployeesCtrlPubSub,
        dwEmployeesCtrlView,
    ]
})
//@formatter:on
export class dwEmployeesMod
{
    constructor()
    {
        //console.log('dwEmployeesMod::constructor() called.');
    }
}
