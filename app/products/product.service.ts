import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl: string = '/api/products/products.json';

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(ProductService.handleError)
    }

    getProduct(id: number): Observable<IProduct> {
        return this._http.get(this._productUrl)
            .map((response: Response) => {
                let products = response.json();
                let filtered = products.filter((product: IProduct )=> product.productId === id);

                return <IProduct> filtered[0];
            })
            .catch(ProductService.handleError)
    }

    private static handleError(err: Response) {
        console.error(err);
        return Observable.throw(err.json().error || "Server Error");
    }
}