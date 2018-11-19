const fs = require( 'file-system' )
const path = require( 'path' )

describe( "index.js", () => {
  it( "adds event listener to document", async() => {
    const js = await fs.readFileSync( path.resolve( __dirname, '..', 'index.js' ), 'utf-8' )
    
    expect( js ).to.match( /document.addEventListener\(( |)"DOMContentLoaded"[\S\s]*updateDOM[\S\s]*/ )

  })
  
  it('should change the text on the page', function(){
    expect(document.querySelector('p').textContent).to.equal("JavaScript is so cool. It lets me add text to my page programmatically.");
    updateDOM()
    expect(document.querySelector('p').textContent).to.equal("This is really cool!");
  });
})
