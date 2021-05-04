const {decodeToken} = require('../utils/jsonwebtoken');

module.exports = {

    verifyAdmin: async (req, res, next) => {
        
        try{
            const {roleId} = decodeToken(req, res);
            
            const isRole = await users.findByPk(roleId,{

                attributes:['id']

            })
            
            if (roleId !== isRole) throw new Error('Not authorized')
            next()
            
        }catch(error){
            // return next({status: 403, error: error.message}) (manejos de errores consultar)
            res.status(403).json({status: 403, error: error.message})
        }
        
    }
        
}