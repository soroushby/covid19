import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule, MatToolbarModule],
  exports: [MatSidenavModule, MatSidenavModule],
})
export class MaterialModule {}
