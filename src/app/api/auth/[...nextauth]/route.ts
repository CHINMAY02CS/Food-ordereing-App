import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            
            name: "Credentials",
            
            credentials: {
              username: { label: "Email", type: "email", placeholder: "text@example.com" },
              password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              const res = await fetch ("your/endpoint",{
                method:'POST',
                body: JSON.stringify(credentials),
                headers: {"Content-Type":"application/json"}
              })

              const user = await res.json()
        
              if (res.ok && user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } 
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              
            }
          })
    ],

})

export {handler as GET, handler as POST}