const flashcards = [
  { id: 1, ja: "これは良い本です。", en: "This is a good book." },
  { id: 2, ja: "すごいね！", en: "That's awesome." },
  { id: 3, ja: "この少年たちは中学生です。", en: "These boys are junior high school students." },
  { id: 4, ja: "あれ、あなたの靴？", en: "Are those your shoes?" },
  { id: 5, ja: "あの鳥たちは何ですか？ - 雀です。", en: "What are those birds? - They are sparrows." },
  { id: 6, ja: "彼は弁護士です。", en: "He is a lawyer." },
  { id: 7, ja: "彼は弁護士ですか？ - はい、そうです。", en: "Is he a lawyer? - Yes, he is." },
  { id: 8, ja: "この子たちは彼女の生徒です。", en: "These children are her students." },
  { id: 9, ja: "この子たちは彼女の生徒ですか？", en: "Are these children her students?" },
  { id: 10, ja: "この女の子は誰ですか？－僕の妹です。", en: "Who is this girl? - She is my sister." },
  { id: 11, ja: "トムはサッカーが好きです。彼の弟もサッカーが好きです。", en: "Tom likes soccer. His brother likes it, too." },
  { id: 12, ja: "彼女はお金がいくら必要なのですか？", en: "How much money does she need?" },
  { id: 13, ja: "彼らは私の事を良く知っています。", en: "They know me well." },
  { id: 14, ja: "あなたのお父さんは私の事を知っていますか？", en: "Does your father know me?" },
  { id: 15, ja: "この自転車は僕のものです。", en: "This bicycle is mine." },
  { id: 16, ja: "これはあなたのものですか？", en: "Is this yours?" },
  { id: 17, ja: "この本を読みなさい。", en: "Read this book." },
  { id: 18, ja: "放課後サッカーをしようよ。", en: "Let's play soccer after school." },
  { id: 19, ja: "これは誰のカバンですか？", en: "Whose bag is this?" },
  { id: 20, ja: "あなたはどこで勉強しますか？", en: "Where do you study?" },
  { id: 21, ja: "あなたのお母さんの誕生日はいつですか？", en: "When is your mother's birthday?" },
  { id: 22, ja: "どの本があなたのですか？", en: "Which book is yours?" },
  { id: 23, ja: "今日、東京は暑いですか？", en: "Is it hot in Tokyo today?" },
  { id: 24, ja: "あなたは何時に寝ますか？", en: "What time do you go to bed?" },
  { id: 25, ja: "あなたの息子さんはどうやって学校に行きますか？", en: "How does your son go to school?" },
  { id: 26, ja: "あなたは何歳ですか？－ １５歳です。", en: "How old are you? - I am fifteen years old." },
  { id: 27, ja: "あなたの背はどのくらいですか？－ １６０センチ（１メーター６０センチ）です。", en: "How tall are you? - I am one hundred and sixty centimeters (one meter sixty centimeters)." },
  { id: 28, ja: "誰が英語を上手に話しますか？", en: "Who speaks English well?" },
  { id: 29, ja: "彼女は車の運転ができません。", en: "She can't drive." },
  { id: 30, ja: "僕の弟は部屋で宿題をしています。", en: "My brother is doing his homework in his room." },
  { id: 31, ja: "昨日私は疲れていました。", en: "I was tired yesterday." },
  { id: 32, ja: "あなたは英語を勉強していたのですか?", en: "Were you studying English?" },
  { id: 33, ja: "春が来るとたくさんの人が花見に行く。", en: "When spring comes, many people go to see the cherry blossoms." },
  { id: 34, ja: "彼女はとても嬉しそうだ。", en: "She looks very happy." },
  { id: 35, ja: "その知らせを聞いた時、彼はとても驚いた。", en: "When he heard the news, he was very surprised." },
  { id: 36, ja: "彼女は一枚の紙を私たちに見せた。", en: "She showed a paper to us." },
  { id: 37, ja: "エミリーがあなたに英語を教えるのですか?", en: "Does Emily teach English to you?" },
  { id: 38, ja: "彼女は妹にかわいい人形を買ってあげた。", en: "She bought a pretty doll for her sister." },
  { id: 39, ja: "兄が僕に辞書を一冊くれた。", en: "My brother gave me a dictionary." },
  { id: 40, ja: "彼女たちは彼女にお金をいくらかあげた。", en: "They gave her some money." },
  { id: 41, ja: "夕食がもうじきできるわよ。", en: "Dinner will be ready soon." },
  { id: 42, ja: "僕はいつかニューヨークに行くぞ。", en: "I will go to New York some day." },
  { id: 43, ja: "今夜宿題を終わらせるぞ。", en: "I will finish my homework tonight." },
  { id: 44, ja: "手伝ってくれるかい?－いいですよ。", en: "Will you please help me? - All right." },
  { id: 45, ja: "あなたにタオルを持って来ましょうか?－はい、お願いします。", en: "Shall I bring you a towel? - Yes, please." },
  { id: 46, ja: "彼の飛行機は何時にロンドンに着くのですか?", en: "What time is his flight going to arrive in London?" },
  { id: 47, ja: "あなたは大学で何をするつもりですか。", en: "What are you going to do in college?" },
  { id: 48, ja: "僕は日中家にいなければなりませんか?", en: "Must I stay home in the daytime?" },
  { id: 49, ja: "テレビを見てもいいですか? －いいえ、いけません。", en: "May I watch TV? - No, you may not." },
  { id: 50, ja: "君たちはプールで泳いでもいいですよ。", en: "You may swim in the pool." },
  { id: 51, ja: "僕たちはこれらの参考書を読まなくてはいけませんか?", en: "Do we have to read these reference books?" },
  { id: 52, ja: "彼女は英語を上手に話せるようになるでしょう。", en: "She will be able to speak English well." },
  { id: 53, ja: "誰がそのクイズを解くことができましたか?", en: "Who was able to solve the quiz?" },
  { id: 54, ja: "僕の姉は去年ロシア語を勉強し始めた。", en: "My sister began to study Russian last year." },
  { id: 55, ja: "あなたは何を学びたいですか?", en: "What do you want to learn?" },
  { id: 56, ja: "彼女といるのはとても楽しいです。", en: "To be with her is a lot of fun." },
  { id: 57, ja: "君はジョンに会うためにここに来たのですか?", en: "Did you come here to see John?" },
  { id: 58, ja: "僕は走るために明日の朝早く起きるつもりです。", en: "I am going to get up early tomorrow morning to run." },
  { id: 59, ja: "彼女に会えてうれしいです。", en: "I am happy to meet her." },
  { id: 60, ja: "あなたにまた会えてうれしかった。", en: "I was happy to see you again." },
  { id: 61, ja: "私には今日しなければならない(するべき)仕事があります", en: "I have work to do today." },
  { id: 62, ja: "彼は彼女に言いたいこと(言うための何か)があった。", en: "He had something to say to her." },
  { id: 63, ja: "あなたは酒を飲むのをやめますか？", en: "Will you stop (give up) drinking?" },
  { id: 64, ja: "なぜ英語を学ぶことが必要なのですか?", en: "Why is learning English necessary?" },
  { id: 65, ja: "この車は彼の車ほど速く走らない。", en: "This car doesn't run as fast as his car (his)." },
  { id: 66, ja: "トムはマイクより背が高い。", en: "Tom is taller than Mike." },
  { id: 67, ja: "エベレスト山は世界で一番高い山です。", en: "Mt. Everest is the highest mountain in the world." },
  { id: 68, ja: "彼より彼の兄の方が有名だった。", en: "His brother was more famous than him." },
  { id: 69, ja: "健康がもっとも大切です。", en: "Health is the most important thing." },
  { id: 70, ja: "妹は私より速く泳げます。", en: "My sister can swim faster than me." },
  { id: 71, ja: "ジェームスは友人たちより早く駅に着いた。", en: "James got to (arrived at) the station earlier than his friends." },
  { id: 72, ja: "家族の中では私が一番早起きです。", en: "I get up the earliest in my family." },
  { id: 73, ja: "昨日兄は家族で一番遅く帰宅しました。", en: "My brother got (back) home the latest in my family yesterday." },
  { id: 74, ja: "あなたとあなたのお兄さんでは、どちらが背が高いですか?", en: "Who is taller, you or your brother?" },
  { id: 75, ja: "りんごとみかんでは、あなたはどちらの方が好きですか? - みかんの方が好きです。", en: "Which do you like better, apples or oranges? - I like oranges better." },
  { id: 76, ja: "あなたのクラスでは誰が一番背が高いですか?－ロバートです。", en: "Who is the tallest in your class? - Robert is." },
  { id: 77, ja: "あなたの家族で、今朝誰が一番早く起きましたか?－私です。", en: "Who got up the earliest in your family this morning? - I did." },
  { id: 78, ja: "彼はこの町に3年住んでいます。", en: "He has lived in this town for three years." },
  { id: 79, ja: "先週からずっと寒い。", en: "It has been cold since last week." },
  { id: 80, ja: "彼は財布をなくしてしまいました。", en: "He has lost his wallet (purse)." },
  { id: 81, ja: "僕は彼に二度会ったことがあります。", en: "I have met him twice." },
  { id: 82, ja: "彼女は2時間以上ピアノを弾いています。", en: "She has been playing the piano for more than two hours." },
  { id: 83, ja: "エミリーはここで10年働いています。", en: "Emily has been working here for ten years." },
  { id: 84, ja: "私は、彼がいつか帰って来ると信じています。", en: "I believe that he will come back some day." },
  { id: 85, ja: "日本語は多くの国では話されません。", en: "Japanese is not spoken in many countries." },
  { id: 86, ja: "紙は木から作られます。", en: "Paper is made from wood." },
  { id: 87, ja: "もし明日晴れたら、僕たちはピクニックに行きます。", en: "If it is fine tomorrow, we will go on a picnic." },
  { id: 88, ja: "病気だったので、彼女は欠席した。", en: "As she was sick, she was absent." },
  { id: 89, ja: "あなたの弟は寝る前にいつも歯を磨きますか？", en: "Does your brother always brush his teeth before he goes to bed?" },
  { id: 90, ja: "僕は彼が何歳なのか知らない。", en: "I don't know how old he is." },
  { id: 91, ja: "僕は何と言ったらいいのかわからなかった。", en: "I didn't know what to say." },
  { id: 92, ja: "英語を学ぶことは大切です。", en: "It is important to learn (study) English." },
  { id: 93, ja: "彼にとって朝早く起きることは難しいのです。", en: "It is difficult for him to get up early in the morning." },
  { id: 94, ja: "私はあなた方に幸せになって欲しいのです。", en: "I want you to be happy." },
  { id: 95, ja: "あなたはその走っている少年たちが見えますか？", en: "Can you see the running boys?" },
  { id: 96, ja: "彼は中古車を買うつもりです。", en: "He is going to buy a used car." },
  { id: 97, ja: "公園で走っている人たちが見えますか？", en: "Can you see the people who are running in the park?" },
  { id: 98, ja: "船のように見える雲が見えるかい？", en: "Can you see the cloud which looks like a ship?" },
  { id: 99, ja: "美しい笑顔の女の子に会った。", en: "I met a girl whose smile was beautiful." },
  { id: 100, ja: "彼は古いコインのコレクションを見せてくれたが、そのいくつかはとても珍しかった。", en: "He showed me his collection of old coins, some of which were very rare." },
  { id: 101, ja: "あれが彼が尊敬している作家です。", en: "That is the writer whom he respects." },
  { id: 102, ja: "私は彼の言ったことが理解できなかった。", en: "I couldn't understand what he said." },
  { id: 103, ja: "あれは彼が描いた絵です。", en: "That is a picture which he drew/painted." },
  { id: 104, ja: "私は忙しすぎてあなたを手伝うことはできません。", en: "I am too busy to help you." },
  { id: 105, ja: "彼は働かないで暮らしていけるほど豊かだ。", en: "He is rich enough to live without working." },
  { id: 106, ja: "彼はとても親切なので、みんな彼のことが好きだ。", en: "He is so kind that everyone likes him." },
  { id: 107, ja: "あの車はすごく高いので僕には買えない。", en: "That car is so expensive that I can't buy it." },
  { id: 108, ja: "私は彼女が何か言うのを聞きました。", en: "I heard her say something." },
  { id: 109, ja: "その映画は僕を泣かせた。", en: "The movie made me cry." },
  { id: 110, ja: "あれは彼が生れた村です。", en: "That is the village where he was born." },
  { id: 111, ja: "僕は彼に初めて会った日を覚えている。", en: "I remember the day when I first met him." }
];

const flashcardContainer = document.querySelector("#flashcards");
let activeEnglishCard = null;

for (const flashcard of flashcards) {
  const button = document.createElement("button");
  const text = document.createElement("span");

  button.className = "flashcard";
  button.type = "button";
  button.dataset.id = String(flashcard.id);
  button.setAttribute("aria-pressed", "false");
  text.className = "flashcard__text";
  text.lang = "ja";
  text.textContent = flashcard.ja;
  button.append(text);

  button.addEventListener("click", () => {
    const showingEnglish = button.getAttribute("aria-pressed") === "true";

    if (showingEnglish) {
      button.setAttribute("aria-pressed", "false");
      text.lang = "ja";
      text.textContent = flashcard.ja;
      activeEnglishCard = null;
      return;
    }

    if (activeEnglishCard) {
      activeEnglishCard.button.setAttribute("aria-pressed", "false");
      activeEnglishCard.text.lang = "ja";
      activeEnglishCard.text.textContent = activeEnglishCard.ja;
    }

    button.setAttribute("aria-pressed", "true");
    text.lang = "en";
    text.textContent = flashcard.en;
    activeEnglishCard = { button, text, ja: flashcard.ja };
  });

  flashcardContainer.append(button);
}
