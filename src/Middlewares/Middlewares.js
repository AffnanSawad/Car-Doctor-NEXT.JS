import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export const Middlewares = async(request) => {

    const token = cookies(request).get('next-auth.session-token')

    if(!token){
        return NextResponse.redirect(new URL ('api/auth/signin', request.url))
    }

    return NextResponse.next()
   
};

export default Middlewares;