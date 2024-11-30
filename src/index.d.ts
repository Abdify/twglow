declare function plugin(): { handler: () => void }

declare namespace plugin {
  const __isOptionsFunction: false
}

export default plugin
