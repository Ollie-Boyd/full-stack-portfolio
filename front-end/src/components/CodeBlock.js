import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={atomOneDark}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock