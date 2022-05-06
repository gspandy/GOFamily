import{d as n}from"./app.e38c627f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},o=n(`<h1>\u547D\u4EE4</h1><p>go\u62E5\u6709\u4F17\u591A\u547D\u4EE4\u64CD\u4F5C\uFF0C\u8FD9\u91CC\u5C06\u8BB2\u8FF0\u5173\u4E8E\u8FD9\u4E9B\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u6CD5</p><p>\u4ECB\u7ECD\u4E00\u4E0B\u6700\u5E38\u89C1\u7684\u547D\u4EE4</p><ul><li>go help \u663E\u793A\u4E00\u4E2A\u547D\u4EE4\u57FA\u672C\u7684\u7528\u6CD5\uFF0C\u4F8B\u5982\uFF1A<code>go help fmt</code></li><li>go doc \u663E\u793A\u4E00\u4E2A\u547D\u4EE4\u5168\u90E8\u7684\u7528\u6CD5\uFF0C\u4F8B\u5982\uFF1A<code>go doc cmd/gofmt</code></li></ul><p>\u4F7F\u7528go help \u53EF\u4EE5\u663E\u793A\u5168\u90E8\u7684\u5F62\u5982 <code>go fmt</code> <code>go build</code> \u8FD9\u79CD\u6302\u9760\u5728go\u540E\u9762\u7684\u547D\u4EE4\uFF0C\u7136\u540E help\u52A0\u5177\u4F53\u7684\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u663E\u793A\u57FA\u672C\u7528\u6CD5\uFF0C\u7136\u540E\u5728help\u63D0\u793A\u7684\u5185\u5BB9\u4E2D\uFF0C\u901A\u5E38\u4F1A\u6709\u63D0\u793A\u4F60\uFF0C\u5982\u679C\u4F7F\u7528go doc \u547D\u4EE4\u53BB\u5BFB\u627E\u66F4\u52A0\u8BE6\u7EC6\u7684\u5185\u5BB9\uFF0C\u6BD4\u5982\u4E0B\u6587\u8981\u5199\u5230\u7684\uFF0C\u4F7F\u7528<code>go help fmt</code>\u5C31\u4F1A\u663E\u793A\u53BB\u5BFB\u627E<code>go doc cmd/gofmt</code></p><h2>gofmt</h2><blockquote><p>go fmt \u547D\u4EE4\u7B80\u5355\u5C01\u88C5\u4E86gofmt\u547D\u4EE4</p></blockquote><p>gofmt\u7684\u76EE\u7684\u662F\u6807\u51C6\u5316go\u8BED\u8A00\u7684\u4EE3\u7801\uFF0C\u589E\u52A0\u4EE3\u7801\u7684\u4EB2\u5207\u611F\uFF0C\u6D88\u9664\u4E0D\u540C\u4EBA\u5458\u5199\u7684\u4EE3\u7801\u7684\u4E4B\u95F4\u7684\u9694\u9602\u611F</p><p>\u4ECB\u7ECD\u51E0\u4E2A\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u8BE6\u7EC6\u5185\u5BB9\u53EF\u4EE5\u4F7F\u7528 <code>go doc cmd/gofmt </code></p><ul><li><p><code>gofmt -s</code> \u7B80\u5316\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>v <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">}</span>
  <span class="token comment">// \u590D\u6742</span>
  <span class="token keyword">for</span> <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token keyword">range</span> v <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token comment">// \u4F7F\u7528 -s \u540E</span>

  <span class="token keyword">for</span> <span class="token keyword">range</span> v <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0D\u8FC7\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u867D\u7136\u4F1A\u663E\u793A\u51FA\u6765\u8981\u4F18\u5316\u7684\u7B80\u5355\u5199\u6CD5\uFF0C\u4F46\u662F\uFF0C\u5E76\u4E0D\u4F1A\u66F4\u6539\u7528\u6237\u7684\u4EE3\u7801\uFF0C\u9700\u8981\u81EA\u5DF1\u53BB\u66F4\u6539\u3002</p></li><li><p><code>gofmt -r</code> \u4EE3\u7801\u91CD\u6784 replace\u80FD\u529B</p><p>\u4F8B\u5B50\uFF1A<code>gofmt -r &#39;a -&gt; Student&#39;</code> \u610F\u601D\u53EF\u4E0D\u662F a \u5B57\u7B26\u6539\u53D8\u6210 Student\uFF0C\u8FD9\u91CC\u662F\u91C7\u7528\u7684\u901A\u914D\u7B26\uFF0C\u610F\u601D\u5C31\u662F\u6240\u6709\u7684\u82F1\u6587\u5B57\u7B26\u90FD\u8981\u6539\u6210student\u3002\u53EA\u8981\u662F\u5C0F\u5199\u5B57\u6BCD\u90FD\u4F1A\u88AB\u89C6\u4E3A\u901A\u914D\u7B26\u3002\u518D\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF0C<code>gofmt -r &#39;a[b:len(a)] -&gt; a[b:]&#39;</code> \u8FD9\u91CC\u7684a\u4EE3\u8868\u6240\u6709\u7684\u82F1\u6587\u5B57\u7B26\u4E32\uFF0Cb\u5C31\u4F1A\u4EE3\u8868\u6574\u6570\u7C7B\u578B</p></li><li><p><code>gofmt -l</code> \u8F93\u51FA\u4E0D\u6EE1\u8DB3gofmt\u8981\u6C42\u7684\u6587\u4EF6</p><p>\u6BD4\u5982 <code>gofmt -l $GOROOT</code> \u5C31\u4F1A\u8F93\u51FA\u8FD9\u4E2A\u8DEF\u5F84\u4E0B\u4E0D\u6EE1\u8DB3\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u53EF\u4EE5\u770B\u51FAgo\u7684\u6807\u51C6\u5E93\u4E0D\u6EE1\u8DB3\u6807\u51C6\u7684\u4E5F\u4E0D\u5C11\uFF0C\u{1F602}</p></li></ul><h2>goimports</h2><p>\u5B89\u88C5\u65B9\u6CD5 <code>go get golang.org/x/tools/cmd/goimports</code>\uFF0C\u4E00\u822C\u7684IDE\u90FD\u4F1A\u5185\u7F6E\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u6BD4\u5982goland</p><ul><li>\u5BF9\u4E8E\u4EE3\u7801\u4E2D\u4F7F\u7528\u4E86\uFF0C\u4F46\u662F\u6CA1\u6709import\u7684\u5305</li><li>\u5BF9\u4E8E\u4EE3\u7801\u4E2D\u6CA1\u6709\u4F7F\u7528\uFF0C\u4F46\u662Fimport\u4E86\u7684\u5305</li></ul><p>\u8FD9\u4E2A\u5DE5\u5177\u90FD\u4F1A\u4E00\u4E00\u7BA1\u7406\uFF0C\u5C11\u4E86\u52A0\u4E0A\uFF0C\u591A\u4E86\u53D6\u6D88\u6389</p>`,14);function e(p,c){return o}var r=s(a,[["render",e]]);export{r as default};
