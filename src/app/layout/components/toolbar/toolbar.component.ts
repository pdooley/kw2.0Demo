import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

import { navigation } from 'app/navigation/navigation';

import {kw}               from "@kw/kw";
import {kwBsUserStArr}    from '@kwBsState/user/kwBsUserSt';
import {kwFbSrvcAuth}     from '@kwFb/srvc/auth/kwFbSrvcAuth';
import {kwLog}            from "@kw/kwLog";


@Component({
    selector     : 'toolbar',
    templateUrl  : './toolbar.component.html',
    styleUrls    : ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;

    public user = {
        fullname: "",
        img: ""
    };

    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];


    // Private
    private _unsubscribeAll: Subject<any>;
    private _unsubscribeUser: Subject<any>;


    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _srvcFb: kwFbSrvcAuth,
        private _srvcUser: kwBsUserStArr
    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon : 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon : 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon : 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon : 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon : 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id   : 'en',
                title: 'English',
                flag : 'us'
            },
            {
                id   : 'tr',
                title: 'Turkish',
                flag : 'tr'
            }
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the private user defaults
        this._unsubscribeUser = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this._srvcUser.val
            .pipe(takeUntil(this._unsubscribeUser))
            .subscribe((user) => {
                this.displayUser(user);
            });

        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, {'id': this._translateService.currentLang});

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

        this._unsubscribeUser.next();
        this._unsubscribeUser.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        const log: kwLog = new kwLog(this.sClass, "toggleSidebarOpen");
        //console.log(log.called());

        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        const log: kwLog = new kwLog(this.sClass, "search");
        //console.log(log.called());

        // Do your search here...
        //console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        const log: kwLog = new kwLog(this.sClass, "setLanguage");
        //console.log(log.called());

        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    /**
     * onLogout
     *
     */
    onLogout(): void {
        const log: kwLog = new kwLog(this.sClass, "onLogout");
        //console.log(log.called());

        this._srvcFb.logout();

    }

    /**
     * clear
     *
     */
    clear(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());


        let user = {
            fullname: "",
            img: ""
        };

        this.user = user;
    }

    /**
     * displayUser
     *
     */
    displayUser(user): void
    {
        const log: kwLog = new kwLog(this.sClass, "displayUser");
        //console.log(log.called());

        if (kw.isNull(user))
        {
            //console.info(log.empty("user"));
            this.clear();
            return;
        }
        //console.info(log.isObj("user"), user);

        this.user = user;
    }

}
