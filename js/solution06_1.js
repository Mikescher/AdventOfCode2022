/* Generated by the Nim Compiler v1.6.6 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI469762226 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI654311485 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI469762176 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554438 = {size: 0,kind: 2,base: null,node: null,finalizer: null};
var NTI469762100 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33555124 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555130 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555130 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555130.node = NNI33555130;
NTI33555130.base = NTI33555113;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;
var NNI33555124 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555124.node = NNI33555124;
NTI33555124.base = NTI33555113;
NTI469762100.base = NTI33554438;
NTI469762176.base = NTI33554456;
var NNI654311485 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "a", len: 0, typ: NTI33554456, name: "a", sons: null}, 
{kind: 1, offset: "b", len: 0, typ: NTI33554456, name: "b", sons: null}]};
NTI654311485.node = NNI654311485;
NTI469762226.base = NTI33554438;

function makeNimstrLit(c_33556801) {
      var result = [];
  for (var i = 0; i < c_33556801.length; ++i) {
    result[i] = c_33556801.charCodeAt(i);
  }
  return result;
  

  
}

function mnewString(len_33556893) {
        return new Array(len_33556893);
  

  
}

function toJSStr(s_33556807) {
                    var Temporary5;
            var Temporary7;

  var result_33556808 = null;

    var res_33556842 = newSeq_33556825((s_33556807).length);
    var i_33556843 = 0;
    var j_33556844 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556843 < (s_33556807).length)) break Label2;
          var c_33556845 = s_33556807[i_33556843];
          if ((c_33556845 < 128)) {
          res_33556842[j_33556844] = String.fromCharCode(c_33556845);
          i_33556843 += 1;
          }
          else {
            var helper_33556857 = newSeq_33556825(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556858 = c_33556845.toString(16);
                  if ((((code_33556858) == null ? 0 : (code_33556858).length) == 1)) {
                  helper_33556857.push("%0");;
                  }
                  else {
                  helper_33556857.push("%");;
                  }
                  
                  helper_33556857.push(code_33556858);;
                  i_33556843 += 1;
                    if (((s_33556807).length <= i_33556843)) Temporary5 = true; else {                      Temporary5 = (s_33556807[i_33556843] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556845 = s_33556807[i_33556843];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556842[j_33556844] = decodeURIComponent(helper_33556857.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556842[j_33556844] = helper_33556857.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556844 += 1;
        }
    } while (false);
    if (res_33556842.length < j_33556844) { for (var i = res_33556842.length ; i < j_33556844 ; ++i) res_33556842.push(null); }
               else { res_33556842.length = j_33556844; };
    result_33556808 = res_33556842.join("");

  return result_33556808;

}

function raiseException(e_33556667, ename_33556668) {
    e_33556667.name = ename_33556668;
    if ((excHandler == 0)) {
    unhandledException(e_33556667);
    }
    
    throw e_33556667;

  
}

function addInt(a_33556940, b_33556941) {
        var result = a_33556940 + b_33556941;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557189, a_33557190, b_33557191) {
      var Temporary1;

  var result_33557192 = 0;

  BeforeRet: do {
      if (!(a_33557190 <= i_33557189)) Temporary1 = false; else {        Temporary1 = (i_33557189 <= b_33557191);      }    if (Temporary1) {
    result_33557192 = i_33557189;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_33557192;

}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557140, src_33557141, ti_33557142) {
  var result_33557151 = null;

    switch (ti_33557142.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557131(ti_33557142))) {
      result_33557151 = src_33557141;
      }
      else {
        result_33557151 = [src_33557141[0], src_33557141[1]];
      }
      
      break;
    case 19:
            if (dest_33557140 === null || dest_33557140 === undefined) {
        dest_33557140 = {};
      }
      else {
        for (var key in dest_33557140) { delete dest_33557140[key]; }
      }
      for (var key in src_33557141) { dest_33557140[key] = src_33557141[key]; }
      result_33557151 = dest_33557140;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557142.base == null))) {
      result_33557151 = nimCopy(dest_33557140, src_33557141, ti_33557142.base);
      }
      else {
      if ((ti_33557142.kind == 17)) {
      result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {m_type: ti_33557142} : dest_33557140;
      }
      else {
        result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {} : dest_33557140;
      }
      }
      nimCopyAux(result_33557151, src_33557141, ti_33557142.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557141 === null) {
        result_33557151 = null;
      }
      else {
        if (dest_33557140 === null || dest_33557140 === undefined || dest_33557140.length != src_33557141.length) {
          dest_33557140 = new Array(src_33557141.length);
        }
        result_33557151 = dest_33557140;
        for (var i = 0; i < src_33557141.length; ++i) {
          result_33557151[i] = nimCopy(result_33557151[i], src_33557141[i], ti_33557142.base);
        }
      }
    
      break;
    case 28:
            if (src_33557141 !== null) {
        result_33557151 = src_33557141.slice(0);
      }
    
      break;
    default: 
      result_33557151 = src_33557141;
      break;
    }

  return result_33557151;

}

function chckIndx(i_33557184, a_33557185, b_33557186) {
      var Temporary1;

  var result_33557187 = 0;

  BeforeRet: do {
      if (!(a_33557185 <= i_33557184)) Temporary1 = false; else {        Temporary1 = (i_33557184 <= b_33557186);      }    if (Temporary1) {
    result_33557187 = i_33557184;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557184, a_33557185, b_33557186);
    }
    
  } while (false);

  return result_33557187;

}

function subInt(a_33556944, b_33556945) {
        var result = a_33556944 - b_33556945;
    checkOverflowInt(result);
    return result;
  

  
}

function nimMax(a_33556998, b_33556999) {
    var Temporary1;

  var result_33557000 = 0;

  BeforeRet: do {
    if ((b_33556999 <= a_33556998)) {
    Temporary1 = a_33556998;
    }
    else {
    Temporary1 = b_33556999;
    }
    
    result_33557000 = Temporary1;
    break BeforeRet;
  } while (false);

  return result_33557000;

}

function absInt(a_33556988) {
    var Temporary1;

  var result_33556989 = 0;

    if ((a_33556988 < 0)) {
    Temporary1 = (a_33556988 * -1);
    }
    else {
    Temporary1 = a_33556988;
    }
    
    result_33556989 = Temporary1;

  return result_33556989;

}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}


function newSeq_469762120(len_469762122) {
  var result_469762123 = [];

    result_469762123 = new Array(len_469762122); for (var i = 0 ; i < len_469762122 ; ++i) { result_469762123[i] = 0; }
  return result_469762123;

}

function add_33556419(x_33556420, x_33556420_Idx, y_33556421) {
          if (x_33556420[x_33556420_Idx] === null) { x_33556420[x_33556420_Idx] = []; }
      var off = x_33556420[x_33556420_Idx].length;
      x_33556420[x_33556420_Idx].length += y_33556421.length;
      for (var i = 0; i < y_33556421.length; ++i) {
        x_33556420[x_33556420_Idx][off+i] = y_33556421.charCodeAt(i);
      }
    

  
}

function newSeq_33556825(len_33556827) {
  var result_33556828 = [];

    result_33556828 = new Array(len_33556827); for (var i = 0 ; i < len_33556827 ; ++i) { result_33556828[i] = null; }
  return result_33556828;

}

function unhandledException(e_33556663) {
    var buf_33556664 = [[]];
    if (!(((e_33556663.message).length == 0))) {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556664[0].push.apply(buf_33556664[0], e_33556663.message);;
    }
    else {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit(" ["));;
    add_33556419(buf_33556664, 0, e_33556663.name);
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("]\x0A"));;
    var cbuf_33556665 = toJSStr(buf_33556664[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556665);
  }
  else {
    throw cbuf_33556665;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556938) {
        if (a_33556938 > 2147483647 || a_33556938 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI33555130, name: null, trace: [], up: null}, "RangeDefect");

  
}

function addChars_251658415(result_251658417, result_251658417_Idx, x_251658418, start_251658419, n_251658420) {
    var old_251658421 = (result_251658417[result_251658417_Idx]).length;
    (result_251658417[result_251658417_Idx].length = chckRange(addInt(old_251658421, n_251658420), 0, 2147483647));
    Label1: do {
      var iHEX60gensym4_251658435 = 0;
      var i_469762446 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762446 < n_251658420)) break Label3;
            iHEX60gensym4_251658435 = i_469762446;
            result_251658417[result_251658417_Idx][chckIndx(addInt(old_251658421, iHEX60gensym4_251658435), 0, (result_251658417[result_251658417_Idx]).length - 1)] = x_251658418.charCodeAt(chckIndx(addInt(start_251658419, iHEX60gensym4_251658435), 0, (x_251658418).length - 1));
            i_469762446 = addInt(i_469762446, 1);
          }
      } while (false);
    } while (false);

  
}

function addChars_251658411(result_251658413, result_251658413_Idx, x_251658414) {
    addChars_251658415(result_251658413, result_251658413_Idx, x_251658414, 0, ((x_251658414) == null ? 0 : (x_251658414).length));

  
}

function addInt_251658436(result_251658437, result_251658437_Idx, x_251658438) {
    addChars_251658411(result_251658437, result_251658437_Idx, ((x_251658438) + ""));

  
}

function addInt_251658457(result_251658458, result_251658458_Idx, x_251658459) {
    addInt_251658436(result_251658458, result_251658458_Idx, x_251658459);

  
}

function HEX24_335544323(x_335544324) {
  var result_335544325 = [[]];

    addInt_251658457(result_335544325, 0, x_335544324);

  return result_335544325[0];

}

function isFatPointer_33557131(ti_33557132) {
  var result_33557133 = false;

  BeforeRet: do {
    result_33557133 = !((ConstSet1[ti_33557132.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557133;

}

function nimCopyAux(dest_33557144, src_33557145, n_33557146) {
    switch (n_33557146.kind) {
    case 0:
      break;
    case 1:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557146.sons.length; i++) {
      nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i]);
    }
    
      break;
    case 3:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
      for (var i = 0; i < n_33557146.sons.length; ++i) {
        nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i][1]);
      }
    
      break;
    }

  
}

function raiseIndexError(i_33556754, a_33556755, b_33556756) {
    var Temporary1;

    if ((b_33556756 < a_33556755)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(HEX24_335544323(i_33556754) || [],makeNimstrLit(" not in ") || [],HEX24_335544323(a_33556755) || [],makeNimstrLit(" .. ") || [],HEX24_335544323(b_33556756) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function sysFatal_218103842(message_218103845) {
    raiseException({message: nimCopy(null, message_218103845, NTI33554439), m_type: NTI33555124, parent: null, name: null, trace: [], up: null}, "AssertionDefect");

  
}

function raiseAssert_218103840(msg_218103841) {
    sysFatal_218103842(msg_218103841);

  
}

function failedAssertImpl_218103864(msg_218103865) {
    raiseAssert_218103840(msg_218103865);

  
}

function newSeq_469762277(len_469762279) {
  var result_469762280 = [];

    result_469762280 = new Array(len_469762279); for (var i = 0 ; i < len_469762279 ; ++i) { result_469762280[i] = 0; }
  return result_469762280;

}

function filter_469762402(s_469762404, pred_469762406) {
  var result_469762407 = [];

    result_469762407 = nimCopy(null, newSeq_469762277(0), NTI469762176);
    Label1: do {
      var i_469762419 = 0;
      var colontmp__469762451 = 0;
      colontmp__469762451 = (s_469762404).length;
      var i_469762452 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762452 < colontmp__469762451)) break Label3;
            i_469762419 = i_469762452;
            if (pred_469762406(s_469762404[chckIndx(i_469762419, 0, (s_469762404).length - 1)])) {
            result_469762407.push(s_469762404[chckIndx(i_469762419, 0, (s_469762404).length - 1)]);;
            }
            
            i_469762452 = addInt(i_469762452, 1);
          }
      } while (false);
    } while (false);

  return result_469762407;

}

function HEX2EHEX2E_905970515(a_905970518, b_905970519) {
  var result_905970520 = ({a: 0, b: 0});

    result_905970520 = nimCopy(result_905970520, {a: a_905970518, b: b_905970519}, NTI654311485);

  return result_905970520;

}

function len_469762265(x_469762268) {
  var result_469762269 = 0;

    result_469762269 = nimMax(0, addInt(subInt(x_469762268.b, x_469762268.a), 1));

  return result_469762269;

}

function find_469762372(a_469762375, item_469762376) {
  var result_469762377 = 0;

  BeforeRet: do {
    result_469762377 = 0;
    Label1: do {
      var i_469762381 = 0;
      var i_469762463 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762463 < (a_469762375).length)) break Label3;
            i_469762381 = a_469762375[chckIndx(i_469762463, 0, (a_469762375).length - 1)];
            if ((i_469762381 == item_469762376)) {
            break BeforeRet;
            }
            
            result_469762377 = addInt(result_469762377, 1);
            i_469762463 = addInt(i_469762463, 1);
          }
      } while (false);
    } while (false);
    result_469762377 = -1;
  } while (false);

  return result_469762377;

}

function contains_469762367(a_469762369, item_469762370) {
  var result_469762371 = false;

  BeforeRet: do {
    result_469762371 = (0 <= find_469762372(a_469762369, item_469762370));
    break BeforeRet;
  } while (false);

  return result_469762371;

}

function deduplicate_469762326(s_469762328, isSorted_469762329) {
  var result_469762330 = [];

    result_469762330 = nimCopy(null, [], NTI469762226);
    if ((0 < (s_469762328).length)) {
    if (isSorted_469762329) {
    var prev_469762338 = s_469762328[chckIndx(0, 0, (s_469762328).length - 1)];
    result_469762330.push(prev_469762338);;
    Label1: do {
      var i_469762350 = 0;
      var colontmp__469762455 = 0;
      colontmp__469762455 = (s_469762328).length - 1;
      var res_469762456 = 1;
      Label2: do {
          Label3: while (true) {
          if (!(res_469762456 <= colontmp__469762455)) break Label3;
            i_469762350 = res_469762456;
            if (!((s_469762328[chckIndx(i_469762350, 0, (s_469762328).length - 1)] == prev_469762338))) {
            prev_469762338 = s_469762328[chckIndx(i_469762350, 0, (s_469762328).length - 1)];
            result_469762330.push(prev_469762338);;
            }
            
            res_469762456 = addInt(res_469762456, 1);
          }
      } while (false);
    } while (false);
    }
    else {
      Label4: do {
        var itm_469762366 = 0;
        var i_469762460 = 0;
        Label5: do {
            Label6: while (true) {
            if (!(i_469762460 < (s_469762328).length)) break Label6;
              itm_469762366 = s_469762328[chckIndx(i_469762460, 0, (s_469762328).length - 1)];
              if (!(contains_469762367(result_469762330, itm_469762366))) {
              result_469762330.push(itm_469762366);;
              }
              
              i_469762460 = addInt(i_469762460, 1);
            }
        } while (false);
      } while (false);
    }
    
    }
    

  return result_469762330;

}

function HEX5BHEX5D_469762306(s_469762310, x_469762311) {
  var result_469762312 = [];

    var a_469762314 = x_469762311.a;
    var L_469762316 = addInt(subInt(x_469762311.b, a_469762314), 1);
    result_469762312 = new Array(chckRange(L_469762316, 0, 2147483647)); for (var i = 0 ; i < chckRange(L_469762316, 0, 2147483647) ; ++i) { result_469762312[i] = 0; }    Label1: do {
      var i_469762325 = 0;
      var i_469762466 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_469762466 < L_469762316)) break Label3;
            i_469762325 = i_469762466;
            result_469762312[chckIndx(i_469762325, 0, (result_469762312).length - 1)] = s_469762310[chckIndx(addInt(i_469762325, a_469762314), 0, (s_469762310).length - 1)];
            i_469762466 = addInt(i_469762466, 1);
          }
      } while (false);
    } while (false);

  return result_469762312;

}

function nsuIntToStr(x_603980565, minchars_603980566) {
  var result_603980567 = [];

    result_603980567 = nimCopy(null, HEX24_335544323(absInt(x_603980565)), NTI33554439);
    Label1: do {
      var i_603980572 = 0;
      var colontmp__469762469 = 0;
      colontmp__469762469 = subInt(minchars_603980566, (result_603980567).length);
      var res_469762470 = 1;
      Label2: do {
          Label3: while (true) {
          if (!(res_469762470 <= colontmp__469762469)) break Label3;
            i_603980572 = res_469762470;
            result_603980567 = nimCopy(null, [48].concat(result_603980567 || []), NTI33554439);
            res_469762470 = addInt(res_469762470, 1);
          }
      } while (false);
    } while (false);
    if ((x_603980565 < 0)) {
    result_603980567 = nimCopy(null, [45].concat(result_603980567 || []), NTI33554439);
    }
    

  return result_603980567;

}

function run06_1_469762052() {
    
function HEX3Aanonymous_469762294(it_469762295) {
      var result_469762296 = false;

        result_469762296 = ((deduplicate_469762326(HEX5BHEX5D_469762306(chars_469762134, HEX2EHEX2E_905970515(it_469762295, addInt(it_469762295, 3))), false)).length == 4);

      return result_469762296;

    }

  var result_469762053 = [];

  BeforeRet: do {
    Label1: do {
      var iHEX60gensym4_469762119 = 0;
      var resultHEX60gensym4_469762128 = newSeq_469762120(4095);
      Label2: do {
        var itHEX60gensym4_469762129 = 0;
        var i_469762430 = 0;
        var L_469762431 = 4095;
        Label3: do {
            Label4: while (true) {
            if (!(i_469762430 < L_469762431)) break Label4;
              itHEX60gensym4_469762129 = makeNimstrLit("mgtgddtfdtffzvznvnrncrrbqqhlhhffzqqzpqqthhrhhfphfphhcppcddnwdnwwtmwttfvvthvvrrbvbmvmssrlslfslflppblllwrlrzlldwdllqblqbqbsscmsmwwffjpppnlnhllbblvbvsbbzvzrzzsmsjsddfpftfvtffgjjfzjfjqfqjfjsscvcccgttgtzgzmgmtmbbwzzjqzzdfzfmzmzfzwzvwvggqcqrrcwrcrzrccqcwwbgbqqwdqqzjzsjjwbjjssmmcfcbcddlhhtltmtlljffvjffhghmggmvvfgfqgfgppnpllmvmfvvzjjzrztztvvstsvvppqdpprjjmtmjtmjjdrdcrdccgsccnsccqsqzszqsqgqwggbhbllvclljrrlrqlljtjcjjlrlhrhjhjnnnpllwtwstttlnlqnlnmnqnpqpbqqbgbzzrhzrhzhrzhrzhzshhqvqgqgbbcqccqmcqccvgccrwrgwrgrdrhhbshbhwbhwbhhvthvttfrrqsstqssqmmpnpwpfpcffcdchhrsshrhggtcttmrrhvvjfvjvvclvllmqmvvhddrdjjhdhvhlvhlltlstltffbbqbwqbbbnsbnbwbssjwsjsfjjsjwwzttqzzsdspprlrblrltrrfrsfffwqwpwddddnqqtbtwwhwpwdwmmcrmrsmmwppjzpjpcpdpjpdpdqppmjjlqqjfqqhgqhhbddtccthhwjhhlfftvtppwzpwzpznpzpqpgqpgpnpdndnbnddqrrjdjwwdmmtnntvnnrhrfhfrfwfvwffmnfnlfldfdjjwgwqqwwsslrrvhhrqqsfqfllrmrqmrrbppwjppmlmggvppdhppspjjzljjrzzrlzrrlldllvlpvpfprfprrhdrdlllpqqfhqqhchzzzwpwjpjjgzzwqqtqdqbdbdgggbrgrzzznwwbvbnbpnbpprnrvvfvsscncrczcbchhjqhjjzrznndwnnvttmtthssgvvbvfvtvptpthhzggnjjhrjdqzjbtfpqdtwtmgnngqdzhdrfzqvcqggmcdbsdrdrmgqhmvfvdgbvrnlbhfsbpjhwgzfndqgcjdbpsffcslfcltsbclspdjhscqrncfrjrbjfzspccshtrdggjbhthrrhgnjvsptfnjvjvhhdjfbtfgpfgszhhbcvzplclrnsrpffpjhbthnfsfflqphhjjdpcfwzhfdpnsftrnfhrdhndlrnfrnvprtvnmgclzlrdjrzdcllvlwdlrcfbsgcbwcnbvjztzfsgcgqlmgcbsgwbbrmrcthfpvmbfvtbhqstccfntmphqpjwpbcdpnffqpszlnqdcqtfhvlvpgdpljvcschdtpvcswfzcbpqdhfjzzdjvgldspcvlnfnwffhjzdnbmjjtnrqlgnggsvdltnrpcfwqvphtsmrfzhflwjjbnpwlzhhmdnpqptgcjnrrgcnhwllqsbsjjvzmqsghlzvhdfbrnfhrqjswrpgcctsqvdwzgpqdssfmtgwvsznlbhsgppwdhhtjmscjfrjdgflwcrlbsfwrnvtnmcwpndhtttgqfvmvmfnwdrrvgmgdqlqvvlphwzgmwcphjvcfsqbbwttntmgvfmlmctggmtlwtmfsmczbgdvbsjstzgflnjplgrlhbbgldlchwmhclzbcwpqzlzbjzbplnvpbzjhmwfmrfnwlnsvpzhrgjdpqvnjtbfjfsvdqcfwdjftsmfqdrqllwlbnbmgtswrhbtbqlchznbgnphgntrtwbtmsjtphhqpbngwmmsdnsdqcctrsrzbrtpwtvhvqbrjldfldllpvspthdhdljfvjzcjsltwflscfqsrvzhgvzhqnnjwdwdtnsvgchzrnbzfscvsmrmqsqjmrjjdhtspbzpqtqqbfbzrddwqzwpqjbpbbbghlwmzhqvqdwwwwvltvvcpgzlwzvmqzfcgnjpjnpgsccvzpnzjwwnnjrcpbvwljfrjqzwsrvdmqwwfpldqcdwlchvggclmwnbhlrlzvsrtrqmzchqfqfhqfjgqsfvclnchdnnvdbqpcddnldggwrpbgrwwtssfndhrhnwtqmgrwpggntlqmfgbzjhwwsclvfmwgzzfrsccdfddntnlldpnwzhnzlssnnfbvjjhnrvclmphgfpvnwjzznbvgqnpljcrjpndgrlbdzsbfrrrfztbqcbphlppwcvhmrrmtrlvfjcddtznlmflrpsclgjpqczwrptfsccmdpzfvwnfsvshcnzrjrmstrslhgtrsmgplvcwptfqrgzgwhvtvrqlrjpcbztgtfwpnzqpmctvpdlgrtzzlsmgnftqvtvcmndspjqbdnmrttwhdrncsntntmrwjrqstdrptnhbqgtlqsdqfmbjtvgstndlvndqqsbqvcghwwjdzpszrsfpdzvnmnbzngczndtwtmprbzjdzbthslttzwwfptbphqwczsrqcbcbqnhbtcpjpbcqpjgjmhmfnggcbvctslpmqrpqzbcfrcgzmzpbpwzsjlrmpfzhgnnbqfrbslrfsthgtmsdfhzgdmjwwsgcdptssmbvffhlmfvwnmbpnzbvpsvnwsvsgrcmhpclwsbvtfqstnpzvgmgfcrmjhbccwcptssjhbfmzsqljjcrnnszvffzfwgcpnqrtjnqdltwnbglwlwpschvqwfdztvcwsqtwmgwccgsqbsvlwdhlnqphwtcmdpvvrqfwmlbptbvghvjntqbcsqjspwnmvdqcfbqzqchhhwqgdcmdhfvtzprscpshpbmzhwsznlpvzrwvmhtqsclzffgnvvrfbzmvqmnrrzjbmhdbspjprrmflgrwhnhcqpczchpnrnfjgdlnlrnzwnvjpmzgpfzspwmfnwcrrdczdhtnscmwqwqbcrdrsndpwbdvpgpbpsfzbmvjlsrdcgnwgrvmjnzlpnwtcrmnfcqgmlnhqbwlrnzlbdrnzfhnqddsfmnhnrrrdjgqprmgvrnhzrlccjthhfzdbltgrbrjpmbhvgrlwngdlfsljhfvwhvpmltdfnzwzcgzdpppnzcnpjttdgpzzqppnfzlmhrngbmcmshtgzbjllwstdbnmmwlrlllgfgshvcsjbpnggzrvvmvdqhjhvhmmpvrdqbrfpdtcdbqrvwhdrtqgftnwwzrcgzwmwjmdgmfswqwlgmvmvhscjmzshtbzmfmbqtbsjppzbczwcqpqhhqdggcntdchjgwsvfnzfqdzvhpnwbjhbqnldzbzmctcdqgjsmbqdzmmtjzvqzdqzsfpmncdmqlnpsrwcznbtzqtbcwwdqjftcdmmwdjdnwvpchffsmqmmwvqfgcnfhbjsttwnwppssmvrrhrbqwsncpfnbfggdqjwbgtvgtwsmlqbwzlghnzhjwphswjtbtptmhlzhvvrwqqcgwnmcqtcjlndwgjrpschhhsmrvvwtrjplwrtswhrjlgjhzgzrjhsbrjhtgnmfdvbjlntcrphsnmdcjzgwtvgldrfpcfgpzlgsfthdmpbnhmlsbnbqzpqvzzmvswbbnbtzvbsznqdgqlbbwzhjrzndltfgswtszsmmrhrcrcrcpgtqfcrmjrtflsbcbbmrsrfgnsrmbrpcvfpmqtmbrbbqtzrjntnvbvwjwqmwmcvmzccmwcnhrfpgghlqczcfszfhqgrdnfpnrrzpzbnjqjtvbglvqlhpstpzzcwrdgfhghqtsgzgsmgnpgvbsvsjtnwbvtqpcfdvhnjjvwjwglplthmghrwpmsgbdbfpvqsmsdvjgchlnlnczlzczqmjsnpgrgqgndwzdtlmmgzjpqvbqmcmhnhpqvpjjsftctwsrfmhrlctrvhczjbfsvqnshmchdsrmlrlqdnfsvhlblwghsdnrtwnpdtqgczmghqcmfzvsgqvrngjvbjsvnpzvpsplhvndvqpjjrtmrqscjrhvdmqcgwjmrgsdmgswgnbpdtgvvbrzrcwtvvwhpmcqwdtsmwwfgdpdrjsbvtbdvbhwftqznpssnsnjnclblslfgz")[chckIndx(i_469762430, 0, (makeNimstrLit("mgtgddtfdtffzvznvnrncrrbqqhlhhffzqqzpqqthhrhhfphfphhcppcddnwdnwwtmwttfvvthvvrrbvbmvmssrlslfslflppblllwrlrzlldwdllqblqbqbsscmsmwwffjpppnlnhllbblvbvsbbzvzrzzsmsjsddfpftfvtffgjjfzjfjqfqjfjsscvcccgttgtzgzmgmtmbbwzzjqzzdfzfmzmzfzwzvwvggqcqrrcwrcrzrccqcwwbgbqqwdqqzjzsjjwbjjssmmcfcbcddlhhtltmtlljffvjffhghmggmvvfgfqgfgppnpllmvmfvvzjjzrztztvvstsvvppqdpprjjmtmjtmjjdrdcrdccgsccnsccqsqzszqsqgqwggbhbllvclljrrlrqlljtjcjjlrlhrhjhjnnnpllwtwstttlnlqnlnmnqnpqpbqqbgbzzrhzrhzhrzhrzhzshhqvqgqgbbcqccqmcqccvgccrwrgwrgrdrhhbshbhwbhwbhhvthvttfrrqsstqssqmmpnpwpfpcffcdchhrsshrhggtcttmrrhvvjfvjvvclvllmqmvvhddrdjjhdhvhlvhlltlstltffbbqbwqbbbnsbnbwbssjwsjsfjjsjwwzttqzzsdspprlrblrltrrfrsfffwqwpwddddnqqtbtwwhwpwdwmmcrmrsmmwppjzpjpcpdpjpdpdqppmjjlqqjfqqhgqhhbddtccthhwjhhlfftvtppwzpwzpznpzpqpgqpgpnpdndnbnddqrrjdjwwdmmtnntvnnrhrfhfrfwfvwffmnfnlfldfdjjwgwqqwwsslrrvhhrqqsfqfllrmrqmrrbppwjppmlmggvppdhppspjjzljjrzzrlzrrlldllvlpvpfprfprrhdrdlllpqqfhqqhchzzzwpwjpjjgzzwqqtqdqbdbdgggbrgrzzznwwbvbnbpnbpprnrvvfvsscncrczcbchhjqhjjzrznndwnnvttmtthssgvvbvfvtvptpthhzggnjjhrjdqzjbtfpqdtwtmgnngqdzhdrfzqvcqggmcdbsdrdrmgqhmvfvdgbvrnlbhfsbpjhwgzfndqgcjdbpsffcslfcltsbclspdjhscqrncfrjrbjfzspccshtrdggjbhthrrhgnjvsptfnjvjvhhdjfbtfgpfgszhhbcvzplclrnsrpffpjhbthnfsfflqphhjjdpcfwzhfdpnsftrnfhrdhndlrnfrnvprtvnmgclzlrdjrzdcllvlwdlrcfbsgcbwcnbvjztzfsgcgqlmgcbsgwbbrmrcthfpvmbfvtbhqstccfntmphqpjwpbcdpnffqpszlnqdcqtfhvlvpgdpljvcschdtpvcswfzcbpqdhfjzzdjvgldspcvlnfnwffhjzdnbmjjtnrqlgnggsvdltnrpcfwqvphtsmrfzhflwjjbnpwlzhhmdnpqptgcjnrrgcnhwllqsbsjjvzmqsghlzvhdfbrnfhrqjswrpgcctsqvdwzgpqdssfmtgwvsznlbhsgppwdhhtjmscjfrjdgflwcrlbsfwrnvtnmcwpndhtttgqfvmvmfnwdrrvgmgdqlqvvlphwzgmwcphjvcfsqbbwttntmgvfmlmctggmtlwtmfsmczbgdvbsjstzgflnjplgrlhbbgldlchwmhclzbcwpqzlzbjzbplnvpbzjhmwfmrfnwlnsvpzhrgjdpqvnjtbfjfsvdqcfwdjftsmfqdrqllwlbnbmgtswrhbtbqlchznbgnphgntrtwbtmsjtphhqpbngwmmsdnsdqcctrsrzbrtpwtvhvqbrjldfldllpvspthdhdljfvjzcjsltwflscfqsrvzhgvzhqnnjwdwdtnsvgchzrnbzfscvsmrmqsqjmrjjdhtspbzpqtqqbfbzrddwqzwpqjbpbbbghlwmzhqvqdwwwwvltvvcpgzlwzvmqzfcgnjpjnpgsccvzpnzjwwnnjrcpbvwljfrjqzwsrvdmqwwfpldqcdwlchvggclmwnbhlrlzvsrtrqmzchqfqfhqfjgqsfvclnchdnnvdbqpcddnldggwrpbgrwwtssfndhrhnwtqmgrwpggntlqmfgbzjhwwsclvfmwgzzfrsccdfddntnlldpnwzhnzlssnnfbvjjhnrvclmphgfpvnwjzznbvgqnpljcrjpndgrlbdzsbfrrrfztbqcbphlppwcvhmrrmtrlvfjcddtznlmflrpsclgjpqczwrptfsccmdpzfvwnfsvshcnzrjrmstrslhgtrsmgplvcwptfqrgzgwhvtvrqlrjpcbztgtfwpnzqpmctvpdlgrtzzlsmgnftqvtvcmndspjqbdnmrttwhdrncsntntmrwjrqstdrptnhbqgtlqsdqfmbjtvgstndlvndqqsbqvcghwwjdzpszrsfpdzvnmnbzngczndtwtmprbzjdzbthslttzwwfptbphqwczsrqcbcbqnhbtcpjpbcqpjgjmhmfnggcbvctslpmqrpqzbcfrcgzmzpbpwzsjlrmpfzhgnnbqfrbslrfsthgtmsdfhzgdmjwwsgcdptssmbvffhlmfvwnmbpnzbvpsvnwsvsgrcmhpclwsbvtfqstnpzvgmgfcrmjhbccwcptssjhbfmzsqljjcrnnszvffzfwgcpnqrtjnqdltwnbglwlwpschvqwfdztvcwsqtwmgwccgsqbsvlwdhlnqphwtcmdpvvrqfwmlbptbvghvjntqbcsqjspwnmvdqcfbqzqchhhwqgdcmdhfvtzprscpshpbmzhwsznlpvzrwvmhtqsclzffgnvvrfbzmvqmnrrzjbmhdbspjprrmflgrwhnhcqpczchpnrnfjgdlnlrnzwnvjpmzgpfzspwmfnwcrrdczdhtnscmwqwqbcrdrsndpwbdvpgpbpsfzbmvjlsrdcgnwgrvmjnzlpnwtcrmnfcqgmlnhqbwlrnzlbdrnzfhnqddsfmnhnrrrdjgqprmgvrnhzrlccjthhfzdbltgrbrjpmbhvgrlwngdlfsljhfvwhvpmltdfnzwzcgzdpppnzcnpjttdgpzzqppnfzlmhrngbmcmshtgzbjllwstdbnmmwlrlllgfgshvcsjbpnggzrvvmvdqhjhvhmmpvrdqbrfpdtcdbqrvwhdrtqgftnwwzrcgzwmwjmdgmfswqwlgmvmvhscjmzshtbzmfmbqtbsjppzbczwcqpqhhqdggcntdchjgwsvfnzfqdzvhpnwbjhbqnldzbzmctcdqgjsmbqdzmmtjzvqzdqzsfpmncdmqlnpsrwcznbtzqtbcwwdqjftcdmmwdjdnwvpchffsmqmmwvqfgcnfhbjsttwnwppssmvrrhrbqwsncpfnbfggdqjwbgtvgtwsmlqbwzlghnzhjwphswjtbtptmhlzhvvrwqqcgwnmcqtcjlndwgjrpschhhsmrvvwtrjplwrtswhrjlgjhzgzrjhsbrjhtgnmfdvbjlntcrphsnmdcjzgwtvgldrfpcfgpzlgsfthdmpbnhmlsbnbqzpqvzzmvswbbnbtzvbsznqdgqlbbwzhjrzndltfgswtszsmmrhrcrcrcpgtqfcrmjrtflsbcbbmrsrfgnsrmbrpcvfpmqtmbrbbqtzrjntnvbvwjwqmwmcvmzccmwcnhrfpgghlqczcfszfhqgrdnfpnrrzpzbnjqjtvbglvqlhpstpzzcwrdgfhghqtsgzgsmgnpgvbsvsjtnwbvtqpcfdvhnjjvwjwglplthmghrwpmsgbdbfpvqsmsdvjgchlnlnczlzczqmjsnpgrgqgndwzdtlmmgzjpqvbqmcmhnhpqvpjjsftctwsrfmhrlctrvhczjbfsvqnshmchdsrmlrlqdnfsvhlblwghsdnrtwnpdtqgczmghqcmfzvsgqvrngjvbjsvnpzvpsplhvndvqpjjrtmrqscjrhvdmqcgwjmrgsdmgswgnbpdtgvvbrzrcwtvvwhpmcqwdtsmwwfgdpdrjsbvtbdvbhwftqznpssnsnjnclblslfgz")).length - 1)];
              resultHEX60gensym4_469762128[chckIndx(iHEX60gensym4_469762119, 0, (resultHEX60gensym4_469762128).length - 1)] = itHEX60gensym4_469762129;
              iHEX60gensym4_469762119 = addInt(iHEX60gensym4_469762119, 1);
              i_469762430 = addInt(i_469762430, 1);
              if (!((4095 == L_469762431))) {
              failedAssertImpl_218103864(makeNimstrLit("iterators.nim(258, 11) `len(a) == L` the length of the string changed while iterating over it"));
              }
              
            }
        } while (false);
      } while (false);
    } while (false);
    var chars_469762134 = nimCopy(null, resultHEX60gensym4_469762128, NTI469762100);
    Label5: do {
      var HEX3Atmp_469762257 = HEX2EHEX2E_905970515(0, subInt(subInt((chars_469762134).length, 4), 1));
      var iHEX60gensym11_469762260 = 0;
      var resultHEX60gensym11_469762285 = newSeq_469762277(chckRange(len_469762265(HEX3Atmp_469762257), 0, 2147483647));
      Label6: do {
        var itHEX60gensym11_469762289 = 0;
        Label7: do {
          var x_469762439 = 0;
          var res_469762440 = HEX3Atmp_469762257.a;
          Label8: do {
              Label9: while (true) {
              if (!(res_469762440 <= HEX3Atmp_469762257.b)) break Label9;
                x_469762439 = res_469762440;
                itHEX60gensym11_469762289 = x_469762439;
                resultHEX60gensym11_469762285[chckIndx(iHEX60gensym11_469762260, 0, (resultHEX60gensym11_469762285).length - 1)] = itHEX60gensym11_469762289;
                iHEX60gensym11_469762260 = addInt(iHEX60gensym11_469762260, 1);
                res_469762440 = addInt(res_469762440, 1);
              }
          } while (false);
        } while (false);
      } while (false);
    } while (false);
    var idarr_469762424 = filter_469762402(resultHEX60gensym11_469762285, HEX3Aanonymous_469762294);
    result_469762053 = nimCopy(null, nsuIntToStr(addInt(idarr_469762424[chckIndx(0, 0, (idarr_469762424).length - 1)], 4), 1), NTI33554439);
    break BeforeRet;
  } while (false);

  return result_469762053;

}

function js_run06_1() {
  var result_469762426 = null;

  BeforeRet: do {
    result_469762426 = toJSStr(run06_1_469762052());
    break BeforeRet;
  } while (false);

  return result_469762426;

}
