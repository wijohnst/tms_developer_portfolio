export default function useDevStyle(isDev,style,color, borderArr){

    const borderSpecs = borderArr || [true,true,true,true];

    if(isDev){
        return {
            border : `${style} ${color}`,
            borderTop : (borderSpecs[0] ? `${style} ${color}` : 'none')
        }
    }else{
        return null
    }

}