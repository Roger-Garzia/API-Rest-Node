import {express} from 'express';
import {consign} from 'consign';

app = express();

consign({
  cwd: __dirName
})
.include('libs/middlewares.js')
.then('routes')
.then('libs/boots.js')
.into(app)
