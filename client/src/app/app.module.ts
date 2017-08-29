import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MaterializeModule } from 'angular2-materialize'
import { FotoModule } from './foto/foto.module'
import { MenuComponent } from './menu/menu.component'
import { FooterComponent } from './footer/footer.component'
import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map'

import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';
import { IndexComponent } from './index/index.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    PainelComponent,
    CadastroComponent,
    ListagemComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FotoModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
