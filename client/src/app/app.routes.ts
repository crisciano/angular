import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'
import { IndexComponent } from './index/index.component'
import { ErrorComponent } from './error/error.component'
import { LoginComponent } from './login/login.component'

const appRoutes: Routes = [
	{path: '', component: IndexComponent },
	{path: 'listagem', component: ListagemComponent },
	{path: 'login', component: LoginComponent },
	{path: 'cadastro', component: CadastroComponent },
	{path: 'cadastro/:id', component: CadastroComponent },
	{path: '**', component: ErrorComponent }
]

export const routing = RouterModule.forRoot(appRoutes)