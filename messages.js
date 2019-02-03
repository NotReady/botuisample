// botインスタンス作成
var bot = new BotUI('chat-app');

function getActionsWithPrevious(actions, previousSeq){
  actionsWithPrevious = [];
  actions.forEach(function(action){
    actionsWithPrevious.push(action);
  });
  actionsWithPrevious.push({text: '戻る', value: previousSeq})
  return actionsWithPrevious
}

// 初期メッセージ
function msgBotNewEntry(){
  return bot.message.add({
  delay: 500,
  loading: true,
  content: 'こんにちは。'
});
}

// 質問を選択 深さ1
function msgBotChooseQestion(){
  return bot.message.add({
      delay: 500,
      loading: true,
      content: 'ご質問を選択してください。'
  });
}

// 質問を選択 深さ2
function msgSelectButtonContinue(){
  return bot.message.add({
  delay: 500,
  loading: true,
  content: '続けて選択してください。'
  });
}

// 質問の終了選択
function msgIsContinue(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '検索を続けますか？'
  }).then(function(res){
    return bot.action.button({
      autoHide: true,
      delay: 500,
      action:[
        {text: 'はい', value: SEQID_QCATEGORY},
        {text: 'いいえ', value: SEQID_FINISH},
      ]
    });
  });
}

function msgFinish(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: 'ご利用ありがとうございました。'
  });
}

function actFreeWord(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content:"検索ワードを入力してください。"
  }).then(function(){
    return bot.action.text({
      delay: 500,
      size: 20,
      action: {
        placeholder: '検索文言'
      }
    });
  });
}

function msgSearchWord(param){
  var foundMenu = searchWords(param.args.value);
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '「' + param.args.value + '」の検索結果は' + foundMenu.length + '件です。'
  }).then(function(){
    if(foundMenu.length === 0){
      return Promise.resolve({value: SEQID_QCATEGORY});
    }else{
      return bot.action.button({
        autoHide: true,
        delay: 500,
        action:foundMenu
      });
    }
  });
}

function msgAnsMyName(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '私の名前はnotreadyです。'
  }).then(function(){
      return bot.message.add({
        delay: 100,
        content: '東京都出身です。'
    });
  }).then(function(){
      return bot.message.add({
        delay: 100,
        content: 'どうぞよろしくお願い致します。'
    });
  });
}

// 職務経歴工程選択
function actChooseWorksProcess(param){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '以下の工程の開発経歴がありあす。'
  }).then(function(){
    return bot.action.button({
      autoHide: true,
      delay: 500,
      action: getActionsWithPrevious([
          {text: '製造工程', value: SEQID_CHOOSEDEVCATE},
          {text: '上流工程', value: SEQID_CHOOSEUPSTRCATE},
      ], param.previousSeq)
    });
  });
}

// 製造工程選択
function actChooseProgramWorks(param){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '制御分野の開発歴は約9年です。2件のプロジェクト経験があります。'
  }).then(function(){
    return bot.action.button({
      autoHide: true,
      delay: 500,
      action:getActionsWithPrevious([
        {text: '半導体FA開発', value: SEQID_SEMICONWORK},
        {text: 'アーケードゲーム開発', value: SEQID_ARCADEWORK},
      ],param.previousSeq)
    });
  });
}

// 半導体FA開発回答
function msgSemiconWorks(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '半導体関連企業で運用保守工程で開発に携わりました。'
  });
}

// アーケードゲーム開発回答
function msgArcadeGameWorks(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: 'アミューズメント企業で新規開発、運用保守工程に携わりました。'
  });
}

// 上流工程選択
function actChooseUpStreamWorks(param){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '上流工程の経験は約2年です。2件のプロジェクト経験があります。'
  }).then(function(){
    return bot.action.button({
      autoHide: true,
      delay: 500,
      action:getActionsWithPrevious([
        {text: '業務システム 受入テスト・環境構築・構成管理', value: '1121'},
        {text: '業務システム 物流システム運用保守', value: '1122'},
      ], param.previousSeq)
    });
  });
}

function msgBusinessSys1Works(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '物流システムの移行プロジェクトで受入試験の設計、実施' + '<br>' +
            'テスト環境構築(CentOS, apache, バージョン管理(MERCURIAL))' + '<br>' +
            'マスタ移行'
  });
}

function msgBusinessSys2Works(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '製造業務：システムのフロントエンドWEB移行(html5,css,javascript)' + '<br>' +
             '情シス業務：基本設計、受入試験、ベンダーコントロール'
  });
}

// 趣味選択
function actChooseHobbies(param){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '以下の趣味があります。'
  }).then(function(){
    return bot.action.button({
      autoHide: true,
      delay: 500,
      action: getActionsWithPrevious([
          {text: '音楽', value: SEQID_MUSICWORK},
          {text: 'オートバイ', value: SEQID_BIKEWORK},
      ], param.previousSeq)
    });
  });
}

// 趣味の音楽を回答
function msgMusicWork(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '15歳から今もギター演奏を続けています。地元の仲間とライブ活動をしています。'
  });
}

// 趣味の音楽を回答
function msgBikeWork(){
  return bot.message.add({
    delay: 500,
    loading: true,
    content: '32歳でバイクの中型免許を取得し、休日は愛車のSR400でツーリングに出かけるのが好きです。'
  });
}


// 大分類の選択肢
function actSelectMain(){
  return bot.action.button({
    autoHide: true,
    delay: 500,
    action: [
      {icon: 'pencil', text: '名前', value: SEQID_MYNAME},
      {icon: 'pencil', text: '経歴', value: SEQID_CHOOSEWORKCATE},
      {icon: 'pencil', text: '趣味', value: SEQID_CHOOSEHOBBYCATE},
      {icon: 'pencil', text: 'ワード検索', value: SEQID_INPUTWORD}
    ]
  });
}

// アクションのファクトリ
function getMessage(seq){
  switch (seq) {
    case SEQID_ENTRY: return msgBotNewEntry;                  // エントリ
    case SEQID_QCATEGORY: return msgBotChooseQestion;         // 質問選択
    case SEQID_CHOOSECATEGORY: return actSelectMain;          // トップ選択
    case SEQID_REFRAIN: return msgIsContinue;
    case SEQID_FINISH: return msgFinish;
    case SEQID_FREEWORD: return msgSearchWord;
    case SEQID_INPUTWORD: return actFreeWord;
    case SEQID_MYNAME: return msgAnsMyName;
    case SEQID_CHOOSEWORKCATE: return actChooseWorksProcess;  // 開発工程選択アクション
    case SEQID_CHOOSEDEVCATE: return actChooseProgramWorks;   // 製造工程選択アクション
    case SEQID_SEMICONWORK: return msgSemiconWorks;           // 半導体系紹介
    case SEQID_ARCADEWORK: return msgArcadeGameWorks;         // アーケードゲーム系紹介
    case SEQID_CHOOSEUPSTRCATE: return actChooseUpStreamWorks;// 上流工程選択アクション
    case SEQID_BUSINESSSYS1WORK: return msgBusinessSys1Works; // 業務システム1
    case SEQID_BUSINESSSYS2WORK: return msgBusinessSys2Works; // 業務システム2
    case SEQID_CHOOSEHOBBYCATE: return actChooseHobbies;  // 趣味選択アクション
    case SEQID_MUSICWORK: return msgMusicWork;                // 趣味の音楽
    case SEQID_BIKEWORK: return msgBikeWork;                  // 趣味のバイク
    default:
  }
}
