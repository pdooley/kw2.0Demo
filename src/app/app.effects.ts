import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class AppEffects {
  constructor(
    private logger: NGXLogger,
    private actions$: Actions) {}
}
