// シーケンスのファクトリ
function getSequence(src, res){
  // case : src => res : dest
  switch (src) {
    case SEQID_ENTRY: return SEQID_QCATEGORY;
    case SEQID_QCATEGORY: return SEQID_CHOOSECATEGORY;
    case SEQID_CHOOSECATEGORY: return res.value;
    case SEQID_REFRAIN: return res.value;
    case SEQID_FREEWORD: return res.value;
    case SEQID_INPUTWORD: return SEQID_FREEWORD; // resあり
    case SEQID_FINISH: return 0;
    case SEQID_MYNAME: return SEQID_REFRAIN;
    case SEQID_CHOOSEWORKCATE: return res.value;
    case SEQID_CHOOSEDEVCATE: return res.value;
    case SEQID_SEMICONWORK: return SEQID_REFRAIN;
    case SEQID_ARCADEWORK: return SEQID_REFRAIN;
    case SEQID_CHOOSEUPSTRCATE: return res.value;
    case SEQID_BUSINESSSYS1WORK: return SEQID_REFRAIN;
    case SEQID_BUSINESSSYS2WORK: return SEQID_REFRAIN;
    case SEQID_CHOOSEHOBBYCATE: return res.value;
    case SEQID_MUSICWORK: return SEQID_REFRAIN;
    case SEQID_BIKEWORK: return SEQID_REFRAIN;
    default:  return 0;
  }
}
