const isLogin = async(req,res,next)=>{
   try {
    if(req.session.user_id){}
    else{
   return res.redirect('/login');
    }
    next();
   } catch (error) {
    console.log(error);
   }
}

const isLogout = async(req,res,next)=>{
    try {
     if(req.session.user_id){
      return res.redirect('/home');
     }
    next();    
    } catch (error) {
     console.log(error);
    }
 }
 

module.exports = {
    isLogin,
    isLogout  
}