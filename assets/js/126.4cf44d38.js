(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{267:function(r,a,t){"use strict";t.r(a);var e=t(2),v=Object(e.a)({},function(){var r=this,a=r.$createElement,t=r._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("blockquote",[t("p",[r._v("本篇由来自 "),t("strong",[r._v("字节跳动")]),r._v(" 的 "),t("a",{attrs:{href:"https://github.com/HuangHongkai",target:"_blank",rel:"noopener noreferrer"}},[r._v("Hongkai"),t("OutboundLink")],1),r._v(" 分享。")])]),r._v(" "),t("p",[r._v("Redis 主要用途有 2 个")]),r._v(" "),t("ul",[t("li",[r._v("数据缓存，减轻 db 的压力")]),r._v(" "),t("li",[r._v("数据同步，在分布式系统中各个实例的信息同步")])]),r._v(" "),t("p",[r._v("redis 的 QPS 量通常相当的大，动辄百万 QPS，一般企业都需要很庞大的 redis 集群资源。由于 redis 的使用相当频繁，经常会出现各种问题。根据目前积累的线上经验，redis 出现问题第一步就是要想到："),t("strong",[r._v("redis 是单进程单线程实例")]),r._v(" 理解这一点通常能解决很多问题。")]),r._v(" "),t("p",[r._v("下面介绍一些 redis 的一些理论知识。")]),r._v(" "),t("h2",{attrs:{id:"主从模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从模式","aria-hidden":"true"}},[r._v("#")]),r._v(" 主从模式")]),r._v(" "),t("p",[r._v("将数据分散到多个服务器上，每个服务拥有同样的样本，这样即使有一台服务器出现故障，其他服务器依然可以继续提供服务。为此， Redis 提供了复制（replication）功能，可以实现当一台数据库中的数据更新后，自动将更新的数据同步到其他数据库上。")]),r._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[r._v("#")]),r._v(" 概念")]),r._v(" "),t("p",[r._v("在 redis 或 mysql 等数据库中，数据库分为两类，一类是主数据库（master），另一类是从数据库（slave）。主数据库可以进行读写操作，当写操作导致数据变化时会自动将数据同步给从数据库。而从数据库一般是只读的，并接受主数据库同步过来的数据。一个主数据库可以拥有多个从数据库，而一个从数据库只能拥有一个主数据库。")]),r._v(" "),t("h3",{attrs:{id:"复制原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制原理","aria-hidden":"true"}},[r._v("#")]),r._v(" 复制原理")]),r._v(" "),t("p",[r._v("当从数据库启动时，会向主数据库发送 sync 命令，主数据库接收到 sync 后开始在后台保存快照 rdb，在保存快照期间受到的命名缓存起来，当快照完成时，主数据库会将快照和缓存的命令一块发送给从。复制初始化结束。之后，主每接收到 1 个命令就同步发送给从。 当出现断开重连后，2.8 之后的版本会将断线期间的命令传给从数据库。")]),r._v(" "),t("h3",{attrs:{id:"优点："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点：","aria-hidden":"true"}},[r._v("#")]),r._v(" 优点：")]),r._v(" "),t("ul",[t("li",[t("p",[r._v("减轻单点压力")])]),r._v(" "),t("li",[t("p",[r._v("提升系统容灾能力")])])]),r._v(" "),t("h3",{attrs:{id:"缺点："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点：","aria-hidden":"true"}},[r._v("#")]),r._v(" 缺点：")]),r._v(" "),t("ul",[t("li",[r._v("承载的容量非常有限，假设服务器的内存都是 40G，有 10 台服务器，意味着只能容纳 40G 的数据。")]),r._v(" "),t("li",[r._v("刚写入的数据可能获取不到（因为数据还没有更新到其他服务器上）")])]),r._v(" "),t("h2",{attrs:{id:"哨兵"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哨兵","aria-hidden":"true"}},[r._v("#")]),r._v(" 哨兵")]),r._v(" "),t("p",[r._v("在主从模式下，当主服务出现异常会导致整体 redis 不可写。开发者需要手动将一个从数据库升级为主数据库保证服务正常运行。该过程难以自动后，为此在 redis2.8 后提供了哨兵来实现故障恢复功能。")]),r._v(" "),t("p",[r._v("哨兵就是 redis 的监控系统，包括 2 个功能")]),r._v(" "),t("ul",[t("li",[r._v("监控主数据库和从数据库是否正常运行。")]),r._v(" "),t("li",[r._v("主数据库出现故障时自动将从数据库转换为主数据库。")])]),r._v(" "),t("h3",{attrs:{id:"主从切换过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从切换过程","aria-hidden":"true"}},[r._v("#")]),r._v(" 主从切换过程")]),r._v(" "),t("ul",[t("li",[r._v("slave leader 升级为 master")]),r._v(" "),t("li",[r._v("其他 slave 修改为新 master 的 slave")]),r._v(" "),t("li",[r._v("客户端修改连接")]),r._v(" "),t("li",[r._v("老的 master 如果重启成功，变为新 master 的 slave")])]),r._v(" "),t("h3",{attrs:{id:"集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群","aria-hidden":"true"}},[r._v("#")]),r._v(" 集群")]),r._v(" "),t("p",[r._v("使用哨兵，redis 每个实例也是全量存储，每个 redis 存储的内容都是完整的数据，浪费内存且有木桶效应。为了最大化利用内存，可以采用集群，即每台机器存储不同的内容。")]),r._v(" "),t("p",[r._v("简单来讲：通过不断的扩容和增加运行 redis 实例的机器数量，使得 redis 能撑得住更大的访问量")]),r._v(" "),t("h3",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[r._v("#")]),r._v(" 原理")]),r._v(" "),t("p",[r._v("redis cluster 中有一个 16384（2^4 * 2^10）长度的槽的概念。通过哈希算法再加上取模运算可以将一个值固定地映射到某个区间，区间由连续的 slot 组成。")]),r._v(" "),t("p",[r._v("redis cluster 采用虚拟槽分区，所有的键根据哈希函数(CRC16[key]&16383)映射到 0－16383 槽内，共 16384 个槽位，每个节点维护部分槽及槽所映射的键值数据，可以为节点设置权重，权重高的节点维护的槽的数量比较多。")]),r._v(" "),t("p",[r._v("哈希函数: Hash()=CRC16[key]&16383 按位与")]),r._v(" "),t("p",[r._v("redis 用虚拟槽分区原因：解耦数据与节点关系，节点自身维护槽映射关系，分布式存储")]),r._v(" "),t("h3",{attrs:{id:"集群模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群模式","aria-hidden":"true"}},[r._v("#")]),r._v(" 集群模式")]),r._v(" "),t("ul",[t("li",[r._v("客户端模式")])]),r._v(" "),t("p",[r._v("在客户端做 redis 负载均衡，通过服务发现注册 redis 节点，实现 redis 节点的动态改变（增删或者节点扩容）")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/07/12/5d27764947bf559054.png",alt:"img"}})]),r._v(" "),t("p",[r._v("优点")]),r._v(" "),t("ul",[t("li",[r._v("数据分散，使得整体容量得到提升")]),r._v(" "),t("li",[r._v("当一个节点不可用不会导致整体服务不可用")]),r._v(" "),t("li",[r._v("性能高，客户端直接连接 redis，不通过代理")]),r._v(" "),t("li",[r._v("扩容方便")])]),r._v(" "),t("p",[r._v("目前企业使用的 redis 集群基本都是客户端模式，这样可以减轻服务端的压力。")]),r._v(" "),t("ul",[t("li",[r._v("代理模式")])]),r._v(" "),t("p",[r._v("客户端不是直接连接 redis，而是连接代理，这样子客户端的开发就变得简单很多了。。同时服务端也可以控制 redis 的连接数。")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/07/12/5d27764e1a87934952.png",alt:"img"}})]),r._v(" "),t("h3",{attrs:{id:"分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[r._v("#")]),r._v(" 分析")]),r._v(" "),t("p",[r._v("集群模式的解决了容量的问题，但是带来了很多的问题，例如 redis 的热 key 问题，单点高并发会导致 redis 负载及其不均衡，进而服务可用性极低。")]),r._v(" "),t("h2",{attrs:{id:"穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#穿透","aria-hidden":"true"}},[r._v("#")]),r._v(" 穿透")]),r._v(" "),t("h3",{attrs:{id:"缓存的处理流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存的处理流程","aria-hidden":"true"}},[r._v("#")]),r._v(" 缓存的处理流程")]),r._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/07/12/5d277651adee639077.png",alt:"img"}})]),r._v(" "),t("h3",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透","aria-hidden":"true"}},[r._v("#")]),r._v(" 缓存穿透")]),r._v(" "),t("p",[r._v("频繁查询一个不存在的数据，由于缓存不命中，每次都要查询持久层。从而失去缓存的意义。")]),r._v(" "),t("p",[r._v("如果恶意用户知道我们 redis key 的构造规则，每次故意查询一个在缓存内必然不存在的数据，导致每次请求都要去存储层去查询，这样缓存就失去了意义。如果在高并发下数据库可能挂掉。这就是"),t("strong",[r._v("缓存击穿")]),r._v("。")]),r._v(" "),t("h2",{attrs:{id:"雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#雪崩","aria-hidden":"true"}},[r._v("#")]),r._v(" 雪崩")]),r._v(" "),t("p",[r._v("redis 缓存大量失效的时候，引发大量查询数据库。如果有的数据只放在 redis 上（例如用来同步多个服务实例信息之间的共享数据），redis 缓存失效会导致服务出现异常，这比查数据库更加严重")]),r._v(" "),t("p",[r._v("引起这个问题的原因主要是 redis 单点被打垮，也就是热 key 问题。")]),r._v(" "),t("h2",{attrs:{id:"击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#击穿","aria-hidden":"true"}},[r._v("#")]),r._v(" 击穿")]),r._v(" "),t("p",[r._v("缓存击穿是指缓存中没有但数据库中有的数据（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力")]),r._v(" "),t("p",[r._v("解决方案：")]),r._v(" "),t("ul",[t("li",[r._v("设置频繁访问的数据过期（让缓存持续命中）")]),r._v(" "),t("li",[r._v("加分布式锁（如果缓存不存在，只让一个进程去读 db，有点类似于单例模式的实现，下面是一个从网上找的小 demo）")])]),r._v(" "),t("p",[t("img",{attrs:{src:"https://i.loli.net/2019/07/12/5d277650ad21c42141.png",alt:"img"}})]),r._v(" "),t("h3",{attrs:{id:"热-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热-key","aria-hidden":"true"}},[r._v("#")]),r._v(" 热 key")]),r._v(" "),t("p",[r._v("在集群模式下经常会遇到这个问题，业界依然没有好的解决方案（参见微博只要热点事件就垮了）")]),r._v(" "),t("p",[r._v("热 key：某个 key 访问非常的频繁，"),t("strong",[r._v("redis 集群负载不均衡，导致单点延迟增加，从而导致单点 redis 上的缓存不可用。")])]),r._v(" "),t("p",[r._v("这个问题相当的难以解决，微博在出现热点事件后服务不可用，很大原因是热 key 问题，导致单点 redis 被打垮了， 增加 db 访问量，进而系统雪崩。")]),r._v(" "),t("p",[r._v("因为"),t("strong",[r._v("redis 是单进程单线程")]),r._v(" ，redis 的处理线程忙起来，会导致 redis 没空 accept 来自 client 的 tcp 请求，进而出现连接超时的错误，缓存未命中。")]),r._v(" "),t("h3",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[r._v("#")]),r._v(" 解决方案")]),r._v(" "),t("p",[r._v("没有具体的解决方案，需要根据业务来制定。思路"),t("strong",[r._v("将 key 打散")]),r._v("，就是将 redis 访问某个热 key，转化为访问多个 key，减轻单点压力")]),r._v(" "),t("p",[r._v("但并不是所有的业务都能使用该解决方案。")])])},[],!1,null,null,null);a.default=v.exports}}]);