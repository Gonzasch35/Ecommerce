
const HeartIcon = ({color, clase, svgClase}) => {
  return (
    <svg className={svgClase} width="35" height="35" viewBox="-20 -5 140 90">
      {/* <circle cx="27" cy="1" r="150" className={clase}/> */}
      <path className={color} strokeWidth="3" d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52C32.75-2.42,17-2.42,7.29,7.27v0 c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"></path> 
    </svg>
  )
}

export default HeartIcon