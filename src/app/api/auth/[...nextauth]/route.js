import connectDB from "@/lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";

const { default: NextAuth } = require("next-auth");

const handler = NextAuth(

    {
      
        session : {

            strategy: "jwt"
        } ,

        providers : [
             
            CredentialsProvider(  { 
              
                credentials : {
                email : { label : "Email", required : true , type : "text" , placeholder : "your-email"},

                password : { label : "Password", required : true , type : "password" , placeholder : "your-password"},
                
                },


                async authorize(credentials){

                    const { email , password } = credentials ;
                     
                    if(!credentials){
                        return null
                    }
                   
                    if(email){

                       const db = await connectDB();

                       const currentuser = await db.collection('users').findOne({email})
                    
                       console.log(currentuser);

                    if(currentuser){
                        if(currentuser.password === password){

                            return currentuser ;

                        }
                    }
                }
                    return null ;

                }
                

              } )

        ],

        pages: {
      signIn: "/auth/login",
    },

    }

);



  

export { handler as GET , handler as POST }