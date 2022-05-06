import{d as n}from"./app.e38c627f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1>go\u8BED\u8A00\u5E38\u91CF</h1><p>go\u4F7F\u7528const\u6765\u58F0\u660E\u5E38\u91CF\uFF0C\u5E38\u91CF\u8868\u8FBE\u5F0F\u7684\u8FD0\u7B97\u5728\u7F16\u8BD1\u671F\u5C31\u53EF\u4EE5\u5B8C\u6210\u4E86\uFF0C\u5E76\u4E14go\u5E38\u91CF\u662F\u7C7B\u578B\u5B89\u5168\u7684\uFF0C\u7F16\u8BD1\u5668\u4F18\u5316\u53CB\u597D\u7684\u5143\u7D20\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  startOne <span class="token operator">=</span> <span class="token number">0</span>
  startTwo <span class="token operator">=</span> <span class="token number">1</span>
  startThree <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>go\u63A8\u5D07\u65E0\u7C7B\u578B\u5E38\u91CF\uFF0C\u8FD9\u4E3B\u8981\u662F\u56E0\u4E3Ago\u4E0D\u652F\u6301\u9690\u5F0F\u7684\u7C7B\u578B\u8F6C\u5316\uFF0C\u53EA\u80FD\u663E\u5F0F\u8F6C\u6362\uFF0C\u6240\u4EE5\u4E00\u65E6\u5E38\u91CF\u7ED9\u5B9A\u7C7B\u578B\uFF0C\u90A3\u4E48\u5B83\u8DDF\u53D8\u91CF\u4E4B\u95F4\u6216\u8BB8\u5C31\u8981\u5C06\u5E38\u91CF\u8F6C\u5316\u7C7B\u578B\u624D\u80FD\u8FDB\u884C\u8FD0\u7B97\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	PI <span class="token operator">=</span> <span class="token number">3.14</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	
	<span class="token keyword">var</span> a <span class="token builtin">float32</span> <span class="token operator">=</span> PI
	<span class="token keyword">var</span> b <span class="token builtin">float64</span> <span class="token operator">=</span> PI
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5982\u679C\u662F\u6CA1\u6709\u7C7B\u578B\u7684\u5E38\u91CF\uFF0C\u53EF\u4EE5\u975E\u5E38\u7075\u6D3B\u7684\u8D4B\u4E88float32\u6216\u8005float64\u90FD\u53EF\u4EE5\u3002</p><h2>\u679A\u4E3E\u5E38\u91CFiota</h2><p>go\u8BED\u8A00\u63D0\u4F9B\u9690\u5F0F\u91CD\u590D\u524D\u4E00\u4E2A\u975E\u7A7A\u8868\u8FBE\u5F0F\u7684\u673A\u5236</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
	PI <span class="token operator">=</span> <span class="token number">3.14</span>
	a
	b
	c
	d
	e
	f
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>PI<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u5C06\u4F1A\u5168\u90E8\u8F93\u51FA3.14</p><p>iota \u662Fgo\u8BED\u8A00\u7684\u4E00\u4E2A\u9884\u5B9A\u4E49\u6807\u8BC6\u7B26\uFF0C\u5B83\u8868\u793Aconst\u58F0\u660E\u5757\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u5E38\u91CF\u6240\u5904\u4F4D\u7F6E\u7684\u504F\u79FB\u91CF\uFF0C\u5B83\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2A\u65E0\u7C7B\u578B\u7684\u5E38\u91CF\uFF0C\u5B83\u7684\u521D\u59CB\u503C\u662F0\uFF0C\u610F\u601D\u662F\u8BF4\u6B64\u5904\u7684iota\u8DDF\u7B2C\u4E00\u884C\u6BD4\u504F\u79FB\u4E860\u4E2A\u4F4D\u7F6E</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token boolean">iota</span>
  b
  c
  d
  e
  f
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u540C\u4E00\u884C\u7684\u5E38\u91CF iota\u503C\u662F\u4E00\u6837\u7684\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u504F\u79FB\u91CF\u76F8\u540C</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  a<span class="token punctuation">,</span>b <span class="token operator">=</span> <span class="token boolean">iota</span>
  c<span class="token punctuation">,</span>d
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u8981\u8BA9iota\u7684\u521D\u59CB\u503C\u662F1\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8FD9\u4E48\u505A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token boolean">iota</span>
  a
  b
  c
  d
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>iota\u53EA\u9700\u8981\u5728\u4E00\u4E2Aconst\u7FA4\u4E2D\u51FA\u73B0\u4E00\u6B21\u5373\u53EF\uFF0C\u51FA\u73B0\u591A\u6B21\u8DDF\u51FA\u73B0\u4E00\u6B21\u7684\u6548\u679C\u4E00\u6837</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token boolean">iota</span>
  b <span class="token operator">=</span> <span class="token boolean">iota</span>
  c <span class="token operator">=</span> <span class="token boolean">iota</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u4E00\u6837</span>
<span class="token keyword">const</span><span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token boolean">iota</span>
  b
  c
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F53iota\u7FA4\u4E2D\u51FA\u73B0\u5F02\u7C7B\u8BE5\u5982\u4F55\u5904\u7406</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  a <span class="token operator">=</span> <span class="token boolean">iota</span>
  b <span class="token operator">=</span> <span class="token number">12</span>
  c <span class="token operator">=</span> <span class="token boolean">iota</span>
  d
  e
  f
  g
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u7B54\u6848\u5C31\u662F \u5F02\u7C7B\u8F93\u51FA\u81EA\u5DF1\u7684\uFF0C\u5176\u5B83\u7684\u5E38\u91CF\u4E0D\u53D7\u5F71\u54CD\uFF0C\u6BD4\u5982\u8FD9\u91CC\u7684\u8F93\u51FA\u5C31\u662F <code>1 12 3 4 5 6 7</code> \uFF0C\u53EA\u8981\u8BB0\u4F4Fiota\u662F\u504F\u79FB\u4F4D\u7F6E\u5C31\u53EF\u4EE5\u7406\u89E3\u4E3A\u4EC0\u4E48\u662F\u8FD9\u4E48\u8F93\u51FA\u7684\u4E86\u3002</p><p>\u5982\u679C\u4E0D\u8003\u8651\u5E38\u91CF\u7684\u7075\u6D3B\u6027\uFF0C\u6781\u81F4\u8FFD\u6C42\u5B89\u5168\u6027\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u7ED9iota\u5E38\u91CF\u52A0\u4E0A\u7C7B\u578B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span><span class="token punctuation">(</span>
  a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token boolean">iota</span>
  b
  c
  d
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u79CD\u5C31\u8981\u6C42\u53D8\u91CF\u7C7B\u578B\u5FC5\u987B\u662Fint\u624D\u80FD\u88AB\u8FD9\u4E9B\u679A\u4E3E\u7C7B\u578B\u63A5\u7EB3\uFF0C\u4F46\u662F\u4E00\u822C\u5E38\u91CF\u8FD8\u662F\u7528\u65E0\u7C7B\u578B\u7684\u8F83\u4E3A\u5E38\u89C1\u3002</p><h2>\u53C2\u8003\u8D44\u6599</h2><ul><li>\u56FE\u4E66\uFF1Ago\u8BED\u8A00\u7CBE\u8FDB\u4E4B\u8DEF</li></ul>`,26);function e(l,o){return p}var r=s(a,[["render",e]]);export{r as default};
