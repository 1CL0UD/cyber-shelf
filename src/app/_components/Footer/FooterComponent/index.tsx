import { Footer } from '../../../payload/payload-types'
import React from 'react'

interface Props {
  footer: Footer | null
}

const FooterComponent = ({ footer }: Props) => {
  return <div>FooterComponent</div>
}

export default FooterComponent
