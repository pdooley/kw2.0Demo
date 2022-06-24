/**********************************************************************
 *
 * kwNg/status/kwStatusCtrl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Component}              from "@angular/core";
import {NgZone}                 from "@angular/core";
import {OnInit}                 from '@angular/core';
import {OnDestroy}              from '@angular/core';
import {Router}                 from '@angular/router';
import {Subject}                from "rxjs";
import {takeUntil}              from "rxjs/operators";

import {kw}                     from "@kw/kw"
import {kwApisStObj}            from "@kwNgState/apis/kwApisSt";
import {kwBsRoutesStVal}        from "@kwBsState/routes/kwBsRoutesSt";
import {kwBsStatusStStatBs}     from "@kwBsStatus/kwBsStatusSt";
import {kwBsTokensStObj}        from "@kwBsState/tokens/kwBsTokensSt";
import {kwTraceStTrace}         from "@kwBs/trace/kwTraceSt";
import {kwBsUserStArr}          from "@kwBsState/user/kwBsUserSt";
import {kwLog}                  from "@kw/kwLog";
import {kwLoginStVal}           from "@kwNgState/login/kwLoginSt";
import {kwMdlsStObj}            from "@kwNgState/mdls/kwMdlsSt";
import {kwRoutes}               from "@kwClass/routes/kwRoutes";
import {kwStatusApp}            from "@kwClass/statusApp/kwStatusApp";
import {kwStatusAppBootstrap}   from "@kwClass/statusApp/kwStatusAppBootstrap";
import {kwStatusAppEnum}        from "@kwClass/statusApp/kwStatusAppEnum";
import {kwStatusAppLoggedIn}    from "@kwClass/statusApp/kwStatusAppLoggedIn";
import {kwStatusAppLoggedOut}   from "@kwClass/statusApp/kwStatusAppLoggedOut";
import {kwStatusAppLogin}       from "@kwClass/statusApp/kwStatusAppLogin";
import {kwStatusAppVerify}      from "@kwClass/statusApp/kwStatusAppVerify";
import {kwStatusBs}             from "@kwClass/statusBs/kwStatusBs";
import {kwStatusStStatApp}      from "./kwStatusSt";
import {kwStVal}                from "@kwStat/kwStVal";


//@formatter:on

/*
    init = 0,
    bootstrap,
    connect,
    close,
    login,
    reset,
    create,
    loggedin,
    loggedout,
    logout,
    verify,
*/

