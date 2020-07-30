import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { IDepartament } from '../structures/departament';
import { IProduct } from '../structures/products';


@Injectable({
    providedIn: 'root'
})

export class DatabaseService {


    private database: SQLiteObject;
    private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    departament = new BehaviorSubject([]);
    products = new BehaviorSubject([]);

    constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {

        this.plt.ready().then(() => {
            this.sqlite.create({
                name: 'insumos.db',
                location: 'default'
            }).then((db: SQLiteObject) => {
                this.database = db;
                this.seedDatabase();
            });
        });
    }

    seedDatabase() {
        this.http.get('assets/database.sql', { responseType: 'text' })
            .subscribe(sql => {
                this.sqlitePorter.importSqlToDb(this.database, sql)
                    .then(_ => {

                        this.loadDepartaments();
                        this.loadProducts();

                        this.dbReady.next(true);

                        alert("Base de datos creada exitosamente");

                    }).catch(e => alert(e.message));
            }
        );
    }

    loadDepartaments() {
        return this.database.executeSql('SELECT * FROM departaments', []).then(data => {

            let departaments: IDepartament[] = [];

            if (data.rows.length > 0){
                for (let i = 0; i < data.rows.length; i++){
                    departaments.push({ id: data.rows.item(i).id, name: data.rows.item(i).name, encargado: data.rows.item(i).responsable });
                }

            }
            this.departament.next(departaments);

        }).catch(error=>{
            alert(error.message);
        });
    }

    loadDepartament(id:number):Promise<IDepartament> {
        return this.database.executeSql('SELECT * FROM departaments WHERE id = ?',[id]).then(data=>{
            return {id:data.rows.item(0).id,name:data.rows.item(0).name,encargado:data.rows.item(0).responsable};
        });
    }

    loadProducts() {

        let query = 'SELECT products.id , products.name , products.stock , products.img , departaments.name AS departament FROM products JOIN departaments ON products.departament_id = departaments.id';

        return this.database.executeSql(query, []).then(data => {

            let products = [];

            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    products.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name,
                        stock: data.rows.item(i).stock,
                        img: data.rows.item(i).img,
                        departament_id: data.rows.item(i).departament_id,
                        departament: data.rows.item(i).departament
                    });
                }
            } else {
                alert("No hay producto ")
            }

            this.products.next(products);

        }).catch((error => alert(error.message)));
    }

    loadProductsWithDepartamentId(id:number):Promise<any[]>{
        let sql = "SELECT * FROM products where departament_id = ?";
        return this.database.executeSql(sql,[id]).then(data=>{
            let products = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    products.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name,
                        stock: data.rows.item(i).stock,
                        img: data.rows.item(i).img,
                    });
                }
            } else {
                alert("No hay producto ")
            }
            return products;
        });
    }

    loadProductWithId(id:number) : Promise<IProduct> {
        let query = 'SELECT products.id , products.name , products.stock , products.img , departaments.name AS departament, departaments.id as departamentId FROM products JOIN departaments ON products.departament_id = departaments.id where products.id = ?';
        return this.database.executeSql(query,[id]).then(data=>{
            return {id:data.rows.item(0).id,name:data.rows.item(0).name,stock:data.rows.item(0).stock,image:data.rows.item(0).img,departament:data.rows.item(0).departament,departamentId:data.rows.item(0).departamentId};
        });
    }

    loadProductsOfDelivery(delivery_id):Promise<any[]> {
        let query = 'SELECT products.*,  prod_delivery.amount FROM prod_delivery JOIN products ON prod_delivery.product_id = products.id where prod_delivery.delivery_id = ?';
        return this.database.executeSql(query, [delivery_id]).then(data => {
            let products = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    products.push({
                        productId: data.rows.item(i).id,
                        image: data.rows.item(i).img,
                        amount: data.rows.item(i).amount,
                        productName: data.rows.item(i).name
                    });
                }
            }
            return products;
        })
    }

    loadDeliveries(status:number) : Promise<any[]> {
        let query = 'SELECT departaments.name , departaments.id , delivery.id as deliveryId  FROM delivery JOIN departaments ON delivery.departament_id = departaments.id where delivery.status_delivery = ?';
        return this.database.executeSql(query, [status]).then(data => {
            let deliveries = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    deliveries.push({
                        name: data.rows.item(i).name,
                        id: data.rows.item(i).id,
                        deliveryId:data.rows.item(i).deliveryId
                    });
                }
            }
            return deliveries;
        });
    }

    loadDelivery(deliveryId) {
        let sql = 'SELECT departaments.name , departaments.id , delivery.id as deliveryId, delivery.status_delivery  FROM delivery JOIN departaments ON delivery.departament_id = departaments.id where delivery.id = ?';
        return this.database.executeSql(sql, [deliveryId]).then(data => {
            return {
                departament: data.rows.item(0).name,
                departamentId: data.rows.item(0).id,
                status:data.rows.item(0).status_delivery
            }
        });
    }

    addProduct(product: IProduct) {
        let data = [product.id, product.name, product.departament, product.image , product.stock];
        return this.database.executeSql('INSERT INTO products (id, name, departament_id,img,stock) VALUES (?,?,?,?,?)', data).then(data => {
            this.loadProducts();
        }).catch(error=>{
            alert(error.message);
        });
    }

    addDepartament(departament: IDepartament) {
        let data = [departament.id, departament.name, departament.encargado];
        return this.database.executeSql('INSERT INTO departaments (id, name, responsable) VALUES (?, ?, ?)', data).then(data => {
            this.loadDepartaments();
        });
    }

    addProductoToDelivery(product_id,amount,delivery_id) { //product id , delivery id , cantidad
        let query = 'INSERT INTO prod_delivery (product_id,amount,delivery_id) values(?,?,?)';
        let data  = [product_id,amount,delivery_id];
        return this.database.executeSql(query,data).then(data=>{
            return "Creado correctamente";
        }).catch(error => {
            alert(error.message)
        });
    }

    addDelivery () { //departament_id
        let data = [0];
        let sql = "INSERT INTO delivery(status_delivery) VALUES(?)";
        return this.database.executeSql(sql,data);
    }

    endDelivery(deliveryId,departamento,status) {
        let query = 'UPDATE delivery SET status_delivery = ?, departament_id = ?   where id = ?';
        return this.database.executeSql(query, [status, departamento , deliveryId]).then(data => {
            return "Terminado correctamente";
        }).catch(error => alert(error.message));
    }

    getDatabaseState() {
        return this.dbReady.asObservable();
    }

    getProducts(): Observable<any[]> {
        return this.products.asObservable();
    }

    getDepartaments():Observable<IDepartament[]> {
        return this.departament.asObservable();
    }


    cleanDeliveries() {
        let sql = 'DELETE FROM delivery';
        return this.database.executeSql(sql).then(data => {
            return "Eliminado";
        });
    }
    async cleanProducts() {
        let sql = 'DELETE FROM products';
        return await this.database.executeSql(sql);
    }
    async cleanDepartaments() {
        let sql = 'DELETE FROM departaments';
        return await this.database.executeSql(sql);
    }



    //cargas al servidor

    async sendDeliveries(departamentId,products:any[]) {
        return this.http.post('https://stark-tor-96627.herokuapp.com/api/entregas',{
            'departament_id': departamentId,
            'products': products,
            'user_id':1
        }).toPromise();
    }



}
