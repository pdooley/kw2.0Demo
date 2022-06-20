//@formatter:off
import {NgModule }             from '@angular/core';
import {Optional }             from '@angular/core';
import {SkipSelf }             from '@angular/core';

import {shareMod }             from './modules/shareMod';

@NgModule(
{
  imports:
  [
     shareMod
  ],
  declarations:
  [
  ],
  exports:
  [
    shareMod,
  ]
})
//@formatter:on
export class kwFbCoreMod {

  constructor( @Optional() @SkipSelf() parentModule: kwFbCoreMod)
  {
      //console.log('kwNgCoreMod::constructor() called.');

    //throwIfAlreadyLoaded(parentModule, 'kwNgCoreMod');
  }
}


