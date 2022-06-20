/**********************************************************************
 *
 * kwNgComp/fadeIn/kwUiFadeIn.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {animate} from "@angular/animations";
import {style} from "@angular/animations";
import {transition} from "@angular/animations";
import {trigger} from "@angular/animations";
//@formatter:on


export const routeAnim = trigger('routeAnim', [
    transition('void => *', [
        style({
            opacity: 0,
        }),
        animate('400ms 150ms ease-in-out', style({
            opacity: 1,
        }))
    ]),
]);

export const fadeInAnim = trigger('fadeInAnim', [
    transition('void => *', [
        style({
            opacity: 0,
        }),
        animate('400ms 150ms ease-in-out', style({
            opacity: 1,
        }))
    ]),
]);
