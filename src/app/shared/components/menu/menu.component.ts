import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  ngOnInit(): void {
      this.menuItems = [
        {
          label:'Pipes de Angular',
          icon:'pi pi-desktop',
          items: [
            {
              label: 'textos y fechas',
              routerLink: '',
              icon: 'pi pi-align-left',
            },
            {
              label: 'Números',
              routerLink: 'numbers',
              icon: 'pi pi-dollar',
            },
            {
              label: 'no comunes',
              routerLink: 'uncommon',
              icon: 'pi pi-globe',
            },
          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Custom Pages',
              icon: 'pi pi-cog',
              routerLink: 'custom'
            }
          ]
        },
      ];
  }

  public menuItems: MenuItem[] = [];



}
