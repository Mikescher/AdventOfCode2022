
proc run02_2(): string =
    return "TODO"


when not defined(js):
    echo run02_2()
else:
    proc js_run02_2(): cstring {.exportc.} =
        return cstring(run02_2())
