import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({
  adapter: new Adapter()
})
window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  };
};