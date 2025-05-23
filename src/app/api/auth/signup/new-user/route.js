import connectDB from "@/lib/connectDB";


export const POST = async (request) => {
  try {
    const db = await connectDB() ;
    const userCollection = db.collection("users");
    const newUser = await request.json();
    const exist =await userCollection.findOne({ email: newUser.email });
    console.log(exist);
   
    if(exist) {
      return Response.json({ message: "User Exists" }, { status: 304 });
    }
    
    const resp = await userCollection.insertOne(newUser);
    
    return Response.json({ message: "User Created" }, { status: 200 });
  
} 
  
  
  catch (error) {
    return Response.json(
      { message: "Something Went Wrong", error },
      { status: 500 }
    );
  }
};