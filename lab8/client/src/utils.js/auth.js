export default function(login, password){
    if(login === "admin" && password === "test"){
        return true;
    }
    return false;
};