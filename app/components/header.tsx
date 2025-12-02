"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from 'next/image';

export const AcmeLogo = () => {
	return (
		<Image
			src='/b.png'
			alt='Logo'
			width={0}
			height={0}
			className='w-[50px] sm:w-[50px] max-w-none'
		/>
	)
}


export default function Header() {
  const navItems = [
    {href: "/", label: "Раздел 1"},
    {href: "/page2", label: "Раздел 2"},
    {href: "/about", label: "О нас"}
  ];

return (
		<Navbar className='h-[6rem] bg-[#FF7B00]'>
			<NavbarBrand>
				<a href='/'>
					<AcmeLogo />
				</a>
			</NavbarBrand>
			<NavbarContent className='hidden sm:flex gap-4' justify='center'>
				{navItems.map(item => {
					return (
						<NavbarItem key={item.href}>
							<Link
								className='text-[18px] sm:text-[16px] lg:text-[18px] font-medium'
								color='foreground'
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					)
				})}
			</NavbarContent>
		</Navbar>
	)
}
