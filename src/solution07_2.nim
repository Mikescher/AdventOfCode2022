
proc run07_2(): string =
    return "TODO"

when not defined(js):
    echo run07_2()
else:
    proc js_run07_2(): cstring {.exportc.} =
        return cstring(run07_2())
