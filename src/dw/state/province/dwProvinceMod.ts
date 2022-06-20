//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwProvince}                 from './dwProvince';
import {dwProvinceCtrlApi,
        dwProvinceCtrlInit,
        dwProvinceCtrlLoad,
        dwProvinceCtrlMap,
        dwProvinceCtrlMdl,
        dwProvinceCtrlPubSub}        from './dwProvinceCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwProvince,
        dwProvinceCtrlApi,
        dwProvinceCtrlInit,
        dwProvinceCtrlLoad,
        dwProvinceCtrlMap,
        dwProvinceCtrlMdl,
        dwProvinceCtrlPubSub
    ],
    exports:
    [
        dwProvince,
        dwProvinceCtrlApi,
        dwProvinceCtrlInit,
        dwProvinceCtrlLoad,
        dwProvinceCtrlMap,
        dwProvinceCtrlMdl,
        dwProvinceCtrlPubSub
    ]
})
//@formatter:on
export class dwProvinceMod
{

    constructor()
    {
        //console.log('dwProvinceMod::constructor() called.');
    }
}
