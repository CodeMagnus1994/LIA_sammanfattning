import React from 'react'
import {useForm} from 'react-hook-form'
import { FormControl  } from '@mui/material';



function ReactForm() {

    // Exctracting function fro the react hook form 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      

      // Store from input and output in console
    const onSubmit = (data) => console.log(data)

    // Output in console in real time. 
    console.log(watch("example")) 

  return (
     <FormControl 
     onSubmit={handleSubmit(onSubmit)}>
        
     {/* Input with defaultValue */}   
     <input defaultValue="test" {...register("example")} />

      {/*Input in field is requred, else error */}
     <input {...register("exampleRequired", { required: true })} />
     
     {/*Error if second input field is let empty*/}
     {errors.exampleRequired && <span>This field is required</span>}
     
     {/*Input button*/}
     <input type="submit" />
   </FormControl>
  )
}

export default ReactForm