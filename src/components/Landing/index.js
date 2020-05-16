import React, {useRef,useEffect} from 'react'

const Landing = () => {
    const grif = useRef(null);
    useEffect(() => {
       grif.current.classList.add("homeImg");
       setTimeout(()=>{
           grif.current.classList.remove("homeImg");
       },3000)
    }, [])
    return (
        <main ref={grif} className="welcomePage">
         
        </main>
    )
}

export default Landing
