import {Component, OnInit} from '@angular/core';
import {SuppliersService} from '../services/suppliers.service';
import {Supplier} from './classes/supplier';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  public suppliers: Supplier[];
  public errorSuppliers: any;

  constructor(private suppliersService: SuppliersService) {
  }

  ngOnInit(): void {
    this.suppliersService.getSuppliers().subscribe(
      value => {
        //console.log(value["_embedded"].suppliers);
        this.suppliers = value["_embedded"].suppliers;
      },
      error => {
        console.log(error);
        this.errorSuppliers = error.error.message;
      }
    );
  }

}
