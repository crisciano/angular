import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MaterializeModule } from 'angular2-materialize'
import { FotoModule } from './foto/foto.module'
import { MenuComponent } from './menu/menu.component'
import { FooterComponent } from './footer/footer.component'
import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map'
import { FotoService } from './foto/foto.service'

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PainelComponent,
    CadastroComponent,
    ListagemComponent,
    IndexComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FotoModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ FotoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}
