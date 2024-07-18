import React,{useEffect,useRef} from 'react'
import "./scroll.css"

const Scroll = ({children}) => {

    const ref = useRef(null)
    
    useEffect(()=>{
        
        const handleScroll=()=>{
         const elementTop = ref.current.getBoundingClientRect().top;
         const halfHeight = window.innerHeight * .7
         const isSection = (elementTop - halfHeight)  < 0
          if(isSection){
             ref.current.classList.add('visible')
          }
        }
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return(()=>{
            window.removeEventListener('scroll', handleScroll)
        })
      
    },[])

  return (
    <section ref={ref} className='scroll'>
      {children}
    </section>
  )
}

export default Scroll