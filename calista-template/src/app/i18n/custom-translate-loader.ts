import {CloudTransLoader} from 'inet-ui';
import {HttpClientService} from "inet-core";
import {Observable} from "rxjs";
export class CustomTranslateLoader extends CloudTransLoader {
    static instance: CustomTranslateLoader = null;
    private translation: any;
    constructor(private http: HttpClientService) {
        super();
        return CustomTranslateLoader.instance = CustomTranslateLoader.instance || this;
    }
    /**
     * Gets the translations from the server
     */
    getTranslation(lang: string): Observable<any> {
        if (this.translation) {
            return Observable.of(this.translation);
        }
        return this.http.getJSON(`./assets/i18n/${lang}.json`).map((response: any) => {
            this.translation = {...this.getResourceByLang(lang), ...response};
            return this.translation;
        });
    }
}
