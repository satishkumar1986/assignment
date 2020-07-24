import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserviewComponent } from './userview/userview.component';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../services/product.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserviewComponent, HeaderComponent, FooterComponent, SidebarComponent, ProductComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: [UserviewComponent],
  entryComponents: [UserviewComponent],
  providers: [ ProductService ]
})
export class UserModule { }
