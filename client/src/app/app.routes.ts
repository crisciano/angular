import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './cadastro/cadastro.component'
import { ListagemComponent } from './listagem/listagem.component'
import { IndexComponent } from './index/index.component'

const appRoutes: Routes = [
	{path: '', component: IndexComponent },
	{path: 'listagem', component: ListagemComponent },
	{path: 'cadastro ', component: CadastroComponent }
]

export const routing = RouterModule.forRoot(appRoutes)