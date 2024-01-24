interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Ferhat Aslan', // Site author
	title: 'Fabrics Pedia | All about fabrics', // Site title.
	description: 'Discover the art of sewing, fashion, and stitching techniques on our website. Dive into a world of fabrics, patterns, and expert tips. Unleash your creativity!', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
