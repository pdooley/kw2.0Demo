//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwCompany}                  from './dwCompany';
import {dwCompanyCtrlApi,
        dwCompanyCtrlInit,
        dwCompanyCtrlLoad,
        dwCompanyCtrlMap,
        dwCompanyCtrlMdl,
        dwCompanyCtrlPubSub}        from './dwCompanyCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwCompany,
        dwCompanyCtrlApi,
        dwCompanyCtrlInit,
        dwCompanyCtrlLoad,
        dwCompanyCtrlMap,
        dwCompanyCtrlMdl,
        dwCompanyCtrlPubSub
    ],
    exports:
    [
        dwCompany,
        dwCompanyCtrlApi,
        dwCompanyCtrlInit,
        dwCompanyCtrlLoad,
        dwCompanyCtrlMap,
        dwCompanyCtrlMdl,
        dwCompanyCtrlPubSub
    ]
})
//@formatter:on
export class dwCompanyMod
{
    constructor()
    {
        //console.log('dwCompanyMod::constructor() called.');
    }
}
