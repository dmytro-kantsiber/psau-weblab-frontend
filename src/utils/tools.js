import Paragraph from "@editorjs/paragraph";
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import ImageTool from '@editorjs/image';
import AlignmentTuneTool from 'editorjs-text-alignment-blocktune'

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  paragraph: {
    class: Paragraph,
    tunes: ['anyTuneName'],
  },
  anyTuneName: {
    class:AlignmentTuneTool,
    config:{
      default: "left",
      blocks: {
        header: 'center',
        list: 'right'
      }
    },
  },
  image: {
    class: ImageTool,
    config: {
      endpoints: {
        byFile: 'http://localhost:5000/api/uploadFile',
    
      },
    }
  },
  

};
