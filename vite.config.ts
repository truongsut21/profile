import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// Custom plugin to inline CSS into HTML
const inlineCss = () => ({
  name: 'inline-css',
  apply: 'build' as const,
  enforce: 'post' as const,
  generateBundle(_options: any, bundle: any) {
    // Find CSS files in the bundle
    const cssFiles = Object.keys(bundle).filter(key => key.endsWith('.css'))
    if (cssFiles.length === 0) return

    // Find HTML file in the bundle
    const htmlFileKey = 'index.html'
    const htmlAsset = bundle[htmlFileKey]
    if (!htmlAsset || htmlAsset.type !== 'asset') return

    let htmlSource = htmlAsset.source as string

    // Replace link tags with style tags containing CSS content
    for (const cssFile of cssFiles) {
      const cssAsset = bundle[cssFile]
      if (cssAsset && cssAsset.type === 'asset') {
        const cssContent = cssAsset.source as string
        const cssFileName = path.basename(cssFile)
        
        // Regex to match the <link> element for this CSS file
        const regex = new RegExp(`<link[^>]*href=["'](?:.*?)${cssFileName}["'][^>]*>`, 'g')
        htmlSource = htmlSource.replace(regex, `<style>${cssContent}</style>`)
        
        // Remove CSS from writing to disk
        delete bundle[cssFile]
      }
    }

    htmlAsset.source = htmlSource
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
  envPrefix: ['VITE_', 'HOOK_'],
  build: {
    cssTarget: 'chrome90'
  }
})
