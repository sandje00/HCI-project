import { useRef, useEffect } from "react"

const useMountEffect = fun => useEffect(fun, [])
const handleKeyPress = callback => event => {
  if (event.key === "Escape" || event.keyCode === 27) {
    callback(event)
  }
}

// Source: https://stackoverflow.com/a/56644506
export const useOnOutsideEvent = handleOutsideClick => {
    const innerBorderRef = useRef()
  
    const onClick = event => {
      if (
        innerBorderRef.current &&
        !innerBorderRef.current.contains(event.target)
      ) {
        handleOutsideClick()
      }
    }
  
    useMountEffect(() => {
      document.addEventListener("click", onClick, false)
      document.addEventListener("keydown", handleKeyPress(onClick))
      return () => {
        document.removeEventListener("click", onClick, false)
        document.removeEventListener("keydown", handleKeyPress(onClick))
      }
    })
  
    return { innerBorderRef }
}