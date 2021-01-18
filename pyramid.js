// function pyramid(){
//     for(var i=0;i<=4;i++)
//     {
//         for(var j=0;j<=4;j++)
//         {
//             for(var k=0;k<=4;k++)
//             {
//                 for(var l=0;l<=4;l++)
//                 {
//                     for(var m=0;m<=4;m++)
//                     {
//                         for(var n=0;n<=4;n++)
//                         {
//                             for(var o=0;o<=4;o++)
//                             {
//                                 for(var p=0;p<=4;p++)
//                                 {
//                                 for(var q=0;q<=4;q++)
//                                 {
//                               return console.log(".")
//                                 }
//                                 if(p==4){
//                           return console.log("0")
//                                 }else {
//                                    return console.log(".")
//                                 }
//                             }
                        
//                           if(o==3)
//                           {
//                             return  console.log("0")
//                           }
//                           else{
//                              return console.log(".")
//                           }}
//                         if(n==2 ||n==4)
//                         {
//                           return  console.log("0")
//                         }else{
//                            return console.log(".")
//                         }}
//                         if(m==1 ||m==3)
//                         {
//                            return console.log("0")
//                         }
//                         else{
//                           return console.log(".")  
//                         }
//                         }
//                         if(l==2||l==4)
//                         {
//                            return console.log("0")

//                         }else{
//                           return   console.log(".")
//                         }
//                     }
//                     if(k==3)
//                     {
//                       return  console.log("0")
//                     }
//                     else{
//                        return console.l(".")
//                     }
//                 }
//                 if(j==4)

//                 {
//                   return  console.log("0")
//                 }else{
//                   return  console.log(".")
//                 }
//             }
//           return  console.log(".")
//         }
//     }
           
//       console.log( pyramid());                 

            function inversepyramid(x)
            {
                for(var i=0;i<=9;i++)
                {
                    if(x %2==0)
                    {
                      console.log("0")
                      return true;
                    }else{
                    
                      console.log(".")                }
                      return false;
                }
            }
            for(var i=1;i<=9;i++)
            {
                if(inversepyramid(i)==true)
                {
            console.log(inversepyramid(i))
            }else
            {
                console.log(inversepyramid(i)==false)
            }
        }



        function rhombus()
        {
            for(var i=0;i<=9;i++)
            {
                if(i==5)
                {
                 return    console.log("0")
                }else{
                  return  console.log(".")
                }
            }
        }