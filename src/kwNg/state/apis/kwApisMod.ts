//@formatter:off
import {NgModule}               from '@angular/core';

import {kwApis}                 from './kwApis';
import {kwApisCtrlApi,
        kwApisCtrlLoad,
        kwApisCtrlMsg,
        kwApisCtrlObj,}         from './kwApisCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwApis,
        kwApisCtrlApi,
        kwApisCtrlLoad,
        kwApisCtrlMsg,
        kwApisCtrlObj,
    ],
    exports:
    [
        kwApis,
        kwApisCtrlApi,
        kwApisCtrlLoad,
        kwApisCtrlMsg,
        kwApisCtrlObj,
    ]
})
//@formatter:on
export class kwApisMod
{
    constructor()
    {
        //console.log('kwApisMod::constructor() called.');
    }
}
