import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmDialogComponent, DataTable, DataTableResource, DataTableRow, DialogAction} from "inet-ui";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {Module1Service} from "../module1.service";
@Component({
    selector: 'app-module1-list',
    templateUrl: './module1-list.component.html',
    styleUrls: ['./module1-list.component.scss']
})
export class Module1ListComponent implements OnInit {
    dataResource = new DataTableResource([]);
    items = [];
    itemCount = 0;
    pageNumber = 1;
    private params: any; // to reload data
    private toolbarTranslations: any;
    private translateSubscription: Subscription;

    @ViewChild(DataTable) messageTable;
    @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;

    constructor(
                private service: Module1Service,
                private router: Router,
                private translate: TranslateService
    ) {

        this.translateSubscription = translate.get(['TOOLBAR']).subscribe(res => {
            this.toolbarTranslations = res['TOOLBAR'];
        });
    }

    ngOnInit() {
        const modalDeleteActions = [
            new DialogAction(this.toolbarTranslations['OK'], 'btn-primary', 'fa fa-check', this.confirmDelete.bind(this)),
            new DialogAction(this.toolbarTranslations['CANCEL'], 'btn-cancel', 'fa fa-remove', this.confirmDialog.hide)
        ];

        this.confirmDialog.setActions(modalDeleteActions);
    }

    ngOnDestroy() {
        if (this.translateSubscription) {
            this.translateSubscription.unsubscribe();
        }
    }

    load(params) {
        this.dataResource.query(params).then(function () {
            this.params = params;

            this.service.listMessage().subscribe(data => {
                const items = data['items'];
                this.itemCount = data['total'];
                this.dataResource = new DataTableResource(items);
                this.itemCount =  data['total'] || items.length;

                this.dataResource.query(params).then(items => this.items = items);
            });


        }.bind(this));
    }

    reload() {
        this.load(this.params);
    }


    private findRowsById(uuid: string): Array<DataTableRow> {
        return this.messageTable.rows.toArray().filter(row => row.item.uuid === uuid);
    }

    onAdd() {

    }

    editItem(item: any, event: Event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log('[editItem]', item);
    }

    deleteItem(item: any, event: Event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        const rows = this.findRowsById(item.uuid);
        this.confirmDialog.setData(rows);
        this.confirmDialog.show();
    }

    deleteSelected() {
        const rows = this.messageTable.selectedRows;
        this.confirmDialog.setData(rows);
        this.confirmDialog.show();
    }

    private confirmDelete() {
        const selectedRows: Array<DataTableRow> = this.confirmDialog.getData() || [];
        const ids: Array<String> = [];
        selectedRows.forEach(row => {
            ids.push(row.item['id']);
        });

        if (ids.length > 0) {
            console.log('[delete]' ,  ids);
            this.confirmDialog.hide();
        }
    }

    rowClick($event) {

    }

    expandClick($event) {
        const row = $event.row as DataTableRow;
        console.log('[expandClick]', row)
    }

}
