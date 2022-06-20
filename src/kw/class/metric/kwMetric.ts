/**********************************************************************
 *
 * kw/class/srvc/kwMetric.ts
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
import {kw }                        from "@kw/kw";
import {kwMetricSrvc }                from "./kwMetricSrvc";
import {kwMetricType }                from "./kwMetricType";
//@formatter:on


export class kwMetric
{
    protected sClass: string = this.constructor.name;

    sButton: string;
    sContent: string;
    sEvent: string;
    sNameFirst: string;
    sNameLast: string;
    sOrder: string;
    sOrg: string;

    nTime: number;

    constructor(private type: kwMetricType)
    {
        //console.log("kwMetric::constructor() is called.");
    }

    init(): boolean
    {

        //console.log("kwMetric::init() is called.");
        if (kw.isNull(this.type))
        {
            console.error("kwMetric::create() type is invalid.");
            return false;
        }

        const sButton: string = this.type.sButton;
        if (kw.isString(sButton))
        {
            //console.info("kwMetric::create() sButton is [", sButton, "]");
            this.sButton = sButton;
        }

        const sContent: string = this.type.sContent;
        if (kw.isString(sContent))
        {
            //console.info("kwMetric::create() sContent is [", sContent, "]");
            this.sContent = sContent;
        }

        const sEvent: string = this.type.sEvent;
        if (kw.isString(sEvent))
        {
            //console.info("kwMetric::create() sEvent is [", sEvent, "]");
            this.sEvent = sEvent;
        }

        const sNameFirst: string = this.type.sNameFirst;
        if (kw.isString(sNameFirst))
        {
            //console.info("kwMetric::create() sNameFirst is [", sNameFirst, "]");
            this.sNameFirst = sNameFirst;
        }

        const sNameLast: string = this.type.sNameLast;
        if (kw.isString(sNameLast))
        {
            //console.info("kwMetric::create() sNameLast is [", sNameLast, "]");
            this.sNameLast = sNameLast;
        }

        const sOrg: string = this.type.sOrg;
        if (kw.isString(sOrg))
        {
            //console.info("kwMetric::create() sOrg is [", sOrg, "]");
            this.sOrg = sOrg;
        }

        const sOrder: string = this.type.sOrder;
        if (kw.isString(sOrder))
        {
            //console.info("kwMetric::create() sOrder is [", sOrder, "]");
            this.sOrder = sOrder;
        }

        const nTime: number = Date.now();
        //console.info("kwMetric::create() nTime is [", nTime, "]");
        this.nTime = nTime;

        return true;
    }

    getButton(): string {
        return this.sButton;
    }

    setButton(sButton: string): void
    {
        this.sButton = sButton;
    }

    getOrg(): string{
        return this.sOrg;
    }

    setOrg(sOrg: string): void
    {
        this.sOrg = sOrg;
    }

    getTime(): number{
        return this.nTime;
    }

    setTime(nTime: number): void
    {
        this.nTime = nTime;
    }

    getContent(): string{
        return this.sContent;
    }

    setContent(sContent: string): void
    {
        this.sContent = sContent;
    }

    getNameFirst(): string{
        return this.sNameFirst;
    }

    setNameFirst(sNameFirst: string): void
    {
        this.sNameFirst = sNameFirst;
    }

    getNameLast(): string{
        return this.sNameLast;
    }

    setNameLast(sNameLast: string): void
    {
        this.sNameLast = sNameLast;
    }

    getOrder(): string{
        return this.sOrder;
    }

    setOrder(sOrder: string): void
    {
        this.sOrder = sOrder;
    }

    getEvent(): string{
        return this.sEvent;
    }

    setEvent(sEvent: string): void
    {
        this.sEvent = sEvent;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwMetric)
    }

}

