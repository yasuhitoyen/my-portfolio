import React from 'react';

const CodeBackground = ({ type }) => {
  const codeContent = {
    1: (
      <code>
        <span className="keyword">import</span> torch<br />
        <span className="keyword">import</span> torch.nn <span className="keyword">as</span> nn<br />
        <span className="keyword">import</span> torch.optim <span className="keyword">as</span> optim<br /><br />

        <span className="keyword">class</span> <span className="classname">SimpleNN</span>(nn.Module):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">__init__</span>(self):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">super</span>(<span className="classname">SimpleNN</span>, self).__init__()<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.fc1 = nn.Linear(2, 4)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.fc2 = nn.Linear(4, 1)<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">forward</span>(self, x):<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = torch.relu(self.fc1(x))<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = torch.sigmoid(self.fc2(x))<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> x<br /><br />

        model = <span className="classname">SimpleNN</span>()<br />
        criterion = nn.MSELoss()<br />
        optimizer = optim.SGD(model.parameters(), lr=0.01)<br /><br />

        inputs = torch.tensor([[0.5, 0.8]])<br />
        target = torch.tensor([[1.0]])<br /><br />

        optimizer.zero_grad()<br />
        output = model(inputs)<br />
        loss = criterion(output, target)<br />
        loss.backward()<br />
        optimizer.step()<br />
      </code>
    ),
    2: (
		<code>
		  <span className="keyword">#include</span> <span className="string">&lt;stdio.h&gt;</span><br />
		  <span className="keyword">#include</span> <span className="string">&lt;math.h&gt;</span><br /><br />
  
		  <span className="keyword">void</span> <span className="function">calculate_square</span>(<span className="keyword">int</span> num) &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"Square of %d is %d\\n"</span>, num, num * num);<br />
		  &#125;<br /><br />
  
		  <span className="keyword">int</span> <span className="function">main</span>() &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">int</span> num = 5;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"Number: %d\\n"</span>, num);<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;calculate_square(num);<br /><br />
  
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">for</span> (<span className="keyword">int</span> i = 0; i &lt; 5; i++) &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> (i % 2 == 0) &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"%d is even\\n"</span>, i);<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="keyword">else</span> &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"%d is odd\\n"</span>, i);<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br /><br />
  
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">double</span> sqrt_num = sqrt(num);<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;printf(<span className="string">"Square root: %.2f\\n"</span>, sqrt_num);<br /><br />
  
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> 0;<br />
		  &#125;<br />
		</code>
	  ),
    3: (
      <code>
        <span className="keyword">import</span> java.util.Scanner;<br /><br />

        <span className="keyword">public class</span> <span className="classname">Calculator</span> &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">public static void</span> <span className="function">main</span>(String[] args) &#123;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanner scanner = <span className="keyword">new</span> Scanner(System.in);<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(<span className="string">"Enter first number: "</span>);<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">double</span> num1 = scanner.nextDouble();<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(<span className="string">"Enter second number: "</span>);<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">double</span> num2 = scanner.nextDouble();<br /><br />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Sum: "</span> + (num1 + num2));<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Difference: "</span> + (num1 - num2));<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
        &#125;<br />
      </code>
    ),
	4: (
		<code>
		  <span className="selector">.card</span> &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">width</span>: <span className="value">300px</span>;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">padding</span>: <span className="value">20px</span>;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">border-radius</span>: <span className="value">10px</span>;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">box-shadow</span>: <span className="value">0 4px 8px rgba(0, 0, 0, 0.2)</span>;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">transition</span>: <span className="value">transform 0.3s ease</span>;<br />
		  &#125;<br /><br />
	  
		  <span className="selector">.card:hover</span> &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">transform</span>: <span className="value">scale(1.05)</span>;<br />
		  &#125;<br /><br />
	  
		  <span className="selector">.card-title</span> &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">font-size</span>: <span className="value">24px</span>;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">color</span>: <span className="value">#333</span>;<br />
		  &#125;<br /><br />
	  
		  <span className="selector">.card-description</span> &#123;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">font-size</span>: <span className="value">16px</span>;<br />
		  &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">color</span>: <span className="value">#666</span>;<br />
		  &#125;<br />
		</code>
	  )	  
  };

  return <div className="code-background">{codeContent[type]}</div>;
};

export default CodeBackground;
