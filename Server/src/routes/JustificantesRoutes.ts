import {Router}  from "express";
import justificantesControllers from "../controllers/justificantesControllers" ;

class JustificantesRoutes{
    router : Router = Router();
    constructor(){
        this.config();
    }

    config() : void {
        this.router.post('/', justificantesControllers.CreateJust);
        this.router.put('/:id', justificantesControllers.UpdateJust);
        this.router.get('/:id', justificantesControllers.GetJustById);

    }
    
}
const justificanteRoutes =new JustificantesRoutes();
export default justificanteRoutes.router;