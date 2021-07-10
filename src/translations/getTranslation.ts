import * as en from './en.json';
import * as pl from './pl.json';



export function getTranslations(lang:string, key:string) {
	if (lang === 'en') {
		return en[key]
	} else {
		return pl[key]
	}
}