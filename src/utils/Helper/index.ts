import has from 'has-values'
import moment, { Moment } from 'moment';
import cloneLib from 'clone'

export default class Helper {

    static async sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    static clone(obj: any) {
        return cloneLib(obj)
    }

    static createIteratedArray(length?: number): Array<number> {
        if (!length) length = Helper.getRandomNumber(1, 10)
        let array: number[] = [];
        for (let i = 0; i < length; i++) array.push(i);
        return array;
    }

    static getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static isEmpty(data: any) {
        if (typeof (data) == 'undefined' || data === null) return true
        if (typeof data == 'string') return !has(data.trim())
        return !has(data)
    }

    static removeEmptyKeys(obj: any) {
        if (typeof obj == "object") {
            return Object.keys(obj).reduce((acc: { [key: string]: any }, curr: string) => {
                if (has(obj[curr])) acc[curr] = obj[curr]
                return acc
            }, {})
        }
        return obj
    }

    static nullEmptyKeys(obj: any) {
        if (typeof obj == "object") {
            return Object.keys(obj).reduce((acc: { [key: string]: any }, curr: string) => {
                if (has(obj[curr])) acc[curr] = obj[curr]
                else acc[curr] = null
                return acc
            }, {})
        }
        return obj
    }

    static getFormattedDate(date?: Date, utc: boolean = false, format = "DD/MM/YYYY"): string {
        if (!date) return "";
        let momentDate: Moment;
        try {
            if (utc) momentDate = moment(date).utc();
            else momentDate = moment(date);
            return momentDate.format(format);
        } catch (error) {
            console.warn(error);
            return "";
        }
    }

    static getFormattedTime(date: Date, utc: boolean = false, format = "hh:mm:ss"): string {
        if (!date) return ""
        let momentDate: Moment
        try {
            if (utc) momentDate = moment(date).utc()
            else momentDate = moment(date)
            return momentDate.format(format)
        } catch (error) {
            console.warn(error)
            return ""
        }
    }
}