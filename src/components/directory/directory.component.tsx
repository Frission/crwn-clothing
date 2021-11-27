import React from "react"
import MenuItem from "../menu-item/menu-item.component"
import styles from "./directory.module.scss"

const Directory = () => {
	return (
		<div className={styles.directoryMenu}>
			{defaultSections.map(menuItemProps => {
				return <MenuItem
					key={menuItemProps.id}
					{...menuItemProps}
				/>
			})}
		</div>
	)
}

const defaultSections: Array<DirectorySection> = [
	{
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		id: 1,
		linkUrl: 'shop/hats'
	},
	{
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		id: 2,
		linkUrl: 'shop/jackets'
	},
	{
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		id: 3,
		linkUrl: 'shop/sneakers'
	},
	{
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		large: true,
		id: 4,
		linkUrl: 'shop/womens'
	},
	{
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		large: true,
		id: 5,
		linkUrl: 'shop/mens'
	}
]

export interface DirectorySection {
	title: string,
	subtitle?: string,
	imageUrl: string | null | undefined,
	id: number,
	large?: boolean,
	linkUrl: string,
}

interface DirectoryProps {

}

export default Directory