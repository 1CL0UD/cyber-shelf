'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import { inclusions, noHeaderFooterUrls } from '@/app/constants'
import { Footer, Media } from '@/payload/payload-types'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((item, index) => (
            <li key={index}>
              <Image
                src={item.icon}
                width={36}
                height={36}
                alt={item.title}
                className={classes.icon}
              />
              <h5 className={classes.title}>{item.title}</h5>
              <p className="">{item.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="logo-white.svg" alt="logo" width={170} height={55} />
            </Link>
            <p>{footer?.copyright}</p>
            <div className={classes.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media
                return (
                  <Button
                    key={item.link.label}
                    href={item.link.url}
                    newTab={true}
                    className={classes.socialLinkItem}
                  >
                    <Image
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={classes.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
