import remarkFrontmatter from 'remark-frontmatter'             // simply strip out the metadata from the page,
                                                               // but the values will be lost
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'      // convert frontmatter metadata into MDX exports
import recmaNextjsStaticProps from 'recma-nextjs-static-props' // expose frontmatter variables to `pages/_app.js`
                                                               // as `pageProps`
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, {name: 'frontmatter'}]],
    rehypePlugins: [],
    recmaPlugins: [recmaNextjsStaticProps],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

export default withMDX(nextConfig)
