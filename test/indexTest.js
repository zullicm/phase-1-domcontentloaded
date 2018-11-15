const sinon = require('sinon');

describe("index.js", () => {
  it('has an eventlistener', function() {
    sinon.spy(document, 'addEventListener')
  
    domContentLoaded()
    expect(document.addEventListener.calledOnce).to.be.true
  })
  it('should change the text on the page', function(){
    expect(document.querySelector('p')).should.have.text("JavaScript is so cool. It lets me add text to my page programmatically.");
    domContentLoaded()
    expect(document.querySelector('p')).should.have.text("This is really cool!");
  });
})
