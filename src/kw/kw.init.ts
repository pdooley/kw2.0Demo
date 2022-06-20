/**********************************************************************
 *
 * kwBsState/kw.init.ts
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
import {HttpClient }           from "@angular/common/http";
import 'rxjs/add/operator/map';

import {kw }                   from "./kw";
import {kwBs }                 from "./class/Bs/kwBs";


const sURL: string = 'assets/bootstrap.json';
//@formatter:on


export class kwInit
{

    bootstrap: kwBs;

    constructor(private http: HttpClient)
    {
        //console.log("kwInit::constructor() called.");
    }

    load(): Promise<any>
    {
        //console.log("kwInit::load() called.");

        return new Promise((resolve: any) =>
        {
            this.http.get(sURL)
                .subscribe(data => this.store(data));
        });
    }

    store(config: any): boolean
    {
        //console.log("kwInit::store() called.");

        if (kw.isNull(config))
        {
            console.error("kwInit()::store() config is invalid.");
            return false;
        }

        this.bootstrap = new kwBs(config);
        if (!this.bootstrap.init())
        {
            console.error("kwInit()::store() error initializing bootstrap.");
            return false;
        }

        return true;
    }
}

