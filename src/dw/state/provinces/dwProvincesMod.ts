//@formatter:off
import {NgModule}               from '@angular/core';

import {dwProvinces}                 from './dwProvinces';
import {dwProvincesCtrlApi,
        dwProvincesCtrlInit,
        dwProvincesCtrlLoad,
        dwProvincesCtrlPubSub,
        dwProvincesCtrlView}         from './dwProvincesCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwProvinces,

                dwProvincesCtrlApi,
                dwProvincesCtrlInit,
                dwProvincesCtrlLoad,
                dwProvincesCtrlPubSub,
                dwProvincesCtrlView,
            ],
        exports:
            [
                dwProvinces,

                dwProvincesCtrlApi,
                dwProvincesCtrlInit,
                dwProvincesCtrlLoad,
                dwProvincesCtrlPubSub,
                dwProvincesCtrlView,
            ]
    })
//@formatter:on
export class dwProvincesMod
{
    constructor()
    {
        //console.log('dwProvincesMod::constructor() called.');
    }
}
