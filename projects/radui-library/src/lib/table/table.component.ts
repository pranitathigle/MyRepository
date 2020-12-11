import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { PEOPLE_DATA, People } from './dataprovider';
import { ColumnDefinition } from './ColumnInput';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TableInterface } from './table-interface';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'radui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  name = 'Dynamic Columns';

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  private _configTable: TableInterface;

  get configTable(): TableInterface {
    return this._configTable;
  }

  @Input('configTable')
  set configTable(valueObject: TableInterface) {
    valueObject.name = valueObject.name || 'Dynamic Columns';
    valueObject.headerFontColor = valueObject.headerFontColor || 'black';
    valueObject.headerFontSize = valueObject.headerFontSize || '14px';
    valueObject.headerColor = valueObject.headerColor || 'white';
    valueObject.borderColor = valueObject.borderColor || 'blue';
    valueObject.backgroundColor = valueObject.backgroundColor || 'white';
    this._configTable = valueObject;
  }


  displayedColumns: Array<string> = peoplecolumns.map(c => c.columnDef);
  public mattabledataSource:  MatTableDataSource<any>;
  public displaycolumndefs: ColumnDefinition[];
  public peopledata;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.displaycolumndefs = peoplecolumns;
    this.peopledata  = PEOPLE_DATA;
    this.mattabledataSource = new MatTableDataSource<any>();
    this.mattabledataSource.data = this.peopledata;
  }

  ngOnInit(): void {
    this.setCss('mat-header-cell', 'background-color:#0070ad !important; color:white; font-weight:bold;');

  }

  setCss(classString: string, classStyles: any) {
    setTimeout(() => {
      let divs = this.document.getElementsByClassName(classString);
      Array.from(divs).forEach(div => {
        div.setAttribute('style', classStyles);
      });
    }, 0);
  }

  ngAfterViewInit() {
    this.mattabledataSource.paginator = this.paginator;
    this.mattabledataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.mattabledataSource.filter = filterValue;
  }




}
export const  peoplecolumns: ColumnDefinition[] = [
  { columnDef: 'Sno',    header: 'Sno.',   cell: (element: People) => `${element.Sno}`},
  { columnDef: 'name',     header: 'Name.', cell: (element: People) => `${element.name}`   },
  { columnDef: 'canspeak',   header: 'Can speak?', cell: (element: People) => `${element.canspeak}`},
  { columnDef: 'canwrite',   header: 'Can write?', cell: (element: People) => `${element.canwrite}`}
];
