import axios from "axios";
import { createServiceSuccessResponse, createServiceFailureResponse } from "../lib/responseUtil";
const fetc_something_url = "https://jsonplaceholder.typicode.com/todos/"; 
export function fetchDoSomething(id){
    return new Promise(function(resolve,reject){
        console.log("recieved id: "+id);
        try{
            axios.get(fetc_something_url+id).then(function(response){
                resolve(createServiceSuccessResponse(response.data));
            }).catch(function(err){
                resolve(createServiceFailureResponse(err));
            });
        }catch(err){
            resolve(createServiceFailureResponse(err));
        }
        
    });
}