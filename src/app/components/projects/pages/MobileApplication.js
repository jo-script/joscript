import React from 'react'
import Image from 'next/image'
import noData from '../img/No-data-cuate.svg'
function MobileApplication() {
  return (
    <div>
      <Image src={noData} alt='' />
    </div>
  )
}

export default MobileApplication
