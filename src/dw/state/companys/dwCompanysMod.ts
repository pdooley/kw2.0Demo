//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwCompanys}                 from './dwCompanys';
import {dwCompanysCtrlApi,
        dwCompanysCtrlInit,
        dwCompanysCtrlLoad,
        dwCompanysCtrlPubSub,
        dwCompanysCtrlView}         from './dwCompanysCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwCompanys,

                dwCompanysCtrlApi,
                dwCompanysCtrlInit,
                dwCompanysCtrlLoad,
                dwCompanysCtrlPubSub,
                dwCompanysCtrlView,
            ],
        exports:
            [
                dwCompanys,

                dwCompanysCtrlApi,
                dwCompanysCtrlInit,
                dwCompanysCtrlLoad,
                dwCompanysCtrlPubSub,
                dwCompanysCtrlView,
            ]
    })
//@formatter:on
export class dwCompanysMod
{

    constructor()
    {
        //console.log('dwCompanysMod::constructor() called.');
    }
}
