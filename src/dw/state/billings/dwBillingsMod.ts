//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwBillings}                 from './dwBillings';
import {dwBillingsCtrlInit,
        dwBillingsCtrlPubSub,
        dwBillingsCtrlView}         from './dwBillingsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwBillings,
        dwBillingsCtrlInit,
        dwBillingsCtrlPubSub,
        dwBillingsCtrlView,
    ],
    exports:
    [
        dwBillings,
        dwBillingsCtrlInit,
        dwBillingsCtrlPubSub,
        dwBillingsCtrlView,
    ]
})
//@formatter:on
export class dwBillingsMod
{
    constructor()
    {
        //console.log('dwBillingsMod::constructor() called.');
    }
}
