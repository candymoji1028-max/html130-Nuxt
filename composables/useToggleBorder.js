//toggles a border on click. Turn the border on when the user clicks the image and turn the border off when they click again

import { ref } from 'vue'

export default function useToggleBorder() {
  const hasBorder = ref(false) 
  
  function toggleBorder() {
    hasBorder.value = !hasBorder.value
  }
  
  return {
    hasBorder,
    toggleBorder
  }
}
