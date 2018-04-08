webpackJsonp([41,74],{1917:function(s,n){s.exports={content:["article",["p","UI testing is an important part of the project development process. Effective test cases can sort out business needs and ensure the quality and progress of development, it enables developers to refactor the code and add new features safely."],["p","Ant Design Pro comes packaged with a handy set of React unit tests and E2E test framework, you can run the following command in the root repository to run test cases by running the following command at the project root."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run test:all  <span class="token comment" spellcheck="true"># Execute all the tests</span>'},["code","$ npm run test:all  # Execute all the tests"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/bNkhdMosBxuEhhKgnROo.png",width:"700"}]],["p","Now we'll give a brief introduction about how to write a test case."],["h2","Unit Tests"],["p","Unit tests are used to test the appearance of React UI components. By referencing ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests"},"create-react-app"],", we take ",["a",{title:null,href:"http://facebook.github.io/jest/"},"jest"]," as the test framework."],["p","Jest is a node-side test framework that uses jsdom to simulate the DOM environment and is suitable for quick testing of the logical behavior of React components. If you care about the performance in a real browser, please refer to the E2E test section."],["h3","Write a case"],["p","For example, we could create a file ",["code","src/routes/Result/Success.test.js"]," to test the UI appearance of ",["code","Result/Success.js"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Success <span class="token keyword">from</span> <span class="token string">\'./Success\'</span><span class="token punctuation">;</span>   <span class="token comment" spellcheck="true">// Introduce the corresponding React component</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders with Result\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Success</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>                           <span class="token comment" spellcheck="true">// Rendering</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'Result\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment" spellcheck="true">// Has Result component</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'Result\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">\'type\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment" spellcheck="true">// The type of the Result component is success</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { shallow } from 'enzyme';\nimport Success from './Success';   // Introduce the corresponding React component\n\nit('renders with Result', () => {\n  const wrapper = shallow(<Success />);                           // Rendering\n  expect(wrapper.find('Result').length).toBe(1);                  // Has Result component\n  expect(wrapper.find('Result').prop('type')).toBe('success');    // The type of the Result component is success\n});"]],["p","Here ",["a",{title:null,href:"http://airbnb.io/enzyme/docs/api/index.html"},"enzyme"]," is used as a test library, which provides a number of useful APIs to help us test React components. As for the assertion library, we choose ",["a",{title:null,href:"https://facebook.github.io/jest/docs/en/expect.html#content"},"jasmine2 expect grammar"],"."],["h3","Local execution"],["p","Files with suffix ",["code","* .test.js"]," in ",["code","src"]," will be found out and executed by using the following command:"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">test</span> .test.js'},["code","$ npm test .test.js"]],["h4","Execute a single or a set of cases"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">test</span> src/routes/Result/Success.test.js  <span class="token comment" spellcheck="true"># test Success.test.js</span>\n$ <span class="token function">npm</span> <span class="token function">test</span> src/routes                         <span class="token comment" spellcheck="true"># test all test case file in routes</span>'},["code","$ npm test src/routes/Result/Success.test.js  # test Success.test.js\n$ npm test src/routes                         # test all test case file in routes"]],["h3","Test dva wrapped components"],["p","We can use the following way to test the components wrapped by dva ",["code","connect"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Dashboard <span class="token keyword">from</span> <span class="token string">\'./Dashboard\'</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders Dashboard\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// Use the wrapped components</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dashboard.WrappedComponent</span> <span class="token attr-name">user</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">\'Table\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">props</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport { shallow } from 'enzyme';\nimport Dashboard from './Dashboard';\n\nit('renders Dashboard', () => {\n  // Use the wrapped components\n  const wrapper = shallow(\n    <Dashboard.WrappedComponent user={{ list: [] }} />\n  );\n  expect(wrapper.find('Table').props().dataSource).toEqual([]);\n});"]],["h2","e2e test"],["p","End-to-end testing, also known as smoke testing, is used to test the process and appearance of front-end applications in a real-world browser environment, equivalent to operating application instead of manually."],["p","We import ",["a",{title:null,href:"https://github.com/googlechrome/puppeteer"},"puppeteer"]," as the tool of e2e testing, puppeteer is a headless Chrome tool which created by Google, it uses chrome/chromium as the browser environment by default to run your application, and provides a very semantic API for describing business logic."],["h3","Write a e2e test case"],["p","Assuming there is a demand, the user enters the wrong user name and password in the login page, and after clicking on submission, an error message box will appear."],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/oZeYewGOUJkmqXAPoOFC.gif",width:"400"}]],["p","We write a test case to ensure this process. Create a ",["code","Login.e2e.js"]," file in the ",["code","src/e2e/"],"directory and describe the test cases as described above for your business needs."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> puppeteer <span class="token keyword">from</span> <span class="token string">\'puppeteer\'</span><span class="token punctuation">;</span>\n\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">\'Login\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should login with failure\'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">\'#userName\'</span><span class="token punctuation">,</span> <span class="token string">\'mockuser\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token string">\'#password\'</span><span class="token punctuation">,</span> <span class="token string">\'wrong_password\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token string">\'button[type="submit"]\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">waitForSelector</span><span class="token punctuation">(</span><span class="token string">\'.ant-alert-error\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// should display error</span>\n    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import puppeteer from 'puppeteer';\n\ndescribe('Login', () => {\n  it('should login with failure', async () => {\n    const browser = await puppeteer.launch();\n    const page = await browser.newPage();\n    await page.type('#userName', 'mockuser');\n    await page.type('#password', 'wrong_password');\n    await page.click('button[type=\"submit\"]');\n    await page.waitForSelector('.ant-alert-error'); // should display error\n    await page.close();\n    browser.close();\n  });\n});"]],["p","Refer to ",["a",{title:null,href:"https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"},"puppeteer/docs/api.md"]," for more APIs."],["h3","Run test cases"],["p","Run the following command to execute all ",["code","*.e2e.js"]," test cases under src."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">test</span> .e2e.js'},["code","$ npm test .e2e.js"]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/LGCXopksUYMUhjRgdYSz.png",width:"700"}]],["blockquote",["p","Note: You should run ",["code","npm start"]," before testing e2e cases locally, or it will throw ",["code","Failed: navigation error"],"."]],["h2","watch mode"],["pre",{lang:null,highlighted:'$ npm test <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>watch'},["code","$ npm test -- --watch"]],["p","By adding ",["code","--watch"]," configuration you can enter the watch mode, ",["code","in which"]," when you modify and save the file, jest will automatically execute the corresponding test cases. Jest's command line tools also provide a variety of convenient shortcuts to execute the use cases you need."],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/MnmxiavystfcBDskyKRg.png",width:"700"}]],["h2","Test coverage"],["pre",{lang:null,highlighted:'$ npm test <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>coverage'},["code","$ npm test -- --coverage"]],["p","Add a ",["code","--coverage"]," configuration to display the project's test coverage."],["p",["img",{src:"https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67",width:"700"}]],["h2","Focus or ignore test cases"],["p","Use ",["code","xit()"]," instead of ",["code","it()"]," to temporarily ignore the test case, ",["code","fit()"]," to focus on the current test case and ignore all other test cases. These two methods can help you to focus on the current need of test cases in the development process."],["h2","Access integration testing services"],["p","If you need access to integration testing environment such as travis, CircleCI, Gitlab CI, you can refer to ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/.travis.yml"},".travis.yml"]," provided by this repository."],["p","Note that the e2e test requires integrated environment support ",["a",{title:null,href:"https://electronjs.org/"},"electron"],", and if not, you can run unit tests separately using ",["code","npm test .test.js"],"."],["h2","Reference links"],["p","For more testing tips and functions, please refer to the following link."],["ul",["li",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests"},"create-react-app tests"]]],["li",["p",["a",{title:null,href:"https://facebook.github.io/jest/"},"jest"]]],["li",["p",["a",{title:null,href:"http://airbnb.io/enzyme/"},"enzyme"]]],["li",["p",["a",{title:null,href:"https://github.com/googlechrome/puppeteer"},"puppeteer"]]],["li",["p",["a",{title:null,href:"https://facebook.github.io/jest/docs/en/puppeteer.html"},"Using with puppeteer"]]]]],meta:{order:15,title:"UI Test",type:"Advanced",filename:"docs/ui-test.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Unit-Tests",title:"Unit Tests"},"Unit Tests"]],["li",["a",{className:"bisheng-toc-h2",href:"#e2e-test",title:"e2e test"},"e2e test"]],["li",["a",{className:"bisheng-toc-h2",href:"#watch-mode",title:"watch mode"},"watch mode"]],["li",["a",{className:"bisheng-toc-h2",href:"#Test-coverage",title:"Test coverage"},"Test coverage"]],["li",["a",{className:"bisheng-toc-h2",href:"#Focus-or-ignore-test-cases",title:"Focus or ignore test cases"},"Focus or ignore test cases"]],["li",["a",{className:"bisheng-toc-h2",href:"#Access-integration-testing-services",title:"Access integration testing services"},"Access integration testing services"]],["li",["a",{className:"bisheng-toc-h2",href:"#Reference-links",title:"Reference links"},"Reference links"]]]}}});