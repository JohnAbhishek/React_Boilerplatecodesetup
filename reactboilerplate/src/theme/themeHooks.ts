import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "./themeslice/themeslice"


const DarkThemeshooks = ()=>{
const dispatch = useDispatch()




      const toggledarkmode = async () => {
        try{
            dispatch(toggleTheme())
        }
        catch(err){
            console.error("Error dispatching fetchcourseimg:", err);
        }
        
      }

   
      const darkorwhite = useSelector((state) => state?.themeReducer?.themeMode);
return{
   toggledarkmode,
   darkorwhite
}
}

export default DarkThemeshooks