// main.server.ts
// Modified version of equivalent file in
// https://github.com/robwormald/ng-universal-demo/

import 'zone.js/dist/zone-node';
import { platformServer } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module';
import { AppServerModuleNgFactory } from './aot/src/app/app.server.module.ngfactory';
import * as express from 'express';
import {ngExpressEngine} from './express-engine';

enableProdMode();

const hostname = '0.0.0.0';
const port = '80';

const app = express();

app.engine('html', ngExpressEngine({
	baseUrl: `http://${hostname}:${port}/`,
	bootstrap: [AppServerModuleNgFactory],
}));

app.set('view engine', 'html');
app.set('views', '.');

app.get('/', (req, res) => {
	res.render('index', {req});
});

app.use(express.static('.'));

app.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
