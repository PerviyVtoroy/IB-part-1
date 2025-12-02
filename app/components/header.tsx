"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import Image from 'next/image';

export const AcmeLogo = () => {
	return (
		<Image
			src='/logo.png'
			alt='Logo'
			width={0}
			height={0}
			className='w-[200px] sm:w-[160px] max-w-none'
		/>
	)
}


export default function Header() {
  const navItems = [
    {href: "/", label: "recipes"},
    {href: "/ingredients", label: "ingredients"},
    {href: "/about", label: "About us"}
  ];

return (
		<Navbar className='h-[6rem]'>
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
