const fs = require( 'file-system' )
const path = require( 'path' )

describe( "index.js", () => {
  it( "adds event listener to document", async () => {
    const js = await fs.readFileSync( path.resolve( __dirname, '..', 'index.js' ), 'utf-8' )

    expect( js ).to.match( /document.addEventListener\(( |)"DOMContentLoaded"[\S\s]*updateDOM[\S\s]*/ )

  } )
} )