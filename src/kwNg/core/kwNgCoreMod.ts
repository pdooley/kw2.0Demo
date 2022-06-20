//@formatter:off
import {NgModule}             from '@angular/core';
import {Optional}             from '@angular/core';
import {RouterModule}         from '@angular/router';
import {SkipSelf}             from '@angular/core';

import {matMod}               from './modules/matMod';
import {shareMod}             from './modules/shareMod';

@NgModule(
{
  imports:
  [
      RouterModule,

    matMod,
    shareMod
  ],
  declarations:
  [
  ],
  exports:
  [
      RouterModule,

    matMod,
    shareMod,
  ]
})
//@formatter:on
export class kwNgCoreMod {

  constructor( @Optional() @SkipSelf() parentModule: kwNgCoreMod)
  {
      //console.log('kwNgCoreMod::constructor() called.');

    //throwIfAlreadyLoaded(parentModule, 'kwNgCoreMod');
  }
}


