// require(['./app/demo.js'],function(demo){

// });
import * as demo from "./app/demo";
import css from './index.css';
//import less from './style.less';
const Demo= demo.Demo
export class Main extends Demo{
    constructor(){
        super();
        this.consoleLog();
    }
}
new Main();