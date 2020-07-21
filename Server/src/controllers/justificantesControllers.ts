import {Request, Response} from 'express';
import pool from '../database'
class JustificantesControllers{
   
    public async CreateJust(req:Request, res:Response): Promise<any>{
        let vopcion="CREATE";
        const {idjust, mot, fechi, fechf,resp, idestatus, idestudiante, idtut} = req.body;
        let SP = 'call JUST_ADM_Justificante(?,?,?,?,?,?,?,?,?)';
        await  pool.query(SP,[vopcion,idjust, mot, fechi, fechf,resp, idestatus,idestudiante,idtut]);
        console.log(req.body);
        res.json({texto : 'Justificante Creado'});
        
    }

    public async GetJustById(req: Request, res: Response): Promise<any>{
        let SP = 'call JUST_GetJustById(?)'
        const{id}=req.params;
        await pool.query(SP,[id],function(err,result,field){
            if(err){
                throw err;
            }
            else if(result.length>0){
                res.json(result)
            }
            else {
                res.status(404).json({text : 'el usuario no existe'})
            }
            
        });
    }

    public async UpdateJust(req:Request, res:Response):Promise<void>{
        try {
            const {id} = req.params;
            const {mot, fechi, fechf,resp, idestatus, idestudiante, idtut} = req.body;
            let vopcion="UPDATE";
            let SP='call JUST_ADM_Justificante(?,?,?,?,?,?,?,?,?)';
            await pool.query(SP,[vopcion,id, mot, fechi, fechf,resp, idestatus,idestudiante,idtut], function(err,result){
                if (err)throw err;
                res.json({text : "Justificante actualizado"});       
            });
        } catch (error) {
            res.status(404).json({texto: 'algo salio mal'})
        }
    }


}
const justificantesControllers = new JustificantesControllers();

export default justificantesControllers;