/* Generated by the Nim Compiler v1.6.6 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};

function makeNimstrLit(c_33556801) {
      var result = [];
  for (var i = 0; i < c_33556801.length; ++i) {
    result[i] = c_33556801.charCodeAt(i);
  }
  return result;
  

  
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
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
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

function run22_2_469762049() {
  var result_469762050 = [];

  BeforeRet: do {
    result_469762050 = nimCopy(null, makeNimstrLit("TODO"), NTI33554439);
    break BeforeRet;
  } while (false);

  return result_469762050;

}

function newSeq_33556825(len_33556827) {
  var result_33556828 = [];

    result_33556828 = new Array(len_33556827); for (var i = 0 ; i < len_33556827 ; ++i) { result_33556828[i] = null; }
  return result_33556828;

}

function js_run22_2() {
  var result_469762052 = null;

  BeforeRet: do {
    result_469762052 = toJSStr(run22_2_469762049());
    break BeforeRet;
  } while (false);

  return result_469762052;

}
