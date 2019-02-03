/*
* @brief
*
*/

// メッセージのエントリ
Promise.resolve({seqTo: SEQID_ENTRY}).then(
  // promiseが継続で再帰的にコールバックするシーケンスループ
  function dispacher(dat) {
    // 遷移先と引数
    let seq = dat.seqTo;
    let param = {args: dat.result, previousSeq: dat.seqFrom};

   	// 非同期オブジェクト生成 resolve, rejectハンドラは遅延評価
    return new Promise(function(resolve,reject){
      getMessage(seq)(param).then(function(res){ // アクション
        // アクション実行後のコールバック

        // 遷移先を取得する
        const nextseq = getSequence(seq, res);
        console.log("from:"+seq);
        console.log("to:"+nextseq);

        if(nextseq === 0){ // シーケンスの終了
          reject();
        }else{
          resolve({seqFrom: seq, seqTo: nextseq, result: res});
        }
      });
    }).then(dispacher, function(){console.log('finish');});
  }
);
