import label from "daisyui/components/label";
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

                        const currentuser = users.find(( user )=> user.email === email)

                        console.log(currentuser)
                    

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

    }

);


const users = [
    {
      id: 1,
      email: "john@example.com",
      password: "password123",
    },
    {
      id: 2,
      email: "jane@example.com",
      password: "securepass456",
    },
    {
      id: 3,
      email: "alex@example.com",
      password: "helloWorld789",
    },
  ];
  

export { handler as GET , handler as POST }