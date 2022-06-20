//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwEmployee}                 from './dwEmployee';
import {dwEmployeeCtrlApi,
        dwEmployeeCtrlInit,
        dwEmployeeCtrlLoad,
        dwEmployeeCtrlMap,
        dwEmployeeCtrlMdl,
        dwEmployeeCtrlPubSub}        from './dwEmployeeCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwEmployee,
        dwEmployeeCtrlApi,
        dwEmployeeCtrlInit,
        dwEmployeeCtrlLoad,
        dwEmployeeCtrlMap,
        dwEmployeeCtrlMdl,
        dwEmployeeCtrlPubSub
    ],
    exports:
    [
        dwEmployee,
        dwEmployeeCtrlApi,
        dwEmployeeCtrlInit,
        dwEmployeeCtrlLoad,
        dwEmployeeCtrlMap,
        dwEmployeeCtrlMdl,
        dwEmployeeCtrlPubSub
    ]
})
//@formatter:on
export class dwEmployeeMod
{

    constructor()
    {
        //console.log('dwEmployeeMod::constructor() called.');
    }
}