@Component({selector: 'kw-status-ctrl-stat', template: ``})
export class kwStatusCtrlStat implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;

    _unSubApis:         Subject<any>;
    _unSubLogin:        Subject<any>;
    _unSubMdls:         Subject<any>;
    _unSubRoutes:       Subject<any>;
    _unSubStatApp:      Subject<any>;
    _unSubStatBs:       Subject<any>;
    _unSubTokens:       Subject<any>;
    _unSubUser:         Subject<any>;

    sLogin    : string;
    sMain     : string;

    constructor(
        private router:         Router,
        private srvcApis:       kwApisStObj,
        private srvcLogin:      kwLoginStVal,
        private srvcMdls:       kwMdlsStObj,
        private srvcRoutes:     kwBsRoutesStVal,
        private srvcUser:       kwBsUserStArr,
        private srvcStatApp:    kwStatusStStatApp,
        private srvcStatBs:     kwBsStatusStStatBs,
        private srvcTokens:     kwBsTokensStObj,
        private srvcTrace:      kwTraceStTrace,
        private zone:           NgZone    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        console.log(log.called());
    }


    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        console.log(log.called());

        this.subInit();
    }


    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        console.log(log.called());

        this.unSubConnect();
    }


    protected load(src: kwStVal): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        console.log(log.called());
        return true;
    }


    private inspectLogin(app: kwStatusApp) : void
    {
        const log: kwLog = new kwLog(this.sClass, "inspectLogin");
        console.log(log.called());

        if (kw.isNull(app))
        {
            console.error(log.invalid("sMain"));
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.is("app", app))}

        if (!kw.isString(this.sLogin) || this.sLogin.length === 0)
        {
            console.error(log.invalid("sLogin"));
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.is("sLogin", this.sLogin))}

        if (!kw.isString(this.sMain))
        {
            console.error(log.invalid("sMain"));
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.is("sMain", this.sMain))}

        const type = app.getType();

        switch (type)
        {
            case kwStatusAppEnum.login:
            {
                if (this.srvcTrace.bApp){console.info(log.info("logging in!"))}

                this.zone.run(() => {
                    this.router.navigate([this.sLogin])
                });

                break;
            }

            case kwStatusAppEnum.loggedin:
            {
                if (this.srvcTrace.bApp){console.info(log.info("logged in - going to dashboard!"))}

                this.zone.run(() => {
                    this.router.navigate([this.sMain])
                });

                break;
            }

            case kwStatusAppEnum.loggedout:
            {
                if (this.srvcTrace.bApp){console.info(log.info("loggedout - logging in!"))}

                this.zone.run(() => {
                    this.router.navigate([this.sLogin])
                });

                break;
            }

            case kwStatusAppEnum.logout:
            {
                if (this.srvcTrace.bApp){console.info(log.info("logout - logging out!"))}

                this.srvcUser.clear();
                this.srvcTokens.clear();

                const loggedout: kwStatusApp = new kwStatusAppLoggedOut();
                this.srvcStatApp.val = loggedout;

                break;
            }

            default:
            {
                if (this.srvcTrace.bApp)console.info(log.info("doing nothing."));
                return;
            }
        }
    }


    inspectUser(user: kwBsUserStArr)
    {
        const log: kwLog = new kwLog(this.sClass, "inspectUser");
        console.log(log.called());

        if (kw.isNull(user))
        {
            if (this.srvcTrace.bApp){console.info(log.info("[user] is not set - doing nothing"));}
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.isObj("user"), user);}
        if (this.srvcTrace.bApp){console.info(log.info("[user] is set"));}

        //if (!this.srvcTokens.isOrgSet())
        //{
        //    if (this.srvcTrace.get())
        //    {
        //        console.info(this.sClass, "::inspectUser() org not yet loaded - doing nothing.");
        //    }
        //    return;
        //}

        if (this.srvcTrace.bApp){console.info(log.info("[user, org] are set - login complete!"));}

        const app: kwStatusApp = new kwStatusAppLoggedIn();
        if (!kwStatusApp.is(app))
        {
            console.error(log.errCreate("info)"));
        }

        this.srvcStatApp.val = app;
    }


    protected loadBootstrap(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadBootstrap");
        console.log(log.called());


        if (kw.isNull(info))
        {
            console.info(log.info("[info] is not set - remaining in App Bootstrap phase."));
            return;
        }


        const apis: Object = this.srvcApis.get();
        if (kw.isNull(apis))
        {
            if (this.srvcTrace.bApp){console.info(log.info("[apis] is not set - remaining in App Bootstrap phase."));}
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.isObj("apis"), apis);}


        const mdls: Object = this.srvcMdls.get();
        if (kw.isNull(mdls))
        {
            if (this.srvcTrace.bApp){console.info(log.info("[mdls] is not set - remaining in App Bootstrap phase."));}
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.isObj("mdls"), mdls);}


        if (!this.retrieveRoutes())
        {
            if (this.srvcTrace.bApp){console.info(log.info("[routes] is not set - remaining in App Bootstrap phase."));}
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.info("[apis, inits, mdls, views, routes] loaded - moving to App Login phase."));}


        this.unSubBootstrap();
        this.subLogin();
        this.subUser();

        const stat: kwStatusApp = new kwStatusAppLogin();
        if (!kwStatusApp.is(stat))
        {
            console.error(log.errCreate("stat"));
            return;
        }

        if (!stat.init())
        {
            console.error(log.errInit("stat"));
            return;
        }

        this.srvcStatApp.val = stat;

    }


    loadInit(info: kwStatusBs) : void
    {
        const log: kwLog = new kwLog(this.sClass, "loadInit");
        console.log(log.called());

        if (!kw.isValid(info))
        {
            console.error(log.invalid("info)"));
            return;
        }

        if (!info.isComplete())
        {
            if (this.srvcTrace.bApp){console.info(log.info("bootstrap not complete - remaining in APP Init phase."));}
            return;
        }
        if (this.srvcTrace.bApp){console.info(log.info("bootstrap is complete - moving to APP Bootstrap phase"));}

        this.unSubInit();
        this.subBootstrap();

        const stat : kwStatusApp = new kwStatusAppBootstrap();
        if (!kw.isValid(stat))
        {
            console.error(log.invalid("stat)"));
            return;
        }

        this.srvcStatApp.val = stat;
    }


    retrieveRoutes(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveRoutes");
        console.log(log.called());

        const routes: kwRoutes = <kwRoutes>this.srvcRoutes.get();
        if (kw.isNull(routes))
        {
            console.error(log.errLoad("routes"));
            return false;
        }
        if (this.srvcTrace.bApp){console.info(log.isObj("routes"), routes);}


        //const sLogin: string = routes.sLogin;
        const sLogin: string = "pages/auth/login";
        if (!kw.isString(sLogin) || sLogin.length === 0)
        {
            console.error(log.invalid("sLogin"));
            return false;
        }
        if (this.srvcTrace.bApp){console.info(log.is("sLogin", sLogin));}

        this.sLogin = sLogin;


        //const sMain: string = routes.sMain;
        const sMain: string = "dw/crud/timeSheetReasons";
        if (!kw.isString(sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        if (this.srvcTrace.bApp){console.info(log.is("sMain", sMain));}

        this.sMain = sMain;


        return true;
    }


    private subBootstrap()
    {
        const log: kwLog = new kwLog(this.sClass, "subBootstrap");
        console.log(log.called());

        this._unSubApis         = new Subject();
        this._unSubMdls         = new Subject();
        this._unSubRoutes       = new Subject();

        this.srvcApis.val
            .pipe(takeUntil(this._unSubApis))
            .subscribe( (val) => {
                this.loadBootstrap(val);
            });

        this.srvcMdls.val
            .pipe(takeUntil(this._unSubMdls))
            .subscribe( (val) => {
                this.loadBootstrap(val);
            });

        this.srvcRoutes.val
            .pipe(takeUntil(this._unSubRoutes))
            .subscribe( (val) => {
                this.loadBootstrap(val);
            });


    };


    private subInit()
    {
        const log: kwLog = new kwLog(this.sClass, "subInit");
        console.log(log.called());

        this._unSubStatBs    = new Subject();

        this.srvcStatBs.val
            .pipe(takeUntil(this._unSubStatBs))
            .subscribe( (val) => {
                this.loadInit(val);
            });
    };


    private subLogin()
    {
        const log: kwLog = new kwLog(this.sClass, "subLogin");
        console.log(log.called());

        this._unSubStatApp = new Subject();

        this.srvcStatApp.val
            .pipe(takeUntil(this._unSubStatApp))
            .subscribe((val) => {
                this.inspectLogin(val);
            });

    }


    private subUser()
    {
        const log: kwLog = new kwLog(this.sClass, "subUser");
        console.log(log.called());

        this._unSubUser         = new Subject();

        this.srvcUser.val
            .pipe(takeUntil(this._unSubUser))
            .subscribe((val) => {
                this.inspectUser(val);
            });
    }


    private unSubBootstrap(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubBootstrap");
        console.log(log.called());


        if (kw.isValid(this._unSubApis)) {
            this._unSubApis.next();
            this._unSubApis.complete();
        }


        if (kw.isValid(this._unSubMdls)) {
            this._unSubMdls.next();
            this._unSubMdls.complete();
        }


        if (kw.isValid(this._unSubRoutes)) {
            this._unSubRoutes.next();
            this._unSubRoutes.complete();
        }
    }


    private unSubConnect(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubBConnect");
        console.log(log.called());

        if (kw.isValid(this._unSubLogin)) {
            this._unSubLogin.next();
            this._unSubLogin.complete();
        }

        if (kw.isValid(this._unSubStatApp)) {
            this._unSubStatApp.next();
            this._unSubStatApp.complete();
        }

        if (kw.isValid(this._unSubTokens)) {
            this._unSubTokens.next();
            this._unSubTokens.complete();
        }

        if (kw.isValid(this._unSubUser)) {
            this._unSubUser.next();
            this._unSubUser.complete();
        }
    }


    private unSubInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubInit");
        console.log(log.called());

        if (kw.isValid(this._unSubStatBs))
        {
            this._unSubStatBs.next();
            this._unSubStatBs.complete();
        }

    }

}
