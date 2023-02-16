import { useEffect, useState } from "react";

export default function DemoReview() {

const [cnt, setCnt] = useState(100);

useEffect (() =>{

    console.log("subscribe to events");
    return ()=>console.log("unsubcribe");

},[]);

function incrementCnt () {

    setCnt((previousState) =>{
        return previousState+1;
    });
}
    return <button onClick={incrementCnt}>{cnt}</button>;
}