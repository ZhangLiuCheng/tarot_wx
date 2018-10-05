const imgHost = "https://taroturana.oss-cn-shanghai.aliyuncs.com/";

const content = [
  {
    "img": "taiyang",
    "name": "太阳",
    "front": "●有创意又饶富趣味的两性关系●被生命所支持的伴侣。",
    "behind": "互相竞争的关系，还有一些待克服的小恐惧。"
  },
  {
    "img": "shijie",
    "name": "世界",
    "front": "●美好，共容而持续的关系●住在另一个地方的伴侣。",
    "behind": "恋爱会成功，但无法保存，又将之放弃。"
  },
  {
    "img": "shenpan",
    "name": "审判",
    "front": "●过去作为所产生现在的关系彼此精神成长或学习。",
    "behind": "对感情觉的空虚，不断的寻找来填补。"
  },
  {
    "img": "yueliang",
    "name": "月亮",
    "front": "●表面美好，内在却波涛汹涌对深刻承诺怀有恐惧。",
    "behind": "过去未解决的情感模式一再降临。"
  },
  {
    "img": "xingxing",
    "name": "星星",
    "front": "●乐观，独立的关系命中注定要在一起。",
    "behind": "情绪混乱不明应从心检视其目的。"
  },
  {
    "img": "gaota",
    "name": "高塔",
    "front": "●突如其来的改变或解体。",
    "behind": "抗拒去放开或改变但它仍会发生。"
  },
  {
    "img": "emo",
    "name": "恶魔",
    "front": "●沦为公式化和束缚的两性关系以性爱维系的关系。",
    "behind": "尝试由肉体或精神上的不自由走出来。"
  },
  {
    "img": "jiezhi",
    "name": "节制",
    "front": "●发生一段重大成长和学习的两性关系●射手座的伴侣。",
    "behind": "过度放纵而导致可能的毁灭。"
  },
  {
    "img": "sishen",
    "name": "死神",
    "front": "●两性关系中某阶段的结束或即将发生深刻的改变。",
    "behind": "因恐惧改变而沉溺旧习或紧捉不放。"
  },
  {
    "img": "xuandiaozhe",
    "name": "悬吊者",
    "front": "●一段冷静反省的时间集中注意力在自己而非伴侣身上。",
    "behind": "在两人关系中有一种被束缚的感觉。"
  },
  {
    "img": "zhengyi",
    "name": "正义",
    "front": "●已解决了和伴侣间的争议，负责任的伴侣。",
    "behind": "可能对他人不义，过去的事未解决。"
  },
  {
    "img": "mingyunzhilun",
    "name": "命运之轮",
    "front": "●两性关系日趋圆满的机会和可能性在增加。",
    "behind": "关系中一直在重覆某些模式。"
  },
  {
    "img": "yinshi",
    "name": "隐士",
    "front": "●将心思放回自己身上 仔细思考。",
    "behind": "给予彼此一些独处的时间。"
  },
  {
    "img": "liliang",
    "name": "力量",
    "front": "●在关系中的两人能互相倾听及倾诉可以发展出真实的亲密感。",
    "behind": "对爱感到无力或失去自信，因恐惧而操控他人。"
  },
  {
    "img": "zhanche",
    "name": "战车",
    "front": "●需要协调好两性关系中的冲突能够掌控情绪●充满自信的伴侣。",
    "behind": "情绪蒙闭了视线或情绪决堤，未解决的情绪在内心积压起来。"
  },
  {
    "img": "lianren",
    "name": "恋人",
    "front": "●展开新关系，决定去爱，沉醉爱河。",
    "behind": "一段关系的结束、毁灭性的关系。"
  },
  {
    "img": "jiaohuang",
    "name": "教皇",
    "front": "●遵守他人的期望而难忠于自己●已流为形式、规矩的伴侣。",
    "behind": "拒绝俗套、勇于接纳、为自己负责。"
  },
  {
    "img": "huangdi",
    "name": "皇帝",
    "front": "●理智、务实、不擅表现情感●自律严谨的伴侣。",
    "behind": "缺乏承诺、没有纪律的关系、不只拥有一个伴侣。"
  },
  {
    "img": "nvhuang",
    "name": "女皇",
    "front": "●在稳定的恋爱中●享受喜悦身心平衡的迷人伴侣。",
    "behind": "对于爱过于知性或理想化，无法为爱付出努力。"
  },
  {
    "img": "nvjishi",
    "name": "女祭祀",
    "front": "●采取守势耐心等待反审检视彼此的关系●可以互相学习成长的伴侣。",
    "behind": "隐藏在关系后面的种种问题，需要听从内心的声音而非用脑袋判断。"
  },
  {
    "img": "moshushi",
    "name": "魔术师",
    "front": "●扎根于现实的伙伴关系●对于人生目标有实践力的伴侣。",
    "behind": "不择手段或心术不正的动机，三心二意，自欺欺人。"
  },
  {
    "img": "yuren",
    "name": "愚人",
    "front": "●将展开一段新的开始，冒个险，信任自己的直觉去行动吧！●天真不受拘束的伴侣。",
    "behind": "从责任中脱身，但尚未解决过去的事情，时机不当。"
  },
  {
    "img": "quanzhang1",
    "name": "权丈1",
    "front": "当出现这张正立的权杖王牌时，在爱情的表现上，指你们将会开始一个新的阶段，它暗示你们将会有更亲密的肉体上关系。",
    "behind": "当出现这张反面的权杖王牌时，在爱情的表现上，因为双方都会有些心有余而力不足的感觉，而使的感情陷入误解之中。"
  },
  {
    "img": "quanzhang2",
    "name": "权丈2",
    "front": "当出现这张正立的权杖二的牌时，在爱情上表示你现在要决定对对方做出更深的承诺，而这张牌的出现是暗示你该更深层的思考。",
    "behind": "当出现这张倒立的权杖二的牌时，在爱情的表现上是指你总是犹豫不决，对自己有些自信不足而使得你对对方的态度也变成反覆不定喔。"
  },
  {
    "img": "quanzhang3",
    "name": "权丈3",
    "front": "当出现这张正立的权杖三时，在爱情里表示你们之间的感情会持续成长，发现对方的身上许多优点，更进而去学习之。",
    "behind": "当这张权杖三的牌呈现倒立的时候，在爱情的表现上是指你很优柔寡断，对感情的付出会有所保留，而使的对方感受不到你的真心唷！"
  },
  {
    "img": "quanzhang4",
    "name": "权丈4",
    "front": "当出现这张权杖四的正面时，在爱情的表示上你们感情已经趋于稳定，而你们可以开始考虑共筑一个新的温暖小窝唷！",
    "behind": "当出现这张倒立的权杖四的牌时，表示现在你们之间的伴侣关系没有任何进展，就这样僵持不下，这样对你们任何一方都不好唷！"
  },
  {
    "img": "quanzhang5",
    "name": "权丈5",
    "front": "正立的权杖五的牌，表示你们的爱情里，总是充满了大大小小的冲突，你跟他之间会常因为小事拌嘴，你们总是忘了当初吸引对方的原因。",
    "behind": "当出现这张反面的权杖五的牌时，表示你们在爱情里的冲突可能化解，因为你理解到只有妥协跟沟通才是对双方都好的。"
  },
  {
    "img": "quanzhang6",
    "name": "权丈6",
    "front": "当出现这张正立的权杖六的牌时，这是证实你们两之间是有相近的目标，而且你们有可能共同一起达成这些目标，真是要恭喜你们了唷！",
    "behind": "当出现这张反面的权杖六的牌时，表示你因为恐惧爱情的失去，而造成现在虚假的甜蜜情事，结果只造成你们之间的距离越来越远。"
  },
  {
    "img": "quanzhang7",
    "name": "权丈7",
    "front": "表示你们的两性关系中，将出现更大的挑战，例如对对方有了更深的承诺或是有了一个小孩之类的，会对你们之间有挑战的因子出现。",
    "behind": "倒立的权杖七出现时，在两性关系的处理上，你因为无法处理你们之间的问题而使的你们陷入冷战，但你却选择忽略它，这是你要注意的唷！"
  },
  {
    "img": "quanzhang8",
    "name": "权丈8",
    "front": "置时，表示在你们之间的两性关系是很健全的，因为你们给彼此足够的空间拥有自己的生活跟朋友。",
    "behind": "权杖八的牌为倒立时，表示在你们之间的两性关系上没有达到你所预期的发展，这是因为你们总是会争吵或让忌妒破坏彼此之间好不容易建立好的信任。"
  },
  {
    "img": "quanzhang9",
    "name": "权丈9",
    "front": "当出现这张正立的权杖九的牌时，在爱情的表示上是指你可能因为曾经被伤害，因为还不能调适自己的心情，以至于对现在的伴侣还不能给予真诚的承诺。",
    "behind": "权杖九呈现反位置的时候，在爱情的表现上你总是很害怕的样子，你似乎在恐惧什么的感觉，但你却又不知怎么去解决你害怕的原因，让你困扰不已。"
  },
  {
    "img": "quanzhang10",
    "name": "权丈10",
    "front": "出现这张权杖十为正立的时候，在爱情的表示是你想对对方负起更深的责任，但这不是一种务实的想法，因为你尚未考虑周全就想揽多的责任在身上 。",
    "behind": "当出现这张倒立的权杖十时，在爱情里的你总是会因为太忙于事业有关的事，而去忽略你的感情上的问题，要注意唷！"
  },
  {
    "img": "baojian1",
    "name": "宝剑1",
    "front": "爱情路上显得一帆风顺，外向活泼的你为你们的感情带来不同凡响的生命力。此外也反映出你们的心灵沟通相当顺利。",
    "behind": "急于有新的发展却不知从何着手，这令你感到不安与焦虑。最好先将脑袋冷静下来，在着手规划之前，让一切可能的灵感凝聚。"
  },
  {
    "img": "baojian2",
    "name": "宝剑2",
    "front": "这透露出你曾经在感情上受过伤，现在的你只想找个时光来疗养，也可能暗示你正在两个异性之间作决定，需要厘清思绪。",
    "behind": "情绪相当混乱，与伴侣相处上并不契合。你需透过你的思考来控制你的情绪，顺从你的感觉，别让龟毛左右你的生活。"
  },
  {
    "img": "baojian3",
    "name": "宝剑3",
    "front": "心中纵有千言万语也不知要如何表达。沟通不良是造成误会的主因，再这样下去心都要碎了！不妨用书信去发挥你内心的情感吧。",
    "behind": "你可能正面临一段痛苦失落的时间，思念淹的你呼吸都要求饶。为了抵抗内心的郁闷，你将生命大部分的精力都用上了，请赶快将它释放吧！"
  },
  {
    "img": "baojian4",
    "name": "宝剑4",
    "front": "感情走到现阶段火花逐渐黯淡，意味着希望从两性关系中抽离，进入一段潜沈的时光。思考一下若是热情不再，该如何面对将来的发展。",
    "behind": "情感面临改变，这时你可能清楚你不要的是什么，却不知所求为何。最好赶快投入找出自我心灵的通路，积极返回生活中。"
  },
  {
    "img": "baojian5",
    "name": "宝剑5",
    "front": "你们的感情世界中可能暗示出现了第三者，背叛与羞辱交加发生了争执，该是冷静处理这段感情是否有继续下去的必要！",
    "behind": "倒立的宝剑五仍然充满了不协调与分离的意味。但倒立的牌表示事情仍有沟通进展的可能性，对于事件的冲突根本，你需要多负起一些责任。"
  },
  {
    "img": "baojian6",
    "name": "宝剑6",
    "front": "感情中带有相当多的包袱，过去虽然你尽力想不去正视它，却如影随形的跟着你。现在你不得不面对它了，将你的情绪释放出来，风浪将逐渐趋于平缓。",
    "behind": "别让昨天在你伤口狂妄的洒盐，想要脱离现在的不快乐。虽然转变可能需要面临一场暴风雨，但风平浪静之后露出的曙光将给你欣喜。"
  },
  {
    "img": "baojian7",
    "name": "宝剑7",
    "front": "这张牌也暗示了感情上的不坦承，双方可能有人有出轨的行为！也可能意味你们的感情需要一个新方向，较容易找到你所追寻的回报。",
    "behind": "不要死守着旧有的思考模式或对事情的感觉，或许你现下正抱持一个不合理的信念，欺骗自己一切都好。若是你不满目前的状况，改变自我的态度吧！"
  },
  {
    "img": "baojian8",
    "name": "宝剑8",
    "front": "时间可以改变一切，这时候的你感情若遇到挫折，最好的方法是静下心等待事情的改变，切记心急莽撞的行事只会使情况陷入更糟。",
    "behind": "浮云无法永远遮蔽住阳光的，现在你终于能打开心灵的眼去看事物。最坏的情况都已过去，你必须从画地自限中释放，恋情将得以止跌回升。"
  },
  {
    "img": "baojian9",
    "name": "宝剑9",
    "front": "想必看倌也知道金庸笔下的〝独孤九剑″吧！过去的误会若是排拒他人于千里之，孤单与悲伤将纠缠你。只要肯打开金口事情将获解决。",
    "behind": "现在你有太多的能量聚集在头部了，这让你容易胡思乱想。你可以带着另一半多接触大自然，从新分配能量，把你的不安与欲望沉淀。"
  },
  {
    "img": "baojian10",
    "name": "宝剑10",
    "front": "感情路走到一个低潮的阶段，需要新的开始。有时候十象征分手的前兆，结束昨日的恋情，投身于另一段新的关系。",
    "behind": "既然已走到谷底又何必在留连，但是没有任何事是会自然改善的，现在的你要迈出自己的脚步，去寻找一个崭新的开始。"
  },
  {
    "img": "shenbei1",
    "name": "圣杯1",
    "front": "你应该会有一段新的关系，或是从原本的那段关系中迈入新的阶段，你的情感正要进入很满足的一段时期吧！",
    "behind": "你应该试着在这段爱情中让自己有更加安定的感觉，从内心去寻找爱的泉源，这样你才能从现状跳脱出来。"
  },
  {
    "img": "shenbei2",
    "name": "圣杯2",
    "front": "你们两人之间的受与授是平等的，这份关系的特色是承诺、亲密、兴趣和分享，是很让人羡慕的相处模式呢！",
    "behind": "在你们之间可能存在着一种不平衡的两性关系，你很恐惧当有一天你没办法控制自己的情感，这实在令你耗尽心神。"
  },
  {
    "img": "shenbei3",
    "name": "圣杯3",
    "front": "现在要不是你没对象，不然就是对象很多而不知如何抉择，或者是你与他中间会出现第三者（指的是小孩）。",
    "behind": "可能你的恋情是短暂不长久的，假如你并没期望能很久的话，它对你来说会是一段很好的恋情，你能从中获得很多。"
  },
  {
    "img": "shenbei4",
    "name": "圣杯4",
    "front": "由于你和你的心灵缺少内在的连结，所以可能会有对感情不满足的状况，甚至你有会被另一型的人所吸引而发展新的恋情。",
    "behind": "你应该要从过去的经验当中获得一些经验以面对现在的状况，假如有新机会你应立即的去把握，不该再自怜自艾了！"
  },
  {
    "img": "shenbei5",
    "name": "圣杯5",
    "front": "可能你与之前的已经分开了，但是你始终念念不忘，你没能力将自己从过去抽出而关心现在所用有的关系。",
    "behind": "可能你从过去的那段感情走出来了，会试着接受新恋情，或是你月一再就有的关系之中作出更深刻的承诺了。"
  },
  {
    "img": "shenbei6",
    "name": "圣杯6",
    "front": "可能你选择伴侣的模式都是之前的一些模式的延续，或是你跟你现在的伴侣之间是很很有保障、安全且熟悉的。",
    "behind": "你们两个之间可能会有更深一层的关系，只会使你不再过的像以前这么的安全，毕竟有些转变付出的要更多啊！"
  },
  {
    "img": "shenbei7",
    "name": "圣杯7",
    "front": "你应该给自己一点时间去思考你在这段关系中你要的是什么，这张牌暗示你可能意识到你在这段关系中缺乏些什么了！",
    "behind": "你的梦想应该将会化成实际，这是个美梦成真的决定，但你要注意往后还是要多注意心灵上的沟通喔！不要太物质化。"
  },
  {
    "img": "shenbei8",
    "name": "圣杯8",
    "front": "这段关系现在其实已经很不错了，但是还要更好啊！你可以冷静下来看看你们之间还有什么需要在更进一步的。",
    "behind": "你对于处理你们之间感情并不是很有力量，因为你要不是缺乏承诺的勇气，就是害怕离开现在不能满足你的情况。"
  },
  {
    "img": "shenbei9",
    "name": "圣杯9",
    "front": "你已经学会爱自己了，当然要从这关系中在获得什么也更容易了，你们彼此都很珍惜对方的付出及获得。",
    "behind": "你对你的爱情你不敢付出，你怕你一旦付出没办法得到相同回报的爱，因此你让人觉得你游戏情场吧！"
  },
  {
    "img": "shenbei10",
    "name": "圣杯10",
    "front": "你们之间已经到了相当稳固、成熟的关系了，你们能把自己的时间都分配的恰到好处，说不定会步入礼堂呢！",
    "behind": "可能你觉得在这段关系中缺乏爱及和谐了，你也宁可不改变它而选择离开，这样的心态不够健康的，尝试沟通吧！"
  },
  {
    "img": "xingbi1",
    "name": "星币1",
    "front": "金币王牌代表一个开始，也许暗示在不久的将来，有可能遇到心仪的对象，而你也有能力去追求这段关系，成功的机会很大呦！",
    "behind": "当金币王牌出现倒立时，象征着丧失机会或没有能力展开新事物，此时有可能因你会考虑物质花费太大，而和爱情擦肩而过。"
  },
  {
    "img": "xingbi2",
    "name": "星币2",
    "front": "金币2的出现，也许代表你正在衡量和对方发生爱情的机会，或者遇到一位能满足你物质需求的对象，给你带来安全感，而和他发生爱情。",
    "behind": "金币2出现了倒立，代表你在爱情中面临了两难的抉择，有可能出现反对者或者对方能满足你物质需求，但无法和你情感交流。"
  },
  {
    "img": "xingbi3",
    "name": "星币3",
    "front": "出现可以表示你在建立及维持一段两性关系的努力，学习两性关系的互动，因此，你和另一半的关系会得以改善而持久。。",
    "behind": "金币3反位的出现可能表示你忽略，或浪费了许多有助于学习改善两性关系的机会，以至于在爱中一再犯下相同类型的错"
  },
  {
    "img": "xingbi4",
    "name": "星币4",
    "front": "金币4的出现可能暗示你们其中一人可能是因为物质的诱惑而脱离不了这段关系，或是忌妒和占有欲的心态作祟，视对方为其所有物，控制对方的一切。",
    "behind": "金币4 的倒立，有可能暗示你给自己充分的自由，对伴侣也不加设限，若控制得宜则关系得以持久，反之则会造成感情的淡化。"
  },
  {
    "img": "xingbi5",
    "name": "星币5",
    "front": "时积极多了，或许你们的爱情有某部份已变质，但你们都愿意自我调整作改变，一起度过爱的难关。",
    "behind": "金币5的倒立似乎较"
  },
  {
    "img": "xingbi6",
    "name": "星币6",
    "front": "的出现在两性关系中，正暗示着你通常以一种很微妙的方式在支配着你的伴侣.造成另一半无法尽情享受与你的亲密关系，偶尔收控制别人的，你们的爱会更甜蜜呦！",
    "behind": "金币六反位出现在两性关系中意味着伴侣拥有高于你的控制权，使你在肉体、精神情感上都不敢和他亲近，得不到满足。"
  },
  {
    "img": "xingbi7",
    "name": "星币7",
    "front": "金币七描述的事思考某段关系的一个时期，也许你们正计划着你们的未来，并将财务安全作为你们建立长远关系的基础。",
    "behind": "金币七的反位出现在两性关系中也许表示你们对于和彼此的关系缺乏思考和规划，此时感情可能就此打住，较难发展，从现在起，花点时间好好想想吧!"
  },
  {
    "img": "xingbi8",
    "name": "星币8",
    "front": "金币八的出现也许代表你和另一半有着深刻的承诺，有可能步入礼堂。也有可能是只为了维系你们的关系，你可得多努力啰！",
    "behind": "金币八反位的出现，有可能是表示缺乏承诺，或者你已经对另外的人有了更重要的承诺，例如:另一段两性关系，有可能对现有的恋情造成伤害，须小心注意才是。"
  },
  {
    "img": "xingbi9",
    "name": "星币9",
    "front": "象征着因为你的努力，目前正处在一种舒适而成功的两性关系，虽然偶尔会觉得不够自由，但你也愿意牺牲，使爱情圆满。",
    "behind": "金币九的倒立暗示着缺乏自律不愿付出而想不劳而获，有可能会影响感情的进展，一段良好的关系是需要双方耐心培养的，加油吧！"
  },
  {
    "img": "xingbi10",
    "name": "星币10",
    "front": "金币十描述的事一种和事业有关的两性关系，也许你正在和伴侣做生意，或是因为生意往来而结缘，是对精明干练的组合。",
    "behind": "金币十的反位出现在两性关系中显示你太过注重有形的事物了，而忽略了伴侣的感觉，可能会造成分离，引起感情上的孤独。"
  },
  {
    "img": "baojian_shiwei",
    "name": "宝剑侍卫",
    "front": "这张牌意谓着你正梦想一段你想要的两性关系，但却没因此而付诸行动。可能是你还保有神话般的态度或是你从现实或痛苦中退缩。",
    "behind": "你总是幻想希望有个梦中情人，但你总迟迟没有行动，所以空有梦想的你赶快对你的意中人表白，不然可又白白失去机会喔！"
  },
  {
    "img": "baojian_qishi",
    "name": "宝剑骑士",
    "front": "这张牌意谓着你与你的情人会有心灵上的交会，你们的交谈常容易引起兴趣，你与他会是很配的一对喔！",
    "behind": "某个人可能走进了你的生活，但又可能在短时间之内离开了。所以你大可选择跟他一起享受美好的时光，但必须做好心理准备。"
  },
  {
    "img": "baojian_huanghou",
    "name": "宝剑皇后",
    "front": "通常这张牌指的是女人，而且思考敏捷，她喜欢与心思灵巧的人为伴，所以一旦成为情人，你们会被彼此的智慧所吸引。",
    "behind": "依这张牌来看你的爱情观是较悲观的，你渴望接触人生、渴望成长，但却害怕冒险，所以你的情感时常是处于饥馑的状态。"
  },
  {
    "img": "baojian_guowang",
    "name": "宝剑国王",
    "front": "当出现这张牌时，在爱情的世界里，男方思路清晰而务实的男人，他所需要的伴侣是和他在人生的目标上有相同目标的人，你们之间是心智交融的两性关系。",
    "behind": "依这张牌来看，在两性关系上你是个无法预料的人，有啥想法可能就马上去做，让你的情人感到没有安全感，有时你得让对方感受到你的关怀哟！"
  },
  {
    "img": "shenbei_shiwei",
    "name": "圣杯侍卫",
    "front": "暗示着一段新关系的出现，或是你们的关系进入了新的阶段。在和他分开之后，很有可能会与前任伴侣复合喔！",
    "behind": "你对目前的关系感到失望，不能从中得到满足，这会使你们的感情更危险，不妨仔细想一想其中的原因，相信一定会有所领悟的！"
  },
  {
    "img": "shenbei_qishi",
    "name": "圣杯骑士",
    "front": "在爱情中，你对亲密感有一份渴望，你要的是一位能跟你分享梦想、共同为理想打拼的伴侣。你也会因为他的存在而更成熟！",
    "behind": "现在的你容易将真正的爱与迷恋、肉欲搞混在一起，这表示你的心智还尚未成熟，所以会觉得做出承诺是一件困难的事，这是你必须去克服的！"
  },
  {
    "img": "shenbei_huanghou",
    "name": "圣杯皇后",
    "front": "在爱情中，你思考的重心从未离开过你的伴侣，你会尽最大的努力与关心去维持你们的感情，即使是你周围有些问题尚待解决。",
    "behind": "在两性关系中，你以冷酷来掩饰心中的脆弱，以愤怒无情来对待伴侣，就连我也为他叫屈呢！相信你也明白，这样对他是很不公平的！"
  },
  {
    "img": "shenbei_guowang",
    "name": "圣杯国王",
    "front": "你所拥有的是一段成熟的关系，很重视伴侣的感受，能够用自律而又有创意的方式去经营这段关系，而你也会得到很好的结果作为回报喔！",
    "behind": "过去所受到的感情伤害仍然影响着你，使你对人不能信任，这样可是会影响到你们的感情呢！试着对过去释怀吧！"
  },
  {
    "img": "xingbi_shiwei",
    "name": "星币侍卫",
    "front": "这张牌暗示着你在爱情世界中将会有另一新阶段的迈进，可能是新恋情的发生或是与原有的伴侣关系改变，不过这改变通常是好的。",
    "behind": "嗯嗯！你似乎会沉迷在肉体的欢愉里及被性欲给迷惑哟，对你的情人你可能也无法给他安全的保障，你必须挽救现况喔！"
  },
  {
    "img": "xingbi_qishi",
    "name": "星币骑士",
    "front": "这张牌意谓着你正梦想一段你想要的两性关系，但却没因此而付诸行动。可能是你还保有神话般的态度或是你从现实或痛苦中退缩。",
    "behind": "你总是幻想希望有个梦中情人，但你总迟迟没有行动，所以空有梦想的你赶快对你的意中人表白，不然可又白白失去机会喔！"
  },
  {
    "img": "xingbi_huanghou",
    "name": "星币皇后",
    "front": "通常这张牌指的是女人，而且思考敏捷，她喜欢与心思灵巧的人为伴，所以一旦成为情人，你们会被彼此的智慧所吸引。",
    "behind": "依这张牌来看你的爱情观是较悲观的，你渴望接触人生、渴望成长，但却害怕冒险，所以你的情感时常是处于饥馑的状态。"
  },
  {
    "img": "xingbi_guowang",
    "name": "星币国王",
    "front": "当出现这张牌时，在爱情的世界里，男方思路清晰而务实的男人，他所需要的伴侣是和他在人生的目标上有相同目标的人，你们之间是心智交融的两性关系。",
    "behind": "依这张牌来看，在两性关系上你是个无法预料的人，有啥想法可能就马上去做，让你的情人感到没有安全感，有时你得让对方感受到你的关怀哟！"
  },
  {
    "img": "quanzhang_shiwei",
    "name": "权仗侍卫",
    "front": "可以说是一段新关系的开始，或是你们的关系进入了一个新的阶段，在此同时，也要多多锻炼自己的身体，才会有幸福的生活啊！",
    "behind": "以你的个性，更需要用心去维持你们的感情，这样，爱情才会持久喔！尽量避免急躁的个性而使你的恋情提早结束喔！"
  },
  {
    "img": "quanzhang_qishi",
    "name": "权仗骑士",
    "front": "你是一个积极、热情的人，遇到问题会勇往直前，相信你们之间不会有什么问题存在。也有可能会在旅行中发展一段恋情呢！",
    "behind": "你们的关系出现了危机，因为你不肯作出任何的承诺，这可不是一个负责的态度喔！学着勇敢一点，勇于承诺会使双方更珍惜彼此！"
  },
  {
    "img": "quanzhang_huanghou",
    "name": "权仗皇后",
    "front": "在两性关系中，你是一个诚实、热心，喜欢追求伴侣的人，在爱情中，你会得到更多的力量，去帮助你在其他方面得到成功，可说是一段优质的爱情呢！",
    "behind": "在你们之间，你可能看不到自己拥有的力量，对自己失去信心，容易迷失在恐惧及情感的漩涡里，不妨多肯定自己吧！"
  },
  {
    "img": "quanzhang_guowang",
    "name": "权仗国王",
    "front": "你喜欢带点挑战性的爱情，你们之间应该是活泼快乐的，是非常令人羡慕的一对呢！和情人的相处上，不妨多点浪漫的小举动！",
    "behind": "在你们之间，你害怕做出承诺，不想因此而负责任，这可是很危险的，你必须为你们的关系下定决心，才会有平稳的爱情喔！"
  }
]

module.exports = {
  imgHost: imgHost,
  content: content
}
